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

// ==================== RRF 混合融合（OpenCLaw 启发） ====================
/**
 * Reciprocal Rank Fusion (RRF) - 倒数排名融合
 * 借鉴 OpenCLaw 的混合融合策略：70% 向量 + 30% 关键词
 * 
 * 当前实现：关键词检索内部的 RRF 变体
 * 未来扩展：支持向量检索 + 关键词检索的混合
 */

/**
 * RRF 融合多个检索结果列表
 * @param {Array<Array>} resultLists - 多个检索结果列表
 * @param {number} k - RRF 常数（默认 60）
 * @returns {Array} 融合后的结果
 */
function rrfFuse(resultLists, k = 60) {
  const scores = new Map();
  
  // 计算每个文档的 RRF 分数
  resultLists.forEach(list => {
    list.forEach((doc, rank) => {
      const id = doc.page_id || doc.doc_id;
      const currentScore = scores.get(id) || 0;
      scores.set(id, currentScore + 1 / (k + rank + 1));
    });
  });
  
  // 按 RRF 分数排序
  const sorted = Array.from(scores.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => {
      // 查找原始文档
      for (const list of resultLists) {
        const doc = list.find(d => (d.page_id || d.doc_id) === id);
        if (doc) return doc;
      }
      return null;
    })
    .filter(Boolean);
  
  return sorted;
}

/**
 * 加权分数融合（OpenCLaw 策略）
 * 70% 向量分数 + 30% 关键词分数
 * 
 * @param {Array} vectorResults - 向量检索结果（带 vectorScore）
 * @param {Array} keywordResults - 关键词检索结果（带 keywordScore）
 * @param {Object} options - 配置选项
 * @returns {Array} 融合后的结果
 */
function weightedFuse(vectorResults, keywordResults, options = {}) {
  const vectorWeight = options.vectorWeight || 0.7;
  const keywordWeight = options.keywordWeight || 0.3;
  
  // 归一化分数
  const normalizeScores = (results) => {
    if (results.length === 0) return [];
    const maxScore = Math.max(...results.map(r => r.score));
    const minScore = Math.min(...results.map(r => r.score));
    const range = maxScore - minScore || 1;
    return results.map(r => ({
      ...r,
      normalizedScore: (r.score - minScore) / range
    }));
  };
  
  const normalizedVector = normalizeScores(vectorResults);
  const normalizedKeyword = normalizeScores(keywordResults);
  
  // 合并文档
  const docMap = new Map();
  
  normalizedVector.forEach(doc => {
    const id = doc.page_id || doc.doc_id;
    docMap.set(id, { ...doc, vectorScore: doc.normalizedScore, keywordScore: 0 });
  });
  
  normalizedKeyword.forEach(doc => {
    const id = doc.page_id || doc.doc_id;
    const existing = docMap.get(id);
    if (existing) {
      existing.keywordScore = doc.normalizedScore;
    } else {
      docMap.set(id, { ...doc, vectorScore: 0, keywordScore: doc.normalizedScore });
    }
  });
  
  // 计算加权分数并排序
  const fused = Array.from(docMap.values())
    .map(doc => ({
      ...doc,
      fusedScore: vectorWeight * doc.vectorScore + keywordWeight * doc.keywordScore
    }))
    .sort((a, b) => b.fusedScore - a.fusedScore);
  
  return fused;
}

// ==================== 领域关键词（供 AI Agent 参考） ====================
function getDomainKeywords() {
  return domainKeywords;
}

function matchDomains(question) {
  const q = question.toLowerCase();
  
  // 1. 智能映射优先
  for (const [keyword, domain] of Object.entries(smartDomainMap)) {
    if (q.includes(keyword.toLowerCase())) {
      return [domain];
    }
  }
  
  // 2. 关键词匹配
  const matched = Object.entries(domainKeywords)
    .filter(([_, kws]) => kws.some(k => q.includes(k)))
    .sort((a, b) => b[1].filter(k => q.includes(k)).length - a[1].filter(k => q.includes(k)).length)
    .map(([d]) => d);
  
  return matched.length > 0 ? matched : ['network'];
}

