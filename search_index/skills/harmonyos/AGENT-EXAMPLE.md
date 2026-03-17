# AI Agent 使用示例

## 架构说明

**重要**：`retriever.js` 是纯工具库，不包含 LLM 逻辑。

**AI Agent 应该**：
1. 用自己的 LLM 能力执行入口过滤、领域识别、结果重排、答案校验
2. 调用 `retriever.search()` 进行文档检索

---

## 完整示例

```javascript
// AI Agent 代码
const retriever = require('./search_index/skills/harmonyos/retriever.js');

class HarmonyOSAgent {
  constructor() {
    // 领域关键词（参考 retriever.js 中的 domain-keywords.json）
    this.domains = {
      'ui': ['动效', '动画', '界面', '组件'],
      'network': ['dns', 'http', '网络', '请求'],
      'file-management': ['文件', '剪切板', '剪贴板']
      // ... 其他领域
    };
  }
  
  /**
   * Step 1: 入口过滤 - 使用 LLM
   */
  async entryFilter(question) {
    const prompt = `判断问题是否与 HarmonyOS/OpenHarmony 开发相关：
    
问题：${question}

相关标准：
- 涉及 HarmonyOS、OpenHarmony、ArkUI、ArkTS、Ability 等
- 不是 Android、iOS、Flutter、Python、Java 等其他平台

只回答：相关/不相关`;
    
    const response = await this.callLLM(prompt);
    return response.includes('相关') && !response.includes('不相关');
  }
  
  /**
   * Step 2: 领域识别 - 使用 LLM
   */
  async domainDetect(question) {
    const prompt = `识别以下问题涉及的 HarmonyOS 开发领域：

问题：${question}

可用领域：${Object.keys(this.domains).join(', ')}

只返回领域名称，用逗号分隔。例如：ui, network`;
    
    const response = await this.callLLM(prompt);
    const domains = response.split(/[,,]/)
      .map(d => d.trim().toLowerCase())
      .filter(d => d.length > 0 && this.domains[d])
      .slice(0, 3);
    
    return domains.length > 0 ? domains : ['network'];
  }
  
  /**
   * Step 3: 文档检索 - 调用 retriever.js
   */
  async searchDocuments(domains, question) {
    // 检查缓存
    const cached = retriever.getFromCache('search', { domains, question });
    if (cached) return cached;
    
    // 调用检索工具
    const result = await retriever.search(domains, question);
    
    // 缓存结果
    retriever.saveToCache('search', { domains, question }, result);
    
    return result.documents;
  }
  
  /**
   * Step 4: LLM 重排
   */
  async rerank(question, documents) {
    if (documents.length === 0) return [];
    
    const prompt = `对以下检索结果进行重排，使其更好地回答用户问题：

用户问题：${question}

检索结果（前 10 篇）：
${documents.slice(0, 10).map((doc, i) => 
  `${i + 1}. ${doc.doc_title}${doc.section_title ? ` - ${doc.section_title}` : ''}`
).join('\n')}

请返回重排后的文档序号列表（用逗号分隔），最相关的排在前面。
例如：3,1,5,2,4,6,7,8,9,10

只返回序号列表：`;
    
    const response = await this.callLLM(prompt);
    const order = response.split(/[,,\n]/)
      .map(s => parseInt(s.trim()))
      .filter(n => !isNaN(n) && n > 0 && n <= documents.length);
    
    // 按 LLM 排序
    const reranked = order.map(i => documents[i - 1]).filter(Boolean);
    
    // 添加未排序的文档
    const ordered = new Set(order);
    documents.forEach((doc, i) => {
      if (!ordered.has(i + 1)) reranked.push(doc);
    });
    
    return reranked.slice(0, 10);
  }
  
  /**
   * Step 5: 答案校验 - 使用 LLM
   */
  async validate(question, documents) {
    const prompt = `验证检索到的文档是否能回答用户问题：

用户问题：${question}

检索到的文档（前 3 篇）：
${documents.slice(0, 3).map((doc, i) => 
  `${i + 1}. ${doc.doc_title}${doc.section_title ? ` - ${doc.section_title}` : ''}
   摘要：${doc.summary?.slice(0, 100)}`
).join('\n\n')}

请评估：
1. 这些文档是否能回答用户问题？（是/否）
2. 置信度（0-1）
3. 简要说明理由

