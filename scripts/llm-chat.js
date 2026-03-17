#!/usr/bin/env node

/**
 * LLM Chat Script
 * 
 * 用于在 Skill 流程中调用 LLM 进行：
 * - 入口过滤
 * - 领域识别
 * - 答案校验
 * 
 * 使用方式：
 *   node scripts/llm-chat.js --prompt="你的问题"
 * 
 * 配置文件：
 *   scripts/llm-config.json
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 加载配置
const CONFIG_FILE = path.join(__dirname, 'llm-config.json');
let CONFIG;

try {
  CONFIG = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
} catch (error) {
  console.error('Error: 无法读取配置文件 llm-config.json');
  console.error('请创建配置文件，参考示例：');
  console.error(JSON.stringify({
    provider: 'deepseek',
    apiKey: 'sk-your-api-key-here',
    model: 'deepseek-chat',
    apiBase: 'https://api.deepseek.com',
    timeout: 30000,
    temperature: 0.3,
    maxTokens: 1000,
    cache: { enabled: true, ttl: 86400 },
    concurrency: { maxRequests: 3 }
  }, null, 2));
  process.exit(1);
}

// 缓存配置
const CACHE_DIR = path.join(__dirname, '..', '.llm-cache');
const CACHE_TTL = CONFIG.cache?.ttl || 86400;
const CACHE_ENABLED = CONFIG.cache?.enabled !== false;

// 并发控制
const MAX_CONCURRENT_REQUESTS = CONFIG.concurrency?.maxRequests || 3;
let currentRequests = 0;
const requestQueue = [];

/**
 * 初始化缓存目录
 */
function initCache() {
  if (CACHE_ENABLED && !fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

/**
 * 生成缓存键
 */
function getCacheKey(prompt) {
  const hash = crypto.createHash('md5');
  hash.update(`${CONFIG.provider}:${CONFIG.model}:${prompt}`);
  return hash.digest('hex');
}

/**
 * 从缓存读取
 */
function readCache(key) {
  if (!CACHE_ENABLED) return null;
  
  const cacheFile = path.join(CACHE_DIR, `${key}.json`);
  
  if (!fs.existsSync(cacheFile)) {
    return null;
  }
  
  try {
    const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
    const age = Date.now() - cache.timestamp;
    
    if (age > CACHE_TTL * 1000) {
      fs.unlinkSync(cacheFile);
      return null;
    }
    
    return cache.response;
  } catch (e) {
    return null;
  }
}

/**
 * 写入缓存
 */
function writeCache(key, response) {
  if (!CACHE_ENABLED) return;
  
  try {
    const cacheFile = path.join(CACHE_DIR, `${key}.json`);
    const cache = {
      timestamp: Date.now(),
      response: response,
    };
    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), 'utf-8');
  } catch (e) {
    console.error('Warning: Failed to write cache');
  }
}

/**
 * 清理过期缓存
 */
function cleanupCache() {
  if (!CACHE_ENABLED || !fs.existsSync(CACHE_DIR)) {
    return;
  }
  
  const files = fs.readdirSync(CACHE_DIR);
  let cleaned = 0;
  
  for (const file of files) {
    try {
      const cacheFile = path.join(CACHE_DIR, file);
      const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
      const age = Date.now() - cache.timestamp;
      
      if (age > CACHE_TTL * 1000) {
        fs.unlinkSync(cacheFile);
        cleaned++;
      }
    } catch (e) {
      // 忽略错误
    }
  }
  
  if (cleaned > 0) {
    console.log(`Cleaned ${cleaned} expired cache files`);
  }
}

/**
 * 等待并发限制
 */
function waitForConcurrency() {
  if (currentRequests < MAX_CONCURRENT_REQUESTS) {
    return Promise.resolve();
  }
  
  return new Promise(resolve => {
    requestQueue.push(resolve);
  });
}

/**
 * 释放并发槽位
 */
function releaseConcurrency() {
  currentRequests--;
  if (requestQueue.length > 0) {
    const next = requestQueue.shift();
    next();
  }
}

/**
 * 发送 HTTP 请求（带超时控制）
 */
function sendRequest(url, data, headers, timeout) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      timeout: timeout || CONFIG.timeout || 30000,
    };
    
    const req = client.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          resolve(JSON.parse(responseData));
        } catch (e) {
          reject(new Error(`Failed to parse response: ${e.message}`));
        }
      });
    });
    
    req.on('error', (e) => {
      reject(new Error(`Request failed: ${e.message}`));
    });
    
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Request timeout after ${timeout || CONFIG.timeout}ms`));
    });
    
    req.write(JSON.stringify(data));
    req.end();
  });
}

/**
 * 调用 LLM API（带缓存和并发控制）
 */
async function callLLM(prompt) {
  const cacheKey = getCacheKey(prompt);
  
  // 尝试读取缓存
  const cached = readCache(cacheKey);
  if (cached) {
    console.error('  [Cache hit]');
    return cached;
  }
  
  // 等待并发槽位
  await waitForConcurrency();
  currentRequests++;
  
  try {
    const url = `${CONFIG.apiBase}/v1/chat/completions`;
    const data = {
      model: CONFIG.model,
      messages: [
        { role: 'user', content: prompt },
      ],
      temperature: CONFIG.temperature || 0.3,
      max_tokens: CONFIG.maxTokens || 1000,
    };
    
    const headers = {
      'Authorization': `Bearer ${CONFIG.apiKey}`,
    };
    
    const response = await sendRequest(url, data, headers);
    
    if (response.error) {
      throw new Error(`API error: ${response.error.message}`);
    }
    
    const result = response.choices[0].message.content;
    
    // 写入缓存
    writeCache(cacheKey, result);
    
    return result;
  } finally {
    releaseConcurrency();
  }
}

/**
 * 解析命令行参数
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};
  
  for (const arg of args) {
    const [key, value] = arg.split('=');
    if (key.startsWith('--')) {
      result[key.slice(2)] = value;
    }
  }
  
  return result;
}

/**
 * 主函数
 */
async function main() {
  const args = parseArgs();
  const prompt = args.prompt;
  const cleanup = args.cleanup === 'true';
  
  // 初始化缓存
  initCache();
  
  // 清理过期缓存
  if (cleanup) {
    cleanupCache();
    console.log('Cache cleaned');
    return;
  }
  
  if (!prompt) {
    console.error('Usage: node scripts/llm-chat.js --prompt="your question"');
    console.error('       node scripts/llm-chat.js --cleanup=true  # 清理缓存');
    process.exit(1);
  }
  
  if (!CONFIG.apiKey || CONFIG.apiKey === 'sk-your-api-key-here') {
    console.error('Error: 请在 llm-config.json 中配置 API Key');
    console.error('编辑文件：scripts/llm-config.json');
    console.error('将 "sk-your-api-key-here" 替换为你的实际 API Key');
    process.exit(1);
  }
  
  try {
    console.error(`Calling ${CONFIG.provider} (${CONFIG.model})...`);
    
    const response = await callLLM(prompt);
    
    console.log(response);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// 运行
main();
