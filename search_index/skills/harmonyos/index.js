#!/usr/bin/env node
/**
 * HarmonyOS 文档检索 - 统一入口
 * 
 * 功能:
 * - 关键词检索
 * - 向量检索（sqlite-vec）
 * - 混合检索（RRF 融合）
 * - MMR 多样性重排
 * 
 * 使用方式:
 * const search = require('./harmonyos');
 * const results = await search('DNS 怎么配置', ['network']);
 */

const path = require('path');
const fs = require('fs');

// 延迟加载（避免循环依赖）
let retriever = null;
let vectorDB = null;
let embedder = null;

/**
 * 懒加载 retriever 模块
 */
function getRetriever() {
  if (!retriever) {
    retriever = require('./retriever.js');
  }
  return retriever;
}

/**
 * 懒加载 vector-db 模块
 */
function getVectorDB() {
  if (!vectorDB) {
    vectorDB = require('./vector-db.js');
  }
  return vectorDB;
}

/**
 * 懒加载 embedder
 */
async function getEmbedder() {
  if (!embedder) {
    const vectorSearch = require('./vector-search.js');
    embedder = { embedText: vectorSearch.embedText };
  }
  return embedder;
}

/**
 * LLM 语义重排（新增）
 * 使用大模型理解问题语义，重排检索结果
 */
async function llmRerank(question, documents, topK = 10) {
  try {
    const embedder = await getEmbedder();
    if (!embedder) return documents.slice(0, topK);
    
    // 向量化问题
    const queryVector = await embedder.embedText(question);
    
    // 向量化文档标题 + 摘要
    const docTexts = documents.map(doc => 
      `${doc.doc_title} ${doc.summary || ''} ${doc.section_title || ''}`.trim()
    );
    const docVectors = await Promise.all(docTexts.map(text => embedder.embedText(text)));
    
    // 计算余弦相似度
    const scored = documents.map((doc, i) => {
      let dotProduct = 0, norm1 = 0, norm2 = 0;
      for (let j = 0; j < queryVector.length; j++) {
        dotProduct += queryVector[j] * docVectors[i][j];
        norm1 += queryVector[j] * queryVector[j];
        norm2 += docVectors[i][j] * docVectors[i][j];
      }
      const similarity = norm1 > 0 && norm2 > 0 ? dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2)) : 0;
      return { ...doc, semanticScore: similarity };
    });
    
    // 按语义相似度排序
    return scored.sort((a, b) => b.semanticScore - a.semanticScore).slice(0, topK);
  } catch (error) {
    console.error('⚠️  LLM 语义重排失败:', error.message);
    return documents.slice(0, topK);
  }
}

/**
 * 混合检索（向量 + 关键词）
 * @param {string} question - 用户问题
 * @param {Array<string>} domains - 领域列表
 * @param {Object} options - 配置选项
 * @returns {Promise<Array>} 检索结果
 */
async function search(question, domains = [], options = {}) {
  const {
    topK = 10,
    useVector = true,
    useKeyword = true,
    vectorWeight = 0.7,
    keywordWeight = 0.3,
    useMMR = true,
    useLLM = true,  // 新增：LLM 语义重排
    mmrLambda = 0.5
  } = options;
  
  const results = {
    question,
    domains,
    documents: [],
    stats: {}
  };
  
  // 1. 关键词检索
  let keywordResults = [];
  if (useKeyword) {
    const retriever = getRetriever();
    const keywordRes = await retriever.search(domains, question);
    keywordResults = keywordRes.documents;
    results.stats.keywordCount = keywordResults.length;
  }
  
  // 2. 向量检索
  let vectorResults = [];
  if (useVector) {
    try {
      const vectorDB = getVectorDB();
      const embedder = await getEmbedder();
      
      // 向量化查询
      const queryVector = await embedder.embedText(question);
      
      // 向量检索
      const db = vectorDB.initDB();
      vectorResults = vectorDB.hybridSearch(db, domains, queryVector, topK * 2);
      db.close();
      
      results.stats.vectorCount = vectorResults.length;
    } catch (error) {
      console.error('⚠️  向量检索失败:', error.message);
      results.stats.vectorError = error.message;
    }
  }
  
  // 3. 混合融合
  if (useVector && useKeyword && vectorResults.length > 0 && keywordResults.length > 0) {
    const retriever = getRetriever();
    const fused = retriever.weightedFuse(
      vectorResults.map(doc => ({ ...doc, score: doc.vectorScore })),
      keywordResults.map((doc, i) => ({ ...doc, score: (topK - i) / topK })),
      { vectorWeight, keywordWeight }
    );
    results.documents = fused.slice(0, topK);
    results.stats.fusionMethod = 'weighted';
  } else if (useVector && vectorResults.length > 0) {
    results.documents = vectorResults.slice(0, topK);
    results.stats.fusionMethod = 'vector-only';
  } else if (useKeyword && keywordResults.length > 0) {
    results.documents = keywordResults.slice(0, topK);
    results.stats.fusionMethod = 'keyword-only';
  }
  
  // 4. LLM 语义重排（新增）
  if (useLLM && results.documents.length > 0) {
    results.documents = await llmRerank(question, results.documents, topK * 2);
    results.stats.rerankMethod = 'llm-semantic';
  }
  
  // 5. MMR 多样性重排
  if (useMMR && results.documents.length > 1) {
    const retriever = getRetriever();
    results.documents = retriever.mmrRerank(results.documents, question, {
      lambda: mmrLambda,
      topK
    });
    results.stats.rerankMethod = 'mmr';
  }
  
  results.stats.finalCount = results.documents.length;
  return results;
}

/**
 * 纯关键词检索
 */
async function keywordSearch(question, domains = [], topK = 10) {
  const retriever = getRetriever();
  const result = await retriever.search(domains, question);
  return result.documents.slice(0, topK);
}

/**
 * 纯向量检索
 */
async function vectorSearch(question, domains = [], topK = 10) {
  const vectorDB = getVectorDB();
  const embedder = await getEmbedder();
  
  const queryVector = await embedder.embedText(question);
  const db = vectorDB.initDB();
  const results = vectorDB.hybridSearch(db, domains, queryVector, topK);
  db.close();
  
  return results;
}

// 导出
module.exports = {
  search,
  keywordSearch,
  vectorSearch,
  // 导出底层工具
  getRetriever,
  getVectorDB,
  getEmbedder
};

// 命令行测试
if (require.main === module) {
  (async () => {
    console.log('🧪 HarmonyOS 检索系统测试\n');
    
    const testQuestions = [
      { q: 'DNS 怎么配置', domains: ['network'] },
      { q: '如何发起 HTTP 请求', domains: ['network'] },
      { q: '动效怎么写', domains: ['ui'] }
    ];
    
    for (const { q, domains } of testQuestions) {
      console.log(`问题：${q}`);
      
      const startTime = Date.now();
      const results = await search(q, domains, { topK: 3 });
      const duration = Date.now() - startTime;
      
      console.log(`耗时：${duration}ms`);
      console.log(`检索到：${results.documents.length} 篇`);
      console.log(`Top 1: ${results.documents[0]?.doc_title || 'N/A'}\n`);
    }
    
    console.log('✅ 测试完成');
  })();
}
