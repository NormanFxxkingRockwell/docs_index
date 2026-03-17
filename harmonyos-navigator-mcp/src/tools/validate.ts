// Tool 5: Validate - 答案覆盖度验证

export interface ValidateInput {
  question: string;
  documents: {
    title: string;
    content: string;
    section_title?: string;
    line_start?: number;
    line_end?: number;
  }[];
}

export interface ValidateOutput {
  is_valid: boolean;
  match_score: number;
  coverage_score: number;
  reason: string;
  issues: string[];
  suggestions: string[];
  covered_topics: string[];
  missing_topics: string[];
}

/**
 * 意图覆盖度验证器
 * 
 * 从"关键词重叠率"升级为"答案覆盖度验证"，核心变化：
 * 1. 不再只看关键词匹配率，而是验证是否覆盖了用户意图
 * 2. 识别问题类型（how_to/api/concept/compare 等）并针对性验证
 * 3. 检查是否有可引用的原文区间
 * 4. 输出覆盖的主题和缺失的主题，便于调试
 */
export function harmonyosValidate(input: ValidateInput): ValidateOutput {
  const { question, documents } = input;
  
  if (documents.length === 0) {
    return {
      is_valid: false,
      match_score: 0,
      coverage_score: 0,
      reason: '未检索到任何文档',
      issues: ['文档列表为空'],
      suggestions: ['请重新检索相关领域'],
      covered_topics: [],
      missing_topics: extractQuestionTopics(question)
    };
  }
  
  // 识别问题意图
  const intent = detectQuestionIntent(question);
  
  // 提取问题主题
  const questionTopics = extractQuestionTopics(question);
  
  // 验证每个文档的覆盖度
  const docResults = documents.map(doc => validateDocumentCoverage(doc, question, intent, questionTopics));
  
  // 综合评分
  const bestDoc = docResults.reduce((best, current) => 
    current.totalScore > best.totalScore ? current : best
  );
  
  const matchScore = bestDoc.matchScore;
  const coverageScore = bestDoc.coverageScore;
  const totalScore = bestDoc.totalScore;
  
  // 判断是否有效（综合评分 >= 0.4）
  const isValid = totalScore >= 0.4;
  
  const issues: string[] = [];
  const suggestions: string[] = [];
  
  // 意图覆盖检查
  if (intent === 'how_to' && !bestDoc.hasActionSteps) {
    issues.push('问题询问"如何做"，但文档缺少具体步骤说明');
    suggestions.push('查找包含"步骤"、"实现"、"创建"等关键词的文档');
  }
  
  if (intent === 'api_usage' && !bestDoc.hasApiDetails) {
    issues.push('问题询问 API 用法，但文档缺少 API 详细说明');
    suggestions.push('查找包含 API 签名、参数说明、示例代码的文档');
  }
  
  if (intent === 'compare' && !bestDoc.hasComparison) {
    issues.push('问题询问对比/区别，但文档缺少对比内容');
    suggestions.push('查找包含"对比"、"差异"、"区别"的文档');
  }
  
  if (intent === 'concept' && !bestDoc.hasConceptExplanation) {
    issues.push('问题询问概念，但文档缺少概念解释');
    suggestions.push('查找概述、简介类文档');
  }
  
  // 覆盖率过低
  if (coverageScore < 0.3) {
    issues.push('文档覆盖的问题主题过少');
    suggestions.push('考虑扩展检索领域或更换关键词');
  }
  
  // 缺少可引用区间
  if (!bestDoc.hasCitableSection) {
    issues.push('缺少可精确定位的章节区间');
    suggestions.push('使用章节级检索获取更精确的结果');
  }
  
  // 匹配度过低
  if (matchScore < 0.3) {
    issues.push('文档与问题的关键词匹配度过低');
  }
  
  if (!isValid) {
    suggestions.push('建议重新检索相关领域');
    suggestions.push('考虑使用同义词扩展查询');
  }
  
  return {
    is_valid: isValid,
    match_score: Math.round(matchScore * 100) / 100,
    coverage_score: Math.round(coverageScore * 100) / 100,
    reason: buildValidationReason(intent, totalScore, matchScore, coverageScore, bestDoc),
    issues,
    suggestions,
    covered_topics: bestDoc.coveredTopics,
    missing_topics: questionTopics.filter(t => !bestDoc.coveredTopics.includes(t))
  };
}

interface DocValidationResult {
  matchScore: number;
  coverageScore: number;
  totalScore: number;
  coveredTopics: string[];
  hasActionSteps: boolean;
  hasApiDetails: boolean;
  hasComparison: boolean;
  hasConceptExplanation: boolean;
  hasCitableSection: boolean;
}

function detectQuestionIntent(question: string): 'how_to' | 'api_usage' | 'concept' | 'compare' | 'example' | 'error' | 'parameter' | 'generic' {
  const q = question.toLowerCase();
  
  if (/(如何 | 怎么 | 怎样 | 实现 | 创建 | 制作|build|create)/.test(q)) return 'how_to';
  if (/(API|接口 | 方法 | 函数 | 调用 | 用法|use)/.test(q)) return 'api_usage';
  if (/(是什么 | 概念 | 定义 | 说明 | 概述 | 介绍|what|is)/.test(q)) return 'concept';
  if (/(区别 | 差异 | 对比 | 比较|vs|compare)/.test(q)) return 'compare';
  if (/(示例 | 例子 | 代码|demo|样例 | 实例|example|code)/.test(q)) return 'example';
  if (/(错误 | 异常 | 问题 | 报错 | 失败 | 不生效 | 不行|error|fail)/.test(q)) return 'error';
  if (/(参数 | 属性 | 配置 | 选项|options|params|arguments)/.test(q)) return 'parameter';
  
  return 'generic';
}

