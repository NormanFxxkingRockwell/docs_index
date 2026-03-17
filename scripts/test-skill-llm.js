#!/usr/bin/env node

/**
 * Skill + LLM 测试脚本
 * 
 * 用于验证 Skill 流程 + LLM 集成的检索效果
 * 
 * 使用方式：
 *   node scripts/test-skill-llm.js
 * 
 * 需要配置：
 *   export LLM_PROVIDER=deepseek
 *   export LLM_API_KEY=sk-xxx
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 测试问题集（30 题）
const TEST_QUESTIONS = [
  // how_to (6 题)
  { id: 'ht-01', type: 'how_to', question: '如何在 HarmonyOS 中实现页面路由跳转？', expected_domains: ['ui'] },
  { id: 'ht-02', type: 'how_to', question: '如何创建一个自定义组件？', expected_domains: ['ui'] },
  { id: 'ht-03', type: 'how_to', question: '如何实现状态管理？', expected_domains: ['ui'] },
  { id: 'ht-04', type: 'how_to', question: '如何发起 HTTP 网络请求？', expected_domains: ['network'] },
  { id: 'ht-05', type: 'how_to', question: '如何实现动画效果？', expected_domains: ['ui'] },
  { id: 'ht-06', type: 'how_to', question: '如何配置 module.json5 文件？', expected_domains: ['application-models'] },
  
  // api_usage (6 题)
  { id: 'api-01', type: 'api_usage', question: '@State 装饰器的用法和参数是什么？', expected_domains: ['ui'] },
  { id: 'api-02', type: 'api_usage', question: 'Navigation 组件的 API 接口有哪些？', expected_domains: ['ui'] },
  { id: 'api-03', type: 'api_usage', question: 'http 模块的 request 方法怎么用？', expected_domains: ['network'] },
  { id: 'api-04', type: 'api_usage', question: 'Column 布局组件支持哪些属性？', expected_domains: ['ui'] },
  { id: 'api-05', type: 'api_usage', question: 'router 模块的 pushUrl 方法参数是什么？', expected_domains: ['ui'] },
  { id: 'api-06', type: 'api_usage', question: 'AlertDialog 警告弹窗有哪些配置选项？', expected_domains: ['ui'] },
  
  // concept (5 题)
  { id: 'con-01', type: 'concept', question: '什么是 Ability？', expected_domains: ['application-models'] },
  { id: 'con-02', type: 'concept', question: 'ArkUI 是什么？', expected_domains: ['ui'] },
  { id: 'con-03', type: 'concept', question: '什么是 HAP 包？', expected_domains: ['application-models'] },
  { id: 'con-04', type: 'concept', question: '状态管理的概念是什么？', expected_domains: ['ui'] },
  { id: 'con-05', type: 'concept', question: '什么是 Stage 模型？', expected_domains: ['application-models'] },
  
  // compare (5 题)
  { id: 'cmp-01', type: 'compare', question: 'Navigation 和 router 有什么区别？', expected_domains: ['ui'] },
  { id: 'cmp-02', type: 'compare', question: 'Stage 模型和 FA 模型的差异是什么？', expected_domains: ['application-models'] },
  { id: 'cmp-03', type: 'compare', question: '@State 和@Prop 的区别是什么？', expected_domains: ['ui'] },
  { id: 'cmp-04', type: 'compare', question: 'Column 和 Row 布局有什么不同？', expected_domains: ['ui'] },
  { id: 'cmp-05', type: 'compare', question: 'AlertDialog 和 CustomDialog 的区别？', expected_domains: ['ui'] },
  
  // example (4 题)
  { id: 'ex-01', type: 'example', question: '有无状态管理的示例代码？', expected_domains: ['ui'] },
  { id: 'ex-02', type: 'example', question: 'HTTP 请求的示例代码', expected_domains: ['network'] },
  { id: 'ex-03', type: 'example', question: '页面跳转的示例', expected_domains: ['ui'] },
  { id: 'ex-04', type: 'example', question: '动画效果的示例代码', expected_domains: ['ui'] },
  
  // error (4 题)
  { id: 'err-01', type: 'error', question: '页面路由不生效怎么办？', expected_domains: ['ui'] },
  { id: 'err-02', type: 'error', question: 'HTTP 请求失败的原因有哪些？', expected_domains: ['network'] },
  { id: 'err-03', type: 'error', question: '状态管理不更新的问题怎么解决？', expected_domains: ['ui'] },
  { id: 'err-04', type: 'error', question: '自定义组件渲染异常的排查方法', expected_domains: ['ui'] },
];

/**
 * 调用 LLM
 */
