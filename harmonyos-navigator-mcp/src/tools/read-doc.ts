// Tool 4: Read Doc - 读取文档详细内容

import { readMarkdownFileByPath } from '../utils/file-reader.js';

export interface ReadDocInput {
  path: string;
  max_lines?: number;
}

export interface ReadDocOutput {
  success: boolean;
  content?: string;
  lines?: number;
  path: string;
  error?: string;
}

export function harmonyosReadDoc(input: ReadDocInput): ReadDocOutput {
  const { path, max_lines = 200 } = input;
  
  try {
    const content = readMarkdownFileByPath(path, max_lines);
    
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
