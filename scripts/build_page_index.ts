/**
 * Page Index Builder
 *
 * 优先以 documents/*_structure.json 为主数据源生成 page_index.jsonl，
 * 当 domain_index.json 的 documents 不完整时仍能覆盖完整领域文档。
 */

import * as fs from 'fs';
import * as path from 'path';

interface PageRecord {
  page_id: string;
  domain: string;
  doc_id: string;
  doc_title: string;
  doc_type: 'guide' | 'overview' | 'tutorial' | 'reference' | 'faq' | 'readme';
  section_id?: string;
  section_title?: string;
  path: string;
  line_start: number;
  line_end: number;
  summary: string;
  keywords: string[];
  aliases?: string[];
  content_snippet: string;
  source_quality: number;
}

interface DomainIndexDoc {
  doc_id: string;
  title: string;
  path: string;
  summary?: string;
  key_topics?: string[];
}

interface DomainIndex {
  domain: string;
  documents?: DomainIndexDoc[];
}

interface DocStructure {
  doc_id: string;
  title: string;
  path: string;
  relative_path?: string;
  summary?: string;
  structure?: {
    sections?: Array<{
      section_id?: string;
      section_id_?: string;
      title: string;
      level: number;
      line_start: number;
      line_end: number;
    }>;
  };
}

interface DocSource {
  doc_id: string;
  title: string;
  path: string;
  summary?: string;
  key_topics?: string[];
  sections: Array<{
    section_id: string;
    title: string;
    line_start: number;
    line_end: number;
  }>;
}

function inferDocType(docId: string, title?: string): PageRecord['doc_type'] {
  const lowerId = (docId || '').toLowerCase();
  const lowerTitle = (title || '').toLowerCase();

  if (lowerId.includes('readme') || lowerId === 'readme-cn') return 'readme';
  if (lowerId.includes('overview') || lowerTitle.includes('概述') || lowerTitle.includes('简介')) return 'overview';
  if (lowerId.includes('guide') || lowerId.includes('guidelines')) return 'guide';
  if (lowerId.includes('tutorial') || lowerTitle.includes('快速入门') || lowerTitle.includes('教程')) return 'tutorial';
  if (lowerId.includes('faq')) return 'faq';

  return 'guide';
}

function extractContentSnippet(filePath: string, lineStart: number, lineEnd: number): string {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const snippet = lines.slice(lineStart - 1, lineEnd).join('\n');
    const cleaned = snippet
      .replace(/```[\s\S]*?```/g, '')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/#{1,6}\s/g, '')
      .trim();
    return cleaned.length > 800 ? `${cleaned.slice(0, 800)}...` : (cleaned || snippet.slice(0, 500));
  } catch {
    return '';
  }
}

function tokenizeKeywords(values: string[]): string[] {
  const tokens = new Set<string>();
  for (const value of values) {
    for (const token of value.split(/[\s,，。；：:()（）/]+/)) {
      const normalized = token.trim().toLowerCase();
      if (normalized.length >= 2) {
        tokens.add(normalized);
      }
    }
  }
  return Array.from(tokens);
}

function mergeKeywords(...keywordGroups: Array<string[] | undefined>): string[] {
  const merged = new Set<string>();
  for (const group of keywordGroups) {
    if (!group) {
      continue;
    }
    for (const keyword of group) {
      const normalized = keyword.trim().toLowerCase();
      if (normalized.length >= 2) {
        merged.add(normalized);
      }
    }
  }
  return Array.from(merged).slice(0, 30);
}

function generatePageId(domain: string, docId: string, sectionId?: string): string {
  return sectionId ? `${domain}/${docId}#${sectionId}` : `${domain}/${docId}`;
}

function normalizeDocPath(rawPath: string): string {
  return rawPath.replace(/\\/g, '/');
}

