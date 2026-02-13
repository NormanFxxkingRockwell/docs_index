# HarmonyOS 文档索引器 Skill - 详细执行版本

## 概述
本 Skill 用于指导 AI Agent 处理 HarmonyOS 官方文档，生成四层索引结构，支持 RAG/Agent 快速检索。

## 四层索引结构
- **第1层 - 章节（Section）**：文档内的二级标题（##）作为章节节点
- **第2层 - 文档（Document）**：单个 md 文件的完整索引树结构
- **第3层 - 领域文档（Domain Documents）**：领域内所有文档的索引集合
- **第4层 - 领域地图（Domain Map）**：整个领域的概览地图

## 执行流程

### 步骤 1.1：环境检查
**操作**：
- 检查 `docs/zh-cn/application-dev/` 目录是否存在
- 检查 `search_index/` 输出目录是否存在
- 创建 `search_index/` 输出目录结构

**使用的工具**：
- `bash`：检查目录是否存在
- `bash`：创建目录

**检查点**：
- [ ] docs 目录存在
- [ ] search_index 目录存在

---

### 步骤 1.2：确定处理范围
**操作**：
- 列出 `docs/zh-cn/application-dev/` 下的所有一级目录
- 统计每个目录的 md 文档数量
- 按文档数量从少到多排序
- 确定当前要处理的领域

**使用的工具**：
- `bash`：列出目录
- `bash`：统计文档数量

**检查点**：
- [ ] 已列出所有领域
- [ ] 已统计文档数量
- [ ] 已确定处理顺序

---

### 步骤 2.1：扫描指定领域文档
**操作**：
- 使用 `find` 命令扫描指定领域的所有 `.md` 文件
- 保存文件列表到临时变量

**使用的工具**：
- `bash`：`cd docs && find zh-cn/application-dev/{domain} -name "*.md" -type f`

**检查点**：
- [ ] 已扫描到所有 md 文件
- [ ] 文件列表已保存

---

### 步骤 2.2：创建领域输出目录
**操作**：
- 创建 `search_index/domains/{domain}/` 目录
- 创建 `search_index/domains/{domain}/documents/` 目录

**使用的工具**：
- `bash`：`mkdir -p search_index/domains/{domain}/documents`

**检查点**：
- [ ] 领域输出目录已创建
- [ ] documents 子目录已创建

---

### 步骤 3.1：读取文档内容
**操作**：
- 对每个文档使用 `read` 工具读取完整内容
- 保存到临时变量

**使用的工具**：
- `read`：读取文件内容

**检查点**：
- [ ] 文档内容已读取

---

### 步骤 3.2：提取文档元数据
**操作**：
- 从文件前 20 行提取以下信息：
  - 一级标题作为文档标题
  - `<!--Kit: -->` 注释
  - `<!--Subsystem: -->` 注释
  - `<!--Owner: -->` 注释
  - `<!--Designer: -->` 注释
  - `<!--Tester: -->` 注释
  - `<!--Adviser: -->` 注释

**使用的工具**：
- `read`：读取文件前 20 行

**检查点**：
- [ ] 元数据已提取

---

### 步骤 3.3：解析文档结构
**操作**：
- 识别所有标题（#、##、### 等）
- 提取二级标题（##）作为章节节点
- 提取每个章节的内容
- 构建树形结构

**使用的工具**：
- `read`：读取完整文档内容

**检查点**：
- [ ] 文档结构已解析

---

### 步骤 3.4：生成文档摘要
**操作**：
- 基于文档标题、Kit、Subsystem 和内容摘要，生成一句话描述（100-200字）

**使用的工具**：
- 无（由 AI Agent 生成）

**检查点**：
- [ ] 文档摘要已生成

---

### 步骤 3.5：生成章节摘要
**操作**：
- 对每个章节生成摘要（50-100字）
- 摘要说明章节的主要内容

**使用的工具**：
- 无（由 AI Agent 生成）

**检查点**：
- [ ] 所有章节摘要已生成

---

### 步骤 3.6：构建文档索引 JSON
**操作**：
- 组装文档索引 JSON 结构：
  ```json
  {
    "doc_id": "文档ID（文件名）",
    "title": "文档标题",
    "path": "相对路径",
    "relative_path": "指向docs的相对路径",
    "metadata": {...},
    "summary": "文档摘要",
    "structure": {...}
}
  ```

**使用的工具**：
- `write`：保存 JSON 文件

**检查点**：
- [ ] 文档索引 JSON 已构建

---

### 步骤 3.7：保存文档索引
**操作**：
- 保存到 `search_index/domains/{domain}/documents/{doc_id}_structure.json`

**使用的工具**：
- `write`：写入文件

**检查点**：
- [ ] 文档索引已保存

---

### 步骤 4.1：提取核心概念
**操作**：
- 收集所有文档的标题和摘要
- 提取 5-10 个核心概念
- 概念应涵盖领域的主要功能点

**使用的工具**：
- 无（由 AI Agent 生成）

**检查点**：
- [ ] 核心概念已提取

---

### 步骤 4.2：生成领域摘要
**操作**：
- 基于领域名称和所有文档标题
- 生成领域摘要（150-250字）
- 说明领域的主要功能和涵盖的内容

**使用的工具**：
- 无（由 AI Agent 生成）

**检查点**：
- [ ] 领域摘要已生成

---

### 步骤 4.3：构建领域文档列表
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

---

### 步骤 4.4：构建领域索引 JSON
**操作**：
- 组装领域索引 JSON：
  ```json
  {
    "domain": "领域名称",
    "domain_summary": "领域摘要",
    "core_concepts": [...],
    "document_count": 文档数量,
    "documents": [...]
  }
  ```

