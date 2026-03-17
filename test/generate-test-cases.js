#!/usr/bin/env node
/**
 * 生成 100+ 测试用例
 * 
 * 使用方式：
 * node test/generate-test-cases.js
 */

const fs = require('fs');
const path = require('path');

const casesDir = path.join(__dirname, 'cases');
if (!fs.existsSync(casesDir)) {
  fs.mkdirSync(casesDir, { recursive: true });
}

// 测试用例生成器
const testCases = [
  // ==================== 基础检索 (20 个) ====================
  { id: 'basic-01', category: 'basic', question: '如何在 HarmonyOS 中发起 HTTP 请求？', expected_domains: ['network'], expected_keywords: ['HTTP', '请求', '网络'] },
  { id: 'basic-02', category: 'basic', question: 'ArkUI Text 组件如何使用？', expected_domains: ['ui'], expected_keywords: ['Text', '组件', 'ArkUI'] },
  { id: 'basic-03', category: 'basic', question: 'Ability 生命周期是什么？', expected_domains: ['application-models'], expected_keywords: ['Ability', '生命周期'] },
  { id: 'basic-04', category: 'basic', question: '如何创建自定义组件？', expected_domains: ['ui'], expected_keywords: ['自定义组件', '创建'] },
  { id: 'basic-05', category: 'basic', question: '如何实现状态管理？', expected_domains: ['ui'], expected_keywords: ['状态管理', '@State'] },
  { id: 'basic-06', category: 'basic', question: '如何配置 module.json5？', expected_domains: ['application-models'], expected_keywords: ['module.json5', '配置'] },
  { id: 'basic-07', category: 'basic', question: '如何实现页面跳转？', expected_domains: ['ui'], expected_keywords: ['页面跳转', '路由', 'navigation'] },
  { id: 'basic-08', category: 'basic', question: '如何使用数据库？', expected_domains: ['database'], expected_keywords: ['数据库', 'RDB', '存储'] },
  { id: 'basic-09', category: 'basic', question: '如何访问文件系统？', expected_domains: ['file-management'], expected_keywords: ['文件', '访问', '路径'] },
  { id: 'basic-10', category: 'basic', question: '如何实现动画效果？', expected_domains: ['ui'], expected_keywords: ['动画', 'animateTo'] },
  { id: 'basic-11', category: 'basic', question: '如何使用 WebSocket？', expected_domains: ['network'], expected_keywords: ['WebSocket', '连接'] },
  { id: 'basic-12', category: 'basic', question: '如何播放音频？', expected_domains: ['media'], expected_keywords: ['音频', '播放'] },
  { id: 'basic-13', category: 'basic', question: '如何播放视频？', expected_domains: ['media'], expected_keywords: ['视频', '播放'] },
  { id: 'basic-14', category: 'basic', question: '如何获取位置信息？', expected_domains: ['location'], expected_keywords: ['位置', '定位', 'GPS'] },
  { id: 'basic-15', category: 'basic', question: '如何发送通知？', expected_domains: ['notification'], expected_keywords: ['通知', '推送'] },
  { id: 'basic-16', category: 'basic', question: '如何实现蓝牙通信？', expected_domains: ['communication'], expected_keywords: ['蓝牙', '通信'] },
  { id: 'basic-17', category: 'basic', question: '如何使用相机？', expected_domains: ['media'], expected_keywords: ['相机', '拍照'] },
  { id: 'basic-18', category: 'basic', question: '如何处理图片？', expected_domains: ['media'], expected_keywords: ['图片', '图像'] },
  { id: 'basic-19', category: 'basic', question: '如何加密数据？', expected_domains: ['security'], expected_keywords: ['加密', '安全'] },
  { id: 'basic-20', category: 'basic', question: '如何获取权限？', expected_domains: ['security'], expected_keywords: ['权限', '授权'] },
  
  // ==================== 技术术语 (20 个) ====================
  { id: 'tech-01', category: 'tech-terms', question: '@ohos.net.http 模块怎么用？', expected_domains: ['network'], expected_keywords: ['@ohos.net.http', 'http', '模块'] },
  { id: 'tech-02', category: 'tech-terms', question: 'onClick 事件如何绑定？', expected_domains: ['ui'], expected_keywords: ['onClick', '事件', '绑定'] },
  { id: 'tech-03', category: 'tech-terms', question: '@State 装饰器有什么作用？', expected_domains: ['ui'], expected_keywords: ['@State', '装饰器'] },
  { id: 'tech-04', category: 'tech-terms', question: 'AbilityStage 生命周期回调有哪些？', expected_domains: ['application-models'], expected_keywords: ['AbilityStage', '生命周期', '回调'] },
  { id: 'tech-05', category: 'tech-terms', question: 'router.pushUrl() 如何使用？', expected_domains: ['ui'], expected_keywords: ['router', 'pushUrl', '路由'] },
  { id: 'tech-06', category: 'tech-terms', question: '@Prop 和@Link 有什么区别？', expected_domains: ['ui'], expected_keywords: ['@Prop', '@Link', '装饰器'] },
  { id: 'tech-07', category: 'tech-terms', question: 'DataStorage 如何持久化数据？', expected_domains: ['database'], expected_keywords: ['DataStorage', '持久化'] },
  { id: 'tech-08', category: 'tech-terms', question: 'FilePicker 如何选择文件？', expected_domains: ['file-management'], expected_keywords: ['FilePicker', '文件选择'] },
  { id: 'tech-09', category: 'tech-terms', question: 'animation.animateTo() 如何使用？', expected_domains: ['ui'], expected_keywords: ['animation', 'animateTo'] },
  { id: 'tech-10', category: 'tech-terms', question: 'WebSocket.onopen 回调什么时候触发？', expected_domains: ['network'], expected_keywords: ['WebSocket', 'onopen', '回调'] },
  { id: 'tech-11', category: 'tech-terms', question: 'AVPlayer 如何播放音频？', expected_domains: ['media'], expected_keywords: ['AVPlayer', '播放', '音频'] },
  { id: 'tech-12', category: 'tech-terms', question: 'Image 组件如何加载图片？', expected_domains: ['ui'], expected_keywords: ['Image', '组件', '加载'] },
  { id: 'tech-13', category: 'tech-terms', question: 'Preferences 如何存储键值对？', expected_domains: ['database'], expected_keywords: ['Preferences', '键值对', '存储'] },
  { id: 'tech-14', category: 'tech-terms', question: 'UIAbility 如何启动？', expected_domains: ['application-models'], expected_keywords: ['UIAbility', '启动'] },
  { id: 'tech-15', category: 'tech-terms', question: '@Builder 如何构建自定义组件？', expected_domains: ['ui'], expected_keywords: ['@Builder', '自定义组件'] },
  { id: 'tech-16', category: 'tech-terms', question: 'Context 如何获取应用上下文？', expected_domains: ['application-models'], expected_keywords: ['Context', '上下文'] },
  { id: 'tech-17', category: 'tech-terms', question: 'Column 和 Row 布局如何使用？', expected_domains: ['ui'], expected_keywords: ['Column', 'Row', '布局'] },
  { id: 'tech-18', category: 'tech-terms', question: 'List 组件如何实现列表？', expected_domains: ['ui'], expected_keywords: ['List', '组件', '列表'] },
  { id: 'tech-19', category: 'tech-terms', question: 'Tabs 如何实现标签页？', expected_domains: ['ui'], expected_keywords: ['Tabs', '标签页'] },
  { id: 'tech-20', category: 'tech-terms', question: 'Grid 如何实现网格布局？', expected_domains: ['ui'], expected_keywords: ['Grid', '网格', '布局'] },
  
  // ==================== 多领域 (15 个) ====================
  { id: 'multi-01', category: 'multi-domain', question: '如何在 UI 中发起 HTTP 请求并显示结果？', expected_domains: ['ui', 'network'], expected_keywords: ['UI', 'HTTP', '请求', '显示'] },
  { id: 'multi-02', category: 'multi-domain', question: '如何从数据库读取数据并在列表展示？', expected_domains: ['database', 'ui'], expected_keywords: ['数据库', '读取', '列表', '展示'] },
  { id: 'multi-03', category: 'multi-domain', question: '如何拍照并保存到文件系统？', expected_domains: ['media', 'file-management'], expected_keywords: ['拍照', '保存', '文件'] },
  { id: 'multi-04', category: 'multi-domain', question: '如何播放网络音频流？', expected_domains: ['network', 'media'], expected_keywords: ['播放', '网络', '音频流'] },
  { id: 'multi-05', category: 'multi-domain', question: '如何获取位置并在地图显示？', expected_domains: ['location', 'ui'], expected_keywords: ['位置', '地图', '显示'] },
  { id: 'multi-06', category: 'multi-domain', question: '如何加密存储用户数据？', expected_domains: ['security', 'database'], expected_keywords: ['加密', '存储', '数据'] },
  { id: 'multi-07', category: 'multi-domain', question: '如何接收通知并跳转到对应页面？', expected_domains: ['notification', 'ui'], expected_keywords: ['通知', '跳转', '页面'] },
  { id: 'multi-08', category: 'multi-domain', question: '如何通过蓝牙传输文件？', expected_domains: ['communication', 'file-management'], expected_keywords: ['蓝牙', '传输', '文件'] },
  { id: 'multi-09', category: 'multi-domain', question: '如何在 Ability 之间传递数据？', expected_domains: ['application-models', 'ui'], expected_keywords: ['Ability', '传递', '数据'] },
  { id: 'multi-10', category: 'multi-domain', question: '如何实现视频录制并上传？', expected_domains: ['media', 'network'], expected_keywords: ['视频', '录制', '上传'] },
  { id: 'multi-11', category: 'multi-domain', question: '如何处理图片并保存到相册？', expected_domains: ['media', 'file-management'], expected_keywords: ['图片', '处理', '保存', '相册'] },
  { id: 'multi-12', category: 'multi-domain', question: '如何在后台播放音频？', expected_domains: ['media', 'application-models'], expected_keywords: ['后台', '播放', '音频'] },
  { id: 'multi-13', category: 'multi-domain', question: '如何实现 WebSocket 实时通信并更新 UI？', expected_domains: ['network', 'ui'], expected_keywords: ['WebSocket', '通信', '更新', 'UI'] },
  { id: 'multi-14', category: 'multi-domain', question: '如何扫描 QR 码并跳转？', expected_domains: ['media', 'ui'], expected_keywords: ['扫描', 'QR 码', '跳转'] },
  { id: 'multi-15', category: 'multi-domain', question: '如何获取传感器数据并可视化？', expected_domains: ['device', 'ui'], expected_keywords: ['传感器', '数据', '可视化'] },
  
  // ==================== 边界情况 (15 个) ====================
  { id: 'edge-01', category: 'edge', question: '鸿蒙和 HarmonyOS 是一个东西吗？', expected_domains: ['application-models'], expected_keywords: ['鸿蒙', 'HarmonyOS'] },
  { id: 'edge-02', category: 'edge', question: 'ArkTS 和 TypeScript 有什么区别？', expected_domains: ['ui'], expected_keywords: ['ArkTS', 'TypeScript', '区别'] },
  { id: 'edge-03', category: 'edge', question: 'Stage 模型和 FA 模型哪个更好？', expected_domains: ['application-models'], expected_keywords: ['Stage', 'FA', '模型'] },
  { id: 'edge-04', category: 'edge', question: '为什么我的代码不生效？', expected_domains: ['ui'], expected_keywords: ['代码', '不生效'] },
  { id: 'edge-05', category: 'edge', question: '报错 ERR0001 怎么处理？', expected_domains: ['application-models'], expected_keywords: ['ERR0001', '报错', '错误'] },
  { id: 'edge-06', category: 'edge', question: '性能优化有哪些方法？', expected_domains: ['performance'], expected_keywords: ['性能', '优化'] },
  { id: 'edge-07', category: 'edge', question: '如何调试应用？', expected_domains: ['tools'], expected_keywords: ['调试', '应用'] },
  { id: 'edge-08', category: 'edge', question: '打包失败怎么办？', expected_domains: ['tools'], expected_keywords: ['打包', '失败'] },
  { id: 'edge-09', category: 'edge', question: '如何适配不同屏幕尺寸？', expected_domains: ['ui'], expected_keywords: ['适配', '屏幕', '尺寸'] },
  { id: 'edge-10', category: 'edge', question: '如何实现深色模式？', expected_domains: ['ui'], expected_keywords: ['深色模式', '主题'] },
  { id: 'edge-11', category: 'edge', question: '如何国际化多语言？', expected_domains: ['internationalization'], expected_keywords: ['国际化', '多语言'] },
  { id: 'edge-12', category: 'edge', question: '如何实现无障碍功能？', expected_domains: ['accessibility'], expected_keywords: ['无障碍', '辅助功能'] },
  { id: 'edge-13', category: 'edge', question: '如何热更新应用？', expected_domains: ['application-models'], expected_keywords: ['热更新', '应用'] },
  { id: 'edge-14', category: 'edge', question: '如何分析崩溃日志？', expected_domains: ['dfx'], expected_keywords: ['崩溃', '日志', '分析'] },
  { id: 'edge-15', category: 'edge', question: '如何优化启动速度？', expected_domains: ['performance'], expected_keywords: ['启动速度', '优化'] },
  
  // ==================== 回归测试 (20 个) ====================
  { id: 'regress-01', category: 'regression', question: 'DNS 鸿蒙上接口怎么适配', expected_domains: ['network'], expected_keywords: ['DNS', '接口', '适配'] },
  { id: 'regress-02', category: 'regression', question: '鸿蒙上动效怎么写', expected_domains: ['ui'], expected_keywords: ['动效', '动画'] },
  { id: 'regress-03', category: 'regression', question: '鸿蒙上剪切板怎么使用', expected_domains: ['file-management'], expected_keywords: ['剪切板', '剪贴板'] },
  { id: 'regress-04', category: 'regression', question: 'Navigation 和 router 有什么区别', expected_domains: ['ui'], expected_keywords: ['Navigation', 'router', '区别'] },
  { id: 'regress-05', category: 'regression', question: '@State 装饰器的用法和参数', expected_domains: ['ui'], expected_keywords: ['@State', '装饰器', '参数'] },
  { id: 'regress-06', category: 'regression', question: '什么是 Ability', expected_domains: ['application-models'], expected_keywords: ['Ability', '概念'] },
  { id: 'regress-07', category: 'regression', question: 'HTTP 请求的示例代码', expected_domains: ['network'], expected_keywords: ['HTTP', '请求', '示例', '代码'] },
  { id: 'regress-08', category: 'regression', question: '状态管理不更新的问题怎么解决', expected_domains: ['ui'], expected_keywords: ['状态管理', '不更新', '问题'] },
  { id: 'regress-09', category: 'regression', question: '页面路由不生效怎么办', expected_domains: ['ui'], expected_keywords: ['页面路由', '不生效'] },
  { id: 'regress-10', category: 'regression', question: '自定义组件渲染异常的排查方法', expected_domains: ['ui'], expected_keywords: ['自定义组件', '渲染异常'] },
  { id: 'regress-11', category: 'regression', question: '如何创建 HAP 包', expected_domains: ['application-models'], expected_keywords: ['HAP', '包', '创建'] },
  { id: 'regress-12', category: 'regression', question: 'ArkUI 是什么', expected_domains: ['ui'], expected_keywords: ['ArkUI', '概念'] },
  { id: 'regress-13', category: 'regression', question: 'AlertDialog 警告弹窗有哪些配置选项', expected_domains: ['ui'], expected_keywords: ['AlertDialog', '弹窗', '配置'] },
  { id: 'regress-14', category: 'regression', question: 'Column 布局组件支持哪些属性', expected_domains: ['ui'], expected_keywords: ['Column', '布局', '属性'] },
  { id: 'regress-15', category: 'regression', question: '如何配置权限', expected_domains: ['security'], expected_keywords: ['权限', '配置'] },
  { id: 'regress-16', category: 'regression', question: '如何实现分布式能力', expected_domains: ['distributedservice'], expected_keywords: ['分布式', '能力'] },
  { id: 'regress-17', category: 'regression', question: '如何使用 NAPI 开发', expected_domains: ['napi'], expected_keywords: ['NAPI', '开发'] },
  { id: 'regress-18', category: 'regression', question: 'FFRT 任务调度如何使用', expected_domains: ['ffrt'], expected_keywords: ['FFRT', '任务调度'] },
  { id: 'regress-19', category: 'regression', question: '如何开发卡片', expected_domains: ['form'], expected_keywords: ['卡片', '开发'] },
  { id: 'regress-20', category: 'regression', question: 'Web 组件如何加载网页', expected_domains: ['web'], expected_keywords: ['Web', '组件', '加载', '网页'] },
  
  // ==================== 性能测试 (10 个) ====================
  { id: 'perf-01', category: 'performance', question: '快速检索测试 1', expected_domains: ['ui'], expected_keywords: ['测试'] },
  { id: 'perf-02', category: 'performance', question: '快速检索测试 2', expected_domains: ['network'], expected_keywords: ['测试'] },
  { id: 'perf-03', category: 'performance', question: '快速检索测试 3', expected_domains: ['database'], expected_keywords: ['测试'] },
  { id: 'perf-04', category: 'performance', question: '快速检索测试 4', expected_domains: ['ui'], expected_keywords: ['测试'] },
  { id: 'perf-05', category: 'performance', question: '快速检索测试 5', expected_domains: ['network'], expected_keywords: ['测试'] },
  { id: 'perf-06', category: 'performance', question: '长文本检索测试', expected_domains: ['ui'], expected_keywords: ['长文本', '测试'] },
  { id: 'perf-07', category: 'performance', question: '多关键词检索测试', expected_domains: ['network'], expected_keywords: ['多关键词', '测试'] },
  { id: 'perf-08', category: 'performance', question: '模糊匹配检索测试', expected_domains: ['database'], expected_keywords: ['模糊匹配', '测试'] },
  { id: 'perf-09', category: 'performance', question: '精确匹配检索测试', expected_domains: ['ui'], expected_keywords: ['精确匹配', '测试'] },
  { id: 'perf-10', category: 'performance', question: '混合检索测试', expected_domains: ['network'], expected_keywords: ['混合检索', '测试'] }
];

// 保存测试用例
testCases.forEach(testCase => {
  const filePath = path.join(casesDir, `${testCase.id}.json`);
  const successCriteria = testCase.expected_keywords.length > 0 ? 
    `Top3 结果包含${testCase.expected_keywords.slice(0, 2).join('或')}` : 
    '返回相关文档';
  
  fs.writeFileSync(filePath, JSON.stringify({
    ...testCase,
    success_criteria: successCriteria
  }, null, 2), 'utf-8');
});

console.log(`✅ 已生成 ${testCases.length} 个测试用例`);
console.log(`📁 保存至：${casesDir}/`);
console.log('');
console.log('按类别统计:');
const byCategory = testCases.reduce((acc, tc) => {
  acc[tc.category] = (acc[tc.category] || 0) + 1;
  return acc;
}, {});

Object.entries(byCategory).forEach(([category, count]) => {
  console.log(`  ${category}: ${count} 个`);
});
