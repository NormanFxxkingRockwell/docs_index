#!/usr/bin/env node
/**
 * 重建向量数据库（修复维度问题）
 * 
 * 问题：
 * - 原向量：384 维
 * - 新模型：512 维
 * 
 * 解决：重新向量化所有文档
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const vectorsDir = path.join(__dirname, '..', 'search_index', 'vectors');
const domainsDir = path.join(__dirname, '..', 'search_index', 'domains');

// 删除旧数据库
const dbPath = path.join(vectorsDir, 'vectors.db');
if (fs.existsSync(dbPath)) {
  console.log('🗑️  删除旧数据库...');
  fs.unlinkSync(dbPath);
}

// 重新运行向量化脚本
console.log('🚀 开始重新向量化...\n');

try {
  execSync('node scripts/embed-all-documents.js', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  console.log('\n✅ 向量数据库重建完成！');
} catch (error) {
  console.error('❌ 重建失败:', error.message);
  process.exit(1);
}
