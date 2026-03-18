/**
 * 文档检索工具（基于向量文件）
 * 
 * 修复策略:
 * 1. 领域识别返回多个领域（提高召回率）
 * 2. 降低 smartDomainMap 优先级（避免过度匹配）
 * 3. 在所有匹配领域检索（即使领域识别不完全正确也能召回）
 */

const fs = require('fs');
const path = require('path');
const { embedText } = require('./vector-search.js');

// 领域关键词映射（按领域分组）
const domainKeywords = {
  'ui': ['动效', '动画', '界面', '组件', '布局', 'text', 'button', 'arkui', '状态', '@State', '@Prop', '@Link', '页面', '路由', 'navigation', 'router', '跳转', 'Column', 'Row', 'List', 'Grid', 'Tabs', 'Image', '弹窗', 'dialog'],
  'network': ['dns', 'http', '网络', '请求', 'socket', 'websocket', 'tcp', 'ip', '域名', '@ohos.net'],
  'database': ['数据库', '存储', 'rdb', 'preferences', '数据', 'DataStorage', '键值对', '查询', '增删改查'],
  'device': ['设备', '硬件', '传感器', '位置', '定位', 'gps', '蓝牙', 'bluetooth', 'wifi', 'nfc'],
  'media': ['媒体', '音频', '视频', '播放', '相机', '拍照', '录像', 'AVPlayer'],
  'file-management': ['文件', 'file', '目录', '文件夹', '剪切板', '剪贴板', 'clipboard', 'uri', '路径'],
  'notification': ['通知', '推送', '提醒'],
  'application-models': ['ability', '应用模型', '生命周期', 'module.json5', '配置', '鸿蒙', 'harmonyos', 'openharmony', 'FA', 'Stage', 'UIAbility'],
  'tools': ['工具', '调试', '打包', 'IDE', '报错', '错误', '异常', '崩溃', '热更新'],
  'security': ['安全', '权限', '加密', '证书', '授权'],
  'dfx': ['崩溃', '日志', '分析', '诊断', '调试']
};

/**
 * 领域识别（返回多个匹配领域）
 */
function matchDomains(question) {
  const q = question.toLowerCase();
  
  // 关键词匹配（返回所有匹配的领域）
  const matched = Object.entries(domainKeywords)
    .filter(([_, kws]) => kws.some(k => q.includes(k.toLowerCase())))
    .sort((a, b) => b[1].filter(k => q.includes(k.toLowerCase())).length - a[1].filter(k => q.includes(k.toLowerCase())).length)
    .map(([d]) => d);
  
  // 返回 Top 2 领域（提高召回率）
  return matched.length > 0 ? matched.slice(0, 2) : ['network'];
}

/**
 * 向量检索（在多个领域检索）
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
        return { ...v, vectorScore: similarity, domain };
      });
      
      // 排序并添加
      scored.sort((a, b) => b.vectorScore - a.vectorScore);
      documents.push(...scored.slice(0, topK * 2));
      
    } catch (error) {
      console.error('检索 ' + domain + ' 失败:', error.message);
    }
  }
  
  // 全局排序（跨领域）
  documents.sort((a, b) => b.vectorScore - a.vectorScore);
  
  return {
    documents: documents.slice(0, topK),
    api_references: []
  };
}

module.exports = {
  search,
  matchDomains,
  domainKeywords
};
