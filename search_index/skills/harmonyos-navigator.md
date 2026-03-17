# HarmonyOS 文档导航系统 Skill

## 概述

这个 Skill 用于指导 AI Agent 处理 HarmonyOS 开发相关问题的文档检索。

**重要**：AI Agent 直接使用此 Skill 和 `search_index/master_map.json` 来引导检索流程，无需 MCP Server。

---

## 核心文件

| 文件 | 路径 | 用途 |
|------|------|------|
| **总地图** | `search_index/master_map.json` | 领域映射、数据源 |
| **Skill 指南** | `search_index/skills/harmonyos-navigator.md` | AI 执行指南 |
| **领域索引** | `search_index/domains/{domain}/domain_index.json` | 领域文档列表 |
| **章节索引** | `search_index/domains/{domain}/page_index.jsonl` | 章节级检索 |

---

## 工作流（AI 直接执行）

```
用户问题 → 入口过滤 → 领域识别 → 多路检索 → 答案校验 → 输出答案
```

---

## 步骤 1: 入口过滤 (Entry Filter)

**目的**：判断问题是否与 HarmonyOS 相关

### 1.1 LLM 判断（推荐）

使用 LLM 能力判断，标准：

**相关**（继续流程）：
- 包含 "HarmonyOS"、"OpenHarmony"、"ArkUI"、"Ability"、"Network Kit" 等 HarmonyOS 特有关键词
- 涉及 ArkTS、NAPI、HAP 等 HarmonyOS 技术栈
- 询问 HarmonyOS 开发相关问题

**不相关**（终止）：
- 明确提到 "Android"、"iOS"、"Flutter"、"React Native" 等其他平台
- 询问 Java、Kotlin、Swift、Objective-C 等非 HarmonyOS 语言
- 与 HarmonyOS 完全无关的技术问题

**示例**：
- ✓ "如何在 HarmonyOS 中发起 HTTP 请求？" → 相关
- ✓ "ArkUI Text 组件如何使用？" → 相关
- ✗ "如何在 Android 中发起网络请求？" → 不相关（明确提到 Android）
- ✗ "React Native 如何实现？" → 不相关（其他平台）

### 1.2 关键词匹配（备用）

如果无法使用 LLM，使用关键词匹配：

```typescript
// HarmonyOS 相关关键词
const HARMONYOS_KEYWORDS = [
  'harmonyos', 'openharmony', '鸿蒙', 'arkui', 'arkts',
  'ability', 'uability', 'stage 模型', 'fa 模型',
  'network kit', 'media kit', 'window', '窗口',
  '@ohos.', '@kit.', 'module.json5', 'bundle'
];

// 非 HarmonyOS 关键词（明确排除）
const NON_HARMONYOS_KEYWORDS = [
  'android', 'ios', 'iphone', 'android studio', 'xcode',
  'python', 'java', 'kotlin', 'swift', 'objective-c',
  'react', 'vue', 'angular', 'flutter', 'uniapp',
  '微信小程序', '支付宝小程序', '抖音小程序'
];
```

**判断逻辑**：
1. 包含非 HarmonyOS 关键词 → 不相关
2. 包含 HarmonyOS 关键词 → 相关
3. 都不包含 → 默认相关（用户主动询问）

---

## 步骤 2: 领域识别 (Domain Recognition)

**目的**：识别问题涉及的领域

### 2.1 读取领域映射

读取 `search_index/master_map.json` 中的 `domains` 和 `categories`。

### 2.2 领域关键词匹配

