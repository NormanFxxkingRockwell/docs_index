# docs_index

HarmonyOS 文档索引项目，包含文档索引系统和 MCP Server。

> **⚠️ AI Agent 请注意**：请使用**最新发布版本**（如 `v1.0.0-20260212`），而不是 `master` 分支。master 是开发中的版本，可能与索引不匹配。
>

## 项目结构

```
docs_index/
├── docs/                      # HarmonyOS 官方文档
├── search_index/               # 文档索引
│   ├── master_map.json        # 总地图（领域映射）
│   ├── domains/               # 各领域索引
│   │   ├── network/
│   │   ├── ui/
│   │   └── ...
│   └── skills/
│       ├── harmonyos-doc-indexer.md
│       └── harmonyos-navigator.md
└── harmonyos-navigator-mcp/   # MCP Server (可选)
    ├── src/
    └── dist/
```

## 文档索引

索引系统用于检索 HarmonyOS 开发文档，包含：

- **总地图** (`master_map.json`)：46 个领域 + 51 个 API Kit 映射
- **领域索引**：各领域的文档结构化索引
- **导航 Skill**：AI Agent 使用的检索流程

## MCP Server

可选组件，用于让 AI Agent 自动检索 HarmonyOS 文档。

### 安装

```bash
cd harmonyos-navigator-mcp
npm install
npm run build
```

### 配置

在 MCP Client 配置中添加：

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

### 支持的 AI Agent

- Claude Desktop
- OpenCode
- Cursor
- Windsurf
- Roo Code
- 自定义 Agent (需支持 MCP)

## 快速开始

克隆仓库后，按照以下步骤初始化和运行：

### 1. 初始化子模块

HarmonyOS 文档作为 Git 子模块存储，首次克隆后需要初始化。

**重要**：docs 仓约 2GB+，必须使用浅克隆 + 指定 commit：

```bash
# 1. 初始化子模块（浅克隆，只拉最新 1 个 commit）
git submodule update --init --depth=1 --recursive

# 2. 检出与索引匹配的特定 commit（必须！否则会拉到最新版本，与索引不匹配）
cd docs && git checkout 60f80f86de5f7418ea4472b031c0b73e5918183e
```

**或一步到位**（推荐）：

```bash
# 仅初始化，不拉取任何文件
git submodule init

# 进入子模块，用浅克隆拉取特定 commit
cd docs && git init && git remote add origin https://gitcode.com/openharmony/docs.git && git fetch --depth=1 origin 60f80f86de5f7418ea4472b031c0b73e5918183e && git checkout FETCH_HEAD
```

### 2. 构建 MCP Server（如需使用 MCP 服务）

```bash
# 进入 MCP Server 目录
cd harmonyos-navigator-mcp

# 安装依赖
npm install

# 编译 TypeScript
npm run build
```

### 3. 验证安装

```bash
# 测试 MCP Server 是否正常运行
node dist/index.js
# 输出: HarmonyOS Navigator MCP Server running on stdio
```

---

## 目录结构

```
docs_index/
├── docs/                      # HarmonyOS 官方文档（子模块）
├── search_index/               # 文档索引
│   ├── master_map.json        # 总地图（46个领域 + 51个API Kit映射）
│   ├── domains/               # 各领域索引
│   │   ├── network/
│   │   ├── ui/
│   │   └── ...
│   └── skills/               # AI Agent 导航流程
├── harmonyos-navigator-mcp/   # MCP Server
│   ├── src/                  # 源代码
│   └── dist/                 # 编译输出
└── README.md
```

## 使用方式

### 方式一：直接使用文档检索

AI Agent 可直接读取 `search_index/` 目录下的索引文件：

- `master_map.json` - 总领域映射
- `domains/*/domain_index.json` - 各领域文档索引
- `domains/*/*.json` - 具体文档内容

### 方式二：使用 MCP Server

1. 配置 MCP Client（OpenCode/Claude Desktop/Cursor 等）
2. 调用 5 个工具进行完整工作流

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

### MCP Server 工具

| 工具 | 功能 |
|------|------|
| `harmonyos_entry_filter` | 判断问题是否与 HarmonyOS 相关 |
| `harmonyos_domain_detect` | 识别问题涉及的领域 |
| `harmonyos_search` | 检索开发文档和 API 参考 |
| `harmonyos_read_doc` | 读取文档详细内容 |
| `harmonyos_validate` | 验证检索结果是否正确 |

## 完整工作流

```
用户问题 → harmonyos_entry_filter → harmonyos_domain_detect → harmonyos_search → harmonyos_read_doc → harmonyos_validate → 输出答案
```

---

**重要**：使用浅克隆后，必须手动检出与索引匹配的特定 commit：

```bash
# 检出特定 commit（必须！确保与索引版本一致）
cd docs && git checkout 60f80f86de5f7418ea4472b031c0b73e5918183e
```

**为什么必须指定 commit**：
- docs 仓会持续更新，索引只与 `60f80f86de5f7418ea4472b031c0b73e5918183e` 匹配
- 拉取最新版本会导致索引失效
