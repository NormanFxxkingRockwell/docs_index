# HarmonyOS 文档索引项目 - 修复版提示词

## 工作模式（重要！）

为了实现自动持续运行，请遵循以下工作模式：

1. **每个领域完成后立即修改 prompt.md**
   - 将已完成的领域从"未完成"移到"已完成"
   - 更新总体统计和百分比
   - 更新下一步建议

2. **清理上下文**
   - 每个领域完成后，只保留 prompt.md 的内容
   - 不需要记住之前处理的领域
   - 这样可以避免上下文过长导致自动停止

3. **只记住 prompt**
   - AI 只需要记住 prompt.md 中的内容
   - 不需要在对话中记住之前处理的领域列表

4. **自动持续运行**
   - 每完成一个领域后，AI 会自动继续下一个领域
   - 不需要人工干预

## 项目位置
工作目录：D:/codeBase/ai-learning/doc_index_project/docs_index

## 索引库
- 主索引库：search_index/domains/（唯一索引库）
- 不存在其他索引目录

## 恢复步骤

### 检查当前实际进度

1. 检查 search_index/domains/ 下已创建的领域
   ```bash
   ls search_index/domains/
   ```

2. 对比索引和文档数量，只显示不一致的领域
   ```bash
   cd search_index/domains && for dir in */; do 
     domain=$(basename "$dir")
     idx_count=$(find "$dir/documents" -name "*_structure.json" -type f 2>/dev/null | wc -l)
     doc_count=$(find "../../docs/zh-cn/application-dev/$domain" -name "*.md" -type f 2>/dev/null | wc -l)
     if [ "$idx_count" -ne "$doc_count" ]; then
       echo "$domain: index=$idx_count, docs=$doc_count"
     fi
   done
   ```

3. 查看未开始的领域（按文档数量从少到多）
   ```bash
   cd docs && find zh-cn/application-dev -maxdepth 1 -type d | while read dir; do 
     domain=$(basename "$dir")
     if [ "$domain" != "application-dev" ] && [ ! -d "../../search_index/domains/$domain" ]; then
       count=$(find "$dir" -name "*.md" -type f 2>/dev/null | wc -l)
       echo "$domain: $count"
     fi
   done | sort -t: -k2 -n
   ```

### 领域目录结构检查和修复（重要！）

在开始索引一个未完成的领域前，必须先检查并修复领域目录结构：

1. 检查领域目录结构
   ```bash
   ls search_index/domains/{domain}/
   ```

2. 检查并创建 documents/ 目录
   ```bash
   mkdir -p search_index/domains/{domain}/documents/
   ```

3. 检查领域目录下是否有直接放置的 JSON 文件（不在 documents/ 下）
   ```bash
   find search_index/domains/{domain} -maxdepth 1 -name "*.json" -not -path "*/documents/*"
   ```

4. 如果有直接放置的 JSON 文件，移动到 documents/ 目录并转换为 _structure.json 格式
   ```bash
   cd search_index/domains/{domain}
   for f in *.json; do
     if [[ ! "$f" =~ "_structure.json" ]]; then
       doc_id=$(echo "$f" | sed 's/.json//')
       mv "$f" "documents/${doc_id}_structure.json"
     fi
   done
   ```

5. 检查 documents/ 目录下是否有非 _structure.json 文件，删除重复文件
   ```bash
   cd search_index/domains/{domain}/documents
   for f in *.json; do
     if [[ ! "$f" =~ "_structure.json" ]]; then
       base=$(echo "$f" | sed 's/.json//')
       if [ -f "${base}_structure.json" ]; then
         echo "Duplicate: $f and ${base}_structure.json"
         rm -f "$f"
       fi
     fi
   done
   ```

6. 检查是否有旧的 docs/ 目录，如果有则删除
   ```bash
   rm -rf search_index/domains/{domain}/docs/
   ```

7. 检查修复后的文件数量
   ```bash
   find search_index/domains/{domain}/documents -name "*_structure.json" | wc -l
   ```

### 对比并判断状态
- 已完成：索引和文档数量一致的领域
- 未完成：索引文件少于文档的领域
- 未开始：search_index 中不存在的领域

### 读取执行指南
阅读 search_index/skills/harmonyos-doc-indexer.md 了解完整流程

### 决定下一步行动
- 如果有未完成的领域，继续完成该领域
- 如果没有未完成的，选择下一个未开始的领域（按文档数量从少到多）

## 关键规则
- 阅读 skill 文件了解四层索引结构
- 章节使用 ##（二级标题）
- 引用路径转换为 ../../docs/...
- 每完成一个领域提交一次 Git 并推送
- 遇到错误记录到 error_report.json

## 索引结构规范

