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
 *   node scripts/llm-chat.js --provider=deepseek --prompt="你的问题"
 * 
 * 环境变量：
 *   LLM_PROVIDER - LLM 提供商（deepseek/openai/anthropic）
 *   LLM_API_KEY - API Key
 *   LLM_MODEL - 模型名称（可选）
 *   LLM_CACHE_TTL - 缓存有效期（秒，默认 86400=24 小时）
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 配置
const CONFIG = {
  deepseek: {
    apiBase: 'https://api.deepseek.com',
    defaultModel: 'deepseek-chat',
  },
  openai: {
    apiBase: 'https://api.openai.com',
    defaultModel: 'gpt-4o',
  },
  anthropic: {
    apiBase: 'https://api.anthropic.com',
    defaultModel: 'claude-3-5-sonnet-20241022',
  },
};

// 缓存配置
const CACHE_DIR = path.join(__dirname, '..', '.llm-cache');
const CACHE_TTL = parseInt(process.env.LLM_CACHE_TTL || '86400', 10); // 默认 24 小时

// 并发控制
const MAX_CONCURRENT_REQUESTS = 3;
let currentRequests = 0;
const requestQueue = [];

/**
 * 初始化缓存目录
 */
function initCache() {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

/**
 * 生成缓存键
 */
function getCacheKey(prompt, provider, model) {
  const hash = crypto.createHash('md5');
  hash.update(`${provider}:${model}:${prompt}`);
  return hash.digest('hex');
}

/**
 * 从缓存读取
 */
function readCache(key) {
  const cacheFile = path.join(CACHE_DIR, `${key}.json`);
  
  if (!fs.existsSync(cacheFile)) {
    return null;
  }
  
  try {
    const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
    const age = Date.now() - cache.timestamp;
    
    if (age > CACHE_TTL * 1000) {
      // 缓存过期
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
  try {
    const cacheFile = path.join(CACHE_DIR, `${key}.json`);
    const cache = {
      timestamp: Date.now(),
      response: response,
    };
    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), 'utf-8');
  } catch (e) {
    // 缓存写入失败不影响主流程
    console.error('Warning: Failed to write cache');
  }
}

/**
 * 清理过期缓存
 */
function cleanupCache() {
  if (!fs.existsSync(CACHE_DIR)) {
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
    console.error(`Cleaned ${cleaned} expired cache files`);
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
 * 获取配置
 */
function getConfig(provider) {
  const config = CONFIG[provider] || CONFIG.deepseek;
  return {
    apiBase: config.apiBase,
    model: process.env.LLM_MODEL || config.defaultModel,
    apiKey: process.env.LLM_API_KEY,
  };
}

/**
 * 发送 HTTP 请求（带超时控制）
 */
function sendRequest(url, data, headers, timeout = 30000) {
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
      timeout: timeout,
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
      reject(new Error(`Request timeout after ${timeout}ms`));
    });
    
    req.write(JSON.stringify(data));
    req.end();
  });
}

/**
 * 调用 DeepSeek API（带缓存和并发控制）
 */
async function callDeepSeek(prompt, config) {
  const cacheKey = getCacheKey(prompt, 'deepseek', config.model);
  
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
    const url = `${config.apiBase}/v1/chat/completions`;
    const data = {
      model: config.model,
      messages: [
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    };
    
    const headers = {
      'Authorization': `Bearer ${config.apiKey}`,
    };
    
    const response = await sendRequest(url, data, headers, 30000);
    
    if (response.error) {
      throw new Error(`DeepSeek API error: ${response.error.message}`);
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
 * 调用 OpenAI API（带缓存和并发控制）
 */
async function callOpenAI(prompt, config) {
  const cacheKey = getCacheKey(prompt, 'openai', config.model);
  
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
    const url = `${config.apiBase}/v1/chat/completions`;
    const data = {
      model: config.model,
      messages: [
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    };
    
    const headers = {
      'Authorization': `Bearer ${config.apiKey}`,
    };
    
    const response = await sendRequest(url, data, headers, 30000);
    
    if (response.error) {
      throw new Error(`OpenAI API error: ${response.error.message}`);
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
 * 调用 Anthropic API（带缓存和并发控制）
 */
async function callAnthropic(prompt, config) {
  const cacheKey = getCacheKey(prompt, 'anthropic', config.model);
  
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
    const url = `${config.apiBase}/v1/messages`;
    const data = {
      model: config.model,
      max_tokens: 1000,
      messages: [
        { role: 'user', content: prompt },
      ],
    };
    
    const headers = {
      'x-api-key': config.apiKey,
      'anthropic-version': '2023-06-01',
    };
    
    const response = await sendRequest(url, data, headers, 30000);
    
    if (response.error) {
      throw new Error(`Anthropic API error: ${response.error.message}`);
    }
    
    const result = response.content[0].text;
    
    // 写入缓存
    writeCache(cacheKey, result);
    
    return result;
  } finally {
    releaseConcurrency();
  }
}

/**
 * 主函数
 */
async function main() {
  const args = parseArgs();
  const provider = args.provider || process.env.LLM_PROVIDER || 'deepseek';
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
    console.error('       or set LLM_PROVIDER and use stdin');
    process.exit(1);
  }
  
  // 获取配置
  const config = getConfig(provider);
  
  if (!config.apiKey) {
    console.error(`Error: LLM_API_KEY environment variable not set`);
    console.error(`Set it with: export LLM_API_KEY=your-api-key`);
    process.exit(1);
  }
  
  try {
    console.error(`Calling ${provider} (${config.model})...`);
    
    let response;
    switch (provider) {
      case 'openai':
        response = await callOpenAI(prompt, config);
        break;
      case 'anthropic':
        response = await callAnthropic(prompt, config);
        break;
      case 'deepseek':
      default:
        response = await callDeepSeek(prompt, config);
        break;
    }
    
    console.log(response);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// 运行
main();
