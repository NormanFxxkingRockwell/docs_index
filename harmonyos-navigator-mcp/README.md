# HarmonyOS Navigator MCP Server

HarmonyOS 文档导航系统的 MCP Server 实现，用于 AI Agent 检索 HarmonyOS 开发文档和 API 参考。

## 功能

5 个工具：

| 工具 | 功能 |
|------|------|
| `harmonyos_entry_filter` | 判断问题是否与 HarmonyOS 相关 |
| `harmonyos_domain_detect` | 识别问题涉及的领域 |
| `harmonyos_search` | 检索开发文档和 API 参考 |
| `harmonyos_read_doc` | 读取文档详细内容 |
| `harmonyos_validate` | 验证检索结果是否正确 |

## 安装

```bash
cd harmonyos-navigator-mcp
npm install
npm run build
```

## 使用方法

### 1. 配置 MCP Client

在 Claude Desktop 或其他 MCP Client 配置中添加：

```json
{
  "mcpServers": {
    "harmonyos-navigator": {
      "command": "node",
      "args": ["D:/codeBase/ai-learning/doc_index_project/docs_index/harmonyos-navigator-mcp/dist/index.js"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

### 2. 使用工具

AI Agent 可以直接调用以下工具：

#### harmonyos_entry_filter

```json
{
  "name": "harmonyos_entry_filter",
  "arguments": {
    "question": "如何在 HarmonyOS 中发起 HTTP 请求？"
  }
}
```

#### harmonyos_domain_detect

```json
{
  "name": "harmonyos_domain_detect",
  "arguments": {
    "question": "如何在 HarmonyOS 中发起 HTTP 请求？"
  }
}
```

#### harmonyos_search

```json
{
  "name": "harmonyos_search",
  "arguments": {
    "domains": ["network"],
    "question": "HTTP 请求"
  }
}
```

#### harmonyos_read_doc

```json
{
  "name": "harmonyos_read_doc",
  "arguments": {
    "path": "zh-cn/application-dev/network/network-request.md",
    "max_lines": 100
  }
}
```

#### harmonyos_validate

```json
{
  "name": "harmonyos_validate",
  "arguments": {
    "question": "如何在 HarmonyOS 中发起 HTTP 请求？",
    "documents": [
      {
        "title": "网络请求",
        "content": "HTTP 请求相关内容..."
      }
    ]
  }
}
```

## 完整工作流

```
用户问题 → harmonyos_entry_filter → harmonyos_domain_detect → harmonyos_search → harmonyos_read_doc → harmonyos_validate → 输出答案
```

## 项目结构

```
harmonyos-navigator-mcp/
├── src/
│   ├── index.ts           # 入口文件
│   ├── tools/
│   │   ├── entry-filter.ts
│   │   ├── domain-detect.ts
│   │   ├── search.ts
│   │   ├── read-doc.ts
│   │   └── validate.ts
│   ├── utils/
│   │   └── file-reader.ts
│   └── data/
│       └── master_map.json
├── dist/                  # 编译输出
├── package.json
└── tsconfig.json
```

## 依赖

- @modelcontextprotocol/sdk
- zod
- zod-to-json-schema

---

## 兼容性

MCP (Model Context Protocol) 是开放标准，不只 Claude 能用，任何支持 MCP 的 AI Agent 都可以使用。

### 支持 MCP 的 AI Agent

| AI Agent | MCP 支持情况 |
|----------|-------------|
| **Claude Desktop** | ✅ 原生支持 |
| **OpenCode** | ✅ 支持 MCP |
| **Cursor** | ✅ 支持 MCP |
| **Windsurf** | ✅ 支持 MCP |
| **Roo Code** | ✅ 支持 MCP |
| **自定义 Agent** | ✅ 可集成 MCP SDK |

### OpenCode 配置

在 OpenCode 的配置中添加：

```json
{
  "mcpServers": {
    "harmonyos-navigator": {
      "command": "node",
      "args": ["D:/codeBase/ai-learning/doc_index_project/docs_index/harmonyos-navigator-mcp/dist/index.js"]
    }
  }
}
```

### 自定义 AI Agent (Python)

```python
from mcp import Client

# 连接 MCP Server
client = Client("harmonyos-navigator")

# 调用工具
result = client.call_tool("harmonyos_entry_filter", {
    "question": "如何在 HarmonyOS 中发起 HTTP 请求？"
})
```

### 自定义 AI Agent (Node.js)

```javascript
const { Client } = require('@modelcontextprotocol/sdk/client');

// 连接 MCP Server
const client = new Client({
  command: 'node',
  args: ['/path/to/harmonyos-navigator-mcp/dist/index.js']
});

// 调用工具
const result = await client.callTool('harmonyos_entry_filter', {
  question: '如何在 HarmonyOS 中发起 HTTP 请求？'
});
```

### 命令行直接调用

```bash
# 通过 stdio 交互
echo '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"harmonyos_entry_filter","arguments":{"question":"test"}}}' | node harmonyos-navigator-mcp/dist/index.js
```
