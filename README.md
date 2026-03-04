# docs_index

HarmonyOS 文档索引项目，用于让 AI Agent 快速检索 HarmonyOS 开发文档。

> **⚠️ 版本提示**：请使用**最新发布版本**（如 `v1.0.0-20260212`），不要使用 `master` 分支。master 是开发版本，可能与索引不匹配。

---

## 🤖 AI Agent 使用指南

### 第一步：初始化文档子模块

```bash
# 进入子模块目录，用浅克隆拉取特定 commit（必须！确保与索引匹配）
cd docs && git init && git remote add origin https://gitcode.com/openharmony/docs.git && git fetch --depth=1 origin 60f80f86de5f7418ea4472b031c0b73e5918183e && git checkout FETCH_HEAD
```

### 第二步：选择使用方式

| 方式 | 适用场景 | 推荐度 |
|------|----------|--------|
| **方式一：直接检索** | WSL 环境 / 无需 MCP | ⭐⭐⭐ 推荐 |
| **方式二：MCP Server** | 原生环境 / 需要工具调用 | ⭐⭐ |

---

### 方式一：直接检索文档（推荐）

**核心文件**：`search_index/skills/harmonyos-navigator.md`

**执行流程**：

```
1. 读取导航指南 → search_index/skills/harmonyos-navigator.md
2. 入口过滤 → 用 LLM 判断问题是否与 HarmonyOS 相关
3. 领域识别 → 读取 master_map.json，识别问题涉及的领域
4. 多路检索 → 根据识别的领域，读取对应的 domain_index.json 和文档
5. 答案校验 → 验证检索结果是否正确
6. 输出答案 → 返回文档路径、摘要和代码示例
```

**关键原则**：
- 按照检索流程**动态、有条件**地读取文件
- 每一步只读取**当前步骤需要**的文件
- 不要一次性读取所有索引文件

---

### 方式二：使用 MCP Server

> **注意**：MCP Server 在 WSL 环境中可能存在路径问题，推荐使用方式一。

#### 安装与构建

```bash
cd harmonyos-navigator-mcp
npm install
npm run build
node dist/index.js  # 验证：输出 "HarmonyOS Navigator MCP Server running on stdio"
```

#### 配置 MCP Client

```json
{
  "mcpServers": {
    "harmonyos-navigator": {
      "command": "node",
      "args": ["path/to/harmonyos-navigator-mcp/dist/index.js"]
    }
  }
}
```

**支持的 AI Agent**：Claude Desktop、OpenCode、Cursor、Windsurf、Roo Code

#### MCP Server 工具

| 工具 | 功能 |
|------|------|
| `harmonyos_entry_filter` | 判断问题是否与 HarmonyOS 相关 |
| `harmonyos_domain_detect` | 识别问题涉及的领域 |
| `harmonyos_search` | 检索开发文档和 API 参考 |
| `harmonyos_read_doc` | 读取文档详细内容 |
| `harmonyos_validate` | 验证检索结果是否正确 |

---

## 项目结构

```
docs_index/
├── docs/                      # HarmonyOS 官方文档（Git 子模块）
├── search_index/               # 文档索引（核心）
│   ├── master_map.json        # 总地图：46 个领域 + 51 个 API Kit
│   ├── domains/               # 各领域索引
│   │   ├── network/
│   │   ├── ui/
│   │   └── ...
│   └── skills/
│       └── harmonyos-navigator.md  # AI Agent 检索流程指南
└── harmonyos-navigator-mcp/   # MCP Server（可选）
    ├── src/
    └── dist/
```

---

## 索引说明

索引系统包含：
- **46 个领域**：network、ui、database、graphics 等
- **51 个 API Kit**：完整的 API 参考文档映射
- **领域 ↔ Kit 双向映射**：支持从领域查 Kit，或从 Kit 查领域

---

## 重要提示

### 为什么必须指定 commit？

docs 仓会持续更新，索引只与特定 commit 匹配：

```bash
cd docs && git checkout 60f80f86de5f7418ea4472b031c0b73e5918183e
```

- 拉取最新版本会导致索引失效
- 索引与 `60f80f86de5f7418ea4472b031c0b73e5918183e` 完全匹配
