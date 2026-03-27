# docs_index

HarmonyOS 文档索引与 MCP Server 仓库。

这个分支的默认使用方式是：

- 用户通过 `harmonyos-navigator-mcp` 安装 MCP Server
- AI 通过 MCP 工具检索文档
- 只有在 MCP 不可用时，才直接读取 `search_index/`

## 先说结论

如果你是用户，优先按下面步骤安装 MCP。

如果你是扫描仓库的 AI，优先使用这 5 个 MCP 工具，不要先直接遍历索引文件：

- `harmonyos_entry_filter`
- `harmonyos_domain_detect`
- `harmonyos_search`
- `harmonyos_read_doc`
- `harmonyos_validate`

推荐调用顺序：

```text
question
  -> harmonyos_entry_filter
  -> harmonyos_domain_detect
  -> harmonyos_search
  -> harmonyos_read_doc
  -> harmonyos_validate
  -> final answer
```

## 仓库内容

```text
docs_index/
├── docs/                      HarmonyOS 官方文档目录
├── search_index/              文档索引
├── harmonyos-navigator-mcp/   MCP Server
├── scripts/                   索引构建脚本
└── README.md
```

其中：

- `docs/` 是正文来源
- `search_index/` 是检索索引
- `harmonyos-navigator-mcp/` 是推荐入口

## 1. 准备 docs

`docs/` 必须固定到与当前索引匹配的 commit，否则检索路径和正文内容可能不一致。

推荐方式：

```bash
cd docs
git init
git remote add origin https://gitcode.com/openharmony/docs.git
git fetch --depth=1 origin 60f80f86de5f7418ea4472b031c0b73e5918183e
git checkout FETCH_HEAD
```

当前索引匹配的文档 commit：

`60f80f86de5f7418ea4472b031c0b73e5918183e`

## 2. 安装 MCP Server

```bash
cd harmonyos-navigator-mcp
npm install
npm run build
node dist/index.js
```

如果启动成功，会输出：

```text
HarmonyOS Navigator MCP Server running on stdio
```

## 3. 配置 MCP Client

推荐把 `cwd` 指到 `harmonyos-navigator-mcp`，这样服务可以稳定解析仓库根目录下的 `docs/` 和 `search_index/`。

通用配置示例：

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

当前仓库路径示例：

```json
{
  "mcpServers": {
    "harmonyos-navigator": {
      "command": "node",
      "args": [
        "/home/aoqiduan/projects/harmonyOS-mcp/harmonyOS-tool/mcp-in-wsl/docs_index/harmonyos-navigator-mcp/dist/index.js"
      ],
      "cwd": "/home/aoqiduan/projects/harmonyOS-mcp/harmonyOS-tool/mcp-in-wsl/docs_index/harmonyos-navigator-mcp"
    }
  }
}
```

支持 stdio MCP 的客户端理论上都可以接入，包括：

- Claude Desktop
- Cursor
- Windsurf
- Roo Code
- OpenCode
- 其他兼容 MCP 的 Agent / IDE

## 4. MCP 工具说明

| 工具 | 功能 |
|------|------|
| `harmonyos_entry_filter` | 判断问题是否属于 HarmonyOS / OpenHarmony |
| `harmonyos_domain_detect` | 识别问题涉及的开发领域 |
| `harmonyos_search` | 检索开发文档和 API 参考 |
| `harmonyos_read_doc` | 读取文档正文 |
| `harmonyos_validate` | 验证检索结果是否足以回答问题 |

## 5. 给 AI 的使用约定

如果你是 AI Agent，请遵守：

1. 先走 MCP 工具链，不要先直接扫 `search_index/` 或 `docs/`
2. 优先信任 `harmonyos_search` 返回的路径，再调用 `harmonyos_read_doc`
3. 回答前调用 `harmonyos_validate`
4. 只有在 MCP 不可用、工具调用失败、或需要调试索引时，才直接读取仓库文件

不推荐的方式：

- 直接遍历整个 `docs/`
- 一次性读取整个 `search_index/`
- 跳过 `domain_detect` 直接盲搜所有领域
- 不校验就直接回答

## 6. 什么时候才直接查索引

只有下面几种场景建议绕过 MCP：

- 你在开发或调试 MCP Server
- 你在重建索引
- 你在排查路径或数据不一致
- MCP Client 当前不可用

这时优先看的文件是：

1. `search_index/master_map.json`
2. `search_index/domains/*/domain_index.json`
3. `search_index/skills/harmonyos-navigator.md`

## 7. 为什么这个分支要优先走 MCP

因为这个分支的目标不是让 AI 自己发明检索流程，而是把检索流程固化为一组工具：

- 入口过滤
- 领域识别
- 文档检索
- 正文读取
- 结果校验

这样比直接读索引更稳定，也更容易被不同 MCP Client 复用。