| 分类 | 领域 | 关键词示例 |
|------|------|------------|
| 基础能力 | quick-start, arkts-utils, basic-services, tools, performance, application-models | 应用启动，ArkTS, 工具，性能，Ability |
| UI 框架 | ui, web, form, webgl, graphics, graphics3d | Text, Button, 布局，动画，WebGL |
| 媒体 | media, camera, image, audio | 视频，音频，图片，相机 |
| 通信 | network, connectivity, ipc | HTTP, WebSocket, TCP, 蓝牙 |
| 数据管理 | database, file-management | 数据库，文件，存储 |
| 设备能力 | device, displaymanager, windowmanager | 屏幕，设备，窗口 |
| 安全 | security | 加密，权限，证书 |
| 系统服务 | notification, inputmethod, task-management, accessibility, dfx, distributedservice | 通知，输入法，任务管理 |
| AI 能力 | ai | AI, 机器学习，推理 |

### 2.3 匹配规则

- **精确匹配**：问题中直接出现领域名称（如 "network"、"ui"）
- **关键词匹配**：问题包含领域相关关键词（如 "HTTP" → network，"Text" → ui）
- **Kit 匹配**：问题提到 Kit 名称（如 "Network Kit" → network）

### 2.4 多领域处理

- 如果问题涉及多个领域，识别所有相关领域
- 按关键词匹配度排序
- 优先检索匹配度最高的领域

**示例**：
- "HTTP 请求" → network（关键词匹配）
- "Text 组件" → ui（关键词匹配）
- "Ability 生命周期" → application-models（关键词匹配）

---

## 步骤 3: 多路检索

**目的**：并发检索开发文档 + API 参考

### 3.1 检索开发文档

**路径**: `search_index/domains/{domain}/domain_index.json`

**内容**: 领域概述、核心概念、文档列表

**优先级**: 高（提供完整概念和示例）

### 3.2 检索章节索引（推荐）

**路径**: `search_index/domains/{domain}/page_index.jsonl`

**内容**: 章节级索引，支持精准定位到具体章节

**优先级**: 高（提供章节级精度）

**优势**:
- 精准定位到具体章节，而非整篇文档
- 包含 `line_start` 和 `line_end`，可直接读取指定行
- 包含 `section_title`，便于理解章节内容

### 3.3 检索开发文档详情

**路径**: `search_index/domains/{domain}/documents/{doc_id}_structure.json`

**内容**: 文档结构化内容（章节、行号）

**优先级**: 高

### 3.4 检索 API 参考

1. 从 `domain_kit_mapping` 获取对应的 Kit
2. **路径**: `docs/zh-cn/application-dev/reference/{kit}/`
3. 查找匹配的 .md 文件（支持关键词搜索）
4. **优先级**: 中（提供 API 细节）

### 3.5 并发执行策略

- **优先级**：开发文档 > API 参考
- **并发度**：同时检索所有识别的领域
- **超时控制**：每个检索任务设置超时
- **结果合并**：按优先级和相关性排序

### 3.6 路径处理规则

- 相对路径 `../../docs/` 需要解析为绝对路径
- Kit 路径格式：`reference/{kit}/{module}/{doc}.md`
- 处理失败时返回错误和恢复建议

---

## 步骤 4: 答案校验 (Answer Validation)

**目的**：验证检索结果是否正确回答了问题

### 4.1 LLM 验证（推荐）

使用 LLM 评估以下内容：

1. **完整性检查**：
   - 检索结果是否覆盖问题所有方面
   - 是否包含核心概念和示例代码
   - 是否提供完整的解决方案

2. **可靠性检查**：
   - 文档是否来自官方 HarmonyOS 文档
   - 文档版本是否匹配当前 API level
   - 链接是否有效

3. **质量检查**：
   - 代码示例是否完整可运行
   - 说明是否清晰易懂
   - 是否包含必要的权限配置

### 4.2 规则验证（备用）

如果无法使用 LLM，使用规则验证：

**判断标准**：
- 关键词覆盖率 ≥ 50%
- 包含问题核心概念
- 有可引用的代码示例

### 4.3 缺失处理

如果不匹配：
- 提示需要补充的领域
- 提供相关文档链接
- 建议查看相关 Kit

---

## 步骤 5: LLM 集成（可选但推荐）

### 5.1 何时调用 LLM

