/**
 * 文档检索工具（基于向量文件）
 */

const fs = require('fs');
const path = require('path');
const { embedText } = require('./vector-search.js');

// 领域关键词映射
const smartDomainMap = {
  '鸿蒙': 'application-models',
  'harmonyos': 'application-models',
  'openharmony': 'application-models',
  '屏幕': 'ui',
  '适配': 'ui',
  '深色模式': 'ui',
  '无障碍': 'accessibility',
  '报错': 'tools',
  '错误': 'tools',
  '异常': 'tools',
  '崩溃': 'dfx',
  '热更新': 'application-models',
  'http': 'network',
  'dns': 'network',
  '网络': 'network',
  '位置': 'device',
  '定位': 'device',
  'gps': 'device'
};

const domainKeywords = {
  'ui': ['动效', '动画', '界面', '组件', '布局', 'text', 'button', 'arkui'],
  'network': ['dns', 'http', '网络', '请求', 'socket', 'websocket'],
  'database': ['数据库', '存储', 'rdb', 'preferences', '数据'],
  'device': ['设备', '硬件', '传感器', '位置', '定位'],
  'tools': ['工具', '调试', '打包', 'IDE', '报错', '错误']
};

function matchDomains(question) {
  const q = question.toLowerCase();
  
  for (const [keyword, domain] of Object.entries(smartDomainMap)) {
    if (q.includes(keyword.toLowerCase())) {
      return [domain];
    }
  }
  
  const matched = Object.entries(domainKeywords)
    .filter(([_, kws]) => kws.some(k => q.includes(k)))
    .sort((a, b) => b[1].filter(k => q.includes(k)).length - a[1].filter(k => q.includes(k)).length)
    .map(([d]) => d);
  
  return matched.length > 0 ? matched : ['network'];
}

/**
 * 简单向量检索（基于 JSON 文件）
 */
async function search(domains, question, options = {}) {
  const documents = [];
  const topK = options.topK || 10;
  
  // 向量化问题
  const queryVector = await embedText(question);
  
  for (const domain of domains) {
    try {
      const vectorsFile = path.join(__dirname, '..', 'search_index', 'vectors', domain + '-vectors.json');
      
      if (!fs.existsSync(vectorsFile)) {
        continue;
      }
      
      const vectors = JSON.parse(fs.readFileSync(vectorsFile, 'utf-8'));
      
      // 计算余弦相似度
      const scored = vectors.map(v => {
        let dotProduct = 0, norm1 = 0, norm2 = 0;
        for (let i = 0; i < queryVector.length; i++) {
          dotProduct += queryVector[i] * v.vector[i];
          norm1 += queryVector[i] * queryVector[i];
          norm2 += v.vector[i] * v.vector[i];
        }
        const similarity = norm1 > 0 && norm2 > 0 ? dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2)) : 0;
        return { ...v, vectorScore: similarity };
      });
      
      // 排序
      scored.sort((a, b) => b.vectorScore - a.vectorScore);
      
      documents.push(...scored.slice(0, topK * 2));
      
    } catch (error) {
      console.error('检索 ' + domain + ' 失败:', error.message);
    }
  }
  
  // 全局排序
  documents.sort((a, b) => b.vectorScore - a.vectorScore);
  
  return {
    documents: documents.slice(0, topK),
    api_references: []
  };
}

module.exports = {
  search,
  matchDomains,
  smartDomainMap,
  domainKeywords
};
