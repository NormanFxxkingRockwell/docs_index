#!/usr/bin/env node
/**
 * HarmonyOS 文档检索工具 - 精简版
 * 
 * 职责：只提供文档检索和缓存功能
 * 使用：AI Agent 调用 search() 函数进行检索
 * 
 * 注意：不包含任何 LLM 逻辑，LLM 由 AI Agent 自己实现
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 领域关键词（供 AI Agent 参考）
const domainKeywords = {
  'ui': ['动效', '动画', '界面', '组件', '布局', 'text', 'button', 'arkui', 'navigation', '弹窗', 'dialog', '状态管理', '@State', '@Prop', '@Link', '自定义组件', 'onClick', 'onTouch', 'router', 'pushUrl', '页面跳转', 'Column', 'Row', 'List', 'Grid', 'Tabs', 'Image', '动画', 'animateTo', '转场'],
  'network': ['dns', 'http', '网络', '请求', 'socket', 'websocket', 'tcp', 'ip', '域名', '@ohos.net.http', '@ohos.socket', 'WebSocket', 'HTTP'],
  'database': ['数据库', '存储', 'rdb', 'preferences', '数据', 'DataStorage', '键值对', '查询', '增删改查'],
  'file-management': ['文件', 'file', '目录', '文件夹', '剪切板', '剪贴板', 'clipboard', 'uri', '路径', 'FilePicker', '访问', '读写'],
  'application-models': ['ability', '应用模型', '生命周期', 'fa', 'stage', 'UIAbility', 'AbilityStage', 'module.json5', 'Context', '启动'],
  'system': ['系统', '设置', '配置'],
  'security': ['安全', '权限', '加密', '证书', '授权'],
  'media': ['媒体', '视频', '音频', '播放', '相机', 'AVPlayer', '拍照', '图片', '图像', '录制'],
  'device': ['设备', '硬件', '传感器'],
  'communication': ['通信', '蓝牙', 'wifi', 'nfc'],
  'location': ['位置', '定位', 'GPS', '地图'],
  'notification': ['通知', '推送'],
  'performance': ['性能', '优化', '启动速度'],
  'tools': ['工具', '调试', '打包', 'IDE', '失败'],
  'dfx': ['崩溃', '日志', '分析', '诊断'],
  'internationalization': ['国际化', '多语言', 'i18n'],
  'accessibility': ['无障碍', '辅助功能'],
  'form': ['卡片', '小组件'],
  'web': ['Web', '网页', 'WebView', '加载'],
  'napi': ['NAPI', 'Native', 'C/C++'],
  'ffrt': ['FFRT', '任务调度'],
  'distributedservice': ['分布式']
};

// 缓存配置
const CACHE_DIR = path.join(__dirname, '../../../.skill-cache');
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 小时
if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });

// ==================== 缓存函数 ====================
function getCacheKey(type, data) {
  return crypto.createHash('md5').update(`${type}:${JSON.stringify(data)}`).digest('hex');
}

function getFromCache(type, data) {
  const key = getCacheKey(type, data);
  const cacheFile = path.join(CACHE_DIR, `${key}.json`);
  if (!fs.existsSync(cacheFile)) return null;
  try {
    const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
    if (Date.now() - cache.timestamp > CACHE_TTL) { fs.unlinkSync(cacheFile); return null; }
    return cache.result;
  } catch (e) { return null; }
}

function saveToCache(type, data, result) {
  const key = getCacheKey(type, data);
  const cacheFile = path.join(CACHE_DIR, `${key}.json`);
  try { fs.writeFileSync(cacheFile, JSON.stringify({ timestamp: Date.now(), result }, null, 2), 'utf-8'); }
  catch (e) {}
}

function clearCache() {
  if (!fs.existsSync(CACHE_DIR)) return;
  const files = fs.readdirSync(CACHE_DIR);
  let cleaned = 0;
  files.forEach(file => {
    try {
      const cacheFile = path.join(CACHE_DIR, file);
      const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
      if (Date.now() - cache.timestamp > CACHE_TTL) { fs.unlinkSync(cacheFile); cleaned++; }
    } catch (e) {}
  });
  if (cleaned > 0) console.log(`清理了 ${cleaned} 个过期缓存`);
}

// ==================== 文档检索 ====================
/**
 * 检索 HarmonyOS 文档
 * 
 * @param {string[]} domains - 领域列表（由 AI Agent 通过 LLM 识别）
 * @param {string} question - 用户问题
 * @returns {Promise<{documents: Array, api_references: Array}>}
 * 
 * 示例：
 * const retriever = require('./retriever.js');
 * const result = await retriever.search(['network', 'ui'], 'DNS 怎么配置');
 */