function callLLM(prompt) {
  try {
    const escapedPrompt = prompt.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    const command = `node scripts/llm-chat.js --prompt="${escapedPrompt}"`;
    const output = execSync(command, { encoding: 'utf-8', timeout: 30000 });
    return output.trim();
  } catch (error) {
    console.error(`  ⚠️  LLM 调用失败：${error.message}`);
    return null;
  }
}

/**
 * 步骤 1: 入口过滤
 */
function entryFilter(question) {
  const prompt = `
判断以下问题是否与 HarmonyOS/OpenHarmony 开发相关：

问题：${question}

相关标准：
- 包含 HarmonyOS 特有关键词（ArkUI、Ability、ArkTS 等）
- 涉及 HarmonyOS 技术栈
- 不是其他平台（Android、iOS 等）

请只回答：相关/不相关
`;
  
  const result = callLLM(prompt);
  const isRelated = result && result.includes('相关') && !result.includes('不相关');
  return { isRelated: isRelated !== false, result };
}

/**
 * 步骤 2: 领域识别
 */
function domainDetect(question) {
  const prompt = `
识别以下问题涉及的 HarmonyOS 开发领域：

问题：${question}

可用领域：
- network（网络请求、HTTP、WebSocket）
- ui（界面、组件、布局、动画）
- database（数据库、存储）
- media（视频、音频）
- application-models（Ability、应用模型）
- web（Webview、H5）
- form（卡片、小组件）
- security（安全、加密、权限）

请只返回最相关的 1 个领域名称，不要解释。
`;
  
  const result = callLLM(prompt);
  const domain = result ? result.trim().toLowerCase() : '';
  return { domain, result };
}

/**
 * 步骤 3: 文档检索
 */
function searchDocuments(domain, question) {
  const domainIndexPath = path.join(__dirname, '..', 'search_index', 'domains', domain, 'domain_index.json');
  
  if (!fs.existsSync(domainIndexPath)) {
    return { documents: [], error: `Domain ${domain} not found` };
  }
  
  const domainIndex = JSON.parse(fs.readFileSync(domainIndexPath, 'utf-8'));
  const documents = domainIndex.documents || [];
  
  // 简单关键词匹配
  const keywords = question.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  const matchedDocs = documents.filter(doc => {
    const docText = JSON.stringify(doc).toLowerCase();
    return keywords.some(kw => docText.includes(kw));
  }).slice(0, 5);
  
  return { documents: matchedDocs };
}

/**
 * 步骤 4: 答案校验
 */
function validateAnswer(question, documents) {
  const docSummary = documents.map((doc, i) => 
    `${i + 1}. ${doc.title || doc.doc_id} - ${doc.summary || ''}`
  ).join('\n');
  
  const prompt = `
验证检索结果是否正确回答了问题：

问题：${question}

检索到的文档：
${docSummary || '无相关文档'}

请评估：
1. 是否覆盖了问题的所有方面？（是/否）
2. 是否有可引用的代码示例？（是/否）
3. 置信度（0-1）是多少？

请只返回：是/否，置信度：0.x
`;
  
  const result = callLLM(prompt);
  const isValid = result && (result.includes('是') && !result.includes('否'));
  const confidenceMatch = result?.match(/置信度 [::]\s*(0\.\d+)/);
  const confidence = confidenceMatch ? parseFloat(confidenceMatch[1]) : 0.5;
  
  return { isValid: isValid !== false, confidence, result };
}

/**
 * 执行单个测试
 */
