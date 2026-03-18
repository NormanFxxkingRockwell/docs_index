#!/usr/bin/env node
/**
 * 向量数据库模块 - 基于 better-sqlite3 + sqlite-vec
 * 
 * 功能:
 * - 创建向量索引
 * - 快速向量检索（使用 sqlite-vec）
 * - 增量更新
 * 
 * 依赖:
 * - better-sqlite3@12.x
 * - sqlite-vec@0.1.7
 */

const Database = require('better-sqlite3');
const sqliteVec = require('sqlite-vec');
const path = require('path');
const fs = require('fs');

const DB_PATH = path.resolve(__dirname, '../../search_index/vectors/vectors.db');

/**
 * 初始化数据库
 * @returns {Database} 数据库连接
 */
function initDB() {
  // 确保目录存在
  const dbDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  
  const db = new Database(DB_PATH);
  console.log('✅ 数据库连接成功');
  
  // 加载 sqlite-vec 扩展（新 API）
  try {
    sqliteVec.load(db);
    console.log('✅ sqlite-vec 加载成功');
  } catch (error) {
    console.error('⚠️  sqlite-vec 加载失败:', error.message);
    console.error('   将使用简单内存检索');
  }
  
  return db;
}

/**
 * 创建向量表
 * @param {Database} db - 数据库连接
 * @param {string} domain - 领域名称
 * @returns {string} 表名
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
  
  console.log(`✅ 向量表创建成功：${tableName}`);
  return tableName;
}

/**
 * 创建向量索引（使用 sqlite-vec）
 * @param {Database} db - 数据库连接
 * @param {string} tableName - 表名
 */
function createVectorIndex(db, tableName) {
  try {
    db.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS idx_${tableName} USING vec0(
        embedding float[768]
      )
    `);
    console.log(`✅ 向量索引创建成功：idx_${tableName}`);
  } catch (error) {
    console.error('⚠️  索引创建失败:', error.message);
  }
}

/**
 * 插入向量数据
 * @param {Database} db - 数据库连接
 * @param {string} tableName - 表名
 * @param {Array} vectors - 向量数据
 * @returns {number} 插入数量
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
  
  // 批量插入（每批 1000 条）
  const batchSize = 1000;
  let inserted = 0;
  
  for (let i = 0; i < vectors.length; i += batchSize) {
    const batch = vectors.slice(i, i + batchSize);
    insertMany(batch);
    inserted += batch.length;
    console.log(`  进度：${inserted}/${vectors.length}`);
  }
  
  console.log(`✅ 插入 ${inserted} 条向量`);
  return inserted;
}

/**
 * 向量检索（使用 sqlite-vec）
 * @param {Database} db - 数据库连接
 * @param {string} tableName - 表名
 * @param {Float32Array} queryVector - 查询向量
 * @param {number} topK - 返回数量
 * @returns {Array} 检索结果
 */
function vectorSearch(db, tableName, queryVector, topK = 10) {
  try {
    // 使用 sqlite-vec 的 vec_distance_cosine 函数
    const query = `
      SELECT page_id, doc_id, doc_title, section_title, summary, path,
             vec_distance_cosine(embedding, ?) as distance
      FROM ${tableName}
      ORDER BY distance ASC
      LIMIT ?
    `;
    
    const stmt = db.prepare(query);
    const rows = stmt.all(queryVector, topK);
    
    return rows.map(row => ({
      page_id: row.page_id,
      doc_id: row.doc_id,
      doc_title: row.doc_title,
      section_title: row.section_title,
      summary: row.summary,
      path: row.path,
      vectorScore: 1 - row.distance
    }));
  } catch (error) {
    console.error('⚠️  向量检索失败:', error.message);
    console.error('   降级为内存检索');
    
    // 降级为内存检索
    return vectorSearchInMemory(db, tableName, queryVector, topK);
  }
}

/**
 * 内存向量检索（降级方案）
 */
function vectorSearchInMemory(db, tableName, queryVector, topK) {
  const rows = db.prepare(`SELECT page_id, doc_id, doc_title, section_title, summary, path, embedding FROM ${tableName}`).all();
  
  const scores = rows.map(row => {
    const docVector = new Float32Array(row.embedding);
    let dotProduct = 0, norm1 = 0, norm2 = 0;
    
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
  
  return scores.sort((a, b) => b.vectorScore - a.vectorScore).slice(0, topK);
}

/**
 * 混合检索
 * @param {Database} db - 数据库连接
 * @param {Array} domains - 领域列表
 * @param {Float32Array} queryVector - 查询向量
 * @param {number} topK - 返回数量
 * @returns {Array} 检索结果
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

/**
 * 关闭数据库
 * @param {Database} db - 数据库连接
 */
function closeDB(db) {
  if (db) {
    db.close();
    console.log('✅ 数据库已关闭');
  }
}

// 导出
module.exports = {
  initDB,
  createVectorTable,
  createVectorIndex,
  insertVectors,
  vectorSearch,
  vectorSearchInMemory,
  hybridSearch,
  closeDB
};

// 命令行工具
if (require.main === module) {
  console.log('🚀 向量数据库工具（sqlite-vec 集成）\n');
  
  const db = initDB();
  
  // 测试检索
  const testVector = new Float32Array(768).fill(0.5);
  const results = vectorSearch(db, 'vectors_network', testVector, 5);
  
  console.log('\n测试结果:');
  results.forEach((r, i) => {
    console.log(`${i + 1}. ${r.doc_title} (score: ${r.vectorScore.toFixed(3)})`);
  });
  
  closeDB(db);
}