async function search(domains, question) {
  const documents = [];
  const keywords = question.toLowerCase().split('').filter(c => c.trim().length > 0);
  
  // 提取技术术语（OpenCLaw 启发）
  const techTerms = extractTechTerms(question);
  
  for (const domain of domains) {
    try {
      // 1. 检索 domain_index.json
      const domainIndexPath = path.join(__dirname, `../../../search_index/domains/${domain}/domain_index.json`);
      if (fs.existsSync(domainIndexPath)) {
        const index = JSON.parse(fs.readFileSync(domainIndexPath, 'utf-8'));
        const matched = (index.documents || []).filter(doc =>
          keywords.some(k => JSON.stringify(doc).toLowerCase().includes(k))
        );
        documents.push(...matched.map(doc => ({ ...doc, source: 'domain_index', domain })));
      }
      
      // 2. 检索 page_index.jsonl（章节级索引）
      const pageIndexPath = path.join(__dirname, `../../../search_index/domains/${domain}/page_index.jsonl`);
      if (fs.existsSync(pageIndexPath)) {
        const pages = fs.readFileSync(pageIndexPath, 'utf-8')
          .split('\n')
          .filter(line => line.trim())
          .map(line => JSON.parse(line));
        
        const matched = pages.filter(page =>
          keywords.some(k => JSON.stringify(page).toLowerCase().includes(k))
        );
        
        documents.push(...matched.slice(0, 50).map(page => ({
          doc_title: page.doc_title || '未命名',
          section_title: page.section_title,
          path: page.path,
          summary: page.summary,
          line_start: page.line_start,
          line_end: page.line_end,
          source: 'page_index',
          domain
        })));
      }
    } catch (error) {
      console.error(`Error searching ${domain}:`, error.message);
    }
  }
  
  // 加权排序（技术术语权重 2.0，普通关键词权重 1.0）
  const sorted = documents.map(doc => {
    const docText = JSON.stringify(doc).toLowerCase();
    let score = 0;
    
    // 技术术语匹配（权重 2.0）
    techTerms.forEach(term => {
      if (docText.includes(term.term.toLowerCase())) {
        score += term.weight;
      }
    });
    
    // 普通关键词匹配（权重 1.0）
    keywords.forEach(kw => {
      if (docText.includes(kw)) {
        score += 1.0;
      }
    });
    
    return { doc, score };
  })
  .sort((a, b) => b.score - a.score)
  .map(s => s.doc);
  
  return {
    documents: sorted.slice(0, 20), // 返回 Top 20
    api_references: []
  };
}

// ==================== 技术术语识别（OpenCLaw 启发） ====================
/**
 * 提取技术术语：API 名、函数名、错误码、代码符号
 * 借鉴 OpenCLaw 的 BM25 关键词加权策略
 */
function extractTechTerms(text) {
  const patterns = {
    apiName: /@[a-z.]+/gi,              // @ohos.net.http
    functionName: /[a-z]+[A-Z][a-zA-Z]+/g,  // onClick, onTouch, pushUrl
    className: /[A-Z][a-zA-Z]+/g,       // Ability, Context, DataStorage
    errorCode: /[A-Z]+\d{4}/gi,         // ERR0001
    version: /API\s*version\s*\d+/gi    // API version 10
  };
  
  const terms = [];
  for (const [type, pattern] of Object.entries(patterns)) {
    const matches = text.match(pattern) || [];
    terms.push(...matches.map(term => ({ term, type, weight: 2.0 })));
  }
  
  // 去重
  return [...new Map(terms.map(t => [t.term.toLowerCase(), t])).values()];
}

// ==================== 领域关键词（供 AI Agent 参考） ====================
function getDomainKeywords() {
  return domainKeywords;
}

function matchDomains(question) {
  const q = question.toLowerCase();
  const matched = Object.entries(domainKeywords)
    .filter(([_, kws]) => kws.some(k => q.includes(k)))
    .sort((a, b) => b[1].filter(k => q.includes(k)).length - a[1].filter(k => q.includes(k)).length)
    .map(([d]) => d);
  return matched;
}

// ==================== 导出 ====================
module.exports = {
  search,
  getFromCache,
  saveToCache,
  clearCache,
  getDomainKeywords,
  matchDomains
};

// 命令行测试
if (require.main === module) {
  const args = process.argv.slice(2);
  const question = args.find(a => !a.startsWith('--'));
  
  if (!question) {
    console.error('Usage: node retriever.js "你的问题"');
    console.error('');
    console.error('这是一个工具库，AI Agent 应该：');
    console.error('1. 用 LLM 识别领域');
    console.error('2. 调用 search(domains, question) 进行检索');
    console.error('3. 用 LLM 重排和验证结果');
    process.exit(1);
  }
  
  // 演示：使用关键词匹配领域（AI Agent 应该用 LLM）
  const domains = matchDomains(question);
  console.log(`识别领域：${domains.join(', ') || 'network（默认）'}`);
  console.log('');
  
  search(domains.length > 0 ? domains : ['network'], question).then(result => {
    console.log(`检索到 ${result.documents.length} 篇文档\n`);
    result.documents.forEach((doc, i) => {
      console.log(`${i + 1}. ${doc.doc_title}${doc.section_title ? ` - ${doc.section_title}` : ''}`);
      console.log(`   路径：${doc.path}`);
      if (doc.summary) console.log(`   摘要：${doc.summary.slice(0, 150)}...`);
      console.log('');
    });
  });
}
