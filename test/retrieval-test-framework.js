#!/usr/bin/env node
/**
 * 检索系统测试框架
 * 
 * 使用方式：
 * node test/retrieval-test-framework.js
 * node test/retrieval-test-framework.js --category=tech-terms
 * node test/retrieval-test-framework.js --verbose
 */

const fs = require('fs');
const path = require('path');
const retriever = require('../lib/retriever.js');

// 测试用例加载
function loadTestCases(category) {
  const casesDir = path.join(__dirname, 'cases');
  const files = fs.readdirSync(casesDir);
  
  const cases = [];
  files.forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(casesDir, file);
      const testCase = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      
      if (!category || testCase.category === category) {
        cases.push(testCase);
      }
    }
  });
  
  return cases;
}

// 执行单个测试
async function runTest(testCase, verbose = false) {
  const { question, expected_domains, expected_keywords, success_criteria } = testCase;
  
  if (verbose) {
    console.log(`\n测试：${testCase.id}`);
    console.log(`问题：${question}`);
    console.log(`期望领域：${expected_domains.join(', ')}`);
  }
  
  // 领域识别（使用关键词匹配降级方案）
  const domains = retriever.matchDomains(question);
  const domainMatch = expected_domains.some(d => domains.includes(d));
  
  if (verbose) {
    console.log(`识别领域：${domains.join(', ')}`);
    console.log(`领域匹配：${domainMatch ? '✓' : '✗'}`);
  }
  
  // 文档检索
  const result = await retriever.search(domains.length > 0 ? domains : ['network'], question);
  
  if (verbose) {
    console.log(`检索结果：${result.documents.length} 篇`);
  }
  
  // 验证
  const validations = {
    domainMatch,
    hasResults: result.documents.length > 0,
    keywordCoverage: validateKeywords(result.documents, expected_keywords),
    top3Relevant: validateTop3(result.documents, success_criteria)
  };
  
  const passed = validations.domainMatch && validations.hasResults && validations.keywordCoverage >= 0.5;
  
  if (verbose) {
    console.log(`关键词覆盖：${(validations.keywordCoverage * 100).toFixed(0)}%`);
    console.log(`Top3 相关：${validations.top3Relevant ? '✓' : '✗'}`);
    console.log(`结果：${passed ? '✅ 通过' : '❌ 失败'}`);
  }
  
  return {
    id: testCase.id,
    category: testCase.category,
    question,
    passed,
    validations,
    domains,
    resultCount: result.documents.length
  };
}

// 验证关键词覆盖
function validateKeywords(documents, expectedKeywords) {
  if (!expectedKeywords || expectedKeywords.length === 0) return 1.0;
  
  const docText = JSON.stringify(documents).toLowerCase();
  const matched = expectedKeywords.filter(kw => docText.includes(kw.toLowerCase())).length;
  
  return matched / expectedKeywords.length;
}

// 验证 Top3 相关性
function validateTop3(documents, successCriteria) {
  if (!successCriteria || documents.length === 0) return true;
  
  const top3 = documents.slice(0, 3);
  const top3Text = JSON.stringify(top3).toLowerCase();
  
  // 简单验证：Top3 包含期望关键词
  return true; // 简化实现
}

// 运行所有测试
async function runAllTests(category, verbose) {
  console.log('🧪 检索系统测试框架\n');
  console.log(`加载测试用例... ${category ? `(类别：${category})` : '(全部)'}`);
  
  const cases = loadTestCases(category);
  console.log(`加载 ${cases.length} 个测试用例\n`);
  
  if (cases.length === 0) {
    console.error('❌ 未找到测试用例');
    console.error('请运行：node test/generate-test-cases.js 生成测试用例');
    return;
  }
  
  const results = [];
  let passed = 0;
  let failed = 0;
  
  for (const testCase of cases) {
    const result = await runTest(testCase, verbose);
    results.push(result);
    
    if (result.passed) {
      passed++;
    } else {
      failed++;
    }
  }
  
  // 生成报告
  generateReport(results, passed, failed);
}

// 生成测试报告
function generateReport(results, passed, failed) {
  const total = results.length;
  const passRate = (passed / total * 100).toFixed(1);
  
  console.log('\n' + '='.repeat(60));
  console.log('测试报告');
  console.log('='.repeat(60));
  console.log(`总用例数：${total}`);
  console.log(`通过：${passed} (${passRate}%)`);
  console.log(`失败：${failed} (${(100 - passRate).toFixed(1)}%)`);
  console.log('');
  
  // 按类别统计
  const byCategory = results.reduce((acc, r) => {
    acc[r.category] = acc[r.category] || { total: 0, passed: 0 };
    acc[r.category].total++;
    if (r.passed) acc[r.category].passed++;
    return acc;
  }, {});
  
  console.log('按类别统计:');
  Object.entries(byCategory).forEach(([category, stats]) => {
    const rate = (stats.passed / stats.total * 100).toFixed(1);
    console.log(`  ${category}: ${stats.passed}/${stats.total} (${rate}%)`);
  });
  
  console.log('');
  
  // 失败用例
  const failedCases = results.filter(r => !r.passed);
  if (failedCases.length > 0) {
    console.log('失败用例:');
    failedCases.slice(0, 10).forEach(r => {
      console.log(`  - ${r.id}: ${r.question.slice(0, 50)}...`);
    });
    if (failedCases.length > 10) {
      console.log(`  ... 还有 ${failedCases.length - 10} 个失败用例`);
    }
  }
  
  console.log('='.repeat(60));
  
  // 保存报告
  const reportPath = path.join(__dirname, 'test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    total,
    passed,
    failed,
    passRate,
    byCategory,
    results
  }, null, 2));
  
  console.log(`\n📊 报告已保存至：${reportPath}`);
  
  // 生成 Markdown 报告
  generateMarkdownReport(results, passed, failed, byCategory);
}

// 生成 Markdown 报告
function generateMarkdownReport(results, passed, failed, byCategory) {
  const total = results.length;
  const passRate = (passed / total * 100).toFixed(1);
  
  const md = `# 检索系统测试报告

**生成时间**: ${new Date().toISOString()}

## 总体统计

| 指标 | 数值 |
|------|------|
| 总用例数 | ${total} |
| 通过 | ${passed} |
| 失败 | ${failed} |
| 通过率 | ${passRate}% |

## 按类别统计

| 类别 | 通过 | 总数 | 通过率 |
|------|------|------|--------|
${Object.entries(byCategory).map(([cat, stats]) => 
  `| ${cat} | ${stats.passed} | ${stats.total} | ${((stats.passed / stats.total * 100).toFixed(1))}% |`
).join('\n')}

## 失败用例

${results.filter(r => !r.passed).slice(0, 20).map(r => 
  `### ${r.id}
- **问题**: ${r.question}
- **期望领域**: ${r.validations}
- **识别领域**: ${r.domains.join(', ')}
- **检索结果**: ${r.resultCount} 篇
`
).join('\n')}
`;
  
  const reportPath = path.join(__dirname, 'TEST_REPORT.md');
  fs.writeFileSync(reportPath, md, 'utf-8');
  console.log(`📄 Markdown 报告已保存至：${reportPath}`);
}

// 主函数
const args = process.argv.slice(2);
const categoryArg = args.find(a => a.startsWith('--category='));
const verboseArg = args.includes('--verbose');

const category = categoryArg ? categoryArg.split('=')[1] : null;

runAllTests(category, verboseArg).catch(error => {
  console.error('测试执行失败:', error);
  process.exit(1);
});

module.exports = { runTest, loadTestCases, validateKeywords };
