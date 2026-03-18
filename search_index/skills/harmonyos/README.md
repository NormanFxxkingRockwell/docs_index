# HarmonyOS 文档检索 Skill

> 智能检索 HarmonyOS 开发文档（42 个领域，28K+ 文档）

---

## 快速开始

```javascript
const search = require('./harmonyos');

// 简单检索
const results = await search('DNS 怎么配置', ['network']);

// 高级检索
const results = await search('问题', ['network'], {
  topK: 10,
  useVector: true,    // 向量检索
  useKeyword: true,   // 关键词检索
  useMMR: true        // 多样性重排
});
```

---

## API

### search(question, domains, options)

**参数**:
- `question` (string) - 用户问题
- `domains` (Array<string>) - 领域列表
- `options` (Object) - 配置选项
  - `topK` (number) - 返回数量，默认 10
  - `useVector` (boolean) - 向量检索，默认 true
  - `useKeyword` (boolean) - 关键词检索，默认 true
  - `useMMR` (boolean) - MMR 重排，默认 true

**返回**:
```javascript
{
  question: 'DNS 怎么配置',
  domains: ['network'],
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
const results = await search('HTTP 请求', ['network']);
console.log(results.documents);
```

### 示例 2: 指定返回数量

```javascript
const results = await search('HTTP 请求', ['network'], { topK: 5 });
```

### 示例 3: 只使用关键词检索

```javascript
const results = await search('HTTP 请求', ['network'], {
  useVector: false,
  useKeyword: true
});
```

---

## 命令行使用

```bash
# 简单检索
node search_index/skills/harmonyos/index.js "DNS 怎么配置"

# 指定领域
node search_index/skills/harmonyos/index.js "HTTP 请求" network
```

---

## 技术栈

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

**版本**: v6.0 | **更新**: 2026-03-18
