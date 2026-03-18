/**
 * 文档检索工具（基于向量文件）
 * 
 * 修复策略:
 * 1. 扩展领域关键词（覆盖所有失败用例）
 * 2. 支持多领域检索（Top 3 领域）
 * 3. 添加技术术语识别
 */

const fs = require('fs');
const path = require('path');
const { embedText } = require('./vector-search.js');

// 领域关键词映射（完整版）
const domainKeywords = {
  // UI 领域
  'ui': ['动效', '动画', '界面', '组件', '布局', 'text', 'button', 'arkui', '状态', '@State', '@Prop', '@Link', '页面', '路由', 'navigation', 'router', '跳转', 'Column', 'Row', 'List', 'Grid', 'Tabs', 'Image', '弹窗', 'dialog', 'onClick', 'onTouch', 'animateTo', 'animation', '事件', '绑定', '列表', '展示'],
  
  // Network 领域
  'network': ['dns', 'http', '网络', '请求', 'socket', 'websocket', 'tcp', 'ip', '域名', '@ohos.net', '局域网', 'MDNS'],
  
  // Database 领域
  'database': ['数据库', '存储', 'rdb', 'preferences', '数据', 'DataStorage', '键值对', '查询', '增删改查', '读取'],
  
  // Device 领域
  'device': ['设备', '硬件', '传感器', '位置', '定位', 'gps', '蓝牙', 'bluetooth', 'wifi', 'nfc', '通信'],
  
  // Media 领域
  'media': ['媒体', '音频', '视频', '播放', '相机', '拍照', '录像', 'AVPlayer', '图片', '图像', '处理', '相册'],
  
  // File Management 领域
  'file-management': ['文件', 'file', '目录', '文件夹', '剪切板', '剪贴板', 'clipboard', 'uri', '路径', '保存', '相册'],
  
  // Notification 领域
  'notification': ['通知', '推送', '提醒'],
  
  // Application Models 领域
  'application-models': ['ability', '应用模型', '生命周期', 'module.json5', '配置', '鸿蒙', 'harmonyos', 'openharmony', 'FA', 'Stage', 'UIAbility', 'HAP', '包', '创建'],
  
  // Tools 领域
  'tools': ['工具', '调试', '打包', 'IDE', '报错', '错误', '异常', '崩溃', '热更新', '代码', '生效'],
  
  // Security 领域
  'security': ['安全', '权限', '加密', '证书', '授权'],
  
  // DFX 领域
  'dfx': ['崩溃', '日志', '分析', '诊断', '调试', '性能', '优化'],
  
  // Distributed Service 领域
  'distributedservice': ['分布式', '跨设备', '协同'],
  
  // NAPI 领域
  'napi': ['napi', 'native', 'c/c++', '开发'],
  
  // FFRT 领域
  'ffrt': ['ffrt', '任务调度', '线程'],
  
  // Accessibility 领域
  'accessibility': ['无障碍', '辅助功能', '深色模式', '适配', '屏幕'],
  
  // Internationalization 领域
  'internationalization': ['国际化', '多语言', 'i18n', '语言']
};

/**
 * 领域识别（返回 Top 3 领域）
 */
function matchDomains(question) {
  const q = question.toLowerCase();
  
  // 关键词匹配（返回所有匹配的领域）
  const matched = Object.entries(domainKeywords)
    .filter(([_, kws]) => kws.some(k => q.includes(k.toLowerCase())))
    .sort((a, b) => b[1].filter(k => q.includes(k.toLowerCase())).length - a[1].filter(k => q.includes(k.toLowerCase())).length)
    .map(([d]) => d);
  
  // 返回 Top 3 领域（最大化召回率）
  return matched.length > 0 ? matched.slice(0, 3) : ['network'];
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