**推荐在以下场景调用 LLM**：

1. **入口过滤**（置信度要求高时）
   - 问题模糊，关键词匹配无法确定
   - 需要理解问题语义

2. **领域识别**（多领域复杂问题）
   - 问题涉及多个领域
   - 需要理解问题的核心意图

3. **答案校验**（质量保证）
   - 验证检索结果是否覆盖问题要点
   - 检测是否有幻觉风险
   - 提供改进建议

### 5.2 使用 LLM 调用脚本

**项目提供统一的 LLM 调用脚本**：`scripts/llm-chat.js`

**安装配置**：
```bash
# 设置环境变量
export LLM_PROVIDER=deepseek
export LLM_API_KEY=sk-your-api-key
export LLM_MODEL=deepseek-chat  # 可选
```

**调用示例**：

#### 入口过滤
```bash
node scripts/llm-chat.js --prompt="
判断以下问题是否与 HarmonyOS/OpenHarmony 开发相关：

问题：如何在 HarmonyOS 中发起 HTTP 请求？

相关标准：
- 包含 HarmonyOS 特有关键词（ArkUI、Ability、ArkTS 等）
- 涉及 HarmonyOS 技术栈
- 不是其他平台（Android、iOS 等）

请回答：相关/不相关，并说明理由。
"
```

#### 领域识别
```bash
node scripts/llm-chat.js --prompt="
识别以下问题涉及的 HarmonyOS 开发领域：

问题：如何在 HarmonyOS 中发起 HTTP 请求？

可用领域：
- network（网络请求、HTTP、WebSocket）
- ui（界面、组件、布局）
- database（数据库、存储）
- media（视频、音频）
- application-models（Ability、应用模型）

请列出最相关的 1-3 个领域，按相关性排序，并说明理由。
"
```

#### 答案校验
```bash
node scripts/llm-chat.js --prompt="
验证检索结果是否正确回答了问题：

问题：如何在 HarmonyOS 中发起 HTTP 请求？

检索到的文档：
1. 使用 HTTP 访问网络 - search_index/domains/network/domain_index.json
   摘要：介绍了如何使用@ohos.net.http 模块发起 HTTP 请求
2. http 模块 API 参考 - docs/zh-cn/application-dev/reference/apis-network-kit/js-apis-http.md
   摘要：提供了 HttpRequest 类的详细 API 说明

请评估：
1. 是否覆盖了问题的所有方面？（是/否，说明原因）
2. 是否有可引用的代码示例？（是/否）
3. 是否有幻觉风险？（低/中/高）
4. 置信度（0-1）是多少？
"
```

### 5.3 编程方式使用

**Node.js 示例**：
```javascript
const { execSync } = require('child_process');

function callLLM(prompt) {
  const escapedPrompt = prompt.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  const command = `node scripts/llm-chat.js --prompt="${escapedPrompt}"`;
  
  try {
    const output = execSync(command, { encoding: 'utf-8' });
    return output.trim();
  } catch (error) {
    console.error('LLM call failed:', error.message);
    return null;
  }
}

// 使用
const isRelated = callLLM(`判断问题是否与 HarmonyOS 相关：${question}`);
const domains = callLLM(`识别问题涉及的领域：${question}`);
const validation = callLLM(`验证答案覆盖度：${question}\n文档：${documents}`);
```

**Bash 脚本示例**：
```bash
#!/bin/bash

# 入口过滤
ENTRY_RESULT=$(node scripts/llm-chat.js --prompt="
判断问题是否与 HarmonyOS 相关：$QUESTION
回答格式：相关/不相关
")

if [[ "$ENTRY_RESULT" == *"不相关"* ]]; then
  echo "非 HarmonyOS 问题，终止流程"
  exit 0
fi

# 领域识别
DOMAINS=$(node scripts/llm-chat.js --prompt="
识别问题涉及的领域：$QUESTION
只返回领域名称，用逗号分隔
")

echo "识别到领域：$DOMAINS"
```

