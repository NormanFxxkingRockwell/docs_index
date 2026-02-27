// Tool 5: Validate - 答案校验

export interface ValidateInput {
  question: string;
  documents: {
    title: string;
    content: string;
  }[];
}

export interface ValidateOutput {
  is_valid: boolean;
  match_score: number;
  reason: string;
  issues: string[];
  suggestions: string[];
}

export function harmonyosValidate(input: ValidateInput): ValidateOutput {
  const { question, documents } = input;
  const questionLower = question.toLowerCase();
  
  // 提取问题关键词
  const questionKeywords = questionLower
    .replace(/[^\w\u4e00-\u9fa5]/g, ' ')
    .split(/\s+/)
    .filter(kw => kw.length > 1);
  
  if (documents.length === 0) {
    return {
      is_valid: false,
      match_score: 0,
      reason: '未检索到任何文档',
      issues: ['文档列表为空'],
      suggestions: ['请重新检索相关领域']
    };
  }
  
  let totalMatchScore = 0;
  const issues: string[] = [];
  
  for (const doc of documents) {
    const docText = (doc.title + ' ' + doc.content).toLowerCase();
    
    // 计算当前文档的匹配分数
    let docMatchCount = 0;
    for (const keyword of questionKeywords) {
      if (docText.includes(keyword)) {
        docMatchCount++;
      }
    }
    
    const docScore = questionKeywords.length > 0 
      ? docMatchCount / questionKeywords.length 
      : 0;
    
    totalMatchScore += docScore;
  }
  
  const avgScore = documents.length > 0 
    ? totalMatchScore / documents.length 
    : 0;
  
  // 判断是否有效
  const isValid = avgScore >= 0.1;
  
  if (avgScore < 0.1) {
    issues.push('检索文档与问题相关性过低');
  }
  
  if (avgScore < 0.3) {
    issues.push('可能需要补充更多相关领域的文档');
  }
  
  const suggestions: string[] = [];
  if (!isValid) {
    suggestions.push('建议更换检索关键词');
    suggestions.push('考虑扩展检索领域');
  }
  
  return {
    is_valid: isValid,
    match_score: Math.round(avgScore * 100) / 100,
    reason: isValid 
      ? `文档与问题相关性评分: ${avgScore.toFixed(2)}`
      : `文档与问题相关性过低: ${avgScore.toFixed(2)}`,
    issues,
    suggestions
  };
}