function resolveDocFilePath(repoRoot: string, rawPath: string): string {
  let relativePath = normalizeDocPath(rawPath || '');
  
  // 去掉 ../../ 前缀
  relativePath = relativePath.replace(/^\.\.\/\.\.\//, '');
  
  // 去掉开头的所有 docs/ (处理重复：docs/docs/... → ...)
  relativePath = relativePath.replace(/^(docs\/)+/, '');
  
  // 处理重复路径：docs/zh-cn/application-dev/media/docs/zh-cn/... → zh-cn/application-dev/media/...
  const duplicateMatch = relativePath.match(/^(docs\/zh-cn\/application-dev\/[^/]+)\/\1\/(.*)$/);
  if (duplicateMatch) {
    relativePath = duplicateMatch[2];
  }
  
  // 规范化路径分隔符
  relativePath = relativePath.replace(/\\/g, '/');
  
  return path.join(repoRoot, 'docs', relativePath);
}

function loadDomainSources(repoRoot: string, domain: string): { docs: DocSource[]; errors: string[] } {
  const basePath = path.join(repoRoot, 'search_index', 'domains', domain);
  const documentsDir = path.join(basePath, 'documents');
  const domainIndexPath = path.join(basePath, 'domain_index.json');
  const errors: string[] = [];

  const domainIndex: DomainIndex = fs.existsSync(domainIndexPath)
    ? JSON.parse(fs.readFileSync(domainIndexPath, 'utf-8'))
    : { domain, documents: [] };
  const domainIndexById = new Map<string, DomainIndexDoc>(
    (domainIndex.documents || []).map(doc => [doc.doc_id, doc])
  );

  const structureFiles = fs.existsSync(documentsDir)
    ? fs.readdirSync(documentsDir).filter(file => file.endsWith('_structure.json'))
    : [];

  const docMap = new Map<string, DocSource>();

  for (const file of structureFiles) {
    const fullPath = path.join(documentsDir, file);
    const structure = JSON.parse(fs.readFileSync(fullPath, 'utf-8')) as DocStructure;
    const docId = structure.doc_id;
    const domainDoc = domainIndexById.get(docId);
    const docPath = domainDoc?.path || structure.relative_path || structure.path || `../../docs/zh-cn/application-dev/${domain}/${docId}.md`;
    const title = domainDoc?.title || structure.title || docId;
    const summary = domainDoc?.summary || structure.summary || title;
    const keyTopics = domainDoc?.key_topics || [];
    const sections = (structure.structure?.sections || []).map((section, index) => ({
      section_id: section.section_id || section.section_id_ || `section-${index + 1}`,
      title: section.title,
      line_start: section.line_start,
      line_end: section.line_end,
    }));

    docMap.set(docId, {
      doc_id: docId,
      title,
      path: docPath,
      summary,
      key_topics: keyTopics,
      sections,
    });
  }

  for (const domainDoc of domainIndex.documents || []) {
    if (docMap.has(domainDoc.doc_id)) {
      continue;
    }
    docMap.set(domainDoc.doc_id, {
      doc_id: domainDoc.doc_id,
      title: domainDoc.title,
      path: domainDoc.path,
      summary: domainDoc.summary || domainDoc.title,
      key_topics: domainDoc.key_topics || [],
      sections: [],
    });
  }

  const docs = Array.from(docMap.values()).filter(doc => {
    const markdownPath = resolveDocFilePath(repoRoot, doc.path);
    if (fs.existsSync(markdownPath)) {
      return true;
    }
    errors.push(`文档不存在：${markdownPath}`);
    return false;
  });

  return { docs, errors };
}

function buildDomainPageIndex(domain: string): { success: boolean; count: number; errors: string[] } {
  const repoRoot = process.cwd();
  const basePath = path.join(repoRoot, 'search_index', 'domains', domain);
  if (!fs.existsSync(basePath)) {
    console.error(`❌ 领域 ${domain} 目录不存在`);
    return { success: false, count: 0, errors: ['domain dir not found'] };
  }

  const { docs, errors } = loadDomainSources(repoRoot, domain);
  const records: PageRecord[] = [];

  console.log(`📚 处理领域：${domain} (共 ${docs.length} 篇文档)`);

  for (let index = 0; index < docs.length; index++) {
    const doc = docs[index];
    try {
      const markdownPath = resolveDocFilePath(repoRoot, doc.path);
      const safeTitle = doc.title || doc.doc_id;
      const docType = inferDocType(doc.doc_id, safeTitle);
      const docKeywords = tokenizeKeywords([safeTitle, doc.summary || '', ...(doc.key_topics || [])]);

      if (doc.sections.length > 0) {
        for (const section of doc.sections) {
          const sectionKeywords = tokenizeKeywords([section.title, safeTitle, ...(doc.key_topics || [])]);
          records.push({
            page_id: generatePageId(domain, doc.doc_id, section.section_id),
            domain,
            doc_id: doc.doc_id,
            doc_title: safeTitle,
            doc_type: docType,
            section_id: section.section_id,
            section_title: section.title,
            path: doc.path,
            line_start: section.line_start,
            line_end: section.line_end,
            summary: doc.summary || section.title,
            keywords: mergeKeywords(docKeywords, sectionKeywords),
            aliases: [],
            content_snippet: extractContentSnippet(markdownPath, section.line_start, section.line_end),
            source_quality: 0.9,
          });
        }
      } else {
        records.push({
          page_id: generatePageId(domain, doc.doc_id),
          domain,
          doc_id: doc.doc_id,
          doc_title: safeTitle,
          doc_type: docType,
          path: doc.path,
          line_start: 1,
          line_end: 100,
          summary: doc.summary || safeTitle,
          keywords: mergeKeywords(docKeywords),
          aliases: [],
          content_snippet: extractContentSnippet(markdownPath, 1, 100),
          source_quality: 0.7,
        });
      }
    } catch (error) {
      errors.push(`处理文档失败：${doc.doc_id} - ${error instanceof Error ? error.message : String(error)}`);
    }

    if ((index + 1) % 50 === 0) {
      console.log(`  进度：${index + 1}/${docs.length}`);
    }
  }

  const outputPath = path.join(basePath, 'page_index.jsonl');
  fs.writeFileSync(outputPath, records.map(record => JSON.stringify(record)).join('\n'), 'utf-8');

  if (errors.length > 0) {
    const errorPath = path.join(basePath, 'page_index_error.json');
    fs.writeFileSync(
      errorPath,
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          domain,
          total_docs: docs.length,
          total_records: records.length,
          errors,
        },
        null,
        2
      ),
      'utf-8'
    );
  }

  console.log(`✅ 领域 ${domain} 处理完成：${records.length} 条记录，${errors.length} 个错误`);
  return { success: true, count: records.length, errors };
}

async function main() {
  const args = process.argv.slice(2);
  const domainArg = args.find(arg => arg.startsWith('--domain='));

  if (!domainArg) {
    console.log('用法：node scripts/build_page_index.ts --domain=<domain>');
    process.exit(1);
  }

  const domain = domainArg.split('=')[1];
  console.log(`🚀 开始构建 ${domain} 领域的 page_index...\n`);
  const result = buildDomainPageIndex(domain);

  if (!result.success) {
    console.log('\n❌ 构建失败，请检查错误信息');
    process.exit(1);
  }

  console.log('\n🎉 构建完成！');
  console.log(`   输出文件：search_index/domains/${domain}/page_index.jsonl`);
  console.log(`   记录数：${result.count}`);
  if (result.errors.length > 0) {
    console.log(`   错误数：${result.errors.length}`);
    console.log(`   错误详情：search_index/domains/${domain}/page_index_error.json`);
  }
}

main().catch(error => {
  console.error('构建过程出错:', error);
  process.exit(1);
});