function runTest(testQuestion) {
  console.log(`\n测试 ${testQuestion.id} [${testQuestion.type}]: ${testQuestion.question}`);
  
  // 步骤 1: 入口过滤
  const entryResult = entryFilter(testQuestion.question);
  console.log(`  步骤 1: 入口过滤 - ${entryResult.isRelated ? '✓ 相关' : '✗ 不相关'}`);
  
  if (!entryResult.isRelated) {
    return { success: false, reason: 'Entry filter failed' };
  }
  
  // 步骤 2: 领域识别
  const domainResult = domainDetect(testQuestion.question);
  console.log(`  步骤 2: 领域识别 - ${domainResult.domain || '未识别'}`);
  
  const domainMatch = testQuestion.expected_domains.includes(domainResult.domain);
  console.log(`  领域匹配：${domainMatch ? '✓' : '✗'} (期望：${testQuestion.expected_domains.join(', ')})`);
  
  // 步骤 3: 文档检索
  const searchResult = searchDocuments(domainResult.domain, testQuestion.question);
  console.log(`  步骤 3: 文档检索 - ${searchResult.documents.length} 篇文档`);
  
  // 步骤 4: 答案校验
  const validateResult = validateAnswer(testQuestion.question, searchResult.documents);
  console.log(`  步骤 4: 答案校验 - ${validateResult.isValid ? '✓ 有效' : '✗ 无效'} (置信度：${validateResult.confidence})`);
  
  // 综合评估
  const success = domainMatch && validateResult.isValid && validateResult.confidence >= 0.5;
  console.log(`  结果：${success ? '✅ 通过' : '❌ 失败'}`);
  
  return { success, domain: domainResult.domain, confidence: validateResult.confidence };
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 开始运行 Skill + LLM 测试...\n');
  console.log(`测试问题数：${TEST_QUESTIONS.length}\n`);
  
  // 检查 LLM 配置
  const configPath = path.join(__dirname, 'llm-config.json');
  if (!fs.existsSync(configPath)) {
    console.error('❌ 错误：llm-config.json 配置文件不存在');
    console.error('请创建配置文件：scripts/llm-config.json');
    console.error('参考示例：');
    console.error(JSON.stringify({
      provider: 'deepseek',
      apiKey: 'sk-your-api-key',
      model: 'deepseek-chat'
    }, null, 2));
    process.exit(1);
  }
  
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  if (!config.apiKey || config.apiKey === 'sk-your-api-key-here') {
    console.error('❌ 错误：请在 llm-config.json 中配置 API Key');
    process.exit(1);
  }
  
  const results = [];
  
  for (const question of TEST_QUESTIONS) {
    const result = runTest(question);
    results.push({ ...question, ...result });
  }
  
  // 生成报告
  const passed = results.filter(r => r.success).length;
  const failed = results.length - passed;
  const passRate = passed / results.length;
  
  const resultsByType = {};
  for (const result of results) {
    if (!resultsByType[result.type]) {
      resultsByType[result.type] = { total: 0, passed: 0 };
    }
    resultsByType[result.type].total++;
    if (result.success) {
      resultsByType[result.type].passed++;
    }
  }
  
  // 输出总结
  console.log('\n' + '='.repeat(60));
  console.log('测试总结');
  console.log('='.repeat(60));
  console.log(`总问题数：${results.length}`);
  console.log(`通过：${passed} (${(passRate * 100).toFixed(1)}%)`);
  console.log(`失败：${failed} (${((1 - passRate) * 100).toFixed(1)}%)`);
  console.log('');
  console.log('按类型统计:');
  for (const [type, data] of Object.entries(resultsByType)) {
    console.log(`  ${type}: ${data.passed}/${data.total} (${(data.passed / data.total * 100).toFixed(1)}%)`);
  }
  console.log('='.repeat(60));
  
  // 保存报告
  const report = {
    timestamp: new Date().toISOString(),
    total: results.length,
    passed,
    failed,
    pass_rate: passRate,
    results_by_type: resultsByType,
    results,
  };
  
  const reportPath = path.join(__dirname, '..', 'test', 'skill-llm-test-report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  
  console.log(`\n📊 测试报告已保存至：${reportPath}`);
  
  if (passRate < 0.7) {
    console.log('\n❌ 测试失败：通过率低于 70%');
    process.exit(1);
  }
  
  console.log('\n✅ 测试完成！');
}

main();
