# HarmonyOS 文档检索 Skill

> 智能检索 HarmonyOS 开发文档（46 个领域，51 个 API Kit）

---

## 快速开始

**AI Agent 执行流程**：
```
1. 读取 SKILL.md 理解流程
2. 用 LLM 执行入口过滤、领域识别、结果重排、答案校验
3. 调用 retriever.search() 进行文档检索
4. 输出答案
```

**输入**：`"如何在 HarmonyOS 中发起 HTTP 请求？"`

**输出**：
```json
{
  "success": true,
  "domains": ["network"],
  "documents": [
    {
      "doc_title": "使用 HTTP 访问网络",
      "path": "../../docs/zh-cn/application-dev/network/http-request.md",
      "summary": "介绍如何使用 HTTP 发起网络请求..."
    }
  ]
}
```

---

## 工作流

```
用户问题 → 入口过滤 → 领域识别 → 多路检索 → 结果重排 → 答案校验 → 输出
            ↓             ↓            ↓            ↓            ↓
          LLM           LLM      retriever.js      LLM          LLM
```

---

## 执行步骤

### 1. 入口过滤（LLM）

**目的**：判断问题是否与 HarmonyOS 相关

**Prompt 示例**：
```
判断问题是否与 HarmonyOS/OpenHarmony 开发相关：

问题：{question}

相关标准：
- 涉及 HarmonyOS、OpenHarmony、ArkUI、ArkTS、Ability 等
- 不是 Android、iOS、Flutter、Python、Java 等其他平台

只回答：相关/不相关
```

**输出**：`{ "isRelated": true, "confidence": 0.95 }`

---

### 2. 领域识别（LLM）

**目的**：识别问题涉及的领域

**Prompt 示例**：
```
识别问题涉及的 HarmonyOS 开发领域：

问题：{question}

可用领域：ui, network, database, file-management, application-models, system, security, media, device, communication

只返回领域名称，用逗号分隔。
```

**输出**：`{ "domains": ["network"], "confidence": 0.9 }`

**领域关键词参考**：见 `domain-keywords.json`

---

### 3. 多路检索（retriever.js）

**目的**：检索相关文档

**调用方式**：
```javascript
const retriever = require('./retriever.js');
const result = await retriever.search(['network', 'ui'], question);
```

**输出**：
```json
{
  "documents": [...],
  "api_references": []
}
```

**检索范围**：
- `search_index/domains/{domain}/domain_index.json`
- `search_index/domains/{domain}/page_index.jsonl`（章节级索引）

---

### 4. 结果重排（LLM）

**目的**：用 LLM 智能排序检索结果

**Prompt 示例**：
```
对检索结果重排，使其更好回答用户问题：

问题：{question}

检索结果：
1. {doc1_title}
2. {doc2_title}
3. {doc3_title}

返回重排后的序号（逗号分隔）：
```

**输出**：重排后的文档列表

---

### 5. 答案校验（LLM）

**目的**：验证检索结果是否覆盖问题

**Prompt 示例**：
```
验证文档是否能回答问题：

问题：{question}

文档：
1. {doc1_title} - {doc1_summary}
2. {doc2_title} - {doc2_summary}

评估：
1. 是否覆盖（是/否）
2. 置信度（0-1）
3. 理由

只返回：是/否，置信度：0.x，理由
```

**输出**：`{ "isValid": true, "confidence": 0.85 }`

---

## 配置

### 缓存配置
- 缓存目录：`.skill-cache/`
- 缓存 TTL：24 小时
- 自动清理过期缓存

### 领域关键词
- 文件：`domain-keywords.json`
- 供 AI Agent 参考

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

### AI Agent 集成
详见：`AGENT-EXAMPLE.md`

---

## 相关文档

| 文档 | 说明 |
|------|------|
| **AGENT-EXAMPLE.md** | AI Agent 完整使用示例 |
| **USAGE.md** | 外部调用指南 |
| **doc-navigator.md** | 完整执行流程 |
| **domain-keywords.json** | 领域关键词参考 |

---

**版本**：v3.0 | **更新**：2026-03-17
