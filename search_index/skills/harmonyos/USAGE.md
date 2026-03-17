# HarmonyOS 文档检索 Skill - 外部调用指南

## 概述

这个 Skill 提供了完整的 HarmonyOS 文档检索能力，外部 AI Agent 可以直接调用。

**核心能力**：
- 🔍 智能检索 HarmonyOS 开发文档
- 📚 支持 46 个领域、51 个 API Kit
- 🎯 章节级精准定位
- 🤖 LLM 集成

---

## 快速开始

### 方式 1: Git 子模块（推荐）

```bash
# 添加子模块
git submodule add https://github.com/NormanFxxkingRockwell/docs_index.git

# 初始化
cd docs_index
git submodule update --init

# 使用脚本助手
node docs_index/search_index/skills/harmonyos/run.js "你的问题"
```

### 方式 2: 直接复制

```bash
# 复制 skills 目录
cp -r docs_index/search_index/skills your-project/

# 使用
node your-project/skills/harmonyos/run.js "你的问题"
```

---

## 调用接口

### 输入
```
用户问题（字符串）："如何在 HarmonyOS 中发起 HTTP 请求？"
```

### 输出
```json
{
  "success": true,
  "domains": ["network"],
  "documents": [
    {
      "doc_title": "使用 HTTP 访问网络",
      "path": "../../docs/zh-cn/application-dev/network/http.md"
    }
  ]
}
```

---

## 使用方式

### 完整流程
```bash
node skills/harmonyos/run.js "如何在 HarmonyOS 中发起 HTTP 请求？"
```

### 单步执行

```bash
# Step 1: 入口过滤
node skills/harmonyos/run.js --step=filter "问题"

# Step 2: 领域识别
node skills/harmonyos/run.js --step=domain "问题"

# Step 3: 多路检索
node skills/harmonyos/run.js --step=search --domain=network "问题"

# Step 4: 答案校验
node skills/harmonyos/run.js --step=validate "问题"
```

### 通用运行器

```bash
# 从项目根目录调用
node scripts/skill-runner.js --skill=harmonyos "问题"

# 指定步骤
node scripts/skill-runner.js --skill=harmonyos --step=filter "问题"
```

---

## 配置

### LLM 配置

编辑 `scripts/llm-config.json`：
```json
{
  "provider": "deepseek",
  "apiKey": "sk-your-api-key",
  "model": "deepseek-chat"
}
```

---

## 执行流程

```
用户问题
    ↓
入口过滤（LLM/关键词）
    ↓
领域识别（读取 master_map.json）
    ↓
多路检索（domain_index + page_index）
    ↓
答案校验（LLM/规则）
    ↓
输出答案
```

详见：`SKILL.md`

---

## 常见问题

### Q: 如何在 Cursor 中使用？

**A**: 
1. 添加 docs_index 为 Git 子模块
2. Cursor AI 读取 `SKILL.md`
3. 调用 `run.js` 执行检索

### Q: 如何更新索引数据？

**A**:
```bash
cd docs_index
git pull origin main
```

### Q: 可以不用 LLM 吗？

**A**: 可以，使用关键词匹配（见 `SKILL.md`）

---

**详细文档**：详见 `SKILL.md` 和 `doc-navigator.md`
