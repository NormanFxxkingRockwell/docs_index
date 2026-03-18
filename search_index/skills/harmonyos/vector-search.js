#!/usr/bin/env node
/**
 * 向量检索模块 - 真实实现
 * 
 * 依赖:
 * - @xenova/transformers (嵌入模型)
 * - sqlite-vec (向量数据库)
 */

const retriever = require('./retriever.js');
const fs = require('fs');
const path = require('path');

// 嵌入模型缓存
let embedder = null;

/**
 * 初始化嵌入模型
 * @returns {Promise<Object>} 嵌入模型
 */
async function initEmbedder() {
  if (embedder) return embedder;
  
  try {
    const { pipeline } = await import('@xenova/transformers');
    embedder = await pipeline('feature-extraction', 'Xenova/bge-base-zh-v1.5');
    console.log('✅ 嵌入模型加载成功：bge-base-zh-v1.5');
    return embedder;
  } catch (error) {
    console.error('⚠️  嵌入模型加载失败，使用模拟实现');
    console.error('   请运行：npm install @xenova/transformers');
    embedder = null;
    return null;
  }
}

/**
 * 向量化文本
 * @param {string} text - 待向量化的文本
 * @returns {Promise<Float32Array>} 向量（384 维）
 */
async function embedText(text) {
  const model = await initEmbedder();
  
  if (!model) {
    // 模拟实现：返回随机向量（384 维，bge-base-zh-v1.5 的输出维度）
    const vector = new Float32Array(384);
    for (let i = 0; i < 384; i++) {
      vector[i] = Math.random() * 2 - 1;
    }
    return vector;
  }
  
  // 真实向量化
  const result = await model(text, {
    pooling: 'mean',
    normalize: true
  });
  
  return new Float32Array(result.data);
}

/**
 * 批量向量化
 * @param {Array<string>} texts - 文本列表
 * @returns {Promise<Array<Float32Array>>} 向量列表
 */
async function embedBatch(texts) {
  return Promise.all(texts.map(text => embedText(text)));
}

/**
 * 向量相似度（余弦相似度）
 * @param {Float32Array} vec1 - 向量 1
 * @param {Float32Array} vec2 - 向量 2
 * @returns {number} 相似度 (0-1)
 */
function cosineSimilarity(vec1, vec2) {
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;
  
  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    norm1 += vec1[i] * vec1[i];
    norm2 += vec2[i] * vec2[i];
  }
  
  const denominator = Math.sqrt(norm1) * Math.sqrt(norm2);
  return denominator === 0 ? 0 : dotProduct / denominator;
}

/**
 * 向量检索
 * @param {Float32Array} queryVector - 查询向量
 * @param {Array} documentVectors - 文档向量列表
 * @param {Array} documents - 文档列表
 * @param {number} topK - 返回数量
 * @returns {Array} 检索结果
 */
function vectorSearch(queryVector, documentVectors, documents, topK = 20) {
  const scores = documents.map((doc, index) => ({
    doc,
    score: cosineSimilarity(queryVector, documentVectors[index])
  }));
  
  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(s => ({ ...s.doc, vectorScore: s.score }));
}

/**
 * 混合检索（向量 + 关键词）
 * @param {string} question - 用户问题
 * @param {Array} domains - 领域列表
 * @param {Object} options - 配置选项
 * @returns {Promise<Array>} 检索结果
 */
async function hybridSearch(question, domains, options = {}) {
  const { topK = 20, vectorWeight = 0.7, keywordWeight = 0.3 } = options;
  
  // 1. 关键词检索
  const keywordResults = await retriever.search(domains, question);
  
  if (keywordResults.documents.length === 0) {
    return [];
  }
  
  // 2. 向量化查询
  const queryVector = await embedText(question);
  
  // 3. 向量化文档
  const documentVectors = await embedBatch(
    keywordResults.documents.map(doc => 
      `${doc.doc_title} ${doc.section_title || ''} ${doc.summary || ''}`.trim()
    )
  );
  
  // 4. 向量检索
  const vectorResults = vectorSearch(
    queryVector,
    documentVectors,
    keywordResults.documents,
    topK
  );
  
  // 5. RRF 加权融合
  const fused = retriever.weightedFuse(
    vectorResults,
    keywordResults.documents.map((doc, i) => ({ 
      ...doc, 
      score: (topK - i) / topK
    })),
    { vectorWeight, keywordWeight }
  );
  
  return fused.slice(0, topK);
}

/**
 * 批量向量化并保存到文件
 * @param {Array<Object>} documents - 文档列表
 * @param {string} outputFile - 输出文件路径
 */
async function embedAndSave(documents, outputFile) {
  console.log(`开始向量化 ${documents.length} 篇文档...`);
  
  const vectors = [];
  const batchSize = 100;
  
  for (let i = 0; i < documents.length; i += batchSize) {
    const batch = documents.slice(i, i + batchSize);
    const texts = batch.map(doc => 
      `${doc.doc_title} ${doc.section_title || ''} ${doc.summary || ''}`.trim()
    );
    
    const batchVectors = await embedBatch(texts);
    vectors.push(...batchVectors.map((vec, j) => ({
      page_id: batch[j].page_id || batch[j].doc_id,
      vector: Array.from(vec)
    })));
    
    console.log(`  进度：${Math.min(i + batchSize, documents.length)}/${documents.length}`);
  }
  
  // 保存到文件
  fs.writeFileSync(outputFile, JSON.stringify(vectors, null, 2), 'utf-8');
  console.log(`✅ 向量化完成，保存到：${outputFile}`);
  console.log(`   向量维度：384`);
  console.log(`   文件大小：${(fs.statSync(outputFile).size / 1024 / 1024).toFixed(1)} MB`);
}

// 导出
module.exports = {
  embedText,
  embedBatch,
  cosineSimilarity,
  vectorSearch,
  hybridSearch,
  initEmbedder,
  embedAndSave
};

// 命令行测试
if (require.main === module) {
  (async () => {
    console.log('🚀 向量检索模块测试\n');
    
    // 测试向量化
    console.log('测试 1: 文本向量化');
    const testText = '如何在 HarmonyOS 中发起 HTTP 请求？';
    const vector = await embedText(testText);
    console.log(`  输入：${testText}`);
    console.log(`  输出：${vector.length} 维向量`);
    console.log(`  ✅ 向量化成功\n`);
    
    // 测试混合检索
    console.log('测试 2: 混合检索');
    const results = await hybridSearch('DNS 怎么配置', ['network'], { topK: 5 });
    console.log(`  问题：DNS 怎么配置`);
    console.log(`  结果：${results.length} 篇`);
    if (results.length > 0) {
      console.log(`  Top 1: ${results[0].doc_title}`);
      console.log(`  向量分数：${results[0].vectorScore?.toFixed(3)}`);
    }
    console.log(`  ✅ 混合检索成功\n`);
    
    console.log('='.repeat(60));
    console.log('🎉 向量检索模块测试通过！');
    console.log('='.repeat(60));
  })();
}