function extractQuestionTopics(question: string): string[] {
  const topics: string[] = [];
  
  // 提取 API 术语（@开头、大驼峰、方法调用等）
  const apiMatches = question.match(/@[A-Z][a-zA-Z]*|\b[A-Z][a-zA-Z]+\b|\b[a-z]+\.[a-zA-Z]+\b/g);
  if (apiMatches) {
    topics.push(...apiMatches.map(t => t.toLowerCase()));
  }
  
  // 提取中文关键词（2-4 字）
  const chineseMatches = question.match(/[\u4e00-\u9fa5]{2,4}/g);
  if (chineseMatches) {
    const stopWords = new Set(['如何', '怎么', '怎样', '实现', '使用', '什么', '哪些', '哪个', '请', '问']);
    const filtered = chineseMatches.filter(w => !stopWords.has(w));
    topics.push(...filtered.map(t => t.toLowerCase()));
  }
  
  // 去重
  return Array.from(new Set(topics));
}

function validateDocumentCoverage(
  doc: ValidateInput['documents'][0],
  question: string,
  intent: string,
  questionTopics: string[]
): DocValidationResult {
  const docText = (doc.title + ' ' + (doc.section_title || '') + ' ' + doc.content).toLowerCase();
  
  // 1. 匹配分数：关键词命中率
  let matchCount = 0;
  const coveredTopics: string[] = [];
  for (const topic of questionTopics) {
    if (docText.includes(topic)) {
      matchCount++;
      coveredTopics.push(topic);
    }
  }
  const matchScore = questionTopics.length > 0 ? matchCount / questionTopics.length : 0;
  
  // 2. 覆盖分数：根据意图检查特定内容
  let coverageScore = 0;
  let hasActionSteps = false;
  let hasApiDetails = false;
  let hasComparison = false;
  let hasConceptExplanation = false;
  
  if (intent === 'how_to') {
    hasActionSteps = /(步骤 | 流程 | 实现 | 创建 | 配置 | 设置|1\.|2\.|第一步 | 第二步)/.test(docText);
    coverageScore = hasActionSteps ? 0.8 : 0.3;
  } else if (intent === 'api_usage') {
    hasApiDetails = /(参数 | 返回值 | 签名|@|function|method|interface|class)/.test(docText);
    coverageScore = hasApiDetails ? 0.8 : 0.3;
  } else if (intent === 'compare') {
    hasComparison = /(对比 | 差异 | 区别|vs|不同 | 优势 | 劣势 | 对比表)/.test(docText);
    coverageScore = hasComparison ? 0.9 : 0.2;
  } else if (intent === 'concept') {
    hasConceptExplanation = /(概述 | 简介 | 概念 | 定义 | 是 | 用于 | 作用 | 功能)/.test(docText);
    coverageScore = hasConceptExplanation ? 0.8 : 0.3;
  } else if (intent === 'example') {
    const hasExample = /(示例 | 例子 | 代码|demo|\`\`\`|<!-- @\[)/.test(docText);
    coverageScore = hasExample ? 0.9 : 0.2;
  } else if (intent === 'error') {
    const hasErrorInfo = /(错误 | 异常|bug|fix|解决 | 排查 | 原因 | 问题)/.test(docText);
    coverageScore = hasErrorInfo ? 0.8 : 0.3;
  } else if (intent === 'parameter') {
    const hasParamInfo = /(参数 | 属性 | 配置 | 选项 | 默认值 | 必填 | 可选)/.test(docText);
    coverageScore = hasParamInfo ? 0.8 : 0.3;
  } else {
    coverageScore = matchScore;
  }
  
  // 3. 是否有可引用的章节区间
  const hasCitableSection = !!(doc.line_start && doc.line_end && doc.line_end > doc.line_start);
  
  // 4. 综合分数（匹配分 40% + 覆盖分 60%）
  const totalScore = matchScore * 0.4 + coverageScore * 0.6;
  
  return {
    matchScore,
    coverageScore,
    totalScore,
    coveredTopics,
    hasActionSteps,
    hasApiDetails,
    hasComparison,
    hasConceptExplanation,
    hasCitableSection
  };
}

function buildValidationReason(
  intent: string,
  totalScore: number,
  matchScore: number,
  coverageScore: number,
  docResult: DocValidationResult
): string {
  const intentNames: Record<string, string> = {
    how_to: '操作类',
    api_usage: 'API 用法类',
    concept: '概念类',
    compare: '对比类',
    example: '示例类',
    error: '排错类',
    parameter: '参数类',
    generic: '通用类'
  };
  
  const intentName = intentNames[intent] || '通用类';
  
  if (totalScore >= 0.7) {
    return `${intentName}问题验证通过：匹配度${(matchScore * 100).toFixed(0)}%，覆盖度${(coverageScore * 100).toFixed(0)}%，覆盖了${docResult.coveredTopics.length}个主题`;
  } else if (totalScore >= 0.4) {
    return `${intentName}问题基本覆盖：匹配度${(matchScore * 100).toFixed(0)}%，覆盖度${(coverageScore * 100).toFixed(0)}%，建议补充更多相关文档`;
  } else {
    return `${intentName}问题覆盖不足：匹配度${(matchScore * 100).toFixed(0)}%，覆盖度${(coverageScore * 100).toFixed(0)}%，需要重新检索`;
  }
}
