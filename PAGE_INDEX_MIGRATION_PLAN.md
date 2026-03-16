# Page Index Migration Plan

## 目标

将当前 `docs_index` 的检索链路从“文档级字符串包含匹配”迁移为“领域粗召回 + 章节级 page_index 召回 + 规则重排 + 按区间回源”的方案，在不引入向量检索的前提下提升准确率。

本方案的核心目标：

1. 支持直接检索文档中的某个章节，而不是只返回整篇文档。
2. 降低 `includes` 误召回带来的噪声。
3. 让搜索结果具备稳定排序能力，而不是依赖索引原始顺序。
4. 保持现有 `domain_index`、`*_structure.json` 和原始 `docs` 目录可复用，减少迁移成本。

## 当前问题

### 1. 检索粒度过粗

当前搜索实现只检索 `domain_index.json` 中的 `documents` 数组，每个文档仅作为一个检索对象。

后果：

- 命中的是整篇文档，不是某个 section。
- 用户问具体概念/API/步骤时，返回结果粒度过粗。
- 回答时仍需要二次扫描整篇文档。

### 2. 召回逻辑过弱

当前 `searchInDomain()` 逻辑为：

- 将整个文档对象 `JSON.stringify`
- 对 query 关键词做 `includes`
- 任意命中即保留
- 最后直接截断前 10 条

后果：

- 没有字段权重
- 没有排序分数
- 没有 phrase match
- 没有 API 名、标题、章节名优先级

### 3. 结构化索引未被使用

仓库中已经存在：

- `domain_index.json`：文档级摘要与主题
- `documents/*_structure.json`：章节结构、行号

但搜索链路没有使用章节结构进行召回。

### 4. 校验逻辑过弱

当前校验仍是关键词重叠率，而不是答案覆盖度验证。

## 迁移原则

1. 先不上向量，不引入 embedding、faiss、milvus、pgvector。
2. 先做开发文档的 page_index，API reference 后续再跟进。
3. 保持现有 MCP 接口结构可平滑升级，不做大范围破坏性重写。
4. 优先保证可解释性，每条结果都能说明“为什么命中”。

## 目标架构

迁移后检索链路：

1. `entry_filter`
2. `domain_detect`
3. `page_search`
4. `rerank`
5. `read_doc_by_range`
6. `validate`

数据层拆分为三层：

1. `master_map.json`
   - 负责领域和 kit 的映射

2. `domain_index.json`
   - 负责领域级粗筛
   - 不再作为最终答案粒度

3. `page_index.jsonl`
   - 负责章节级召回
   - 作为核心检索对象

## 新增数据文件

建议按领域生成：

- `search_index/domains/{domain}/page_index.jsonl`

每行一条记录，代表一个可检索的 section/page。

## page_index 数据结构

建议 schema：

```json
{
  "page_id": "ui/arkts-navigation-introduction#section-1",
  "domain": "ui",
  "doc_id": "arkts-navigation-introduction",
  "doc_title": "组件导航和页面路由概述",
  "doc_type": "guide",
  "section_id": "section-1",
  "section_title": "架构差异",
  "path": "../../docs/zh-cn/application-dev/ui/arkts-navigation-introduction.md",
  "line_start": 16,
  "line_end": 32,
  "summary": "Navigation 与 router 的差异和适用场景",
  "keywords": [
    "navigation",
    "router",
    "navdestination",
    "页面路由",
    "页面跳转"
  ],
  "aliases": [
    "路由",
    "导航",
    "跳转"
  ],
  "content_snippet": "章节的清洗正文片段",
  "source_quality": 0.9
}
```

### 字段说明

- `page_id`
  - 全局唯一 ID
  - 规则：`{domain}/{doc_id}#{section_id}`

- `doc_type`
  - 用于后续重排
  - 可选值建议：
    - `guide`
    - `overview`
    - `tutorial`
    - `reference`
    - `faq`
    - `readme`

- `keywords`
  - 来自 doc title、section title、key topics、规则抽取

- `aliases`
  - 人工映射的同义词
  - 初期可以为空数组，后续逐步补充

- `content_snippet`
  - 不要放整段全文
  - 控制在 300 到 800 字左右

## page_index 生成规则

### 输入

1. `search_index/domains/{domain}/domain_index.json`
2. `search_index/domains/{domain}/documents/*_structure.json`
3. `docs/` 原始 markdown 文件

### 生成规则

1. 遍历 `domain_index.json.documents`
2. 为每个 `doc_id` 找对应的 `*_structure.json`
3. 若存在 `sections`
   - 每个 section 生成一条 page record
