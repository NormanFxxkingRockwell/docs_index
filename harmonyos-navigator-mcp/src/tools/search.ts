// Tool 3: Search - 文档检索

import { searchInDomain, searchInKit, getMasterMap } from '../utils/file-reader.js';
import { normalizeQuery } from '../utils/query-normalizer.js';
import { pageSearch, SearchMatch } from '../utils/page-search.js';

export interface SearchInput {
  domains: string[];
  question: string;
  include_api?: boolean;
}

/**
 * 章节级匹配结果（新增）
 */
export interface MatchedPage {
  page_id: string;
  domain: string;
  doc_id: string;
  doc_title: string;
  section_id?: string;
  section_title?: string;
  path: string;
  line_start: number;
  line_end: number;
  score: number;
  match_reasons: string[];
}

export interface SearchOutput {
  matched_pages?: MatchedPage[];      // 新增：章节级结果
  dev_documents: DevDocument[];        // 保留：向后兼容
  api_documents: ApiDocument[];
}

export interface DevDocument {
  domain: string;
  doc_id: string;
  title: string;
  path: string;
  summary: string;
}

export interface ApiDocument {
  kit: string;
  doc_id: string;
  title: string;
  path: string;
}

export function harmonyosSearch(input: SearchInput): SearchOutput {
  const { domains, question, include_api = true } = input;
  
  // 新检索链路：使用 page_index
  const allMatchedPages: MatchedPage[] = [];
  
  for (const domain of domains) {
    // 归一化查询
    const normalizedQuery = normalizeQuery(question);
    
    // 章节级检索
    const result = pageSearch(domain, normalizedQuery, { topK: 15 });
    
    if (result.matched_pages) {
      allMatchedPages.push(...result.matched_pages);
    }
  }
  
  // 去重（按 page_id）
  const uniquePages = allMatchedPages.filter((page, index, self) =>
    index === self.findIndex(p => p.page_id === page.page_id)
  );
  
  // 按分数排序，取前 10
  uniquePages.sort((a, b) => b.score - a.score);
  const topMatchedPages = uniquePages.slice(0, 10);
  
  // 旧检索链路：保留向后兼容
  const keywords = question
    .replace(/[^\w\u4e00-\u9fa5]/g, ' ')
    .split(/\s+/)
    .filter(kw => kw.length > 1);
  
  const devDocuments: DevDocument[] = [];
  const apiDocuments: ApiDocument[] = [];
  
  // 获取领域到 Kit 的映射
  let domainKitMap: Record<string, string> = {};
  try {
    const masterMap = getMasterMap();
    domainKitMap = masterMap.domain_kit_mapping || {};
  } catch {
    // 如果无法读取，使用空映射
  }
  
  // 检索每个领域的开发文档（旧链路）
  for (const domain of domains) {
    const docs = searchInDomain(domain, keywords);
    
    for (const doc of docs) {
      devDocuments.push({
        domain,
        doc_id: doc.doc_id || '',
        title: doc.title || '',
        path: doc.path || '',
        summary: doc.summary || ''
      });
    }
    
    // 检索 API 文档
    if (include_api) {
      const kit = domainKitMap[domain];
      if (kit) {
        const apiDocs = searchInKit(kit, keywords);
        for (const apiDoc of apiDocs) {
          apiDocuments.push({
            kit: apiDoc.kit || kit,
            doc_id: apiDoc.doc_id || '',
            title: apiDoc.title || '',
            path: apiDoc.path || ''
          });
        }
      }
    }
  }
  
  // 去重
  const uniqueDevDocs = devDocuments.filter((doc, index, self) =>
    index === self.findIndex(d => d.path === doc.path)
  );
  
  const uniqueApiDocs = apiDocuments.filter((doc, index, self) =>
    index === self.findIndex(d => d.path === doc.path)
  );
  
  return {
    matched_pages: topMatchedPages,      // 新增：章节级结果
    dev_documents: uniqueDevDocs.slice(0, 10),  // 保留：向后兼容
    api_documents: uniqueApiDocs.slice(0, 10)
  };
}