### 1. 目录结构
```
search_index/domains/{domain}/
├── documents/              # 唯一索引文件目录
│   ├── xxx_structure.json # 文档结构索引
│   └── ...
├── domain_index.json       # 领域索引
├── domain_map.json         # 领域地图（JSON）
└── domain_map.md          # 领域地图（Markdown）
```

### 2. 文件命名规范
- 索引文件：{doc_id}_structure.json
- 不使用 docs/ 目录
- 不使用 xxx.json 命名

### 3. 文件操作规范
- 写入文件前必须先读取（使用 Read 工具）
- 避免重复创建和删除文件
- 只在 documents/ 目录创建索引文件

## 任务执行规范

### 1. 使用子 Agent（重要！）
- **避免上下文过长**：大任务必须拆分成小任务，使用 Task 工具调用子 agent
- **每次只处理一个领域**：不要在一个任务中处理多个领域
- **每次只处理 1 个文档**：为避免上下文过长，每批只处理 1 个文档
- **独立任务**：每个领域的索引、验证、提交都作为独立任务
- **使用 bash 操作**：尽量使用 bash 命令进行文件读写，避免使用 read/write 工具导致的权限问题
- **并行处理多个文档（重要！）**：对于多个独立的文档，可以同时启动多个子 agent 并行处理，提高效率
  - 一次可以启动 3-5 个子 agent 同时处理不同的文档
  - 每个子 agent 处理一个独立的文档
  - 使用单个 Task 工具调用时，可以同时发送多个独立的 Task 调用
  - 等待所有并行任务完成后，再继续下一步

### 2. 子 Agent 任务模板（处理单个文档）

任务：处理单个文档

提示词模板：
处理单个文档并生成索引文件。

**重要**：
- 严格按照 search_index/skills/harmonyos-doc-indexer.md 中定义的完整流程执行
- 优先使用 bash 命令（如 cat, echo, tee）完成文件读写操作
- 实在不行再用 write 和 read 工具
- 每次只处理 1 个文档，避免上下文过长

文档信息：
- 文档路径：{doc_path}
- 领域名称：{domain}
- 输出路径：{output_path}

处理步骤（严格按照 harmonyos-doc-indexer.md 阶段3）：
1. 读取文档完整内容（使用 bash cat 或 read 工具）
2. 提取元数据（在整个文档中搜索）
   - 一级标题（#）作为文档标题
   - `<!--Kit: -->` 注释
   - `<!--Subsystem: -->` 注释
   - `<!--Owner: -->` 注释
   - `<!--Designer: -->` 注释
   - `<!--Tester: -->` 注释
   - `<!--Adviser: -->` 注释
3. 解析章节结构（## 标题）
   - 提取每个章节的 `section_id`, `title`, `level`, `line_start`, `line_end`
   - 为每个章节生成摘要
