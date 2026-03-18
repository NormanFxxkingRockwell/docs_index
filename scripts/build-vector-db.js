#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vectorDB = require('../lib/vector-db.js');

const vectorsDir = path.join(__dirname, '..', 'search_index', 'vectors');

console.log('🚀 开始重建向量数据库...\n');

const domainFiles = fs.readdirSync(vectorsDir)
  .filter(f => f.endsWith('-vectors.json'))
  .map(f => f.replace('-vectors.json', ''));

console.log('发现 ' + domainFiles.length + ' 个领域\n');

const db = vectorDB.initDB();
let totalInserted = 0;
let successCount = 0;

for (const domain of domainFiles) {
  try {
    const vectorsFile = path.join(vectorsDir, domain + '-vectors.json');
    const vectors = JSON.parse(fs.readFileSync(vectorsFile, 'utf-8'));
    
    if (vectors.length === 0) continue;
    
    console.log('处理领域：' + domain + ' (' + vectors.length + ' 篇)');
    
    vectorDB.createVectorTable(db, domain);
    
    const tableName = 'vectors_' + domain.replace(/-/g, '_');
    const inserted = vectorDB.insertVectors(db, tableName, vectors);
    totalInserted += inserted;
    successCount++;
    
  } catch (error) {
    console.error('❌ ' + domain + ' 失败:', error.message);
  }
}

// 关键：关闭数据库（保存更改）
vectorDB.closeDB(db);

console.log('\n' + '='.repeat(60));
console.log('✅ 向量数据库重建完成！');
console.log('='.repeat(60));
console.log('领域数：' + successCount);
console.log('总向量数：' + totalInserted.toLocaleString());

const dbPath = path.join(vectorsDir, 'vectors.db');
if (fs.existsSync(dbPath)) {
  const dbSize = (fs.statSync(dbPath).size / 1024 / 1024).toFixed(1);
  console.log('数据库文件：' + dbPath);
  console.log('数据库大小：' + dbSize + ' MB');
}
console.log('');
