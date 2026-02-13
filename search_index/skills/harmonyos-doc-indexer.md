# HarmonyOS 文档索引器 Skill - 完整版

## 概述
本 Skill 用于指导 AI Agent 处理 HarmonyOS 官方文档，生成四层索引结构，支持 RAG/Agent 快速检索。

## 四层索引结构
- **第1层 - 章节（Section）**：文档内的二级标题（##））作为章节节点
- **第2层 - 文档（Document）**：单个 md 文件的完整文件索引树结构
- **第3层 - 领域文档（Domain Documents）**：领域内所有文档的索引集合
- **第4层 - 领域地图（Domain Map）**：整个领域的概览地图

## 执行流程

### 阶段 1：环境准备

#### 步骤 1.1：环境检查
**目的**：确保工作环境正确配置

**操作**：
- 检查 `docs/zh-cn/application-dev/` 目录是否存在
- 检查 `search_index/` 输出目录是否存在
- 检查 `search_index/domains/` 目录是否存在
- 检查 `search_index/skills/` 目录是否存在

**使用的工具**：
- `bash`：`test -d docs/zh-cn/application-dev && echo "docs目录存在" || echo "docs目录不存在"`
- `bash`：`test -d search_index && echo "search_index目录存在" || echo "search_index目录不存在"`

**检查点**：
- [ ] docs 目录存在
- [ ] search_index 目录存在
- [ ] search_index/domains 目录存在
- [ ] search_index/skills 目录存在

**错误处理**：
- 如果 docs 目录不存在，报错并退出
- 如果 search_index 目录不存在，创建该目录

---

#### 步骤 1.2：确定处理范围
**目的**：列出所有领域并确定处理顺序

**操作**：
- 列出 `docs/zh-cn/application-dev/` 下的所有一级目录
- 统计每个目录的 md 文档数量
- 按文档数量从少到多排序
- 排除文档数量为 0 的目录

**使用的工具**：
- `bash`：`cd docs && find zh-cn/application-dev -maxdepth 1 -type d -not -name "application-dev" | while read dir; do domain=$(basename "$dir"); count=$(find "$dir" -name "*.md" -type f 2>/dev/null | wc -l); echo "$domain:$count"; done | sort -t: -k2 -n`

**检查点**：
- [ ] 已列出所有领域
- [ ] 已统计文档数量
- [ ] 已确定处理顺序（按文档数量从少到多）

**输出示例**：
```
IDL: 1
test: 1
webgl: 2
ads-service: 3
...
reference: 3295
```

---

### 阶段 2：文档扫描

#### 步骤 2.1：扫描指定领域文档
**目的**：获取指定领域的所有 md 文件列表

**操作**：
- 使用 `find` 命令扫描指定领域的所有 `.md` 文件
- 保存文件列表到临时变量
- 统计文件数量

**使用的工具**：
- `bash`：`cd docs && find zh-cn/application-dev/{domain} -name "*.md" -type f`
- `bash`：`cd docs && find zh-cn/application-dev/{domain} -name "*.md" -type f | wc -l`

**检查点**：
- [ ] 已扫描到所有 md 文件
- [ ] 文件列表已保存
- [ ] 文件数量已统计

**错误处理**：
- 如果没有找到任何 md 文件，记录警告并跳过该领域

---

#### 步骤 2.2：创建领域输出目录
**目的**：为当前领域创建输出目录结构

**操作**：
- 创建 `search_index/domains/{domain}/` 目录
- 创建 `search_index/domains/{domain}/documents/` 目录

**使用的工具**：
- `bash`：`mkdir -p search_index/domains/{domain}/documents`

**检查点**：
- [ ] 领域输出目录已创建
- [ ] documents 子目录已创建

**错误处理**：
- 如果目录创建失败，报错并退出

---

### 阶段 3：文档处理（核心）

#### 步骤 3.1：读取文档内容
**目的**：获取文档的完整内容

**操作**：
- 对每个文档使用 `read` 工具读取完整内容
- 保存到临时变量

**使用的工具**：
- `read`：读取文件内容

