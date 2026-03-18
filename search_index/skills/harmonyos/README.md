# HarmonyOS 文档检索 Skill

> 智能检索 HarmonyOS 开发文档（42 个领域，28K+ 文档，向量化检索）

---

## 快速开始

```javascript
const search = require('./harmonyos');

// 混合检索（向量 + 关键词）
const results = await search('DNS 怎么配置', ['network'], {
  topK: 10,
  useVector: true,      // 启用向量检索
  useKeyword: true,     // 启用关键词检索
  vectorWeight: 0.7,    // 向量权重
  keywordWeight: 0.3,   // 关键词权重
  useMMR: true,         // 启用 MMR 重排
  mmrLambda: 0.5        // 多样性参数
});

console.log(results.documents);
```

---

## API 文档

### search(question, domains, options)

**参数**:
- `question` (string) - 用户问题
- `domains` (Array<string>) - 领域列表
- `options` (Object) - 配置选项
  - `topK` (number) - 返回数量，默认 10
  - `useVector` (boolean) - 启用向量检索，默认 true
  - `useKeyword` (boolean) - 启用关键词检索，默认 true
  - `vectorWeight` (number) - 向量权重，默认 0.7
  - `keywordWeight` (number) - 关键词权重，默认 0.3
  - `useMMR` (boolean) - 启用 MMR 重排，默认 true
  - `mmrLambda` (number) - 多样性参数，默认 0.5

**返回**:
```javascript
{
  question: 'DNS 怎么配置',
  domains: ['network'],
  documents: [...],
  stats: {
    keywordCount: 20,
    vectorCount: 20,
    fusionMethod: 'weighted',
    rerankMethod: 'mmr',
    finalCount: 10
  }
}
```

---

## 核心功能

### 1. 混合检索

```javascript
// 向量 + 关键词混合
const results = await search('问题', ['network'], {
  vectorWeight: 0.7,
  keywordWeight: 0.3
});
```

### 2. MMR 多样性重排

```javascript
// 避免返回 10 篇相似文档
const results = await search('问题', ['network'], {
  useMMR: true,
  mmrLambda: 0.5  // 0=只考虑多样性，1=只考虑相关性
});
```

### 3. 纯关键词检索

```javascript
const { keywordSearch } = require('./harmonyos');
const results = await keywordSearch('问题', ['network'], 10);
```

### 4. 纯向量检索

```javascript
const { vectorSearch } = require('./harmonyos');
const results = await vectorSearch('问题', ['network'], 10);
```

---

## 性能优化

### 缓存

```javascript
// 自动缓存检索结果（24 小时）
// 缓存目录：.skill-cache/
```

### 批量检索

```javascript
// 批量检索多个问题
const questions = ['问题 1', '问题 2', '问题 3'];
const results = await Promise.all(
  questions.map(q => search(q, ['network']))
);
```

---

## 测试

```bash
# 运行测试
node search_index/skills/harmonyos/index.js

# 运行基准测试
node test/benchmark.js

# 运行完整测试套件
node test/retrieval-test-framework.js
```

---

## 技术栈

- **嵌入模型**: bge-small-zh-v1.5 (384 维)
- **向量数据库**: sqlite-vec
- **检索算法**: RRF 混合融合 + MMR 重排
- **缓存**: 文件系统缓存（24 小时 TTL）

---

## 相关文档

- `retriever.js` - 关键词检索 + RRF + MMR
- `vector-search.js` - 向量化模块
- `vector-db.js` - sqlite-vec 数据库
- `index.js` - 统一检索接口

---

**版本**: v5.0 | **更新**: 2026-03-18