// ==================== MMR 多样性重排（OpenCLaw 启发） ====================
/**
 * Maximal Marginal Relevance (MMR) - 最大边际相关性
 * 借鉴 OpenCLaw 的多样性重排策略
 * 
 * 目标：避免返回 10 篇相似文档，提升结果多样性
 * 平衡：相关性 vs 多样性
 */

/**
 * 计算两个文档的相似度（简单 Jaccard 相似度）
 * @param {Object} doc1 - 文档 1
 * @param {Object} doc2 - 文档 2
 * @returns {number} 相似度 (0-1)
 */
function docSimilarity(doc1, doc2) {
  const text1 = JSON.stringify(doc1).toLowerCase();
  const text2 = JSON.stringify(doc2).toLowerCase();
  
  // 提取词汇集合
  const words1 = new Set(text1.split(/[\s,，。；：()（）]+/).filter(w => w.length >= 2));
  const words2 = new Set(text2.split(/[\s,，。；：()（）]+/).filter(w => w.length >= 2));
  
  // 计算 Jaccard 相似度
  const intersection = [...words1].filter(w => words2.has(w)).length;
  const union = new Set([...words1, ...words2]).size;
  
  return union > 0 ? intersection / union : 0;
}

/**
 * MMR 多样性重排
 * @param {Array} documents - 文档列表
 * @param {string} question - 用户问题
 * @param {Object} options - 配置选项
 * @param {number} options.lambda - 平衡参数 (0-1)，默认 0.5
 *   - lambda=1.0: 只考虑相关性
 *   - lambda=0.0: 只考虑多样性
 * @param {number} options.topK - 返回数量，默认 10
 * @returns {Array} 重排后的文档列表
 */
function mmrRerank(documents, question, options = {}) {
  const lambda = options.lambda || 0.5;
  const topK = options.topK || 10;
  
  if (documents.length <= 1) return documents;
  
  // 计算每个文档与问题的相关性分数
  const questionKeywords = question.toLowerCase().split('').filter(c => c.trim().length > 0);
  const relevanceScores = documents.map((doc, index) => {
    const docText = JSON.stringify(doc).toLowerCase();
    const score = questionKeywords.filter(kw => docText.includes(kw)).length;
    return { doc, score, index };
  });
  
  // MMR 选择
  const selected = [];
  const remaining = [...relevanceScores];
  
  while (selected.length < topK && remaining.length > 0) {
    // 选择 MMR 分数最高的文档
    let bestDoc = null;
    let bestMMRScore = -Infinity;
    let bestIndex = -1;
    
    remaining.forEach((item, idx) => {
      // 相关性分数
      const relevanceScore = item.score;
      
      // 多样性分数（与已选文档的最大相似度）
      let maxSimilarity = 0;
      if (selected.length > 0) {
        const similarities = selected.map(selectedItem => {
          if (!selectedItem || !item.doc) return 0;
          return docSimilarity(item.doc, selectedItem);
        });
        maxSimilarity = Math.max(0, ...similarities);
      }
      
      // MMR 分数 = lambda * 相关性 - (1 - lambda) * 最大相似度
      const mmrScore = lambda * relevanceScore - (1 - lambda) * maxSimilarity;
      
      if (mmrScore > bestMMRScore) {
        bestMMRScore = mmrScore;
        bestDoc = item;
        bestIndex = idx;
      }
    });
    
    if (bestDoc) {
      selected.push(bestDoc.doc);
      remaining.splice(bestIndex, 1);
    }
  }
  
  return selected;
}

// ==================== 导出 ====================
module.exports = {
  search,
  getFromCache,
  saveToCache,
  clearCache,
  getDomainKeywords,
  matchDomains,
  // RRF 混合融合（OpenCLaw 启发）
  rrfFuse,
  weightedFuse,
  extractTechTerms,
  // MMR 多样性重排（OpenCLaw 启发）
  mmrRerank,
  docSimilarity
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
