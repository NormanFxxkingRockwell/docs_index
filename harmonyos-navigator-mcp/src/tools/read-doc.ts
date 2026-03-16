// Tool 4: Read Doc - 读取文档详细内容

import { readMarkdownFileByPath } from '../utils/file-reader.js';

export interface ReadDocInput {
  path: string;
  max_lines?: number;
  line_start?: number; // 新增: 起始行号
  line_end?: number;   // 新增: 结束行号
}

export interface ReadDocOutput {
  success: boolean;
  content?: string;
  lines?: number;
  path: string;
  error?: string;
}

export function harmonyosReadDoc(input: ReadDocInput): ReadDocOutput {
  const { path, max_lines = 200, line_start, line_end } = input;
  
  try {
    // If line_start/line_end are provided, read that interval (inclusive)
    let content: string;
    if (typeof line_start === 'number' || typeof line_end === 'number') {
      const fullContent = readMarkdownFileByPath(path, Number.MAX_SAFE_INTEGER);
      const lines = fullContent.split('\n');
      const start = Math.max(1, line_start ?? 1);
      const end = Math.min(lines.length, line_end ?? lines.length);
      content = lines.slice(start - 1, end).join('\n');
    } else {
      // Backward-compatible behavior: read up to max_lines
      content = readMarkdownFileByPath(path, max_lines);
    }
    
    return {
      success: true,
      content,
      lines: content.split('\n').length,
      path
    };
  } catch (error) {
    return {
      success: false,
      path,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}
