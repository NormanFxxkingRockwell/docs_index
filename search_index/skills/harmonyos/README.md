# HarmonyOS 文档检索 Skill

> 智能检索 HarmonyOS 开发文档（42 个领域，28K+ 文档）

---

## 快速开始

```javascript
const search = require('./harmonyos');

// 简单检索（推荐）- 自动识别领域
const results = await search('DNS 怎么配置');

// 高级检索 - 自定义配置
const results = await search('问题', {
  topK: 10,
  useVector: true,    // 向量检索
  useKeyword: true,   // 关键词检索
  useMMR: true        // 多样性重排
});
```

**不需要指定领域！** 系统会自动识别问题涉及的领域。

---

## API

### search(question, options)

**参数**:
- `question` (string) - 用户问题
- `options` (Object) - 配置选项
  - `topK` (number) - 返回数量，默认 10
  - `useVector` (boolean) - 向量检索，默认 true
  - `useKeyword` (boolean) - 关键词检索，默认 true
  - `useMMR` (boolean) - MMR 重排，默认 true

**返回**:
```javascript
{
  question: 'DNS 怎么配置',
  domains: ['network'],  // 自动识别的领域
  documents: [
    {
      doc_id: 'http-request',
      doc_title: '使用 HTTP 访问网络',
      path: '../../docs/zh-cn/application-dev/network/http-request.md',
      summary: '...',
      vectorScore: 0.95
    }
  ]
}
```

---

## 示例

### 示例 1: 简单检索

```javascript
const search = require('./harmonyos');
const results = await search('HTTP 请求');
console.log(results.documents);
```

### 示例 2: 指定返回数量

```javascript
const results = await search('HTTP 请求', { topK: 5 });
```

### 示例 3: 只使用关键词检索

```javascript
const results = await search('HTTP 请求', {
  useVector: false,
  useKeyword: true
});
```

### 示例 4: 查看识别的领域

```javascript
const results = await search('DNS 怎么配置');
console.log('识别领域:', results.domains);  // ['network']
```

---

## 高级用法

### 指定领域检索

```javascript
const { searchInDomains } = require('./harmonyos');
const results = await searchInDomains('HTTP 请求', ['network', 'web']);
```

### 领域识别

```javascript
const { matchDomains } = require('./harmonyos');
const domains = matchDomains('DNS 怎么配置');
console.log(domains);  // ['network']
```

---

## 命令行使用

```bash
# 简单检索（自动识别领域）
node search_index/skills/harmonyos/index.js "DNS 怎么配置"

# 输出:
# 检索问题：DNS 怎么配置
# 识别领域：network
# 检索到 20 篇文档
# 1. 使用 HTTP 访问网络
# 2. ...
```

---

## 技术栈

- **领域识别**: 智能映射 + 关键词匹配
- **检索方式**: 向量检索 + 关键词检索
- **向量模型**: bge-base-zh-v1.5 (768 维)
- **重排算法**: MMR (最大边际相关性)
- **缓存**: 24 小时 TTL

---

## 相关文档

- [完整功能状态](../../RETRIEVAL_FEATURES_STATUS.md)
- [向量数据库](../../lib/vector-db.js)
- [检索逻辑](../../lib/retriever.js)

---

**版本**: v7.0 | **更新**: 2026-03-18
