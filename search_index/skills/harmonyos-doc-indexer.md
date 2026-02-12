# HarmonyOS 文档索引器 Skill

## 概述
本 Skill 用于指导 AI Agent 处理 HarmonyOS 官方文档，生成四层索引结构，支持 RAG/Agent 快速检索。

## 四层索引结构
- **第1层 - 章节（Section）**：文档内的二级标题（##）作为章节节点
- **第2层 - 文档（Document）**：单个 md 文件的完整索引树结构
- **第3层 - 领域文档（Domain Documents）**：领域内所有文档的索引集合
- **第4层 - 领域地图（Domain Map）**：整个领域的概览地图

## 执行流程

### 步骤 1：环境检查
- [ ] 检查 `docs/zh-cn/application-dev/` 目录是否存在
- [ ] 检查 `search_index/` 输出目录是否存在
- [ ] 创建目标领域的输出目录结构

### 步骤 2：文档扫描
- [ ] 扫描指定领域的 `.md` 文件
- [ ] 收集所有文件列表
- [ ] 统计文档数量

### 步骤 3：文档处理（核心）
对每个文档执行以下步骤：

#### 3.1 读取文档内容
- 读取完整文档内容
- 提取前 20 行的元数据注释

#### 3.2 提取文档元数据
- 提取一级标题作为文档标题
- 提取 `<!--Kit: -->` 注释
- 提取 `<!--Subsystem: -->` 注释
- 提取 `<!--Owner: -->` 注释
- 提取 `<!--Designer: -->` 注释
- 提取 `<!--Tester: -->` 注释
- 提取 `<!--Adviser: -->` 注释

#### 3.3 解析文档结构
- 识别所有标题（#、##、### 等）
- 提取二级标题（##）作为章节节点
- 提取每个章节的内容
- 构建树形结构

#### 3.4 生成文档摘要
- 基于文档标题、Kit、Subsystem 和内容摘要，生成一句话描述（100-200字）

#### 3.5 生成章节摘要
- 对每个章节生成摘要（50-100字）
- 摘要说明章节的主要内容

#### 3.6 转换文档引用路径
- 识别文档中的 markdown 链接：`[text](path.md)`
- 转换为相对路径：`[text](../../docs/zh-cn/application-dev/xxx/path.md)`

#### 3.7 构建文档索引
组装文档索引 JSON 结构：
```json
{
  "doc_id": "文档ID（文件名）",
  "title": "文档标题",
  "path": "相对路径",
  "relative_path": "指向docs的相对路径",
  "metadata": {
    "kit": "Kit名称",
    "subsystem": "子系统名称",
    "owner": "负责人",
    "designer": "设计者",
    "tester": "测试者",
    "adviser": "顾问"
  },
  "summary": "文档摘要",
  "structure": {
    "title": "文档标题",
    "sections": [
      {
        "section_id": "章节ID",
        "title": "章节标题",
        "level": 2,
        "line_start": 起始行号,
        "line_end": 结束行号,
        "summary": "章节摘要"
      }
    ]
  }
}
```

#### 3.8 保存文档索引
- 保存到 `search_index/domains/{domain}/documents/{doc_id}_structure.json`

