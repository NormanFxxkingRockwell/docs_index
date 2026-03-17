#!/usr/bin/env node
/**
 * HarmonyOS Skill 执行助手 - LLM 增强版
 * 特性：LLM 智能识别 + LLM 重排 + 缓存机制
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 加载领域关键词
const KEYWORDS_FILE = path.join(__dirname, 'domain-keywords.json');
let domainKeywords = {};
try { domainKeywords = JSON.parse(fs.readFileSync(KEYWORDS_FILE, 'utf-8')); }
catch (e) { domainKeywords = { 'ui': ['动效', '动画'], 'network': ['dns', 'http', '网络'], 'file-management': ['文件', '剪切板', '剪贴板'] }; }

// 缓存配置
const CACHE_DIR = path.join(__dirname, '../../../.skill-cache');
const CACHE_TTL = 24 * 60 * 60 * 1000;
if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });

function getCacheKey(type, data) { return crypto.createHash('md5').update(`${type}:${JSON.stringify(data)}`).digest('hex'); }
function getFromCache(type, data) {
  const key = getCacheKey(type, data);
  const cacheFile = path.join(CACHE_DIR, `${key}.json`);
  if (!fs.existsSync(cacheFile)) return null;
  try { const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf-8')); if (Date.now() - cache.timestamp > CACHE_TTL) { fs.unlinkSync(cacheFile); return null; } return cache.result; }
  catch (e) { return null; }
}
function saveToCache(type, data, result) {
  const key = getCacheKey(type, data);
  const cacheFile = path.join(CACHE_DIR, `${key}.json`);
  try { fs.writeFileSync(cacheFile, JSON.stringify({ timestamp: Date.now(), result }, null, 2), 'utf-8'); } catch (e) {}
}

function callLLM(prompt) { throw new Error('请 AI Agent 实现 callLLM 函数'); }

// Step 1: 入口过滤
function entryFilter(question) {
  const cached = getFromCache('entryFilter', question);
  if (cached) { console.log('  [缓存命中] 入口过滤'); return cached; }
  try {
    const response = callLLM(`判断问题是否与 HarmonyOS 相关：${question}`);
    const isRelated = response.includes('相关') && !response.includes('不相关');
    const result = { isRelated, confidence: isRelated ? 0.95 : 0.3, reason: response.trim() };
    saveToCache('entryFilter', question, result);
    return result;
  } catch (error) {
    const POSITIVE = ['harmonyos', 'openharmony', '鸿蒙', 'arkui', 'arkts', 'ability', '@ohos.'];
    const matchCount = POSITIVE.filter(k => question.toLowerCase().includes(k)).length;
    return { isRelated: matchCount > 0, confidence: matchCount > 0 ? 0.65 : 0.3, reason: `关键词匹配 ${matchCount} 个` };
  }
}

// Step 2: 领域识别
function domainDetect(question) {
  const cached = getFromCache('domainDetect', question);
  if (cached) { console.log('  [缓存命中] 领域识别'); return cached; }
  try {
    const response = callLLM(`识别问题涉及的 HarmonyOS 领域：${question}\n可用领域：${Object.keys(domainKeywords).join(', ')}\n只返回领域名称，用逗号分隔。`);
    const domains = response.split(/[,,]/).map(d => d.trim().toLowerCase()).filter(d => d.length > 0).slice(0, 2);
    const result = { domains: domains.length > 0 ? domains : ['network'], confidence: 0.9, reason: `LLM 识别：${domains.join(', ')}` };
    saveToCache('domainDetect', question, result);
    return result;
  } catch (error) {
    const q = question.toLowerCase();
    const matched = Object.entries(domainKeywords).filter(([_, kws]) => kws.some(k => q.includes(k))).sort((a, b) => b[1].filter(k => q.includes(k)).length - a[1].filter(k => q.includes(k)).length).slice(0, 2).map(([d]) => d);
    return { domains: matched.length > 0 ? matched : ['network'], confidence: 0.7, reason: `关键词匹配：${matched.join(', ') || 'network'}` };
  }
}

// Step 3: 多路检索
function search(domains, question) {
  const documents = [];
  const keywords = question.toLowerCase().split('').filter(c => c.trim().length > 0);
  for (const domain of domains) {
    try {
      const domainIndexPath = path.join(__dirname, `../../../search_index/domains/${domain}/domain_index.json`);
      if (fs.existsSync(domainIndexPath)) {
        const index = JSON.parse(fs.readFileSync(domainIndexPath, 'utf-8'));
        const matched = (index.documents || []).filter(doc => keywords.some(k => JSON.stringify(doc).toLowerCase().includes(k)));
        documents.push(...matched.map(doc => ({ ...doc, source: 'domain_index', domain })));
      }
      const pageIndexPath = path.join(__dirname, `../../../search_index/domains/${domain}/page_index.jsonl`);
      if (fs.existsSync(pageIndexPath)) {
        const pages = fs.readFileSync(pageIndexPath, 'utf-8').split('\n').filter(l => l.trim()).map(l => JSON.parse(l));
        const matched = pages.filter(page => keywords.some(k => JSON.stringify(page).toLowerCase().includes(k)));
        documents.push(...matched.slice(0, 20).map(page => ({ doc_title: page.doc_title || '未命名', section_title: page.section_title, path: page.path, summary: page.summary, line_start: page.line_start, line_end: page.line_end, source: 'page_index', domain })));
      }
    } catch (error) { console.error(`Error searching ${domain}:`, error.message); }
  }
  return { documents, api_references: [] };
}

// Step 3.5: LLM 重排
function rerankWithLLM(question, documents) {
  const cached = getFromCache('rerank', { question, docCount: documents.length });
  if (cached) { console.log('  [缓存命中] LLM 重排'); return cached; }
  if (documents.length === 0) return [];
  const prompt = `对检索结果重排，使其更好回答用户问题：\n\n问题：${question}\n\n检索结果：\n${documents.slice(0, 10).map((doc, i) => `${i+1}. ${doc.doc_title}`).join('\n')}\n\n返回重排后的序号（逗号分隔）：`;
  try {
    const response = callLLM(prompt);
    const order = response.split(/[,,\n]/).map(s => parseInt(s.trim())).filter(n => !isNaN(n) && n > 0 && n <= documents.length);
    const reranked = order.map(i => documents[i - 1]).filter(Boolean);
    const ordered = new Set(order);
    documents.forEach((doc, i) => { if (!ordered.has(i + 1)) reranked.push(doc); });
    const result = reranked.slice(0, 10);
    saveToCache('rerank', { question, docCount: documents.length }, result);
    return result;
  } catch (error) {
    console.error('LLM 重排失败，使用默认排序');
    const keywords = question.toLowerCase().split('').filter(c => c.trim().length > 0);
    return documents.sort((a, b) => keywords.filter(k => JSON.stringify(b).toLowerCase().includes(k)).length - keywords.filter(k => JSON.stringify(a).toLowerCase().includes(k)).length).slice(0, 10);
  }
}

// Step 4: 答案校验
function validate(question, documents) {
  const cached = getFromCache('validate', { question, docCount: documents.length });
  if (cached) { console.log('  [缓存命中] 答案校验'); return cached; }
  if (!documents || documents.length === 0) return { isValid: false, confidence: 0, reasons: ['未检索到文档'] };
  const prompt = `验证文档是否能回答问题：\n\n问题：${question}\n\n文档：\n${documents.slice(0, 3).map((doc, i) => `${i+1}. ${doc.doc_title} - ${doc.summary?.slice(0, 50)}`).join('\n')}\n\n评估：1.是否覆盖（是/否）2.置信度（0-1）3.理由\n只返回：是/否，置信度：0.x，理由`;
  try {
    const response = callLLM(prompt);
    const isValid = response.includes('是');
    const confidenceMatch = response.match(/置信度 [::]\s*(0\.\d+)/);
    const result = { isValid, confidence: confidenceMatch ? parseFloat(confidenceMatch[1]) : 0.5, reasons: [response.trim()] };
    saveToCache('validate', { question, docCount: documents.length }, result);
    return result;
  } catch (error) {
    const keywords = question.toLowerCase().split('').filter(c => c.trim().length > 0);
    const coverage = keywords.filter(k => JSON.stringify(documents).toLowerCase().includes(k)).length / keywords.length;
    return { isValid: coverage >= 0.3, confidence: coverage, reasons: [`关键词覆盖率：${(coverage * 100).toFixed(0)}%`] };
  }
}

// 主函数
async function run(question, options = {}) {
  console.log(`收到问题：${question}\n`);
  if (options.step === 'filter' || !options.step) { const filter = entryFilter(question); console.log('Step 1: 入口过滤', filter); if (!filter.isRelated) return { success: false, error: '非 HarmonyOS 问题', ...filter }; }
  if (options.step === 'domain' || !options.step) { const domain = domainDetect(question); console.log('Step 2: 领域识别', domain); options.domains = domain.domains; }
  if (options.step === 'search' || !options.step) { const result = search(options.domains || ['network'], question); console.log('Step 3: 多路检索', { count: result.documents.length }); if (result.documents.length > 0) { console.log('Step 3.5: LLM 重排...'); options.documents = await rerankWithLLM(question, result.documents); console.log('  重排后', { count: options.documents.length }); } else { options.documents = []; } }
  if (options.step === 'validate' || !options.step) { const valid = validate(question, options.documents || []); console.log('Step 4: 答案校验', valid); }
  return { success: true, domains: options.domains, documents: options.documents };
}

// 命令行调用
if (require.main === module) {
  const args = process.argv.slice(2);
  const question = args.find(a => !a.startsWith('--'));
  if (!question) { console.error('Usage: node run.js "你的问题"'); process.exit(1); }
  console.error('⚠️  需要 AI Agent 实现 callLLM 函数\n');
  run(question).then(result => {
    console.log('\n=== 检索结果 ===');
    result.documents.forEach((doc, i) => { console.log(`${i + 1}. ${doc.doc_title}${doc.section_title ? ` - ${doc.section_title}` : ''}`); console.log(`   路径：${doc.path}`); if (doc.summary) console.log(`   摘要：${doc.summary.slice(0, 150)}...`); });
  });
}

module.exports = { run, entryFilter, domainDetect, search, rerankWithLLM, validate };