**检查点**：
- [ ] 文档内容已读取

**错误处理**：
- 如果文件读取失败，记录错误并继续处理下一个文档

---

#### 步骤 3.2：提取文档元数据
**目的**：从文档头部提取元数据信息

**操作**：
- 从文件前 20 行提取以下信息：
  - 一级标题（#）作为文档标题
  - `<!--Kit: -->` 注释
  - `<!--Subsystem: -->` 注释
  - `<!--Owner: -->` 注释
  - `<!--Designer: -->` 注释
  - `<!--Tester: -->` 注释
  - `<!--Adviser: -->` 注释

**使用的工具**：
- `read`：读取文件前 20 行
- 正则表达式匹配：`^# (.+)$` 提取标题
- 正则表达式匹配：`<!--Kit:\s*(.+?)\s*-->` 提取 Kit
- 正则表达式匹配：`<!--Subsystem:\s*(.+?)\s*-->` 提取 Subsystem
- 正则表达式匹配：`<!--Owner:\s*(.+?)\s*-->` 提取取 Owner
- 正则表达式匹配：`<!--Designer:\s*(.+?)\s*-->` 提取 Designer
- 正则表达式匹配：`<!--Tester:\s*(.+?)\s*-->` 提取 Tester
- 正则表达式匹配：`<!--Adviser:\s*(.+?)\s*-->` 提取 Adviser

**检查点**：
- [ ] 元数据已提取
- [ ] 文档标题已提取
- [ ] Kit、Subsystem 等信息已提取

**错误处理**：
- 如果某些元数据缺失，使用空字符串或默认值

---

#### 步骤 3.3：解析文档结构
**目的**：解析文档的标题层级结构

**操作**：
- 识别所有标题（#、##、###、#### 等）
- 提取二级标题（##）作为章节节点
- 提取每个章节的内容范围（起始行号和结束行号）
- 构建树形结构

**使用的工具**：
- `read`：读取完整文档内容
- 正则表达式：`^(#{1,6})\s+(.+)$` 匹配标题

**检查点**：
- [ ] 文档结构已解析
- [ ] 所有标题已识别
- [ ] 章节节点已提取
- [ ] 章节内容范围已确定

**输出示例**：
```json
{
  "title": "文档标题",
  "sections": [
    {
      "section_id": "section-1",
      "title": "章节标题1",
      "level": 2,
      "line_start": 10,
      "line_end": 50
    },
    {
      "section_id": "section-2",
      "title": "章节标题2",
      "level": 2,
      "line_start": 52,
      "line_end": 100
    }
  ]
}
```

---

#### 步骤 3.4：生成文档摘要
**目的**：为文档生成简洁的摘要描述

**操作**：
- 基于文档标题、Kit、Subsystem 和内容摘要
- 生成一句话描述（100-200字）
- 摘要应说明文档的主要内容和用途

**使用的工具**：
- 无（由 AI Agent 生成）

**检查点**：
- [ ] 文档摘要已生成
- [ ] 摘要长度在 100-200 字之间

**示例**：
```
"介绍如何使用HTTP发起网络请求，支持GET方法、POST方法等多种HTTP方法，包括请求头设置、响应处理、错误处理等完整流程。"
```

---

#### 步骤 3.5：生成章节摘要
**目的**：为每个章节生成简洁的摘要

**操作**：
- 对每个章节生成摘要（50-100字）
- 摘要说明章节的主要内容
- 基于章节标题和章节内容生成

**使用的工具**：
- 无（由 AI Agent 生成）

**检查点**：
- [ ] 所有章节摘要已生成
- [ ] 每个摘要长度在 50-100 字之间

**示例**：
```
"介绍HTTP请求的基本概念和使用场景，包括同步请求和异步请求的区别。"
```

---

#### 步骤 3.6：转换文档引用路径
**目的**：将文档中的相对路径转换为指向 docs 目录的路径

**操作**：
- 识别文档中的 markdown 链接：`[text](path.md)`
- 转换为相对路径：`[text](../../docs/zh-cn/application-dev/xxx/path.md)`
- 处理绝对路径和相对路径的转换

