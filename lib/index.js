/**
 * HarmonyOS 文档检索 - 统一入口
 */

const retriever = require('./retriever.js');
const vectorDB = require('./vector-db.js');
const vectorSearch = require('./vector-search.js');

module.exports = {
  search: retriever.search,
  keywordSearch: retriever.keywordSearch,
  vectorSearch: vectorSearch.search,
  // 导出底层工具
  retriever,
  vectorDB,
  vectorSearch
};
