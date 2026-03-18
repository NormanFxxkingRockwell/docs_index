#!/usr/bin/env node
/**
 * 向量数据库模块 - 基于 better-sqlite3 + sqlite-vec
 * 
 * 功能:
 * - 创建向量索引
 * - 快速向量检索
 * - 增量更新
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, '../../vectors/vectors.db');

/**
 * 初始化数据库
 * @returns {Object} 数据库连接
 */
function initDB() {
  // 确保目录存在
  const dbDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  
  const db = new Database(DB_PATH);
  console.log('✅ 数据库连接成功');
  
  // 加载 sqlite-vec 扩展
  try {
    db.loadExtension(require('sqlite-vec').loadablePath);
    console.log('✅ sqlite-vec 加载成功');
  } catch (error) {
    console.error('⚠️  sqlite-vec 加载失败:', error.message);
  }
  
  return db;
}

/**
 * 创建向量表和索引
 * @param {Database} db - 数据库连接
 * @param {string} domain - 领域名称
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
 * 插入向量数据
 * @param {Database} db - 数据库连接
 * @param {string} tableName - 表名
 * @param {Array} vectors - 向量数据
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
}

/**
 * 加载领域向量到数据库
 * @param {Database} db - 数据库连接
 * @param {string} domain - 领域名称
 */
function loadDomainVectors(db, domain) {
  const vectorFile = path.join(__dirname, `../../vectors/${domain}-vectors.json`);
  
  if (!fs.existsSync(vectorFile)) {
    console.log(`⚠️  向量文件不存在：${vectorFile}`);
    return 0;
  }
  
  console.log(`\n加载领域：${domain}`);
  const vectors = JSON.parse(fs.readFileSync(vectorFile, 'utf-8'));
  console.log(`  向量数：${vectors.length}`);
  
  const tableName = createVectorTable(db, domain);
  const inserted = insertVectors(db, tableName, vectors);
  
  return inserted;
}

/**
 * 混合检索（向量 + 关键词）
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
      const results = vectorSearch(db, tableName, queryVector, topK);
      allResults.push(...results);
    } catch (error) {
      console.error(`⚠️  ${domain} 检索失败:`, error.message);
    }
  }
  
  // 按分数排序
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
  loadDomainVectors,
  hybridSearch
};

// 命令行工具
if (require.main === module) {
  console.log('🚀 向量数据库构建工具\n');
  
  const db = initDB();
  
  // 加载所有领域的向量
  const domainsDir = path.join(__dirname, '../../vectors');
  const domainFiles = fs.readdirSync(domainsDir)
    .filter(f => f.endsWith('-vectors.json'))
    .map(f => f.replace('-vectors.json', ''));
  
  console.log(`\n发现 ${domainFiles.length} 个领域的向量文件\n`);
  
  let totalInserted = 0;
  
  for (const domain of domainFiles) {
    try {
      const inserted = loadDomainVectors(db, domain);
      totalInserted += inserted;
    } catch (error) {
      console.error(`❌ ${domain} 失败:`, error.message);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('🎉 向量数据库构建完成！');
  console.log('='.repeat(60));
  console.log(`领域数：${domainFiles.length}`);
  console.log(`总向量数：${totalInserted}`);
  console.log(`数据库文件：${DB_PATH}`);
  console.log(`数据库大小：${(fs.statSync(DB_PATH).size / 1024 / 1024).toFixed(1)} MB\n`);
  
  db.close();
}
