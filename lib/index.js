/**
 * HarmonyOS 文档检索 - 统一入口
 * 
 * 使用方式:
 * const search = require('./lib');
 * const results = await search('DNS 怎么配置');  // 自动识别领域
 */

const retriever = require('./retriever.js');

/**
 * 智能检索（自动识别领域）
 * @param {string} question - 用户问题
 * @param {Object} options - 配置选项
 * @returns {Promise<Object>} 检索结果
 */
async function search(question, options = {}) {
  // 1. 自动识别领域
  const domains = retriever.matchDomains(question);
  
  // 2. 执行检索
  const result = await retriever.search(domains, question, options);
  
  return {
    question,
    domains,
    ...result
  };
}

/**
 * 指定领域检索（高级用户）
 */
async function searchInDomains(question, domains, options = {}) {
  const result = await retriever.search(domains, question, options);
  return {
    question,
    domains,
    ...result
  };
}

/**
 * 关键词检索（不使用向量）
 */
async function keywordSearch(question, options = {}) {
  const domains = retriever.matchDomains(question);
  const result = await retriever.search(domains, question, {
    ...options,
    useVector: false,
    useKeyword: true
  });
  
  return {
    question,
    domains,
    ...result
  };
}

module.exports = {
  search,              // 智能检索（推荐）
  searchInDomains,     // 指定领域（高级）
  keywordSearch,       // 关键词检索
  retriever,           // 底层工具
  matchDomains: retriever.matchDomains  // 领域识别
};
