// Tool 2: Domain Detection - 识别问题涉及的领域

export interface DomainDetectInput {
  question: string;
}

export interface DomainDetectOutput {
  domains: string[];
  kits: string[];
  confidence: number;
  reason: string;
  alternative_domains: string[];
}

// 领域关键词映射
const DOMAIN_KEYWORDS: Record<string, string[]> = {
  'network': ['网络', 'http', 'socket', 'websocket', '请求', '下载', '上传', '连接', 'network', 'fetch'],
  'ui': ['ui', '界面', '组件', '布局', '样式', '动画', 'arkui', 'text', 'button', 'view', '页面', '视图'],
  'web': ['web', 'webview', '浏览器', 'h5', 'html', 'javascript', 'js交互'],
  'form': ['form', '卡片', 'widget', '小组件', '快捷服务'],
  'media': ['媒体', '视频', '音频', '播放', '录制', 'media', 'avplayer', 'avrecorder'],
  'camera': ['相机', 'camera', '拍照', '摄像', '摄像头'],
  'image': ['图片', '图像', 'image', 'bitmap', '图片处理'],
  'audio': ['音频', 'audio', '声音', '播放音乐'],
  'database': ['数据库', 'rdb', 'preferences', 'orm', '存储', '增删改查', 'database', 'data'],
  'file-management': ['文件', 'file', '目录', '存储', '读写'],
  'connectivity': ['连接', '蓝牙', 'wifi', 'nfc', 'connectivity', 'bluetooth', '热点'],
  'ipc': ['ipc', '进程间', 'rpc', '通信'],
  'security': ['安全', '加密', '权限', '授权', 'security', 'crypto', 'permission'],
  'notification': ['通知', 'notification', '消息', '推送'],
  'inputmethod': ['输入法', 'inputmethod', 'ime', '键盘'],
  'task-management': ['任务', '后台', 'task', 'background', '调度'],
  'device': ['设备', 'device', '硬件', '传感器'],
  'displaymanager': ['显示', 'display', '屏幕', '亮度'],
  'windowmanager': ['窗口', 'window', '大小', '位置', '全屏', '悬浮窗'],
  'performance': ['性能', '性能分析', 'performance', '优化', 'trace'],
  'arkts-utils': ['arkts', '工具', 'util', '日志', 'array', 'string'],
  'basic-services': ['基础服务', '基础能力', 'basic service'],
  'application-models': ['应用模型', 'ability', '模型', '生命周期', 'uability', 'fa'],
  'quick-start': ['快速入门', 'hello world', '新手', '教程', 'quick start'],
  'tools': ['工具', 'dev', '开发工具', 'ide', 'sdk'],
  'ai': ['ai', '人工智能', '机器学习', 'ml', 'mindspore', 'nlp', '语音', '视觉'],
  'accessibility': ['无障碍', 'accessibility', '辅助功能'],
  'dfx': ['dfx', '诊断', '调试', '日志'],
  'distributedservice': ['分布式', 'distributed', '跨设备', '协同'],
  'internationalization': ['国际化', 'i18n', '本地化', '多语言', 'locale'],
  'graphics': ['图形', 'graphics', '2d', '画布', 'canvas'],
  'graphics3d': ['3d', '图形', 'webgl', '3d渲染'],
  'webgl': ['webgl', '3d渲染', 'opengl'],
  'telephony': ['电话', 'telephony', '短信', 'sim', '通话'],
  'location': ['位置', 'location', '定位', 'gps', '地图'],
  'game-controller': ['游戏', '手柄', 'game', 'controller', '游戏手柄']
};

// 领域到 Kit 的映射
const DOMAIN_TO_KIT: Record<string, string> = {
  'network': 'apis-network-kit',
  'ui': 'apis-arkui',
  'web': 'apis-arkweb',
  'form': 'apis-form-kit',
  'media': 'apis-media-kit',
  'camera': 'apis-camera-kit',
  'image': 'apis-image-kit',
  'audio': 'apis-audio-kit',
  'database': 'apis-arkdata',
  'file-management': 'apis-core-file-kit',
  'connectivity': 'apis-connectivity-kit',
  'ipc': 'apis-ipc-kit',
  'security': 'apis-crypto-architecture-kit',
  'notification': 'apis-notification-kit',
  'inputmethod': 'apis-ime-kit',
  'task-management': 'apis-backgroundtasks-kit',
  'windowmanager': 'apis-arkui',
  'performance': 'apis-performance-analysis-kit',
  'arkts-utils': 'apis-arkts',
  'basic-services': 'apis-basic-services-kit',
  'application-models': 'apis-ability-kit',
  'ai': 'apis-mindspore-lite-kit',
  'graphics': 'apis-arkgraphics2d',
  'graphics3d': 'apis-arkgraphics3d',
  'webgl': 'apis-arkgraphics2d',
  'telephony': 'apis-telephony-kit',
  'location': 'apis-location-kit',
  'accessibility': 'apis-accessibility-kit',
  'internationalization': 'apis-localization-kit',
  'game-controller': 'apis-game-controller-kit',
  'distributedservice': 'apis-distributedservice-kit',
  'ffrt': 'apis-ffrt-kit'
};

export function harmonyosDomainDetect(input: DomainDetectInput): DomainDetectOutput {
  const { question } = input;
  const questionLower = question.toLowerCase();
  
  // 统计每个领域的匹配数
  const domainScores: Record<string, number> = {};
  
  for (const [domain, keywords] of Object.entries(DOMAIN_KEYWORDS)) {
    let score = 0;
    for (const keyword of keywords) {
      if (questionLower.includes(keyword.toLowerCase())) {
        score++;
      }
    }
    if (score > 0) {
      domainScores[domain] = score;
    }
  }
  
  // 按分数排序
  const sortedDomains = Object.entries(domainScores)
    .sort((a, b) => b[1] - a[1])
    .map(([domain]) => domain);
  
  if (sortedDomains.length === 0) {
    return {
      domains: [],
      kits: [],
      confidence: 0.3,
      reason: '无法识别具体领域',
      alternative_domains: []
    };
  }
  
  // 取前两个主要领域
  const mainDomains = sortedDomains.slice(0, 2);
  const kits = mainDomains
    .map(d => DOMAIN_TO_KIT[d])
    .filter((kit): kit is string => kit !== undefined);
  
  const confidence = Math.min(0.95, 0.6 + sortedDomains.length * 0.1);
  
  return {
    domains: mainDomains,
    kits: [...new Set(kits)], // 去重
    confidence,
    reason: `识别到领域: ${mainDomains.join(', ')}`,
    alternative_domains: sortedDomains.slice(2, 5)
  };
}