### 5.4 LLM 提供商选择

**推荐**：
- **DeepSeek** - 性价比高，适合中文场景（推荐）
- **GPT-4o** - 质量最好，成本较高
- **Claude** - 长上下文友好
- **本地模型** - 隐私友好（Ollama/vLLM）

**各提供商配置**：

#### DeepSeek（推荐）
```bash
export LLM_PROVIDER=deepseek
export LLM_API_KEY=sk-your-deepseek-key
export LLM_MODEL=deepseek-chat
```

API 文档：https://platform.deepseek.com/api-docs/

#### OpenAI
```bash
export LLM_PROVIDER=openai
export LLM_API_KEY=sk-your-openai-key
export LLM_MODEL=gpt-4o
```

API 文档：https://platform.openai.com/docs/

#### Anthropic
```bash
export LLM_PROVIDER=anthropic
export LLM_API_KEY=sk-your-anthropic-key
export LLM_MODEL=claude-3-5-sonnet-20241022
```

API 文档：https://docs.anthropic.com/claude/reference/

### 5.5 最佳实践

1. **温度设置**：
   - 入口过滤/领域识别：0.1-0.3（确定性高）
   - 答案校验：0.3-0.5（平衡创造性）

2. **超时控制**：
   - 设置 30 秒超时
   - 失败时使用规则验证降级

3. **缓存机制**：
   - 相同问题缓存 LLM 结果
   - 缓存有效期 24 小时

4. **成本控制**：
   - 简单问题优先使用规则匹配
   - 复杂问题才调用 LLM
   - 监控 API 调用次数

---

## 实际执行示例

### 示例问题 1：HTTP 请求

```
"如何在 HarmonyOS 中发起 HTTP 请求？"
```

**执行流程**：

**步骤 1: 入口过滤**
- 判断：与 HarmonyOS 相关 ✓
- 置信度：0.95

**步骤 2: 领域识别**
- 匹配：network（关键词 "HTTP"）
- Kit：apis-network-kit
- 置信度：0.9

**步骤 3: 检索**

并发执行：
1. 读取 `search_index/domains/network/domain_index.json`
   - 找到文档："使用 HTTP 访问网络"
2. 读取 `search_index/domains/network/page_index.jsonl`
   - 找到章节："发起 HTTP 数据请求"（line_start: 24, line_end: 100）
3. 读取 `docs/zh-cn/application-dev/reference/apis-network-kit/js-apis-http.md`
   - 找到 API：@ohos.net.http

**步骤 4: 校验**
- 检查是否包含 HTTP 请求实现 ✓
- 验证代码示例完整性 ✓
- 检查权限配置说明 ✓

**步骤 5: 输出**
- 返回开发文档路径和摘要
- 返回 API 参考链接
- 提供完整代码示例

---

### 示例问题 2：Text 组件

```
"如何在 ArkUI 中使用 Text 组件？"
```

**执行流程**：

**步骤 1: 入口过滤**
- 判断：与 HarmonyOS 相关 ✓
- 置信度：0.95

**步骤 2: 领域识别**
- 匹配：ui（关键词 "Text"）
- Kit：apis-arkui
- 置信度：0.95

**步骤 3: 检索**

并发执行：
1. 读取 `search_index/domains/ui/domain_index.json`
   - 找到文档："文本显示 (Text/Span)"
2. 读取 `search_index/domains/ui/page_index.jsonl`
   - 找到章节："Text 组件创建"（line_start: 13, line_end: 50）
3. 读取 `docs/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-basic-components-text.md`
   - 找到 API：Text 组件

**步骤 4: 校验**
- 检查是否包含 Text 组件用法 ✓
- 验证属性和事件说明 ✓

**步骤 5: 输出**
- 返回开发文档路径和摘要
- 返回 API 参考链接
- 提供使用示例

---

## 关键文件路径

