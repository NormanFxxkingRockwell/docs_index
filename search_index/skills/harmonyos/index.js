#!/usr/bin/env node
/**
 * HarmonyOS 文档检索 Skill - 轻量封装
 * 
 * 使用方式:
 * const search = require('./harmonyos');
 * const results = await search('DNS 怎么配置', ['network']);
 */

const { search, keywordSearch, vectorSearch } = require('../../lib/index.js');

module.exports = {
  search,
  keywordSearch,
  vectorSearch
};

// 命令行测试
if (require.main === module) {
  const question = process.argv[2];
  if (!question) {
    console.error('Usage: node index.js "你的问题"');
    process.exit(1);
  }
  
  search(question, ['network']).then(result => {
    console.log(`检索到 ${result.documents.length} 篇文档`);
    result.documents.slice(0, 5).forEach((doc, i) => {
      console.log(`${i + 1}. ${doc.doc_title}`);
    });
  });
}
