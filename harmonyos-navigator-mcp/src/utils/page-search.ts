/**
 * Page Search - 章节级检索模块
 */

import * as fs from 'fs';
import * as path from 'path';
import type { NormalizedQuery } from './query-normalizer.js';
import { getSearchIndexBasePath } from './file-reader.js';

export interface SearchMatch {
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

export interface PageSearchResult {
  matched_pages: SearchMatch[];
  rule_score_applied: boolean;
  llm_rerank_applied: boolean;
  llm_rerank_reason?: string;
}

interface PageRecord {
  page_id: string;
  domain: string;
  doc_id: string;
  doc_title: string;
  doc_type: string;
  section_id?: string;
  section_title?: string;
  path: string;
  line_start: number;
  line_end: number;
  summary: string;
  keywords: string[];
  content_snippet: string;
}

export interface LLMRerankInput {
  question: NormalizedQuery;
  candidates: SearchMatch[];
  topK?: number;
}

export async function llmRerank(input: LLMRerankInput): Promise<SearchMatch[]> {
  const { candidates, topK = 10 } = input;
  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  return sorted.slice(0, topK);
}

function isUsefulPhrase(phrase: string): boolean {
  const normalized = phrase.trim().toLowerCase();
  if (normalized.length < 3) {
    return false;
  }
  return !['如何', '怎么', '怎样', '实现', '使用', '区别', '什么'].includes(normalized);
}

function uniqueTerms(values: string[]): string[] {
  return Array.from(new Set(values.map(value => value.trim().toLowerCase()).filter(value => value.length >= 2)));
}

function exactMatches(text: string | undefined, candidates: string[]): string[] {
  if (!text) {
    return [];
  }
  const normalizedText = text.toLowerCase();
  return candidates.filter(candidate => normalizedText.includes(candidate));
}

function scoreFieldTokenMatches(text: string | undefined, tokens: string[]): string[] {
  if (!text) {
    return [];
  }
  const normalizedText = text.toLowerCase();
  return tokens.filter(token => normalizedText.includes(token));
}

function calculateScore(record: PageRecord, query: NormalizedQuery): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  let score = 0;

  const normalizedQuery = query.normalized.toLowerCase();
  const usefulPhrases = query.phrases.filter(isUsefulPhrase);
  const apiTerms = query.apiTerms.map(term => term.toLowerCase());
  const allTokens = uniqueTerms([...query.tokens, ...query.expandedTerms, ...apiTerms]);

  const sectionPhraseHits = exactMatches(record.section_title, usefulPhrases);
  if (sectionPhraseHits.length > 0) {
    score += 10;
    reasons.push(`section_title exact phrase: ${sectionPhraseHits[0]}`);
  }

  if (normalizedQuery.length >= 3 && record.doc_title.toLowerCase().includes(normalizedQuery)) {
    score += 8;
    reasons.push('doc_title exact match');
  }

  const apiSectionHits = exactMatches(record.section_title, apiTerms);
  const apiTitleHits = exactMatches(record.doc_title, apiTerms);
  if (apiSectionHits.length > 0) {
    score += 10;
    reasons.push(`api exact section match: ${apiSectionHits[0]}`);
  } else if (apiTitleHits.length > 0) {
    score += 8;
    reasons.push(`api exact title match: ${apiTitleHits[0]}`);
  }

  const sectionTokenHits = scoreFieldTokenMatches(record.section_title, allTokens);
  if (sectionTokenHits.length > 0) {
    score += sectionTokenHits.length * 2;
    reasons.push(`section_title tokens: ${sectionTokenHits.slice(0, 3).join(', ')}`);
  }

  const keywordHits = record.keywords.filter(keyword =>
    allTokens.some(token => keyword.toLowerCase().includes(token) || token.includes(keyword.toLowerCase()))
  );
  if (keywordHits.length > 0) {
    score += keywordHits.length * 1.5;
    reasons.push(`keywords: ${keywordHits.slice(0, 3).join(', ')}`);
  }