`### 步骤 4：领域索引构建

#### 4.1 提取核心概念
- 收集所有文档的标题和摘要
- 提取 5-10 个核心概念
- 概念应涵盖领域的主要功能点

#### 4.2 生成领域摘要
- 基于领域名称和所有文档标题
- 生成领域摘要（150-250字）
- 说明领域的主要功能和涵盖的内容

#### 4.3 构建文档列表
为每个文档提取：
- doc_id
- title
- path（relative_path）
- summary（前200字）
- key_topics（从标题和元数据提取）

#### 4.4 保存领域索引
保存到 `search_index/domains/{domain}/domain_index.json`

### 步骤 5：领域地图生成

#### 5.1 生成学习路径
- 基于文档重要性排序
- 生成推荐的学习顺序
- 通常：基础文档 -> 核心功能 -> 高级功能

#### 5.2 创建快速参考
- 提取文档标题作为键
- 映射到文档路径
- 便于快速查找

#### 5.3 保存领域地图
- JSON 格式：`search_index/domains/{domain}/domain_map.json`
- Markdown 格式：`search_index/domains/{domain}/domain_map.md`

Markdown 格式包含：
- 领域概述
- 核心概念列表
- 文档索引（分类）
- 学习路径
- 快速参考表格
- 统计信息

### 步骤 6：元数据更新
- 更新 `search_index/metadata.json`
- 更新 `search_index/error_report.json`
- 记录处理时间和统计信息

## 输出格式

### 文档索引 JSON
```json
{
  "doc_id": "http-request",
  "title": "使用HTTP访问网络",
  "path": "zh-cn/application-dev/network/http-request.md",
  "relative_path": "../../docs/zh-cn/application-dev/network/http-request.md",
  "metadata": {
    "kit": "Network Kit",
    "subsystem": "Communication",
    "owner": "@wmyao_mm",
    "designer": "@guo-min_net",
    "tester": "@tongxilin",
    "adviser": "@zhang_yixin13"
  },
  "summary": "介绍如何使用HTTP发起网络请求，支持GET、POST等多种方法...",
  "structure": {
    "title": "使用HTTP访问网络",
    "sections": [...]
  }
}
```

### 领域索引 JSON
```json
{
  "domain": "Network",
  "domain_summary": "Network Kit 提供网络通信相关功能...",
  "core_concepts": ["HTTP请求", "WebSocket", "网络连接管理", "DNS解析"],
  "document_count": 18,
  "documents": [...]
}
```

### 领域地图 JSON
```json
{
  "domain": "Network",
  "overview": "Network Kit 是 OpenHarmony 提供的网络通信服务框架...",
  "core_concepts": ["HTTP请求", "WebSocket", "网络连接管理"],
  "learning_path": [...],
  "quick_reference": {...},
  "document_count": 18
}
```

### 领域地图 Markdown
```markdown
# Network 领域地图

## 领域概述
Network Kit 是 OpenHarmony 提供的网络通信服务框架...

## 核心概念
- **HTTP请求**
- **WebSocket**
- **网络连接管理**

## 文档索引
### 基础文档
1. [文档标题](../../docs/...)

### 访问网络
2. [文档标题](../../docs/...)

## 学习路径
1. [文档标题](../../docs/...)
2. [文档标题](../../docs/...)

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| HTTP请求 | [使用HTTP访问网络](../../docs/...) |

## 统计信息
- 文档总数：18
- 核心概念：12
```

## 错误处理策略
- 遇到错误时记录日志
- 保存已处理的部分结果
- 继续处理下一个文档
- 生成错误报告

## 提交策略
- 每完成一个模块提交一次
- 如果模块文件很多（超过100个），每处理100个文件提交一次
- 提交信息格式：`"index: add {domain} domain index (N documents)"`

## 增量更新流程
1. 读取 checksum.json
2. 计算当前文件校验和
3. 对比差异
4. 只处理变更的文件
5. 更新相关领域索引
6. 更新校验和文件

## 使用方法

### 处理单个领域
```bash
# 手动执行
cd docs_index
# 扫描领域 -> 处理文档 -> 生成索引 -> 提交
```

### 处理所有领域
```bash
# 按顺序处理每个领域
# application-dev/ 下的每个一级目录作为一个领域
```

## 注意事项
1. 章节层级：使用 ##（二级标题）作为章节
2. 引用转换：所有文档引用转换为指向 docs 目录的相对路径
3. 摘要质量：摘要应准确概括内容，避免过于详细或过于简略
4. 核心概念：提取 5-10 个最能代表领域的概念
5. 学习路径：按照学习难度和依赖关系排序
6. 文档分类：在 Markdown 中合理分类文档（基础、核心、高级等）

## 成功案例参考
已成功处理的领域：
- Network（18个文档）
  - 核心概念：HTTP请求、WebSocket、Socket连接、网络连接管理、DNS解析等
  - 文档分类：基础文档、访问网络、连接网络、管理网络、系统应用专用
  - 学习路径：术语 -> 简介 -> HTTP -> WebSocket -> Socket -> 网络连接管理 -> DNS -> 高级功能