| 类型 | 路径格式 |
|------|----------|
| 开发文档索引 | `search_index/domains/{domain}/domain_index.json` |
| 章节索引 | `search_index/domains/{domain}/page_index.jsonl` |
| 文档结构 | `search_index/domains/{domain}/documents/{doc_id}_structure.json` |
| API 参考 | `docs/zh-cn/application-dev/reference/{kit}/{api_doc}.md` |
| 相对路径 | `../../docs/zh-cn/application-dev/{domain}/{doc_id}.md` |

---

## 错误处理

| 情况 | 处理策略 | 用户提示 |
|------|----------|----------|
| 非 HarmonyOS 问题 | 终止流程，返回说明 | "此问题涉及 [平台]，不是 HarmonyOS 相关问题。" |
| 无法识别领域 | 返回多个可能领域供选择 | "无法确定问题涉及的具体领域。可能相关的领域：[列表]。" |
| 检索失败（文件不存在） | 返回错误和恢复建议 | "检索文档时出错：[错误信息]。建议检查文档索引是否最新。" |
| 检索失败（权限问题） | 返回权限错误说明 | "无权限访问文档：[路径]。请检查文件系统权限。" |
| 答案校验失败（不完整） | 返回改进建议和补充检索 | "检索结果可能不完整。建议查看：[补充领域]。" |
| 答案校验失败（版本不匹配） | 返回版本警告 | "注意：检索到的文档可能不是最新版本。" |
| 检索超时 | 返回部分结果和重试建议 | "检索超时，已返回部分结果。建议重试或减少并发数量。" |

---

## 使用方法

当收到 HarmonyOS 开发相关问题时：

1. **读取 master_map.json**：获取领域映射和 Kit 信息
2. **执行入口过滤**：判断是否相关（LLM 或关键词匹配）
3. **执行领域识别**：识别涉及领域（LLM 或关键词匹配）
4. **并发检索**：
   - 优先检索开发文档（domain_index.json）
   - 检索章节索引（page_index.jsonl）- 推荐
   - 并发检索 API 参考（对应 Kit 的 .md 文件）
   - 设置合理的超时时间
5. **校验答案**：验证检索结果（LLM 或规则验证）
6. **输出答案**：返回文档路径、摘要和代码示例
7. **错误处理**：遇到错误时提供清晰的恢复建议

### 性能优化

- 使用并发检索提高效率
- 优先返回开发文档（包含完整示例）
- API 参考按需检索（仅当需要 API 细节时）
- **使用章节索引（page_index.jsonl）提高精度**
- 缓存常用的 domain_index.json 结果

---

## 附录：领域 - Kit 映射表

| 领域 | Kit |
|------|-----|
| network | apis-network-kit |
| ui | apis-arkui |
| web | apis-arkweb |
| form | apis-form-kit |
| media | apis-media-kit |
| camera | apis-camera-kit |
| image | apis-image-kit |
| audio | apis-audio-kit |
| database | apis-arkdata |
| file-management | apis-core-file-kit |
| connectivity | apis-connectivity-kit |
| ipc | apis-ipc-kit |
| security | apis-crypto-architecture-kit |
| notification | apis-notification-kit |
| inputmethod | apis-ime-kit |
| task-management | apis-backgroundtasks-kit |
| windowmanager | apis-arkui |
| performance | apis-performance-analysis-kit |
| arkts-utils | apis-arkts |
| basic-services | apis-basic-services-kit |
| application-models | apis-ability-kit |
| ai | apis-mindspore-lite-kit |
| graphics | apis-arkgraphics2d |
| graphics3d | apis-arkgraphics3d |
| webgl | apis-arkgraphics2d |
| telephony | apis-telephony-kit |
| location | apis-location-kit |
| accessibility | apis-accessibility-kit |
| internationalization | apis-localization-kit |
| game-controller | apis-game-controller-kit |
| distributedservice | apis-distributedservice-kit |
| ffrt | apis-ffrt-kit |
