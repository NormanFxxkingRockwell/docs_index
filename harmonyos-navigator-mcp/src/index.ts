// HarmonyOS Navigator MCP Server
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import * as z from 'zod/v4';

import { harmonyosEntryFilter } from './tools/entry-filter.js';
import { harmonyosDomainDetect } from './tools/domain-detect.js';
import { harmonyosSearch } from './tools/search.js';
import { harmonyosReadDoc } from './tools/read-doc.js';
import { harmonyosValidate } from './tools/validate.js';

// 创建 MCP Server
const server = new McpServer({
  name: 'harmonyos-navigator',
  version: '1.0.0',
});

// Tool 1: harmonyos_entry_filter
server.registerTool('harmonyos_entry_filter', {
  description: '判断问题是否与 HarmonyOS/OpenHarmony 相关，用于入口过滤',
  inputSchema: {
    question: z.string().describe('用户问题'),
  },
}, async ({ question }) => {
  const result = harmonyosEntryFilter({ question });
  return {
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

// Tool 2: harmonyos_domain_detect
server.registerTool('harmonyos_domain_detect', {
  description: '识别问题涉及的 HarmonyOS 开发领域',
  inputSchema: {
    question: z.string().describe('用户问题'),
  },
}, async ({ question }) => {
  const result = harmonyosDomainDetect({ question });
  return {
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

// Tool 3: harmonyos_search
server.registerTool('harmonyos_search', {
  description: '检索 HarmonyOS 开发文档和 API 参考',
  inputSchema: {
    domains: z.array(z.string()).describe('识别的领域列表'),
    question: z.string().describe('用户问题（用于关键词匹配）'),
    include_api: z.boolean().optional().describe('是否包含 API 参考'),
  },
}, async ({ domains, question, include_api }) => {
  const result = harmonyosSearch({ domains, question, include_api });
  return {
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

// Tool 4: harmonyos_read_doc
server.registerTool('harmonyos_read_doc', {
  description: '读取指定文档的详细内容',
  inputSchema: {
    path: z.string().describe('文档路径（relative_path 字段）'),
    max_lines: z.number().optional().describe('最大读取行数'),
  },
}, async ({ path, max_lines }) => {
  const result = harmonyosReadDoc({ path, max_lines });
  return {
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

// Tool 5: harmonyos_validate
server.registerTool('harmonyos_validate', {
  description: '验证检索到的文档是否正确回答了问题',
  inputSchema: {
    question: z.string().describe('原始问题'),
    documents: z.array(z.object({
      title: z.string(),
      content: z.string(),
    })).describe('待验证的文档列表'),
  },
}, async ({ question, documents }) => {
  const result = harmonyosValidate({ question, documents });
  return {
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

// 启动服务器
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('HarmonyOS Navigator MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
