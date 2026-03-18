#!/usr/bin/env node
/**
 * 向量数据库模块 - 基于 better-sqlite3
 * 
 * 注意：sqlite-vec 加载有问题，暂时使用简单向量检索
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, '../../vectors/vectors.db');

/**
 * 初始化数据库
 */
function initDB() {
  const dbDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  
  const db = new Database(DB_PATH);
  console.log('✅ 数据库连接成功');
  
  // sqlite-vec 加载有问题，暂时不使用
  // try {
  //   db.loadExtension(require('sqlite-vec').loadablePath);
  //   console.log('✅ sqlite-vec 加载成功');
  // } catch (error) {
  //   console.log('⚠️  sqlite-vec 未加载，使用简单检索');
  // }
  
  return db;
}

/**
 * 创建向量表
 */
function createVectorTable(db, domain) {
  const tableName = `vectors_${domain.replace(/-/g, '_')}`;
  
  db.exec(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      page_id TEXT PRIMARY KEY,
      doc_id TEXT,
      doc_title TEXT,
      section_title TEXT,
      summary TEXT,
      path TEXT,
      embedding BLOB
    )
  `);
  
  return tableName;
}

/**
 * 插入向量数据
 */
function insertVectors(db, tableName, vectors) {
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO ${tableName} 
    (page_id, doc_id, doc_title, section_title, summary, path, embedding)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  
  const insertMany = db.transaction((items) => {
    for (const item of items) {
      const embedding = new Float32Array(item.vector);
      stmt.run(
        item.page_id,
        item.doc_id || '',
        item.doc_title || '',
        item.section_title || '',
        item.summary || '',
        item.path || '',
        embedding
      );
    }
  });
  
  const batchSize = 1000;
  let inserted = 0;
  
  for (let i = 0; i < vectors.length; i += batchSize) {
    const batch = vectors.slice(i, i + batchSize);
    insertMany(batch);
    inserted += batch.length;
  }
  
  return inserted;
}

/**
 * 简单向量检索（不使用 sqlite-vec）
 * 加载所有向量到内存并计算余弦相似度
 */
function vectorSearch(db, tableName, queryVector, topK = 10) {
  // 获取所有向量
  const rows = db.prepare(`SELECT page_id, doc_id, doc_title, section_title, summary, path, embedding FROM ${tableName}`).all();
  
  // 计算余弦相似度
  const scores = rows.map(row => {
    const docVector = new Float32Array(row.embedding);
    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;
    
    for (let i = 0; i < queryVector.length; i++) {
      dotProduct += queryVector[i] * docVector[i];
      norm1 += queryVector[i] * queryVector[i];
      norm2 += docVector[i] * docVector[i];
    }
    
    const similarity = norm1 > 0 && norm2 > 0 ? dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2)) : 0;
    
    return {
      page_id: row.page_id,
      doc_id: row.doc_id,
      doc_title: row.doc_title,
      section_title: row.section_title,
      summary: row.summary,
      path: row.path,
      vectorScore: similarity
    };
  });
  
  // 排序并返回 TopK
  return scores
    .sort((a, b) => b.vectorScore - a.vectorScore)
    .slice(0, topK);
}

/**
 * 混合检索
 */
function hybridSearch(db, domains, queryVector, topK = 10) {
  const allResults = [];
  
  for (const domain of domains) {
    const tableName = `vectors_${domain.replace(/-/g, '_')}`;
    
    try {
      const results = vectorSearch(db, tableName, queryVector, topK * 2);
      allResults.push(...results);
    } catch (error) {
      console.error(`⚠️  ${domain} 检索失败:`, error.message);
    }
  }
  
  return allResults
    .sort((a, b) => b.vectorScore - a.vectorScore)
    .slice(0, topK);
}

// 导出
module.exports = {
  initDB,
  createVectorTable,
  insertVectors,
  vectorSearch,
  hybridSearch
};

// 命令行工具
if (require.main === module) {
  console.log('🚀 向量数据库测试\n');
  
  const db = initDB();
  
  // 测试检索
  const testVector = new Float32Array(384).fill(0.5);
  const results = vectorSearch(db, 'vectors_network', testVector, 5);
  
  console.log('测试结果:');
  results.forEach((r, i) => {
    console.log(`${i + 1}. ${r.doc_title} (${r.vectorScore.toFixed(3)})`);
  });
  
  db.close();
}
