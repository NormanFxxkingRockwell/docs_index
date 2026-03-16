/**
 * LLM 评判接口定义
 * 
 * 用于未来实现基于大模型的重排和评估功能
 * 当前为预留接口，返回原始结果
 */

import type { NormalizedQuery } from '../utils/query-normalizer.js';

/**
 * 搜索匹配结果
 */
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

/**
 * LLM 重排输入
 */
export interface LLMRerankInput {
  /** 归一化后的用户问题 */
  question: NormalizedQuery;
  /** 候选章节列表 */
  candidates: SearchMatch[];
  /** 返回前 K 个结果，默认 10 */
  topK?: number;
  /** 是否启用详细解释，默认 false */
  withExplanation?: boolean;
}

/**
 * LLM 重排结果
 */
export interface LLMRerankResult {
  /** 重排后的章节列表 */
  reranked: SearchMatch[];
  /** 是否应用了 LLM 重排 */
  llm_applied: boolean;
  /** LLM 评判原因（如果启用解释） */
  reason?: string;
  /** 每个结果的 LLM 评分（如果启用） */
  llm_scores?: Array<{
    page_id: string;
    score: number;
    reason: string;
  }>;
}

/**
 * 答案验证输入
 */
export interface LLMValidateInput {
  /** 原始问题 */
  question: string;
  /** 检索到的章节内容 */
  documents: Array<{
    page_id: string;
    title: string;
    content: string;
  }>;
  /** 生成的答案 */
  answer?: string;
}

/**
 * 答案验证结果
 */
export interface LLMValidateResult {
  /** 是否回答了问题 */
  answers_question: boolean;
  /** 置信度 0-1 */
  confidence: number;
  /** 覆盖的要点 */
  covered_points: string[];
  /** 缺失的要点 */
  missing_points: string[];
  /** 是否有幻觉风险 */
  hallucination_risk: 'low' | 'medium' | 'high';
  /** 改进建议 */
  suggestions?: string[];
}

/**
 * LLM 重排接口（当前为预留实现）
 * 
 * 未来实现：
 * 1. 调用 LLM API 对候选章节进行语义重排
 * 2. 返回重排后的结果和解释
 * 
 * 当前实现：
 * - 直接返回原始候选（按 rule_score 排序）
 * - llm_applied = false
 */
export async function llmRerank(input: LLMRerankInput): Promise<LLMRerankResult> {
  const { candidates, topK = 10 } = input;
  
  // TODO: 未来实现 LLM 重排逻辑
  // 当前直接返回按 rule_score 排序的结果
  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  const topResults = sorted.slice(0, topK);
  
  return {
    reranked: topResults,
    llm_applied: false,
    reason: 'LLM reranking not yet implemented, using rule-based scoring',
  };
}

/**
 * LLM 答案验证接口（当前为预留实现）
 * 
 * 未来实现：
 * 1. 调用 LLM 判断答案是否覆盖问题要点
 * 2. 检测幻觉风险
 * 3. 提供改进建议
 * 
 * 当前实现：
 * - 基于关键词重叠率简单判断
 * - confidence 固定为 0.5
 */
export async function llmValidate(input: LLMValidateInput): Promise<LLMValidateResult> {
  const { question, documents, answer } = input;
  
  // TODO: 未来实现 LLM 验证逻辑
  // 当前基于关键词简单判断
  
  const questionWords = question.toLowerCase().split(/\s+/).filter(w => w.length > 1);
  const contentText = documents.map(d => d.content).join(' ').toLowerCase();
  
  const matchedWords = questionWords.filter(w => contentText.includes(w));
  const coverage = matchedWords.length / questionWords.length;
  
  return {
    answers_question: coverage > 0.3,
    confidence: 0.5,  // 固定置信度，待 LLM 实现
    covered_points: matchedWords,
    missing_points: questionWords.filter(w => !matchedWords.includes(w)),
    hallucination_risk: 'medium',  // 待 LLM 实现
    suggestions: ['LLM validation not yet implemented'],
  };
}

/**
 * LLM 配置接口
 */
export interface LLMConfig {
  /** LLM 提供商：'openai' | 'anthropic' | 'azure' | 'local' */
  provider?: string;
  /** 模型名称 */
  model?: string;
  /** API Key */
  apiKey?: string;
  /** 是否启用 LLM 重排 */
  enableRerank?: boolean;
  /** 是否启用 LLM 验证 */
  enableValidate?: boolean;
  /** 重排时返回的最大结果数 */
  rerankTopK?: number;
}

/**
 * 默认配置
 */
export const DEFAULT_LLM_CONFIG: LLMConfig = {
  provider: 'openai',
  model: 'gpt-4o',
  enableRerank: false,  // 默认关闭，手动开启
  enableValidate: false,
  rerankTopK: 10,
};