**使用的工具**：
- 正则表达式：`\[([^\]]+)\]\(([^)]+)\)` 匹配 markdown 链接

**检查点**：
- [ ] 所有文档引用已转换
- [ ] 路径转换正确

---

#### 步骤 3.7：构建文档索引 JSON
**目的**：组装文档索引的完整 JSON 结构

**操作**：
- 组装文档索引 JSON 结构
- 包含所有提取的元数据、摘要和结构信息

**使用的工具**：
- `write`：保存 JSON 文件

**检查点**：
- [ ] 文档索引 JSON 已构建
- [ ] JSON 格式正确
- [ ] 所有必要字段都已包含

**输出格式**：
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
    "sections": [
      {
        "section_id": "section-1",
        "title": "章节标题",
        "level": 2,
        "line_start": 10,
        "line_end": 50,
        "summary": "章节摘要"
      }
    ]
  }
}
```

---

#### 步骤 3.8：保存文档索引
**目的**：将文档索引保存到文件

**操作**：
- 保存到 `search_index/domains/{domain}/documents/{doc_id}_structure.json`

**使用的工具**：
- `write`：写入文件

**检查点**：
- [ ] 文档索引已保存
- [ ] 文件路径正确
- [ ] 文件内容正确
- [ ] JSON 格式有效（summary 字段不为空或 `.md`）

**错误处理**：
- 如果保存失败，记录错误并继续处理下一个文档
- 如果 JSON 格式无效，记录错误并修复

---

### 阶段 4：领域索引构建

#### 步骤 4.1：提取核心概念
**目的**：从所有文档中提取领域的核心概念

**操作**：
- 收集所有文档的标题和摘要
- 提取 5-10 个核心概念
- 概念应涵盖领域的主要功能点
- 去除重复概念

**使用的工具**：
- 无（由 AI Agent 生成）

**检查点**：
- [ ] 核心概念已提取
- [ ] 概念数量在 5-10 个之间
- [ ] 概念无重复

**示例**：
```json
["HTTP请求", "WebSocket双向通信", "Socket连接", "网络连接管理", "DNS解析"]
```

---

#### 步骤 4.2：生成领域摘要
**目的**：为整个领域生成摘要描述

**操作**：
- 基于领域名称和所有文档标题
- 生成领域摘要（150-250字）
- 说明领域的主要功能和涵盖的内容

**使用的工具**：
- 无（由 AI Agent 生成）

**检查点**：
- [ ] 领域摘要已生成
- [ ] 摘要长度在 150-250 字之间

**示例**：
```
"Network Kit 提供网络通信相关功能，包括HTTP请求、WebSocket连接、Socket编程等，支持多种网络协议和连接管理方式。"
```

---

#### 步骤 4.3：构建领域文档列表
**目的**：为领域索引构建文档列表

**操作**：
- 为每个文档提取：
  - doc_id
  - title
  - path（relative_path）
  - summary（前200字）
  - key_topics（从标题和元数据提取）

**使用的工具**：
- 无

**检查点**：
- [ ] 领域文档列表已构建
- [ ] 所有文档都包含在列表中

**输出格式**：
```json
[
  {
    "doc_id": "http-request",
    "title": "使用HTTP访问网络",
    "path": "../../docs/zh-cn/application-dev/network/http-request.md",
    "summary": "介绍如何使用HTTP发起网络请求...",
    "key_topics": ["HTTP", "网络请求", "GET", "POST"]
  }
]
```

---

#### 步骤 4.4：构建领域索引 JSON
**目的**：组装领域索引的完整 JSON 结构

**操作**：
- 组装领域索引 JSON
- 包含领域信息、核心概念、文档所有列表

**使用的工具**：
- `write`：保存 JSON 文件

**检查点**：
- [ ] 领域索引 JSON 已构建
- [ ] JSON 格式正确

**输出格式**：
```json
{
  "domain": "Network",
  "domain_summary": "Network Kit 提供网络通信相关功能...",
  "core_concepts": ["HTTP请求", "WebSocket双向通信", "Socket连接", "网络连接管理"],
  "document_count": 18,
  "documents": [...]
}
```

---

#### 步骤 4.5：保存领域索引
**目的**：将领域索引保存到文件

**操作**：
- 保存到 `search_index/domains/{domain}/domain_index.json`

**使用的工具**：
- `write`：写入文件

**检查点**：
- [ ] 领域索引已保存
- [ ] 文件路径正确

---

### 阶段 5：领域地图生成

#### 步骤 5.1：生成学习路径
**目的**：为领域生成推荐的学习顺序

**操作**：
- 基于文档重要性排序
- 生成推荐的学习顺序
- 通常：基础文档 -> 核心功能 -> 高级功能
- 按照学习难度和依赖关系排序

**使用的工具**：
- 无

**检查点**：
- [ ] 学习路径已生成
- [ ] 学习顺序合理

**示例**：
```json
[
  {
    "doc_id": "network-overview",
    "title": "网络概述",
    "order": 1,
    "category": "基础"
  },
  {
    "doc_id": "http-request",
    "title": "使用HTTP访问网络",
    "order": 2,
    "category": "核心"
  }
]
```

---

#### 步骤 5.2：创建快速参考
**目的**：创建快速查找文档的字典

**操作**：
- 提取文档标题作为键
- 映射到文档路径
- 便于快速查找

**使用的工具**：
- 无

**检查点**：
- [ ] 快速参考已创建
- [ ] 所有文档都包含在快速参考中

**示例**：
```json
{
  "HTTP请求": "../../docs/zh-cn/application-dev/network/http-request.md",
  "WebSocket": "../../docs/zh-cn/application-dev/network/websocket.md"
}
```

---

#### 步骤 5.3：构建领域地图 JSON
**目的**：组装领域地图的 JSON 结构

**操作**：
- 组装领域地图 JSON
- 包含领域概览、核心概念、学习路径、快速参考

**使用的工具**：
- `write`：保存 JSON 文件

**检查点**：
- [ ] 领域地图 JSON 已构建
- [ ] JSON 格式正确

**输出格式**：
```json
{
  "domain": "Network",
  "overview": "Network Kit 是 OpenHarmony 提供的网络通信服务框架...",
  "core_concepts": ["HTTP请求", "WebSocket双向通信", "Socket连接"],
  "learning_path": [...],
  "quick_reference": {...},
  "document_count": 18
}
```

---

#### 步骤 5.4：构建领域地图 Markdown
**目的**：创建人类可读的领域地图文档

**操作**：
- 创建 Markdown 格式的领域地图，包含：
  - 领域概述
  - 核心概念列表
  - 文档索引（分类）
  - 学习路径
  - 快速参考表格
  - 统计信息

**使用的工具**：
- `write`：写入 Markdown 文件

**检查点**：
- [ ] 领域地图 Markdown 已构建
- [ ] Markdown 格式正确

**输出格式**：
```markdown
# Network 领域地图