4. 若不存在 `sections`
   - 整篇文档生成一条 page record
5. 按 `line_start/line_end` 从 markdown 抽取正文
6. 生成 `content_snippet`
7. 合并 `doc_title + section_title + key_topics + summary` 生成 `keywords`

### 章节切分策略

建议初期按 section 直接切。

如果某个 section 超大，可二期再加：

- 大 section 按字数再切成 `subpage`
- 规则：超过 1200 到 1500 字再二次切块

初期不建议复杂化。

## 查询处理方案

新增 query 归一化模块：

- `harmonyos-navigator-mcp/src/utils/query-normalizer.ts`

输出结构建议：

```ts
interface NormalizedQuery {
  raw: string;
  normalized: string;
  tokens: string[];
  phrases: string[];
  apiTerms: string[];
  intent: 'how_to' | 'api_usage' | 'concept' | 'example' | 'error' | 'parameter' | 'generic';
  expandedTerms: string[];
}
```

### 归一化规则

1. 全部转小写
2. 保留 API 形式的词：
   - `@State`
   - `Navigation`
   - `router.pushUrl`
   - `module.json5`
3. 去掉无意义虚词：
   - `如何`
   - `怎么`
   - `怎样`
   - `实现`
   - `使用`
4. 同义词扩展：
   - `页面跳转` -> `navigation`, `router`, `页面路由`
   - `弹窗` -> `dialog`, `popup`, `customdialog`
   - `状态管理` -> `state`, `appstorage`, `@state`, `@prop`
5. 保留原短语，用于 exact phrase 匹配

## 检索实现方案

新增模块：

- `harmonyos-navigator-mcp/src/utils/page-search.ts`

建议先使用内存级 JSONL 读取 + 规则打分。

后续如果数据量继续扩大，再切 SQLite FTS5。

### 初期实现方式

1. 读取对应 domain 的 `page_index.jsonl`
2. 逐条计算匹配分数
3. 按分数排序
4. 返回 top 20 到 30
5. 对 top 结果做规则重排

### 推荐打分公式

```ts
score =
  exactPhraseScore * 10 +
  sectionTitleScore * 8 +
  keywordScore * 6 +
  docTitleScore * 5 +
  summaryScore * 3 +
  snippetScore * 2 +
  domainPriorScore * 2 +
  docTypeScore
```

### 子项定义

- `exactPhraseScore`
  - query phrase 在 `section_title` 或 `doc_title` 完整命中

- `sectionTitleScore`
  - token 命中 `section_title`

- `keywordScore`
  - token 命中 `keywords`

- `docTitleScore`
  - token 命中 `doc_title`

- `summaryScore`
  - token 命中 `summary`

- `snippetScore`
  - token 命中 `content_snippet`

- `domainPriorScore`
  - `domain_detect` 返回领域的置信加成

- `docTypeScore`
  - 根据问题意图对文档类型加权

## 重排策略

对初召回 top 30 做轻量重排。

### 重排规则

1. section title 精确命中优先
2. API 名精确命中优先
3. “如何做”类问题优先 guide/tutorial/overview
4. “参数/API”类问题优先 reference
5. `Readme-CN` 默认降权
6. `faq` 默认低于 guide，但高于无关 overview

### doc_type 建议打分

- `guide`: +2
- `tutorial`: +2
- `overview`: +1
- `reference`: 按 query intent 决定
- `faq`: -1
- `readme`: -2

## 搜索结果输出改造

当前返回：

- `dev_documents`
- `api_documents`

建议升级为：

```json
{
  "matched_pages": [
    {
      "domain": "ui",
      "doc_id": "arkts-navigation-introduction",
      "doc_title": "组件导航和页面路由概述",
      "section_id": "section-2",
      "section_title": "能力对比",
      "path": "../../docs/zh-cn/application-dev/ui/arkts-navigation-introduction.md",
      "line_start": 34,
      "line_end": 100,
      "score": 18.4,
      "match_reasons": [
        "section_title exact match",
        "keyword hit: navigation",
        "phrase hit: 页面路由"
      ]
    }
  ],
  "api_documents": []
}
```

### 为什么要返回 `match_reasons`

为了可解释性。

用户或开发者可以直接判断：

- 命中的是哪一节
- 为什么排到前面
- 是否需要调权重

## 回源读取方案

升级 `harmonyos_read_doc`，支持按行区间读取。

建议接口：

```ts
interface ReadDocInput {
  path: string;
  max_lines?: number;
  line_start?: number;
  line_end?: number;
}
```

### 行为规则

1. 若传 `line_start/line_end`
   - 优先读取该区间