**使用的工具**：
- `write`：保存 JSON 文件

**检查点**：
- [ ] 领域索引 JSON 已构建

---

### 步骤 4.5：保存领域索引
**操作**：
- 保存到 `search_index/domains/{domain}/domain_index.json`

**使用的工具**：
- `write`：写入文件

**检查点**：
- [ ] 领域索引已保存

---

### 步骤 5.1：生成学习路径
**操作**：
- 基于文档重要性排序
- 生成推荐的学习顺序

**使用的工具**：
- 无

**检查点**：
- [ ] 学习路径已生成

---

### 步骤 5.2：创建快速参考
**操作**：
- 提取文档标题作为键
- 映射到文档路径

**使用的工具**：
- 无

**检查点**：
- [ ] 快速参考已创建

---

### 步骤 5.3：构建领域地图 JSON
**操作**：
- 组装领域地图 JSON：
  ```json
  {
    "domain": "领域名称",
    "overview": "领域概览",
    "core_concepts": [...],
    "learning_path": [...],
    "quick_reference": {...},
    "document_count": 文档数量
  }
  ```

**使用的工具**：
- `write`：保存 JSON 文件

**检查点**：
- [ ] 领域地图 JSON 已构建

---

### 步骤 5.4：构建领域地图 Markdown
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

---

### 步骤 5.5：：保存领域地图
**操作**：
- 保存 JSON 到 `search_index/domains/{domain}/domain_map.json`
- 保存 Markdown 到 `search_index/domains/{domain}/domain_map.md`

**使用的工具**：
- `write`：写入文件

**检查点**：
- [ ] 领域地图已保存

---

### 步骤 6.1：更新全局元数据
**操作**：
- 更新 `search_index/metadata.json`
- 添加新领域信息
- 更新文档总数

**使用的工具**：
- `write`：写入文件

**检查点**：
- [ ] 元数据已更新

---

### 步骤 6.2：更新错误报告
**操作**：
- 更新 `search_index/error_report.json`
- 记录处理结果

**使用的工具**：
- `write`：写入文件

**检查点**：
- [ ] 错误报告已更新

---

### 步骤 7：提交到 Git
**操作**：
- 添加所有修改的文件到 git
- 创建提交信息：`index: add {domain} domain index (N documents)`
- 推送到远程仓库

**使用的工具**：
- `bash`：`git add search_index/`
- `bash`：`git commit -m "index: add {domain} domain index (N documents)"`
- `bash`：`git push`

**检查点**：
- [ ] 文件已添加到 git
- [ ] 提交已创建
- [ ] 已推送到远程

---

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
  "core_concepts": ["HTTP请求", "WebSocket双向通信", "Socket连接", "网络连接管理"],
  "document_count": 18,
  "documents": [...]
}
```

### 领域地图 JSON
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

### 领域地图 Markdown
```markdown
# Network 领域地图

## 领域概述
Network Kit 是 OpenHarmony 提供的网络通信服务框架...

## 核心概念
- **HTTP请求**
- **WebSocket双向通信**
- **Socket连接**

## 文档索引
1. [文档标题](../../docs/...)
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

---

## 错误处理策略
- 遇到错误时记录日志
- 保存已处理的部分结果
- 继续处理下一个文档
- 生成错误报告
- 中途通知用户

---

## 增量更新流程
1. 读取 checksum.json
2. 计算当前文件校验和
3. 对比差异
4. 只处理变更的文件
5. 更新相关领域索引
6. 更新校验和文件

---

## 使用方法

### 处理单个领域
```bash
# 步骤 1：环境检查
# 步骤 2：扫描文档
# 步骤 3：处理文档
# 步骤 4：构建领域索引
# 步骤 5：构建领域地图
# 步骤 6：更新元数据
# 步骤 7：提交到 Git
```

### 处理所有领域
```bash
# 按顺序处理每个领域
# 每个领域执行上述步骤
```

---

## 当前处理状态

### 已完成的领域
- ✅ Network（18 个文档）
- ✅ IDL（1 个文档）
- ✅ ads-service（3 个文档）
- ✅ Contacts（3 个文档）
- ✅ CalendarManager（4 个文档）
- ✅ DeviceUsageStatistics（3 个文档）

### 正在处理的领域
- ⏳ game-controller（4 个文档）

### 待处理的领域
- ai（12 个文档）
- application-models（129 个文档）
- arkts-utils（93 个文档）
- basic-services（57 个文档）
- faqs（30 个文档）
- file-management（28 个文档）
- database（40 个文档）
- device（45 个文档）
- dfx（66 个文档）
- displaymanager（6 个文档）
- distributedservice（7 个文档）
- ffrt（12 个文档）
- form（38 个文档）
- graphics（48 个文档）
- graphics3d（8 个文档）
- inputmethod（10 个文档）
- internationalization（27 个文档）
- ipc（5 个文档）
- mdm（7 个文档）
- mechanicManager（4 个文档）
- media（200 个文档）
- napi（113 个文档）
- onlyfortest（22 个文档）
- performance（72 个文档）
- public_sys-resources（0 个文档）
- reference（3295 个文档）
- test（1 个文档）
- telephony（4 个文档）
- tools（23 个文档）
- web（58 个文档）
- webgl（2 个文档）
- windowmanager（14 个文档）

### 总计
- 总领域数：41
- 已完成：6
- 正在处理：1
- 待处理：34
- 总文档数：约 5,181