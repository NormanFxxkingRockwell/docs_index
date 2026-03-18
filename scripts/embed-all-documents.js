#!/usr/bin/env node
/**
 * 批量向量化所有文档（带完整元数据）
 */

const fs = require('fs');
const path = require('path');
const { embedText } = require('../lib/vector-search.js');

async function embedAllDocuments() {
  const vectorsDir = path.join(__dirname, '..', 'search_index', 'vectors');
  const domainsDir = path.join(__dirname, '..', 'search_index', 'domains');
  
  if (!fs.existsSync(vectorsDir)) {
    fs.mkdirSync(vectorsDir, { recursive: true });
  }
  
  console.log('📚 发现领域:\n');
  
  const domains = fs.readdirSync(domainsDir).filter(d => 
    fs.existsSync(path.join(domainsDir, d, 'page_index.jsonl'))
  );
  
  console.log('总计：' + domains.length + ' 个领域\n');
  
  let totalDocs = 0;
  let totalVectors = 0;
  
  for (const domain of domains) {
    try {
      const pageIndexPath = path.join(domainsDir, domain, 'page_index.jsonl');
      const pages = fs.readFileSync(pageIndexPath, 'utf-8')
        .split('\n')
        .filter(l => l.trim())
        .map(l => JSON.parse(l));
      
      console.log('处理领域：' + domain);
      console.log('  文档数：' + pages.length);
      
      const vectors = [];
      
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        
        const text = [
          page.doc_title || '',
          page.section_title || '',
          page.summary || '',
          ...(page.keywords || [])
        ].filter(t => t).join(' ');
        
        const vector = await embedText(text);
        
        vectors.push({
          page_id: page.page_id,
          doc_id: page.doc_id,
          doc_title: page.doc_title,
          section_title: page.section_title,
          path: page.path,
          summary: page.summary,
          line_start: page.line_start,
          line_end: page.line_end,
          vector: Array.from(vector)
        });
        
        if ((i + 1) % 100 === 0) {
          console.log('  进度：' + (i + 1) + '/' + pages.length);
        }
      }
      
      const outputFile = path.join(vectorsDir, domain + '-vectors.json');
      fs.writeFileSync(outputFile, JSON.stringify(vectors, null, 2), 'utf-8');
      
      totalDocs += pages.length;
      totalVectors += vectors.length;
      
      const fileSize = (fs.statSync(outputFile).size / 1024 / 1024).toFixed(1);
      console.log('✅ 向量化完成，保存到：' + outputFile);
      console.log('   向量维度：' + (vectors[0]?.vector?.length || 0));
      console.log('   文件大小：' + fileSize + ' MB\n');
      
    } catch (error) {
      console.error('❌ ' + domain + ' 失败:', error.message);
    }
  }
  
  console.log('='.repeat(60));
  console.log('🎉 批量向量化完成！');
  console.log('='.repeat(60));
  console.log('领域数：' + domains.length);
  console.log('总文档数：' + totalDocs.toLocaleString());
  console.log('总向量数：' + totalVectors.toLocaleString());
  console.log('输出目录：' + vectorsDir + '\n');
}

embedAllDocuments().catch(error => {
  console.error('❌ 向量化失败:', error.message);
  process.exit(1);
});
