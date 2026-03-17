#!/usr/bin/env node
/**
 * HarmonyOS Skill 执行助手
 * 
 * 使用方式：
 * node run.js "你的问题"
 * node run.js --step=filter "问题"
 * node run.js --step=domain "问题"
 * node run.js --step=search --domain=network "问题"
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 调用 LLM
function callLLM(prompt) {
  const scriptPath = path.join(__dirname, '../../../scripts/llm-chat.js');
  const escapedPrompt = prompt.replace(/"/g, '\\"').replace(/\n/g, '\n');
  return execSync(`node "${scriptPath}" --prompt="${escapedPrompt}"`, {
    encoding: 'utf-8',
    timeout: 30000
  }).trim();
}

// Step 1: 入口过滤
function entryFilter(question) {
  const result = callLLM(`判断问题是否与 HarmonyOS 相关：${question}。只回答：相关/不相关`);
  const isRelated = result.includes('相关') && !result.includes('不相关');
  return {
    isRelated,
    confidence: isRelated ? 0.95 : 0.3,
    reason: result
  };
}

// Step 2: 领域识别
function domainDetect(question) {
  const masterMapPath = path.join(__dirname, '../../../search_index/master_map.json');
  const masterMap = JSON.parse(fs.readFileSync(masterMapPath, 'utf-8'));
  
  const questionLower = question.toLowerCase();
  const domainScores = {};
  
  // 简单关键词匹配
  const domainKeywords = {
    'network': ['http', '网络', '请求', 'socket', 'websocket'],
    'ui': ['界面', '组件', '布局', 'text', 'button', 'arkui'],
    'database': ['数据库', '存储', 'rdb', 'preferences'],
    'file-management': ['文件', 'file', '目录'],
    'application-models': ['ability', '应用模型', '生命周期']
  };
  
  for (const [domain, keywords] of Object.entries(domainKeywords)) {
    const score = keywords.filter(k => questionLower.includes(k)).length;
    if (score > 0) domainScores[domain] = score;
  }
  
  const domains = Object.entries(domainScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([d]) => d);
  
  return {
    domains: domains.length > 0 ? domains : ['network'],
    confidence: 0.9,
    reason: `识别到领域：${domains.join(', ')}`
  };
}

// Step 3: 多路检索
function search(domains, question) {
  const documents = [];
  
  for (const domain of domains) {
    try {
      const indexPath = path.join(__dirname, `../../../search_index/domains/${domain}/domain_index.json`);
      if (fs.existsSync(indexPath)) {
        const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
        const matched = (index.documents || []).filter(doc =>
          JSON.stringify(doc).toLowerCase().includes(question.toLowerCase())
        ).slice(0, 5);
        documents.push(...matched);
      }
    } catch (error) {
      console.error(`Error searching ${domain}:`, error.message);
    }
  }
  
  return {
    documents: documents.slice(0, 10),
    api_references: []
  };
}

// Step 4: 答案校验
function validate(question, documents) {
  if (!documents || documents.length === 0) {
    return { isValid: false, confidence: 0, reasons: ['未检索到文档'] };
  }
  
  const keywords = question.toLowerCase().split(/\s+/).filter(k => k.length > 1);
  const docText = JSON.stringify(documents).toLowerCase();
  const matched = keywords.filter(k => docText.includes(k)).length;
  const coverage = keywords.length > 0 ? matched / keywords.length : 0;
  
  return {
    isValid: coverage >= 0.5,
    confidence: coverage,
    reasons: [`关键词覆盖率：${(coverage * 100).toFixed(0)}%`]
  };
}

// 主函数
async function run(question, options = {}) {
  console.log(`收到问题：${question}\n`);
  
  // Step 1: 入口过滤
  if (options.step === 'filter' || !options.step) {
    const filter = entryFilter(question);
    console.log('Step 1: 入口过滤', filter);
    if (!filter.isRelated) {
      return { success: false, error: '非 HarmonyOS 问题', ...filter };
    }
  }
  
  // Step 2: 领域识别
  if (options.step === 'domain' || !options.step) {
    const domain = domainDetect(question);
    console.log('Step 2: 领域识别', domain);
    options.domains = domain.domains;
  }
  
  // Step 3: 多路检索
  if (options.step === 'search' || !options.step) {
    const result = search(options.domains || ['network'], question);
    console.log('Step 3: 多路检索', { count: result.documents.length });
    options.documents = result.documents;
  }
  
  // Step 4: 答案校验
  if (options.step === 'validate' || !options.step) {
    const valid = validate(question, options.documents || []);
    console.log('Step 4: 答案校验', valid);
  }
  
  return {
    success: true,
    domains: options.domains,
    documents: options.documents
  };
}

// 命令行调用
if (require.main === module) {
  const args = process.argv.slice(2);
  const question = args.find(a => !a.startsWith('--'));
  const stepMatch = args.find(a => a.startsWith('--step='));
  const domainMatch = args.find(a => a.startsWith('--domain='));
  
  if (!question) {
    console.error('Usage: node run.js "你的问题"');
    console.error('       node run.js --step=filter "问题"');
    process.exit(1);
  }
  
  const options = {
    step: stepMatch ? stepMatch.split('=')[1] : null,
    domain: domainMatch ? domainMatch.split('=')[1] : null
  };
  
  run(question, options).then(console.log);
}

module.exports = { run, entryFilter, domainDetect, search, validate };
