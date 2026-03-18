#!/usr/bin/env node
/**
 * 批量向量化所有文档
 * 
 * 使用方式：
 * node scripts/embed-all-documents.js
 */

const fs = require('fs');
const path = require('path');
const { embedAndSave } = require('../search_index/skills/harmonyos/vector-search.js');

async function embedAllDocuments() {
  const domainsDir = path.join(__dirname, '..', 'search_index', 'domains');
  const outputDir = path.join(__dirname, '..', 'search_index', 'vectors');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const domains = fs.readdirSync(domainsDir).filter(d => 
    fs.existsSync(path.join(domainsDir, d, 'page_index.jsonl'))
  );
  
  console.log(`📚 发现 ${domains.length} 个领域\n`);
  
  let totalDocs = 0;
  let totalVectors = 0;
  
  for (const domain of domains) {
    console.log(`处理领域：${domain}`);
    
    const pageIndexPath = path.join(domainsDir, domain, 'page_index.jsonl');
    const pages = fs.readFileSync(pageIndexPath, 'utf-8')
      .split('\n')
      .filter(l => l.trim())
      .map(l => JSON.parse(l));
    
    console.log(`  文档数：${pages.length}`);
    
    const outputFile = path.join(outputDir, `${domain}-vectors.json`);
    await embedAndSave(pages, outputFile);
    
    totalDocs += pages.length;
    const vectorSize = fs.statSync(outputFile).size;
    totalVectors += vectorSize;
    
    console.log('');
  }
  
  console.log('='.repeat(60));
  console.log('🎉 批量向量化完成！');
  console.log('='.repeat(60));
  console.log(`领域数：${domains.length}`);
  console.log(`总文档数：${totalDocs}`);
  console.log(`总向量大小：${(totalVectors / 1024 / 1024).toFixed(1)} MB`);
  console.log(`输出目录：${outputDir}\n`);
}

// 运行
embedAllDocuments().catch(error => {
  console.error('❌ 向量化失败:', error.message);
  process.exit(1);
});
