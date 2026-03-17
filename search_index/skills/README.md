# Skills 系统 - 通用 Agent 技能框架

## 概述

Skills 是一个通用的 AI Agent 技能系统，用于指导 AI Agent 完成特定领域的复杂任务。

**核心理念**：
- 📖 **文档即代码** - Skill 以 Markdown 文档形式存在
- 🤖 **Agent 可执行** - AI Agent 直接读取并执行 Skill 指南
- 🔧 **领域无关** - 框架设计适用于任何领域
- 🚀 **零配置** - 无需安装，直接读取使用

---

## 系统架构

```
search_index/skills/
├── README.md              # 本文件：Skill 系统说明
├── skill-template.md      # Skill 模板（新建 Skill 时复制）
└── {domain}/
    └── {skill-name}.md    # 具体领域的 Skill
```

---

## Skill 结构

一个完整的 Skill 包含以下部分：

### 1. 概述（Overview）
- Skill 名称
- 适用场景
- 核心功能说明

### 2. 前置条件（Prerequisites）
- 需要的文件/数据
- 环境变量/配置
- 依赖关系

### 3. 工作流（Workflow）
- 执行流程图
- 步骤说明
- 输入/输出

### 4. 详细步骤（Steps）
- 每个步骤的目的
- 操作方法
- 判断标准
- 示例

### 5. 错误处理（Error Handling）
- 常见错误
- 处理策略
- 恢复方法

### 6. 最佳实践（Best Practices）
- 性能优化
- 成本控制
- 质量保证

### 7. 示例（Examples）
- 完整执行示例
- 边界情况处理

---

## 使用方式

### AI Agent 执行流程

1. **读取 Skill 文档**
   ```
   读取 search_index/skills/{domain}/{skill-name}.md
   ```

2. **理解工作流**
   - 识别执行步骤
   - 理解输入/输出
   - 准备必要资源

3. **按步骤执行**
   - 严格执行每个步骤
   - 记录执行结果
   - 处理异常情况

4. **输出结果**
   - 返回执行结果
   - 提供错误信息（如有）

---

## 创建新 Skill

### 步骤 1: 复制模板

```bash
cp search_index/skills/skill-template.md search_index/skills/{domain}/my-skill.md
```

### 步骤 2: 填写内容

编辑 `my-skill.md`，替换模板中的占位符：
- `{Skill 名称}` → 你的 Skill 名称
- `{适用场景}` → 描述使用场景
- `{工作流}` → 绘制执行流程
- `{步骤}` → 详细说明每个步骤

### 步骤 3: 测试验证

使用 AI Agent 测试 Skill：
```bash
# AI Agent 读取并执行 Skill
读取 search_index/skills/{domain}/my-skill.md
执行工作流...
```

### 步骤 4: 迭代优化

根据测试结果优化 Skill：
- 补充遗漏的步骤
- 完善错误处理
- 添加更多示例

---

## Skill 模板

详见：`skill-template.md`

---

## 现有 Skills

### HarmonyOS 文档导航系统

**文件**: `harmonyos-navigator.md`

**功能**: 指导 AI Agent 检索 HarmonyOS 开发文档

**工作流**:
```
用户问题 → 入口过滤 → 领域识别 → 多路检索 → 答案校验 → 输出答案
```

**特点**:
- 支持 46 个领域的文档检索
- 章节级精准定位
- LLM 集成（入口过滤、领域识别、答案校验）
- 缓存优化

---

## 最佳实践

### 1. Skill 设计原则

✅ **原子性** - 每个 Skill 只完成一个任务  
✅ **可组合** - Skills 之间可以组合使用  
✅ **可测试** - 提供明确的验证标准  
✅ **可维护** - 结构清晰，易于更新

### 2. 文档编写规范

✅ **结构化** - 使用标准模板  
✅ **示例丰富** - 提供完整执行示例  
✅ **错误处理** - 覆盖常见错误场景  
✅ **版本控制** - 在文档中标注版本

### 3. AI Agent 执行规范

✅ **严格按步骤** - 不跳过任何步骤  
✅ **动态读取** - 按需读取文件，不一次性加载  
✅ **错误恢复** - 遇到错误按指南处理  
✅ **结果记录** - 记录执行过程和结果

---

## 扩展性

### 支持多领域

Skill 系统支持任意领域：

```
search_index/skills/
├── harmonyos/           # HarmonyOS 领域
│   ├── doc-navigator.md # 文档导航
│   └── api-search.md    # API 检索
├── web/                # Web 开发领域
│   ├── react-guide.md  # React 文档检索
│   └── vue-helper.md   # Vue 文档检索
└── python/             # Python 领域
    ├── docs-search.md  # 文档检索
    └── package-finder.md # 包查找
```

### 支持多技能组合

一个领域可以有多个 Skill：

```
harmonyos-navigator.md  # 文档导航
harmonyos-api-search.md # API 检索
harmonyos-debug.md      # 调试助手
```

### 支持跨领域协作

Skills 可以跨领域调用：

```
用户问题 → web-frontend-skill
             ↓
         调用 api-backend-skill
             ↓
         调用 database-skill
```

---

## 工具和脚本

### LLM 调用脚本

**文件**: `scripts/llm-chat.js`

**用途**: 在 Skill 执行过程中调用 LLM

**使用方式**:
```bash
node scripts/llm-chat.js --prompt="你的问题"
```

**配置**: `scripts/llm-config.json`

### 测试脚本

**文件**: `scripts/test-skill-llm.js`

**用途**: 测试 Skill + LLM 集成效果

**使用方式**:
```bash
node scripts/test-skill-llm.js
```

---

## 版本历史

| 版本 | 日期 | 变更 |
|------|------|------|
| 1.0 | 2026-03-17 | 初始版本，包含 HarmonyOS 文档导航 Skill |

---

## 常见问题

### Q: Skill 和 MCP 的区别？

**A**: 
- **Skill** - 文档形式的执行指南，AI Agent 直接读取执行
- **MCP** - 标准化的工具调用协议（已废弃）

**推荐使用 Skill**，因为：
- 更轻量，无需编译部署
- 更灵活，易于更新维护
- 更通用，适用于任何 AI Agent

### Q: 如何让 AI Agent 使用 Skill？

**A**: 
1. AI Agent 读取 Skill 文档
2. 理解工作流和步骤
3. 按步骤执行
4. 输出结果

### Q: Skill 可以调用外部工具吗？

**A**: 可以。Skill 可以指导 AI Agent 调用：
- LLM（通过 `scripts/llm-chat.js`）
- 文件系统（读取/写入）
- 网络请求（API 调用）
- 命令行工具

---

## 贡献指南

欢迎创建新的 Skill！

1. 复制模板 `skill-template.md`
2. 填写你的 Skill 内容
3. 测试验证
4. 提交 PR

---

**需要帮助？** 查看 `skill-template.md` 获取详细模板说明。