4. 生成文档摘要（100-200字）
5. 生成章节摘要（每个章节50-100字）
6. **构建 JSON 索引**：严格按照必须包含以下所有字段：
    ```json
    {
      "doc_id": "xxx",
      "title": "文档标题",
      "path": "zh-cn/application-dev/{domain}/{doc_id}.md",
      "relative_path": "../../docs/zh-cn/application-dev/{domain}/{doc_id}.md",
      "metadata": {
        "kit": "...",
        "subsystem": "...",
        "owner": "...",
        "designer": "...",
        "tester": "...",
        "adviser": "..."
      },
      "summary": "文档摘要",
      "structure": {
        "title": "文档标题",
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
7. 写入文件到 documents/ 目录（优先使用 bash echo/tee，不行再用 write）
8. **验证文件**：使用 bash 工具验证 JSON 格式
    ```bash
    python -m json.tool {file_path} > /dev/null 2>&1 && echo "OK" || echo "ERROR"
    ```
    如果验证失败，修复 JSON 格式或返回错误

返回结果（JSON 格式）：
```json
{
  "status": "success",
  "doc_id": "xxx",
  "file_path": "search_index/domains/{domain}/documents/xxx_structure.json"
}
```

重要提示：
1. **严格按照 search_index/skills/harmonyos-doc-indexer.md 中定义的格式生成索引**
2. 优先使用 bash 命令（cat, echo, tee）完成文件读写操作
3. 实在不行再用 write 和 read 工具
4. 必须读取文档完整内容，不能只读部分
5. 元数据可能在文档的任何位置，要在整个文档中搜索
6. 文件必须保存在 documents/ 目录下
7. 文件命名格式：{doc_id}_structure.json
8. 确保包含所有必要字段：doc_id, title, path, relative_path, metadata, summary, structure
9. 返回简洁的结果，不包含文件内容

### 3. 大领域拆分策略
对于文档数量超过 20 个的领域，建议拆分为以下子任务：
- **任务 1**：扫描文档 + 创建输出目录（阶段 1-2）
- **任务 2-任务 N**：每次处理 1 个文档（阶段 3，循环调用）
- **任务 N+1**：构建领域索引和地图（阶段 4-5）
- **任务 N+2**：验证和提交（阶段 6-7）

注意：每次 Task 调用只处理 1 个文档，避免上下文过长

### 4. 错误处理
- 遇到错误记录到 error_report.json
- 继续处理下一个文档
- 不中断整个任务

### 5. 上下文管理策略
**重要**：为避免子 agent 上下文过长，必须遵循以下规则：

1. **单文档处理**：每次 Task 调用只处理 1 个文档
2. **完整读取**：必须读取文档完整内容，不能只读部分
3. **精简提示词**：给子 agent 的提示词要简洁要明了
4. **工作目录**：D:/codeBase/ai-learning/doc_index_project/docs_index

### 6. Git 提交和推送
- 每完成一个领域提交一次
- 提交信息格式：index: add {domain} domain index (N documents)
- **提交后立即推送到远程仓库**
- 使用 `git push` 命令推送

### 7. 领域目录结构检查和修复（重要！）

在开始索引一个未完成的领域前，必须先检查并修复领域目录结构：

1. 检查领域目录结构
   ```bash
   ls search_index/domains/{domain}/
   ```

2. 检查并创建 documents/ 目录
   ```bash
   mkdir -p search_index/domains/{domain}/documents/
   ```

3. 检查领域目录下是否有直接放置的 JSON 文件（不在 documents/ 下）
   ```bash
   find search_index/domains/{domain} -maxdepth 1 -name "*.json" -not -path "*/documents/*"
   ```

4. 如果有直接放置的 JSON 文件，移动到 documents/ 目录并转换为 _structure.json 格式
   ```bash
   cd search_index/domains/{domain}
   for f in *.json; do
     if [[ ! "$f" =~ "_structure.json" ]]; then
       doc_id=$(echo "$f" | sed 's/.json//')
       mv "$f" "documents/${doc_id}_structure.json"
     fi
   done
   ```

5. 检查是否有旧的 docs/ 目录，如果有则删除
   ```bash
   rm -rf search_index/domains/{domain}/docs/
   ```

6. 检查修复后的文件数量
   ```bash
   find search_index/domains/{domain}/documents -name "*_structure.json" | wc -l
   ```

## 验证索引完整性

### 1. 检查 JSON 格式
```bash
python -m json.tool {file}
```

### 2. 检查核心概念无重复
```bash
python -c "import json; from collections import Counter; data=json.load(open('domain_index.json', encoding='utf-8')); c=Counter(data['core_concepts']); print('Duplicates:', [k for k,v in c.items() if v>1])"
```

### 3. 检查文档数量匹配
```bash
idx_count=$(find "documents" -name "*_structure.json" -type f | wc -l)
doc_count=$(find "../../docs/zh-cn/application-dev/{domain}" -name "*.md" -type f | wc -l)
echo "Index: $idx_count, Docs: $doc_count"
```

## 当前索引进展（2026-02-26）

### 已完成领域（45个）
- IDL: 1
- ads-service: 3
- ai: 12
- application-models: 129
- application-test: 7
- arkts-utils: 93
- basic-services: 57
- calendarmanager: 4
- connectivity: 20
- contacts: 3
- database: 40
- device-usage-statistics: 3
- device: 45
- dfx: 66
- displaymanager: 6
- distributedservice: 7
- faqs: 30
- ffrt: 12
- file: 0
- file-management: 28
- form: 38
- game-controller: 4
- graphics: 48
- graphics3d: 8
- inputmethod: 10
- internationalization: 27
- ipc: 5
- mdm: 7
- mechanicManager: 4
- media: 200
- napi: 113
- network: 18
- notification: 17
- onlyfortest: 22
- performance: 72
YZ|- quick-start: 38
#VT|- reference: 3295
#TJ|- security: 265
#BV|- reference: 3242
- security: 265
- task-management: 8
- telephony: 4
- test: 1
- tools: 23
- web: 58
- webgl: 2
- windowmanager: 14
KP|### 未完成领域（0个）
KW|### 总体统计
ZR|- 总领域数：46
YM|- 已完成：46 (100%)
ZB|- 未完成：0 (0%)
ZM|- 总文档数：约 5,674
HP|## 下一步建议

BY|
XB|所有领域索引已完成！项目达到 100% 完成度。
### 总体统计
- 总领域数：45
- 已完成：45 (100%)
- 未完成：0 (0%)
- 总文档数：约 5,621
## 下一步建议

所有领域索引已完成！项目达到 100% 完成度。
