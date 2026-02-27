# docs_index

HarmonyOS 文档索引项目，包含文档索引系统和 MCP Server。

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

## Getting Started

After cloning the repository, initialize and update the submodule:

```bash
git submodule update --init --recursive
```