  const docTitleHits = scoreFieldTokenMatches(record.doc_title, allTokens);
  if (docTitleHits.length > 0) {
    score += docTitleHits.length;
    reasons.push(`doc_title tokens: ${docTitleHits.slice(0, 3).join(', ')}`);
  }

  const summaryHits = scoreFieldTokenMatches(record.summary, allTokens);
  if (summaryHits.length > 0) {
    score += summaryHits.length * 0.5;
    reasons.push('summary match');
  }

  const contentHits = scoreFieldTokenMatches(record.content_snippet, allTokens);
  if (contentHits.length > 0) {
    score += contentHits.length * 0.3;
    reasons.push('content match');
  }

  const docTypeScores: Record<string, number> = {
    guide: 2,
    tutorial: 2,
    overview: 1,
    reference: 0,
    faq: -1,
    readme: -2,
  };
  const typeScore = docTypeScores[record.doc_type] || 0;
  if (typeScore !== 0) {
    score += typeScore;
    reasons.push(`doc_type: ${record.doc_type} (${typeScore > 0 ? '+' : ''}${typeScore})`);
  }

  const sectionTitleLower = (record.section_title || '').toLowerCase();
  const docTitleLower = record.doc_title.toLowerCase();
  if (query.intent === 'compare') {
    if (['对比', '差异', '区别'].some(keyword => sectionTitleLower.includes(keyword))) {
      score += 8;
      reasons.push('compare intent section boost');
    }
    if (['架构', '原理'].some(keyword => sectionTitleLower.includes(keyword))) {
      score += 4;
      reasons.push('compare intent architecture boost');
    }
  } else if (query.intent === 'how_to') {
    if (['使用', '实现', '创建', '构建'].some(keyword => sectionTitleLower.includes(keyword))) {
      score += 4;
      reasons.push('how_to section boost');
    }
  } else if (query.intent === 'concept') {
    if (['概述', '简介', '概念', '介绍'].some(keyword => docTitleLower.includes(keyword) || sectionTitleLower.includes(keyword))) {
      score += 4;
      reasons.push('concept overview boost');
    }
  }

  return { score, reasons };
}

export function pageSearch(
  domain: string,
  query: NormalizedQuery,
  options?: { topK?: number; enableLLMRerank?: boolean }
): PageSearchResult {
  const { topK = 20, enableLLMRerank = false } = options || {};
  const indexPath = path.join(getSearchIndexBasePath(), 'domains', domain, 'page_index.jsonl');

  if (!fs.existsSync(indexPath)) {
    return {
      matched_pages: [],
      rule_score_applied: false,
      llm_rerank_applied: false,
      llm_rerank_reason: 'page_index.jsonl not found, fallback to legacy search',
    };
  }

  const content = fs.readFileSync(indexPath, 'utf-8');
  const records: PageRecord[] = content
    .split('\n')
    .filter(line => line.trim())
    .map(line => JSON.parse(line) as PageRecord);

  const matches: SearchMatch[] = [];
  for (const record of records) {
    const { score, reasons } = calculateScore(record, query);
    if (score <= 0) {
      continue;
    }
    matches.push({
      page_id: record.page_id,
      domain: record.domain,
      doc_id: record.doc_id,
      doc_title: record.doc_title,
      section_id: record.section_id,
      section_title: record.section_title,
      path: record.path,
      line_start: record.line_start,
      line_end: record.line_end,
      score: Math.round(score * 10) / 10,
      match_reasons: reasons,
    });
  }

  matches.sort((a, b) => b.score - a.score);

  let finalMatches = matches.slice(0, topK);
  let llmApplied = false;
  let llmReason: string | undefined;

  if (enableLLMRerank && matches.length > 0) {
    llmApplied = false;
    llmReason = 'LLM reranking not yet enabled';
    finalMatches = matches.slice(0, topK);
  }

  return {
    matched_pages: finalMatches,
    rule_score_applied: true,
    llm_rerank_applied: llmApplied,
    llm_rerank_reason: llmReason,
  };
}
