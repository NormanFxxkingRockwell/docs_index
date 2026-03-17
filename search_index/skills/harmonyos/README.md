# HarmonyOS 文档检索 Skill

> 智能检索 HarmonyOS 开发文档（46 个领域，51 个 API Kit，章节级精度）

---

## 快速开始

**AI Agent 执行流程**：
1. 用 LLM 判断问题是否与 HarmonyOS 相关
2. 用 LLM 识别涉及的领域
3. 调用 `retriever.search()` 检索文档
4. 用 LLM 重排和验证结果

**输入**：`"如何在 HarmonyOS 中发起 HTTP 请求？"`

**输出**：
```json
{
  "success": true,
  "domains": ["network"],
  "documents": [{"doc_title": "使用 HTTP 访问网络", "path": "..."}]
}
```

---

## 工作流

```
用户问题 → 入口过滤 → 领域识别 → 多路检索 → 结果重排 → 答案校验
            ↓             ↓            ↓            ↓            ↓
          LLM           LLM      retriever.js      LLM          LLM
```

---

## 执行步骤

### 1. 入口过滤（LLM）

```javascript
const prompt = `判断问题是否与 HarmonyOS 相关：${question}`;
const isRelated = (await callLLM(prompt)).includes('相关');
```

### 2. 领域识别（LLM）

```javascript
const prompt = `识别问题涉及的领域：${question}\n可用领域：ui, network, database...`;
const domains = (await callLLM(prompt)).split(',').map(d => d.trim());
```

### 3. 文档检索（retriever.js）

```javascript
const retriever = require('./retriever.js');
const result = await retriever.search(domains, question);
```

### 4. 结果重排（LLM）

```javascript
const prompt = `对检索结果重排：${question}\n\n结果：${docs.map(d => d.doc_title).join('\n')}`;
const order = await callLLM(prompt);
```

### 5. 答案校验（LLM）

```javascript
const prompt = `验证文档是否回答问题：${question}`;
const valid = (await callLLM(prompt)).includes('是');
```

---

## 配置

### 缓存
- 目录：`.skill-cache/`
- TTL：24 小时
- 自动清理

### 领域关键词
见 `retriever.js` 中的 `domainKeywords` 常量

---

## 使用方式

### Git 子模块
```bash
git submodule add https://github.com/NormanFxxkingRockwell/docs_index.git
```

### 直接复制
```bash
cp -r docs_index/search_index/skills your-project/
```

---

## 完整示例

详见：`AGENT-EXAMPLE.md`

---

## 相关文档

| 文档 | 说明 |
|------|------|
| **AGENT-EXAMPLE.md** | AI Agent 完整集成示例（代码） |
| **retriever.js** | 文档检索工具（API） |

---

**版本**：v4.0 | **更新**：2026-03-17
