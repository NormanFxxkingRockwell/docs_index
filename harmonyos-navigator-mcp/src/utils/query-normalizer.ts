/**
 * Query Normalizer - 查询归一化模块
 */

export interface NormalizedQuery {
  raw: string;
  normalized: string;
  tokens: string[];
  phrases: string[];
  apiTerms: string[];
  intent: QueryIntent;
  expandedTerms: string[];
}

export type QueryIntent =
  | 'how_to'
  | 'api_usage'
  | 'concept'
  | 'compare'
  | 'example'
  | 'error'
  | 'parameter'
  | 'generic';

const SYNONYM_MAP: Record<string, string[]> = {
  '动效': ['动画', 'animation', 'transition', 'effect'],
  '动画': ['动效', 'animation', 'transition', 'effect'],
  'animation': ['动画', '动效', 'transition'],
  'transition': ['转场', '动画', '动效'],
  '转场': ['transition', '动画', '模态'],
  '页面跳转': ['navigation', 'router', '页面路由', '路由'],
  '路由': ['navigation', 'router', '页面跳转', '页面路由'],
  'navigation': ['页面跳转', '路由', 'navdestination'],
  'router': ['页面跳转', '路由', 'pushurl'],
  '页面路由': ['页面跳转', 'navigation', 'router'],
  '状态管理': ['state', 'appstorage', '@state', '@prop', '@link'],
  'state': ['状态管理', '@state', '状态'],
  '@state': ['状态管理', 'state', '状态变量'],
  '@prop': ['状态管理', 'prop', '父子同步'],
  '@link': ['状态管理', 'link', '双向同步'],
  '弹窗': ['dialog', 'popup', 'customdialog', '模态'],
  'dialog': ['弹窗', '对话框', 'modal'],
  'popup': ['弹窗', '气泡', '提示'],
  '网络请求': ['http', 'fetch', 'request', 'axios'],
  'http': ['网络请求', 'fetch', 'get', 'post'],
  '请求': ['http', '网络请求', 'fetch'],
  '布局': ['column', 'row', 'flex', 'grid', 'layout'],
  'column': ['布局', '列布局', '垂直'],
  'row': ['布局', '行布局', '水平'],
  '组件': ['component', 'view', 'ui'],
  'component': ['组件', 'custom'],
};

const STOP_WORDS = [
  '如何', '怎么', '怎样', '怎么样',
  '实现', '使用', '用', '进行', '做',
  '请', '问', '什么', '哪些', '哪个',
  '是', '的', '了', '吗', '呢',
  '能', '可以', '会', '要', '需要',
  '写', '添加', '加入', '设置',
  '一个', '一些', '这个', '那个',
  'how', 'to', 'do', 'i', 'we', 'you',
  'what', 'which', 'can', 'will',
];

const PHRASE_STOP_WORDS = new Set([
  ...STOP_WORDS,
  '区别',
  '介绍',
  '说明',
]);

const API_PATTERNS = [
  /@[A-Z][a-zA-Z]*/g,
  /\b[A-Z][a-zA-Z]+\b/g,
  /\b[a-z]+\.[a-zA-Z]+\b/g,
  /\b\w+\.json5?\b/g,
];

const INTENT_KEYWORDS: Record<QueryIntent, string[]> = {
  how_to: ['如何', '怎么', '怎样', '实现', '开发', '创建', '制作', 'build', 'create'],
  api_usage: ['API', '接口', '方法', '函数', '调用', '用法', '使用', 'use'],
  concept: ['是什么', '概念', '定义', '说明', '概述', '介绍', 'what', 'is'],
  compare: ['区别', '差异', '对比', '比较', 'vs', 'compare'],
  example: ['示例', '例子', '代码', 'demo', '样例', '实例', 'example', 'code'],
  error: ['错误', '异常', '问题', '报错', '失败', '不生效', '不行', 'error', 'fail'],
  parameter: ['参数', '属性', '配置', '选项', 'options', 'params', 'arguments'],
  generic: [],
};

export function normalizeQuery(question: string): NormalizedQuery {
  const apiTerms = extractApiTerms(question);
  const withoutStopWords = removeStopWords(question);
  const normalized = preserveAndLowercase(withoutStopWords, apiTerms);
  const tokens = tokenize(normalized, apiTerms);
  const phrases = extractPhrases(normalized, apiTerms);
  const intent = detectIntent(question);
  const expandedTerms = expandSynonyms(tokens);

  return {
    raw: question,
    normalized,
    tokens,
    phrases,
    apiTerms,
    intent,
    expandedTerms,
  };
}

