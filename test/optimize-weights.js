#!/usr/bin/env node
/**
 * 权重参数优化测试
 * 
 * 测试不同权重配置的效果
 */

const search = require('../search_index/skills/harmonyos/index.js');
const fs = require('fs');
const path = require('path');

// 测试用例
const testCases = [
  { q: 'DNS 怎么配置', domains: ['network'], expected: 'DNS' },
  { q: '如何发起 HTTP 请求', domains: ['network'], expected: 'HTTP' },
  { q: '动效怎么写', domains: ['ui'], expected: '动画' },
  { q: '@State 怎么用', domains: ['ui'], expected: 'State' },
  { q: 'Ability 生命周期', domains: ['application-models'], expected: 'Ability' }
];

// 权重配置
const weightConfigs = [
  { vectorWeight: 1.0, keywordWeight: 0.0, name: '纯向量' },
  { vectorWeight: 0.7, keywordWeight: 0.3, name: '70% 向量' },
  { vectorWeight: 0.5, keywordWeight: 0.5, name: '50% 向量' },
  { vectorWeight: 0.3, keywordWeight: 0.7, name: '30% 向量' },
  { vectorWeight: 0.0, keywordWeight: 1.0, name: '纯关键词' }
];

console.log('🧪 权重参数优化测试\n');
console.log(`测试用例数：${testCases.length}`);
console.log(`权重配置数：${weightConfigs.length}\n`);

(async () => {
  const results = {};
  
  for (const config of weightConfigs) {
    console.log(`\n=== ${config.name} (向量${(config.vectorWeight * 100).toFixed(0)}%) ===`);
    
    let passed = 0;
    const startTime = Date.now();
    
    for (const testCase of testCases) {
      try {
        const result = await search.search(
          testCase.q, 
          testCase.domains, 
          { 
            topK: 3, 
            useVector: config.vectorWeight > 0,
            useKeyword: config.keywordWeight > 0,
            vectorWeight: config.vectorWeight,
            keywordWeight: config.keywordWeight,
            useMMR: false
          }
        );
        
        const top1 = result.documents[0];
        const match = top1 && (
          top1.doc_title.includes(testCase.expected) ||
          (top1.summary && top1.summary.includes(testCase.expected))
        );
        
        if (match) passed++;
        
        console.log(`  ${match ? '✅' : '❌'} ${testCase.q} → ${top1?.doc_title || 'N/A'}`);
      } catch (error) {
        console.log(`  ❌ ${testCase.q} → 错误：${error.message}`);
      }
    }
    
    const duration = Date.now() - startTime;
    const accuracy = (passed / testCases.length * 100).toFixed(0);
    
    results[config.name] = {
      passed,
      total: testCases.length,
      accuracy: parseFloat(accuracy),
      duration
    };
    
    console.log(`准确率：${accuracy}% (${passed}/${testCases.length}), 耗时：${duration}ms`);
  }
  
  // 总结
  console.log('\n' + '='.repeat(60));
  console.log('📊 权重优化结果\n');
  
  const sorted = Object.entries(results)
    .sort((a, b) => b[1].accuracy - a[1].accuracy);
  
  console.log('按准确率排序:');
  sorted.forEach(([name, data], i) => {
    console.log(`${i + 1}. ${name}: ${data.accuracy}% (${data.duration}ms)`);
  });
  
  const best = sorted[0];
  console.log(`\n✅ 最佳配置：${best[0]} (准确率${best[1].accuracy}%)`);
  
  // 保存结果
  const reportPath = path.join(__dirname, 'weight-optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    testCases: testCases.length,
    configs: weightConfigs.length,
    results
  }, null, 2), 'utf-8');
  
  console.log(`\n📄 报告已保存：${reportPath}\n`);
})();