## 领域概述
Network Kit 是 OpenHarmony 提供的网络通信服务框架...

## 核心概念
- **HTTP请求**
- **WebSocket双向通信**
- **Socket连接**

## 文档索引
### 基础文档
1. [网络概述](../../docs/zh-cn/application-dev/network/overview.md)

### 访问网络
2. [使用HTTP访问网络](../../docs/zh-cn/application-dev/network/http-request.md)

## 学习路径
1. [网络概述](../../docs/zh-cn/application-dev/network/overview.md)
2. [使用HTTP访问网络](../../docs/zh-cn/application-dev/network/http-request.md)

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| HTTP请求 | [使用HTTP访问网络](../../docs/zh-cn/application-dev/network/http-request.md) |

## 统计信息
- 文档总数：18
- 核心概念：12
```

---

#### 步骤 5.5：保存领域地图
**目的**：将领域地图保存到文件

**操作**：
- 保存 JSON 到 `search_index/domains/{domain}/domain_map.json`
- 保存 Markdown 到 `search_index/domains/{domain}/domain_map.md`

**使用的工具**：
- `write`：写入文件

**检查点**：
- [ ] 领域地图 JSON 已保存
- [ ] 领域地图 Markdown 已保存

---

### 阶段 6：元数据更新

#### 步骤 6.1：更新全局元数据
**目的**：更新全局元数据文件

**操作**：
- 读取 `search_index/metadata.json`
- 添加新领域信息
- 更新文档总数
- 更新最后更新时间

**使用的工具**：
- `read`：读取元数据文件
- `write`：写入元数据文件

**检查点**：
- [ ] 元数据已更新
- [ ] 新领域信息已添加
- [ ] 文档总数已更新

**输出格式**：
```json
{
  "last_updated": "2026-02-13T10:00:00Z",
  "total_domains": 8,
  "total_documents": 48,
  "domains": [
    {
      "name": "network",
      "document_count": 18,
      "last_updated": "2026-02-13T10:00:00Z"
    }
  ]
}
```

---

#### 步骤 6.2：更新错误报告
**目的**：更新错误报告文件

**操作**：
- 读取 `search_index/error_report.json`
- 记录处理结果
- 记录遇到的错误
- 记录成功和失败的文档

**使用的工具**：
- `read`：读取错误报告文件
- `write`：写入错误报告文件

**检查点**：
- [ ] 错误报告已更新
- [ ] 处理结果已记录

**输出格式**：
```json
{
  "last_run": "2026-02-13T10:00:00Z",
  "current_domain": "network",
  "status": "success",
  "documents_processed": 18,
  "documents_failed": 0,
  "errors": []
}
```

---

### 阶段 7：提交到 Git

#### 步骤 7.1：添加文件到 Git
**目的**：将修改的文件添加到 Git 暂存区

**操作**：
- 添加所有修改的文件到 git
- 添加 search_index/ 目录下的所有修改

**使用的工具**：
- `bash`：`git add search_index/`

**检查点**：
- [ ] 文件已添加到 git

---

#### 步骤 7.2：创建 Git 提交
**目的**：创建 Git 提交

**操作**：
- 创建提交信息：`index: add {domain} domain index (N documents)`
- 提交信息应包含领域名称和文档数量

**使用的工具**：
- `bash`：`git commit -m "index: add {domain} domain index (N documents)"`

**检查点**：
- [ ] 提交已创建

---

#### 步骤 7.3：推送到远程仓库
**目的**：将提交推送到远程仓库

**操作**：
- 推送到远程仓库

**使用的工具**：
- `bash`：`git push`

**检查点**：
- [ ] 已推送到远程

**错误处理**：
- 如果推送失败，记录错误并通知用户

---

## 错误处理策略

### 文档级错误
- 遇到错误时记录日志
- 保存已处理的部分结果
- 继续处理下一个文档
- 在错误报告中记录失败的文档

### 领域级错误
- 如果领域处理失败，记录错误
- 保存已处理的文档索引
- 生成错误报告
- 通知用户

### 全局错误
- 如果全局配置错误，停止处理
- 生成详细的错误报告
- 通知用户

---

## 增量更新流程

### 步骤 1：读取校验和文件
- 读取 `search_index/checksum.json`
- 获取上次处理的文件校验和

### 步骤 2：计算当前文件校验和
- 计算每个 md 文件的校验和
- 使用 MD5 或 SHA256 算法

### 步骤 3：对比差异
- 对比当前校验和和上次校验和
- 找出新增、修改、删除的文件

### 步骤 4：只处理变更的文件
- 只处理新增和修改的文件
- 删除已删除文件的索引

### 步骤 5：更新相关领域索引
- 更新受影响领域的索引
- 重新生成领域地图

### 步骤 6：更新校验和文件
- 保存新的校验和文件

---

## 使用方法

### 处理单个领域
```bash
# 阶段 1：环境准备
# 步骤 1.1：环境检查
# 步骤 1.2：确定处理范围

