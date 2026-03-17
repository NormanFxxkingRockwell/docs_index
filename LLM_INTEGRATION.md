# LLM 集成指南

本文档详细介绍如何在 HarmonyOS 文档检索系统中集成 LLM 能力。

---

## 目录

1. [快速开始](#快速开始)
2. [配置说明](#配置说明)
3. [使用方式](#使用方式)
4. [性能优化](#性能优化)
5. [最佳实践](#最佳实践)
6. [故障排查](#故障排查)

---

## 快速开始

### 1. 配置 LLM

编辑配置文件 `scripts/llm-config.json`：

```json
{
  "provider": "deepseek",
  "apiKey": "sk-your-actual-api-key",
  "model": "deepseek-chat",
  "apiBase": "https://api.deepseek.com"
}
```

**重要**：将 `apiKey` 替换为你的实际 API Key。

### 2. 测试调用

```bash
node scripts/llm-chat.js --prompt="Hello, 请介绍一下 HarmonyOS"
```

### 3. 运行测试

```bash
node scripts/test-skill-llm.js
```

---

## 配置说明

### 配置文件位置

`scripts/llm-config.json`

### 配置项说明

| 配置项 | 说明 | 默认值 | 必填 |
|--------|------|--------|------|
| `provider` | LLM 提供商名称 | `deepseek` | 否 |
| `apiKey` | API Key | - | **是** |
| `model` | 模型名称 | `deepseek-chat` | 否 |
| `apiBase` | API 基础 URL | `https://api.deepseek.com` | 否 |
| `timeout` | 超时时间（毫秒） | `30000` | 否 |
| `temperature` | 温度参数 | `0.3` | 否 |
| `maxTokens` | 最大 token 数 | `1000` | 否 |
| `cache.enabled` | 是否启用缓存 | `true` | 否 |
| `cache.ttl` | 缓存有效期（秒） | `86400` (24h) | 否 |
| `concurrency.maxRequests` | 最大并发请求数 | `3` | 否 |

### 完整配置示例

```json
{
  "provider": "deepseek",
  "apiKey": "sk-your-actual-api-key",
  "model": "deepseek-chat",
  "apiBase": "https://api.deepseek.com",
  "timeout": 30000,
  "temperature": 0.3,
  "maxTokens": 1000,
  "cache": {
    "enabled": true,
    "ttl": 86400
  },
  "concurrency": {
    "maxRequests": 3
  }
}
```

### DeepSeek 配置（推荐）

```json
{
  "provider": "deepseek",
  "apiKey": "sk-your-deepseek-key",
  "model": "deepseek-chat",
  "apiBase": "https://api.deepseek.com"
}
```

**特点**：
- ✅ 性价比高（¥2/M tokens）
- ✅ 中文支持好
- ✅ 响应速度快

**获取 API Key**：https://platform.deepseek.com/

---

## 使用方式

### 命令行调用

#### 基本用法

```bash
node scripts/llm-chat.js --prompt="你的问题"
```

#### 清理缓存

```bash
node scripts/llm-chat.js --cleanup=true
```

### 编程式调用

#### Node.js 示例

```javascript
const { execSync } = require('child_process');

function callLLM(prompt) {
  const escapedPrompt = prompt.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  const command = `node scripts/llm-chat.js --prompt="${escapedPrompt}"`;
  
  try {
    const output = execSync(command, { encoding: 'utf-8', timeout: 30000 });
    return output.trim();
  } catch (error) {
    console.error('LLM call failed:', error.message);
    return null;
  }
}

// 使用示例
const answer = callLLM("如何在 HarmonyOS 中发起 HTTP 请求？");
console.log(answer);
```

#### Bash 脚本示例

```bash
#!/bin/bash

QUESTION="如何在 HarmonyOS 中实现页面路由跳转？"

# 入口过滤
ENTRY_RESULT=$(node scripts/llm-chat.js --prompt="
判断问题是否与 HarmonyOS 相关：
$QUESTION
只回答：相关/不相关
" 2>/dev/null)

if [[ "$ENTRY_RESULT" == *"不相关"* ]]; then
  echo "非 HarmonyOS 问题"
  exit 0
fi

# 领域识别
DOMAIN=$(node scripts/llm-chat.js --prompt="
识别问题涉及的 HarmonyOS 开发领域：
$QUESTION
可用领域：ui, network, database, media, application-models
只返回领域名称：
" 2>/dev/null)

echo "识别到领域：$DOMAIN"

# 文档检索（读取索引文件）
DOMAIN_INDEX="search_index/domains/$DOMAIN/domain_index.json"
if [ -f "$DOMAIN_INDEX" ]; then
  echo "找到领域索引：$DOMAIN_INDEX"
  # 进一步处理...
fi
```

---

## 性能优化

### 缓存机制

**缓存目录**：`.llm-cache/`

**缓存策略**：
- 缓存键：`MD5(provider:model:prompt)`
- 有效期：默认 24 小时（可通过 `LLM_CACHE_TTL` 调整）
- 自动清理：每次运行时自动清理过期缓存

**手动清理缓存**：
```bash
node scripts/llm-chat.js --cleanup=true
```

**查看缓存大小**：
```bash
du -sh .llm-cache/
```

### 并发控制

**限制**：最大 3 个并发请求

**作用**：
- 避免 API 限流
- 控制资源消耗
- 保证稳定性

**调整并发数**（修改源码）：
```javascript
// scripts/llm-chat.js
const MAX_CONCURRENT_REQUESTS = 3; // 修改此值
```

### 超时控制

**默认超时**：30 秒

**超时处理**：
- 自动重试（需自行实现）
- 返回错误信息
- 释放并发槽位

**调整超时时间**（修改源码）：
```javascript
// scripts/llm-chat.js
const response = await sendRequest(url, data, headers, 60000); // 改为 60 秒
```

---

## 最佳实践

### 1. 成本控制

**策略**：
- 简单问题使用规则匹配（不调用 LLM）
- 复杂问题才调用 LLM
- 使用缓存减少重复调用

**示例**：
```javascript
// 先尝试关键词匹配
if (question.includes('HTTP') || question.includes('网络')) {
  domain = 'network'; // 不调用 LLM
} else {
  domain = callLLM(`识别领域：${question}`); // 调用 LLM
}
```

### 2. 温度设置

**推荐**：
- 入口过滤/领域识别：`0.1-0.3`（确定性高）
- 答案校验：`0.3-0.5`（平衡创造性）
- 创意生成：`0.7-0.9`（高创造性）

**修改温度**（修改源码）：
```javascript
// scripts/llm-chat.js
const data = {
  // ...
  temperature: 0.3, // 修改此值
};
```

### 3. 错误处理

**推荐模式**：
```javascript
function callLLMWithRetry(prompt, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return callLLM(prompt);
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === maxRetries - 1) throw error;
      // 等待一段时间后重试
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

### 4. 监控和日志

**建议**：
- 记录 API 调用次数
- 监控缓存命中率
- 跟踪错误率

**示例**：
```javascript
const stats = {
  totalCalls: 0,
  cacheHits: 0,
  errors: 0,
};

function callLLM(prompt) {
  stats.totalCalls++;
  // ...调用逻辑
  if (cached) stats.cacheHits++;
  if (error) stats.errors++;
}

// 定期输出统计
setInterval(() => {
  console.log('LLM Stats:', stats);
}, 60000);
```

---

## 故障排查

### 常见错误

#### 1. API Key 错误

```
Error: LLM_API_KEY environment variable not set
```

**解决**：
```bash
export LLM_API_KEY=sk-your-key
```

#### 2. 网络超时

```
Error: Request timeout after 30000ms
```

**解决**：
- 检查网络连接
- 增加超时时间（修改源码）
- 使用国内提供商（如 DeepSeek）

#### 3. API 限流

```
Error: Rate limit exceeded
```

**解决**：
- 降低并发数（修改源码）
- 使用缓存
- 升级 API 套餐

#### 4. 缓存写入失败

```
Warning: Failed to write cache
```

**解决**：
- 检查磁盘空间
- 检查 `.llm-cache/` 目录权限
- 忽略警告（不影响主流程）

### 调试技巧

#### 1. 启用详细日志

修改 `scripts/llm-chat.js`：
```javascript
console.error('Request URL:', url);
console.error('Request Data:', JSON.stringify(data, null, 2));
console.error('Response:', JSON.stringify(response, null, 2));
```

#### 2. 禁用缓存

临时禁用缓存进行测试，编辑 `llm-config.json`：
```json
{
  "cache": {
    "enabled": false
  }
}
```

#### 3. 测试连接

```bash
curl -X POST https://api.deepseek.com/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY"

# OpenAI
curl -X POST https://api.openai.com/v1/models \
  -H "Authorization: Bearer $LLM_API_KEY"
```

---

## 总结

### 核心优势

✅ **零配置集成** - 一个脚本即可调用 LLM  
✅ **多提供商支持** - DeepSeek/OpenAI/Anthropic  
✅ **性能优化** - 缓存、并发、超时控制  
✅ **成本低廉** - 缓存机制减少重复调用  
✅ **易于调试** - 详细的错误信息和日志  

### 下一步

- 阅读 [search_index/skills/harmonyos/doc-navigator.md](search_index/skills/harmonyos/doc-navigator.md) 了解完整的 Skill 流程
- 运行 `node scripts/test-skill-llm.js` 测试 LLM 集成效果
- 根据实际需求调整配置参数

---

**有问题？** 查看 [README.md](README.md) 获取更多帮助。
