# HarmonyOS 文档导航 Skill - 外部调用指南

## 概述

这个 Skill 提供了完整的 HarmonyOS 文档检索能力，外部 AI Agent 可以直接调用。

**核心能力**：
- 🔍 智能检索 HarmonyOS 开发文档
- 📚 支持 46 个领域、51 个 API Kit
- 🎯 章节级精准定位
- 🤖 LLM 集成（入口过滤、领域识别、答案校验）

---

## 快速开始

### 方式 1: Git 子模块（推荐）

```bash
# 在你的项目中添加 docs_index 作为子模块
git submodule add https://github.com/NormanFxxkingRockwell/docs_index.git

# 初始化
cd docs_index
git submodule update --init
```

**AI Agent 执行**：
```
读取 docs_index/search_index/skills/harmonyos/doc-navigator.md
按步骤执行检索流程
```

### 方式 2: 直接下载

```bash
# 下载最新 Release
wget https://github.com/NormanFxxkingRockwell/docs_index/releases/download/v1.0.0/docs-index.zip
unzip docs-index.zip
```

---

## 调用接口

### 输入

**用户问题**（字符串）：
```
"如何在 HarmonyOS 中发起 HTTP 请求？"
```

### 输出

**检索结果**（对象）：
```json
{
  "success": true,
  "domains": ["network"],
  "documents": [
    {
      "doc_id": "network-http-guide",
      "doc_title": "使用 HTTP 访问网络",
      "path": "../../docs/zh-cn/application-dev/network/http.md",
      "summary": "介绍了如何使用@ohos.net.http 模块发起 HTTP 请求",
      "relevance": 0.95
    }
  ]
}
```

---

## 执行流程

```
用户问题 → 入口过滤 → 领域识别 → 多路检索 → 答案校验 → 输出答案
```

详见：`doc-navigator.md`

---

## 配置说明

### LLM 配置

**文件**：`scripts/llm-config.json`

```json
{
  "provider": "deepseek",
  "apiKey": "sk-your-api-key",
  "model": "deepseek-chat"
}
```

---

## 常见问题

### Q: 如何在 Cursor 中使用？

**A**: 
1. 添加 docs_index 为 Git 子模块
2. Cursor AI 读取 `search_index/skills/harmonyos/doc-navigator.md`
3. 按步骤执行检索

### Q: 如何更新索引数据？

**A**:
```bash
cd docs_index
git pull origin main
```

---

**完整文档**：详见 `doc-navigator.md`