2. 若未传区间
   - 保持旧逻辑，读前 `max_lines`

### 好处

- 只读取命中的章节
- 避免整篇文档噪声
- 回答更准

## 代码迁移步骤

### 第一阶段：数据层

新增：

- `scripts/build_page_index.ts`

职责：

1. 遍历领域
2. 读取 `domain_index.json`
3. 读取 `*_structure.json`
4. 读取原始 markdown
5. 生成 `page_index.jsonl`

输出位置：

- `search_index/domains/{domain}/page_index.jsonl`

### 第二阶段：检索层

新增：

- `harmonyos-navigator-mcp/src/utils/query-normalizer.ts`
- `harmonyos-navigator-mcp/src/utils/page-search.ts`

修改：

- `harmonyos-navigator-mcp/src/tools/search.ts`
- `harmonyos-navigator-mcp/src/utils/file-reader.ts`

### 第三阶段：回源层

修改：

- `harmonyos-navigator-mcp/src/tools/read-doc.ts`

支持区间读取。

### 第四阶段：校验层

修改：

- `harmonyos-navigator-mcp/src/tools/validate.ts`

从“关键词平均重叠”升级为：

1. 是否覆盖用户意图
2. 是否至少有 1 到 2 个高分 section 命中
3. 是否存在可引用的原文区间

## 兼容策略

为降低风险，建议采用双轨兼容：

### 方案

1. 新版搜索先返回 `matched_pages`
2. 旧版 `dev_documents` 暂时保留
3. 若某领域还没有 `page_index.jsonl`
   - 自动回退到旧的文档级搜索

### 回退逻辑

优先级：

1. `page_index`
2. 旧 `domain_index.documents`

这样不会阻塞已有能力。

## 建议目录改动

```text
docs_index/
  PAGE_INDEX_MIGRATION_PLAN.md
  scripts/
    build_page_index.ts
  search_index/
    domains/
      ui/
        page_index.jsonl
  harmonyos-navigator-mcp/
    src/
      utils/
        query-normalizer.ts
        page-search.ts
      tools/
        search.ts
        read-doc.ts
        validate.ts
```

## 迁移顺序建议

### 低风险顺序

1. 先做 `ui`
2. 再做 `web`
3. 再做 `application-models`
4. 最后逐步推广到所有领域

### 原因

- 这三个领域最常被检索
- section 结构较清晰
- 容易观察准确率提升

## 验收标准

建议准备固定测试集，至少 30 个问题。

### 指标

1. Top1 是否命中正确 section
2. Top3 是否包含正确 section
3. 返回结果是否带正确区间
4. 回答是否减少整篇文档扫描

### 建议问题类型

1. 如何类
   - 如：如何实现页面路由跳转

2. API 类
   - 如：Navigation 和 router 的区别

3. 参数类
   - 如：CustomDialog 支持哪些配置

4. 示例类
   - 如：有无状态管理示例

5. 概念类
   - 如：AppStorage 是什么

6. 排错类
   - 如：为什么页面路由不生效

## 风险与处理

### 风险 1：索引文本存在编码污染

现有 JSON 中已有 mojibake 痕迹。

处理：

1. page_index 生成时优先从原始 markdown 读取正文
2. 对 title/summary 做 UTF-8 校验
3. 发现污染时记录 warning

### 风险 2：path 数据异常

部分 path 看起来不规范。

处理：

1. 生成 page_index 时校验 path 是否存在
2. 不存在则跳过并记录错误报告

### 风险 3：section 边界不完整

有些文档可能没有 structure sections。

处理：

1. fallback 为整篇文档单条 page
2. 后续逐步补齐结构化数据

## 推荐实施节奏

### 第 1 天

1. 完成 `build_page_index.ts`
2. 对 `ui` 领域生成首版 `page_index.jsonl`

### 第 2 天

1. 完成 query normalizer
2. 完成 page search
3. 搜索接口返回 `matched_pages`

### 第 3 天

1. 完成 `read_doc` 区间读取
2. 完成 rule rerank

### 第 4 天

1. 跑 30 个固定问题集
2. 调整字段权重
3. 形成对比报告

## 结论

在当前项目里，最值得优先补的是 `page_index`，不是向量能力。

原因：

1. 现有问题主要是粒度和排序，不是语义召回上限。
2. 仓库已经有 `domain_index` 和 `*_structure.json`，具备低成本落地条件。
3. 章节级 page_index 能直接解决“某一个文档中的章节能不能搜到”的问题。
4. 规则重排在现阶段足以明显提高准确率，并且可解释、可调试。

如果本方案通过评审，下一步建议先在 `ui` 领域做试点实现。