function extractApiTerms(text: string): string[] {
  const terms = new Set<string>();
  for (const pattern of API_PATTERNS) {
    const matches = text.match(pattern);
    matches?.forEach(match => terms.add(match));
  }
  return Array.from(terms);
}

function removeStopWords(text: string): string {
  let result = text;
  for (const word of STOP_WORDS) {
    const asciiOnly = /^[a-z]+$/i.test(word);
    if (asciiOnly) {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(regex, ' ');
      continue;
    }
    result = result.replace(new RegExp(word, 'g'), ' ');
  }
  return result.replace(/\s+/g, ' ').trim();
}

function preserveAndLowercase(text: string, apiTerms: string[]): string {
  let result = text.toLowerCase();
  for (const term of apiTerms) {
    const lowerTerm = term.toLowerCase();
    const regex = new RegExp(`\\b${lowerTerm}\\b`, 'g');
    result = result.replace(regex, term);
  }
  return result;
}

function tokenize(text: string, apiTerms: string[]): string[] {
  const tokens = new Set<string>();
  const spaceTokens = text
    .split(/\s+/)
    .map(token => token.trim().toLowerCase())
    .filter(token => token.length >= 2);

  spaceTokens.forEach(token => tokens.add(token));
  apiTerms.forEach(term => tokens.add(term.toLowerCase()));

  const chineseText = text.replace(/[^\u4e00-\u9fa5]/g, '');
  for (let index = 0; index < chineseText.length; index++) {
    for (let length = 2; length <= 4 && index + length <= chineseText.length; length++) {
      const ngram = chineseText.slice(index, index + length);
      if (!PHRASE_STOP_WORDS.has(ngram)) {
        tokens.add(ngram);
      }
    }
  }

  return Array.from(tokens);
}

function extractPhrases(text: string, apiTerms: string[]): string[] {
  const phrases = new Set<string>();
  const chineseText = text.replace(/[^\u4e00-\u9fa5]/g, '');

  for (let index = 0; index < chineseText.length; index++) {
    for (let length = 2; length <= 4 && index + length <= chineseText.length; length++) {
      const phrase = chineseText.slice(index, index + length);
      if (!PHRASE_STOP_WORDS.has(phrase) && phrase.length >= 3) {
        phrases.add(phrase.toLowerCase());
      }
    }
  }

  const englishWords = text
    .split(/\s+/)
    .map(word => word.trim())
    .filter(word => word.length >= 3 && !PHRASE_STOP_WORDS.has(word.toLowerCase()));

  for (let index = 0; index < englishWords.length - 1; index++) {
    phrases.add(englishWords.slice(index, index + 2).join(' ').toLowerCase());
  }

  apiTerms.forEach(term => {
    if (term.length >= 3) {
      phrases.add(term.toLowerCase());
    }
  });

  return Array.from(phrases).slice(0, 20);
}

function detectIntent(text: string): QueryIntent {
  const textLower = text.toLowerCase();
  const scores: Record<QueryIntent, number> = {
    how_to: 0,
    api_usage: 0,
    concept: 0,
    compare: 0,
    example: 0,
    error: 0,
    parameter: 0,
    generic: 0,
  };

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    for (const keyword of keywords) {
      if (textLower.includes(keyword.toLowerCase())) {
        scores[intent as QueryIntent]++;
      }
    }
  }

  let maxScore = 0;
  let detectedIntent: QueryIntent = 'generic';
  for (const [intent, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      detectedIntent = intent as QueryIntent;
    }
  }
  return detectedIntent;
}

function expandSynonyms(tokens: string[]): string[] {
  const expanded = new Set<string>();
  for (const token of tokens) {
    if (SYNONYM_MAP[token]) {
      SYNONYM_MAP[token].forEach(value => expanded.add(value.toLowerCase()));
    }
    for (const [key, values] of Object.entries(SYNONYM_MAP)) {
      if (token.includes(key) || key.includes(token)) {
        values.forEach(value => expanded.add(value.toLowerCase()));
      }
    }
  }
  return Array.from(expanded);
}

export function printNormalizedQuery(query: NormalizedQuery): void {
  console.log('=== Normalized Query ===');
  console.log(`Raw: ${query.raw}`);
  console.log(`Normalized: ${query.normalized}`);
  console.log(`Tokens: ${query.tokens.join(', ')}`);
  console.log(`API Terms: ${query.apiTerms.join(', ')}`);
  console.log(`Intent: ${query.intent}`);
  console.log(`Expanded: ${query.expandedTerms.join(', ')}`);
  console.log('========================');
}