# 阶段 2：文档扫描
# 步骤 2.1：扫描指定领域文档
# 步骤 2.2：创建领域输出目录

# 阶段 3：文档处理（核心）
# 步骤 3.1-3.8：对每个文档执行

# 阶段 4：领域索引构建
# 步骤 4.1-4.5：：构建领域索引

# 阶段 5：领域地图生成
# 步骤 5.1-5.5：：生成领域地图

# 阶段段 6：元数据更新
# 步骤 6.1-6.2：：更新元数据

# 阶段 7：提交到 Git
# 步骤 7.1-7.3：：提交到 Git
```

### 处理所有领域
```bash
# 按顺序处理每个领域
# 每个领域执行上述步骤
```

---

## 当前处理状态

### 已完成的领域（7个）
- ✅ IDL（1 个文档）
- ✅ ads-service（3 个文档）
- ✅ contacts（3 个文档）
- ✅ device-usage-statistics（3 个文档）
- ✅ calendarmanager（4 个文档）
- ✅ game-controller（4 个文档）
- ✅ network（18 个文档）

### 正在处理的领域
- ⏳ ai（12 个文档）- 未完成，仅创建了1个文件

### 待处理的领域（38个）
- test（1 个文档）
- webgl（2 个文档）
- mechanicManager（4 个文档）
- telephony（4 个文档）
- ipc（5 个文档）
- displaymanager（6 个文档）
- application-test（7 个文档）
- distributedservice（7 个文档）
- mdm（7 个文档）
- graphics3d（8 个文档）
- task-management（8 个文档）
- inputmethod（10 个文档）
- ffrt（12 个文档）
- windowmanager（14 个文档）
- notification（17 个文档）
- connectivity（20 个文档）
- onlyfortest（22 个文档）
- tools（23 个文档）
- internationalization（27 个文档）
- file-management（28 个文档）
- faqs（30 个文档）
- form（38 个文档）
- quick-start（38 个文档）
- database（40 个文档）
- device（45 个文档）
- graphics（48 个文档）
- basic-services（57 个文档）
- web（58 个文档）
- dfx（66 个文档）
- performance（72 个文档）
- arkts-utils（93 个文档）
- napi（113 个文档）
- application-models（129 个文档）
- media（200 个文档）
- security（265 个文档）
- ui（311 个文档）
- reference（3295 个文档）

### 总计
- 总领域数：46
- 已完成：7
- 正在处理：1
- 待处理：38
- 总文档数：约 5,621

---

## 注意事项

### 文档处理
1. **章节层级**：使用 ##（二级标题）作为章节
2. **引用转换**：所有文档引用转换为指向 docs 目录的相对路径
3. **摘要质量**：摘要应准确概括内容，避免过于详细或过于简略
4. **元数据提取**：从文档前 20 行提取元数据

### 领域处理
1. **核心概念**：提取 5-10 个最能代表领域的概念
2. **学习路径**：按照学习难度和依赖关系排序
3. **文档分类**：在 Markdown 中合理分类文档（基础、核心、高级等）

### Git 提交
1. **提交频率**：每完成一个领域提交一次
2. **提交信息**：使用统一的提交信息格式
3. **错误处理**：如果提交失败，记录错误并通知用户

### 性能优化
1. **批量处理**：对于文档数量多的领域，考虑批量处理
2. **增量更新**：支持增量更新，避免重复处理
3. **并行处理**：对于独立文档，可以考虑并行处理

---

## 成功案例参考

### Network 领域（18个文档）
- **核心概念**：HTTP请求、WebSocket、Socket连接、网络连接管理、DNS解析等
- **文档分类**：基础文档、访问网络、连接网络、管理网络、系统应用专用
- **学习路径**：术语 -> 简介 -> HTTP -> WebSocket -> Socket -> 网络连接管理 -> DNS -> 高级功能

### IDL 领域（1个文档）
- **核心概念**：接口定义语言
- **文档分类**：基础文档
- **学习路径**：IDL 概述

---

## 下一步行动

**选项 1**：继续处理下一个领域（test）

**选项 2**：重新处理已完成的领域

**选项 3**：增量更新特定领域

请选择下一步行动。
