// Tool 1: Entry Filter - 判断问题是否与 HarmonyOS 相关

export interface EntryFilterInput {
  question: string;
}

export interface EntryFilterOutput {
  is_harmonyos_related: boolean;
  confidence: number;
  reason: string;
}

// HarmonyOS 相关关键词
const HARMONYOS_KEYWORDS = [
  'harmonyos', 'openharmony', '鸿蒙', 'arkui', 'arkts',
  'ability', 'uability', 'stage模型', 'fa模型',
  'network kit', 'media kit', 'window', '窗口',
  '@ohos.', '@kit.', 'module.json5', 'bundle'
];

// 非 HarmonyOS 关键词（明确排除）
const NON_HARMONYOS_KEYWORDS = [
  'android', 'ios', 'iphone', 'android studio', 'xcode',
  'python', 'java', 'kotlin', 'swift', 'objective-c',
  'react', 'vue', 'angular', 'flutter', 'uniapp',
  '微信小程序', '支付宝小程序', '抖音小程序'
];

export function harmonyosEntryFilter(input: EntryFilterInput): EntryFilterOutput {
  const { question } = input;
  const questionLower = question.toLowerCase();
  
  // 检查是否包含非 HarmonyOS 关键词
  for (const keyword of NON_HARMONYOS_KEYWORDS) {
    if (questionLower.includes(keyword.toLowerCase())) {
      return {
        is_harmonyos_related: false,
        confidence: 0.95,
        reason: `问题涉及 ${keyword}，与 HarmonyOS 无关`
      };
    }
  }
  
  // 检查是否包含 HarmonyOS 相关关键词
  let matchCount = 0;
  for (const keyword of HARMONYOS_KEYWORDS) {
    if (questionLower.includes(keyword.toLowerCase())) {
      matchCount++;
    }
  }
  
  if (matchCount > 0) {
    const confidence = Math.min(0.95, 0.5 + matchCount * 0.15);
    return {
      is_harmonyos_related: true,
      confidence,
      reason: `问题涉及 HarmonyOS 相关内容（匹配 ${matchCount} 个关键词）`
    };
  }
  
  // 无法确定，但倾向于 HarmonyOS（因为用户主动询问）
  return {
    is_harmonyos_related: true,
    confidence: 0.6,
    reason: '问题可能与 HarmonyOS 相关，但匹配度较低'
  };
}
