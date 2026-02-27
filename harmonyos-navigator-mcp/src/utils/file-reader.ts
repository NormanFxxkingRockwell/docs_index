// File reader utility
import * as fs from 'fs';
import * as path from 'path';

const DOCS_BASE_PATH = path.join(process.cwd(), '..', 'docs');
const SEARCH_INDEX_BASE_PATH = path.join(process.cwd(), '..', 'search_index');

export function readJsonFile(filePath: string): unknown {
  const fullPath = path.isAbsolute(filePath) ? filePath : path.join(SEARCH_INDEX_BASE_PATH, filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(content);
}

export function readMarkdownFile(relativePath: string): string {
  // Handle paths like "../../docs/zh-cn/application-dev/xxx.md"
  let fullPath: string;
  
  if (relativePath.startsWith('../../docs/')) {
    // Convert relative path to absolute
    const docsPath = relativePath.replace('../../docs/', '');
    fullPath = path.join(DOCS_BASE_PATH, docsPath);
  } else if (path.isAbsolute(relativePath)) {
    fullPath = relativePath;
  } else {
    fullPath = path.join(DOCS_BASE_PATH, relativePath);
  }
  
  // Normalize the path (handle ..)
  fullPath = path.normalize(fullPath);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }
  
  return fs.readFileSync(fullPath, 'utf-8');
}

export function readMarkdownFileByPath(filePath: string, maxLines: number = 200): string {
  try {
    const content = readMarkdownFile(filePath);
    const lines = content.split('\n');
    return lines.slice(0, maxLines).join('\n');
  } catch (error) {
    throw new Error(`Failed to read file ${filePath}: ${error}`);
  }
}

interface DomainDocument {
  doc_id: string;
  title: string;
  path: string;
  summary?: string;
}

export function searchInDomain(domain: string, keywords: string[]): DomainDocument[] {
  const domainPath = path.join(SEARCH_INDEX_BASE_PATH, 'domains', domain);
  const indexPath = path.join(domainPath, 'domain_index.json');
  
  if (!fs.existsSync(indexPath)) {
    return [];
  }
  
  const domainIndex = readJsonFile(indexPath) as { documents?: DomainDocument[] };
  const documents = domainIndex.documents || [];
  
  if (keywords.length === 0) {
    return documents.slice(0, 10) as DomainDocument[];
  }
  
  // Simple keyword matching
  return documents.filter((doc: DomainDocument) => {
    const docText = JSON.stringify(doc).toLowerCase();
    return keywords.some(kw => docText.includes(kw.toLowerCase()));
  }).slice(0, 10) as DomainDocument[];
}

interface KitDocument {
  kit: string;
  doc_id: string;
  title: string;
  path: string;
}

export function searchInKit(kitName: string, keywords: string[]): KitDocument[] {
  const kitPath = path.join(DOCS_BASE_PATH, 'zh-cn', 'application-dev', 'reference', kitName);
  
  if (!fs.existsSync(kitPath)) {
    return [];
  }
  
  const files = fs.readdirSync(kitPath).filter(f => f.endsWith('.md'));
  const results: KitDocument[] = [];
  
  for (const file of files) {
    const filePath = path.join(kitPath, file);
    const content = fs.readFileSync(filePath, 'utf-8').toLowerCase();
    
    if (keywords.length === 0 || keywords.some(kw => content.includes(kw.toLowerCase()))) {
      results.push({
        kit: kitName,
        doc_id: file.replace('.md', ''),
        title: file.replace('.md', ''),
        path: `../../docs/zh-cn/application-dev/reference/${kitName}/${file}`
      });
    }
  }
  
  return results.slice(0, 10);
}

interface MasterMap {
  domain_kit_mapping?: Record<string, string>;
}

export function getMasterMap(): MasterMap {
  return readJsonFile('master_map.json') as MasterMap;
}
