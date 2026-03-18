#!/usr/bin/env node
/**
 * HarmonyOS 文档检索 Skill - 轻量封装
 * 
 * 使用方式:
 * const search = require('./harmonyos');
 * const results = await search('DNS 怎么配置');  // 自动识别领域
 */

const { search, searchInDomains, keywordSearch } = require('../../../lib/index.js');

module.exports = {
  search,              // 智能检索（推荐）
  searchInDomains,     // 指定领域（高级）
  keywordSearch        // 关键词检索
};

// 命令行测试
if (require.main === module) {
  const question = process.argv[2];
  if (!question) {
    console.error('Usage: node index.js "你的问题"');
    console.error('Example: node index.js "DNS 怎么配置"');
    process.exit(1);
  }
  
  console.log(`检索问题：${question}`);
  search(question).then(result => {
    console.log(`\n识别领域：${result.domains.join(', ')}`);
    console.log(`检索到 ${result.documents.length} 篇文档\n`);
    result.documents.slice(0, 5).forEach((doc, i) => {
      console.log(`${i + 1}. ${doc.doc_title}`);
    });
  });
}
