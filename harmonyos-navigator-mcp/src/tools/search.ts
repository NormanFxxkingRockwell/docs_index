// Tool 3: Search - 文档检索

import { searchInDomain, searchInKit, getMasterMap } from '../utils/file-reader.js';

export interface SearchInput {
  domains: string[];
  question: string;
  include_api?: boolean;
}

export interface SearchOutput {
  dev_documents: DevDocument[];
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
  
  // 提取关键词
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
  
  // 检索每个领域的开发文档
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
    dev_documents: uniqueDevDocs.slice(0, 10),
    api_documents: uniqueApiDocs.slice(0, 10)
  };
}
