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
 */

const https = require('https');
const http = require('http');

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
 * 发送 HTTP 请求
 */
function sendRequest(url, data, headers) {
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
    
    req.write(JSON.stringify(data));
    req.end();
  });
}

/**
 * 调用 DeepSeek API
 */
async function callDeepSeek(prompt, config) {
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
  
  const response = await sendRequest(url, data, headers);
  
  if (response.error) {
    throw new Error(`DeepSeek API error: ${response.error.message}`);
  }
  
  return response.choices[0].message.content;
}

/**
 * 调用 OpenAI API
 */
async function callOpenAI(prompt, config) {
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
  
  const response = await sendRequest(url, data, headers);
  
  if (response.error) {
    throw new Error(`OpenAI API error: ${response.error.message}`);
  }
  
  return response.choices[0].message.content;
}

/**
 * 调用 Anthropic API
 */
async function callAnthropic(prompt, config) {
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
  
  const response = await sendRequest(url, data, headers);
  
  if (response.error) {
    throw new Error(`Anthropic API error: ${response.error.message}`);
  }
  
  return response.content[0].text;
}

/**
 * 主函数
 */
async function main() {
  const args = parseArgs();
  const provider = args.provider || process.env.LLM_PROVIDER || 'deepseek';
  const prompt = args.prompt;
  
  if (!prompt) {
    console.error('Usage: node scripts/llm-chat.js --prompt="your question"');
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
