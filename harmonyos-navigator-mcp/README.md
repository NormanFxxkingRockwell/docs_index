# HarmonyOS Navigator MCP Server

HarmonyOS / OpenHarmony 文档检索 MCP Server。

这个目录是当前仓库的主入口。对外使用时，优先接入 MCP，而不是让 AI 直接读取 `search_index/`。

## 工具

| 工具 | 功能 |
|------|------|
| `harmonyos_entry_filter` | 判断问题是否与 HarmonyOS / OpenHarmony 相关 |
| `harmonyos_domain_detect` | 识别问题涉及的领域 |
| `harmonyos_search` | 检索开发文档和 API 参考 |
| `harmonyos_read_doc` | 读取指定文档内容 |
| `harmonyos_validate` | 验证检索结果是否足够回答问题 |

## 安装

在仓库根目录先准备好 `docs/`，并固定到与索引匹配的 commit，然后再安装 MCP：

```bash
cd harmonyos-navigator-mcp
npm install
npm run build
```

启动验证：

```bash
node dist/index.js
```

成功日志：

```text
HarmonyOS Navigator MCP Server running on stdio
```

## 配置

推荐把 `cwd` 设置为 `harmonyos-navigator-mcp` 目录。

```json
{
  "mcpServers": {
    "harmonyos-navigator": {
      "command": "node",
      "args": [
        "/absolute/path/to/docs_index/harmonyos-navigator-mcp/dist/index.js"
      ],
      "cwd": "/absolute/path/to/docs_index/harmonyos-navigator-mcp"
    }
  }
}
```

原因：

- 服务会定位仓库根目录下的 `docs/`
- 服务会定位仓库根目录下的 `search_index/`

## 建议工作流

```text
question
  -> harmonyos_entry_filter
  -> harmonyos_domain_detect
  -> harmonyos_search
  -> harmonyos_read_doc
  -> harmonyos_validate
  -> final answer
```

## 给 AI 的约定

如果你是 AI Agent：

- 优先调用 MCP 工具，不要先直接读索引文件
- 优先使用 `harmonyos_search` 返回的路径
- 读取正文后再调用 `harmonyos_validate`
- 只有在 MCP 不可用或需要调试数据时，才直接查看仓库文件

## 目录结构

```text
harmonyos-navigator-mcp/
├── src/
│   ├── index.ts
│   ├── tools/
│   ├── utils/
│   └── data/
├── dist/
├── package.json
├── package-lock.json
└── tsconfig.json
```
