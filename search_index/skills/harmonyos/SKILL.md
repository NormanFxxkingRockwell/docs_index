# HarmonyOS 文档检索 Skill

> 智能检索 HarmonyOS 开发文档（46 个领域，51 个 API Kit）

---

## 快速开始

**AI Agent 执行**：
```bash
# 方式 1: 使用脚本助手（推荐）
node skills/harmonyos/run.js "你的问题"

# 方式 2: 按文档步骤执行
读取 SKILL.md → 理解流程 → 调用脚本 → 输出结果
```

**输入**：`"如何在 HarmonyOS 中发起 HTTP 请求？"`

**输出**：
```json
{
  "success": true,
  "domains": ["network"],
  "documents": [{"doc_title": "使用 HTTP 访问网络"}]
}
```

---

## 工作流

```
用户问题 → 入口过滤 → 领域识别 → 多路检索 → 答案校验 → 输出
            ↓             ↓            ↓           ↓
         run.js      run.js      run.js     run.js
```

---

## 执行步骤

### 1. 入口过滤
**调用**：`node run.js --step=filter "问题"`

**输出**：`{ "isRelated": true, "confidence": 0.95 }`

### 2. 领域识别
**调用**：`node run.js --step=domain "问题"`

**输出**：`{ "domains": ["network"], "confidence": 0.9 }`

### 3. 多路检索
**调用**：`node run.js --step=search --domain=network "问题"`

**输出**：`{ "documents": [...], "api_references": [...] }`

### 4. 答案校验
**调用**：`node run.js --step=validate "问题"`

**输出**：`{ "isValid": true, "confidence": 0.85 }`

---

## 脚本助手

### run.js - Skill 执行助手

```bash
# 完整流程
node run.js "你的问题"

# 单步执行
node run.js --step=filter "问题"
node run.js --step=domain "问题"
node run.js --step=search --domain=network "问题"
```

### llm-chat.js - LLM 调用

```bash
node ../../../scripts/llm-chat.js --prompt="你的 prompt"
```

---

## 配置

**LLM 配置**：编辑 `../../../scripts/llm-config.json`

**索引路径**：
- `../../../search_index/master_map.json`
- `../../../search_index/domains/{domain}/`

---

## 使用方式

### Git 子模块
```bash
git submodule add https://github.com/NormanFxxkingRockwell/docs_index.git
node docs_index/search_index/skills/harmonyos/run.js "问题"
```

### 直接复制
```bash
cp -r docs_index/search_index/skills your-project/
node your-project/skills/harmonyos/run.js "问题"
```

---

## 相关文档

| 文档 | 说明 |
|------|------|
| **USAGE.md** | 外部调用指南 |
| **doc-navigator.md** | 完整执行流程 |
| **../../../docs/skill-development.md** | 开发指南 |

---

**版本**：v2.0 | **更新**：2026-03-17