只返回：是/否，置信度：0.x，理由`;
    
    const response = await this.callLLM(prompt);
    const isValid = response.includes('是');
    const confidenceMatch = response.match(/置信度 [::]\s*(0\.\d+)/);
    const confidence = confidenceMatch ? parseFloat(confidenceMatch[1]) : 0.5;
    
    return { isValid, confidence, reason: response.trim() };
  }
  
  /**
   * 主流程
   */
  async answer(question) {
    console.log(`收到问题：${question}\n`);
    
    // Step 1: 入口过滤
    const isRelated = await this.entryFilter(question);
    console.log('Step 1: 入口过滤', isRelated ? '相关' : '不相关');
    if (!isRelated) {
      return { error: '非 HarmonyOS 问题' };
    }
    
    // Step 2: 领域识别
    const domains = await this.domainDetect(question);
    console.log('Step 2: 领域识别', domains);
    
    // Step 3: 文档检索
    const documents = await this.searchDocuments(domains, question);
    console.log('Step 3: 文档检索', `${documents.length} 篇`);
    
    // Step 4: LLM 重排
    const reranked = await this.rerank(question, documents);
    console.log('Step 4: LLM 重排', `${reranked.length} 篇`);
    
    // Step 5: 答案校验
    const validation = await this.validate(question, reranked);
    console.log('Step 5: 答案校验', validation);
    
    return {
      success: validation.isValid,
      domains,
      documents: reranked,
      confidence: validation.confidence
    };
  }
  
  /**
   * 底层 LLM 调用（使用 Qwen Code）
   */
  async callLLM(prompt) {
    // AI Agent 使用自己的 LLM 能力
    // 例如：调用 Qwen Code、GPT-4、Claude 等
    return await qwen3_5_plus(prompt);
  }
}

// 使用示例
const agent = new HarmonyOSAgent();

// 问题 1: 动效
const result1 = await agent.answer('鸿蒙上动效怎么写');
console.log('\n=== 结果 ===');
console.log(result1.documents.map(d => d.doc_title));

// 问题 2: DNS
const result2 = await agent.answer('DNS 鸿蒙上接口怎么适配');
console.log(result2.documents.map(d => d.doc_title));

// 问题 3: 剪切板
const result3 = await agent.answer('鸿蒙上剪切板怎么使用');
console.log(result3.documents.map(d => d.doc_title));
```

---

## 简化版（直接使用）

```javascript
const retriever = require('./search_index/skills/harmonyos/retriever.js');

// AI Agent 直接用 LLM 识别领域
const domains = ['network']; // 或用 LLM 识别

// 调用检索
const result = await retriever.search(domains, 'DNS 怎么配置');

// 用 LLM 重排
const reranked = await llmRerank(question, result.documents);

// 用 LLM 验证
const valid = await llmValidate(question, reranked);

console.log(reranked);
```

---

## 缓存使用

```javascript
const retriever = require('./search_index/skills/harmonyos/retriever.js');

// 自动缓存
const result1 = await retriever.search(['network'], 'DNS 配置');
// 首次调用：检索并缓存

const result2 = await retriever.search(['network'], 'DNS 配置');
// 24 小时内：直接使用缓存

// 手动清理缓存
retriever.clearCache();
```

---

## 领域关键词参考

```javascript
const retriever = require('./search_index/skills/harmonyos/retriever.js');

// 获取领域关键词（供 AI Agent 参考）
const keywords = retriever.getDomainKeywords();
console.log(keywords);

// 简单匹配（AI Agent 应该用 LLM）
const matched = retriever.matchDomains('DNS 怎么配置');
console.log(matched); // ['network']
```

---

## 核心原则

1. **LLM 是 AI Agent 的核心能力** - 不要注入到 retriever.js
2. **retriever.js 是纯工具** - 只负责检索和缓存
3. **职责分离** - AI Agent 控制流程，retriever 提供数据
4. **灵活可扩展** - AI Agent 可以替换任何步骤

---

## 总结

| 组件 | 职责 | 实现者 |
|-----|------|--------|
| **入口过滤** | 判断问题相关性 | AI Agent（LLM） |
| **领域识别** | 识别涉及领域 | AI Agent（LLM） |
| **文档检索** | 检索相关文档 | retriever.js |
| **结果重排** | 智能排序结果 | AI Agent（LLM） |
| **答案校验** | 验证答案质量 | AI Agent（LLM） |
| **缓存机制** | 避免重复检索 | retriever.js |
