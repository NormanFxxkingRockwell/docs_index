#!/usr/bin/env node
/**
 * 检索系统性能基准测试
 * 
 * 使用方式：
 * node test/benchmark.js
 */

const retriever = require('../search_index/skills/harmonyos/retriever.js');
const fs = require('fs');
const path = require('path');

console.log('🚀 检索系统性能基准测试\n');

// 测试问题
const testQuestions = [
  'DNS 鸿蒙上接口怎么适配',
  '鸿蒙上动效怎么写',
  '如何在 HarmonyOS 中发起 HTTP 请求？',
  '@ohos.net.http 模块怎么用？',
  'Ability 生命周期是什么？'
];

// 性能指标
const metrics = {
  totalTime: 0,
  avgTime: 0,
  minTime: Infinity,
  maxTime: 0,
  totalResults: 0
};

console.log(`测试问题数：${testQuestions.length}\n`);
console.log('='.repeat(70));

// 执行测试
(async () => {
  for (let i = 0; i < testQuestions.length; i++) {
    const question = testQuestions[i];
    
    // 计时
    const startTime = Date.now();
    
    // 执行检索
    const result = await retriever.search(['network', 'ui', 'application-models'], question);
    
    // 计算时间
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    // 更新指标
    metrics.totalTime += duration;
    metrics.minTime = Math.min(metrics.minTime, duration);
    metrics.maxTime = Math.max(metrics.maxTime, duration);
    metrics.totalResults += result.documents.length;
    
    console.log(`问题 ${i + 1}/${testQuestions.length}:`);
    console.log(`  问题：${question}`);
    console.log(`  耗时：${duration}ms`);
    console.log(`  结果：${result.documents.length} 篇`);
    console.log('');
  }
  
  // 计算平均
  metrics.avgTime = metrics.totalTime / testQuestions.length;
  
  // 输出报告
  console.log('='.repeat(70));
  console.log('📊 性能报告\n');
  
  console.log('响应时间:');
  console.log(`  平均：${metrics.avgTime.toFixed(2)}ms`);
  console.log(`  最小：${metrics.minTime}ms`);
  console.log(`  最大：${metrics.maxTime}ms`);
  console.log(`  总计：${metrics.totalTime}ms\n`);
  
  console.log('检索结果:');
  console.log(`  总结果数：${metrics.totalResults}`);
  console.log(`  平均每次：${(metrics.totalResults / testQuestions.length).toFixed(1)} 篇\n`);
  
  console.log('性能评估:');
  const rating = metrics.avgTime < 100 ? '优秀' : metrics.avgTime < 500 ? '良好' : '一般';
  console.log(`  评级：${rating} ⭐⭐⭐⭐\n`);
  
  console.log('优化建议:');
  if (metrics.avgTime > 500) {
    console.log('  - 考虑添加缓存机制');
    console.log('  - 优化关键词匹配算法');
    console.log('  - 减少检索领域数量');
  } else if (metrics.avgTime > 100) {
    console.log('  - 性能良好，可考虑添加缓存进一步提升');
  } else {
    console.log('  - 性能优秀，无需优化');
  }
  
  console.log('\n' + '='.repeat(70));
  
  // 保存报告
  const report = {
    timestamp: new Date().toISOString(),
    questions: testQuestions.length,
    metrics: {
      avgTime: metrics.avgTime,
      minTime: metrics.minTime,
      maxTime: metrics.maxTime,
      totalTime: metrics.totalTime,
      totalResults: metrics.totalResults
    },
    rating
  };
  
  const reportPath = path.join(__dirname, 'benchmark-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\n📄 报告已保存至：${reportPath}\n`);
})();
