# HarmonyOS 文档检索 - 完整执行流程

> 详细版执行指南（供 AI Agent 深度参考）

---

## 概述

本文档详细说明了 HarmonyOS 文档检索的完整执行流程，包括每个步骤的具体操作、判断标准和错误处理。

**适用场景**：
- AI Agent 需要深度理解检索流程
- 需要自定义检索逻辑
- 需要处理边界情况

**快速开始**：详见 `SKILL.md`（123 行精简版）

---

## 完整流程

```
用户问题 → 入口过滤 → 领域识别 → 多路检索 → 答案校验 → 输出
   ↓           ↓           ↓           ↓           ↓      ↓
 输入       判断相关     识别领域     检索文档     验证     结果
```

---

## Step 1: 入口过滤

### 目标
判断问题是否与 HarmonyOS 相关

### 方法 1: LLM 判断（推荐）

**调用**：
```bash
node ../../../scripts/llm-chat.js --prompt="判断问题是否与 HarmonyOS 相关：{问题}。只回答：相关/不相关"
```

**判断标准**：
- ✅ 相关：包含 HarmonyOS 关键词
- ❌ 不相关：明确提到其他平台（Android、iOS 等）

### 方法 2: 关键词匹配

**HarmonyOS 关键词**：
```javascript
const POSITIVE = [
  'harmonyos', 'openharmony', '鸿蒙', 'arkui', 'arkts',
  'ability', 'uability', 'stage 模型', '@ohos.', '@kit.'
];
```

**排除关键词**：
```javascript
const NEGATIVE = [
  'android', 'ios', 'flutter', 'react native',
  'python', 'java', 'kotlin', 'swift'
];
```

**判断逻辑**：
```javascript
const isRelated = !NEGATIVE.some(k => q.includes(k)) && 
                  (POSITIVE.some(k => q.includes(k)) || q.includes('harmonyos'));
```

### 输出
```json
{
  "isRelated": true,
  "confidence": 0.95,
  "reason": "包含 HarmonyOS 关键词"
}
```

### 错误处理

| 错误 | 处理 |
|------|------|
| LLM 超时 | 降级使用关键词匹配 |
| 无法判断 | 默认相关（置信度 0.6） |

---

## Step 2: 领域识别

### 目标
识别问题涉及的领域

### 操作

#### 1. 读取领域映射
```javascript
const masterMap = require('../../../search_index/master_map.json');
```

#### 2. 匹配领域关键词

**领域关键词表**：
| 领域 | 关键词 |
|------|--------|
| network | HTTP, 网络，请求，socket, websocket, 下载，上传 |
| ui | 界面，组件，布局，样式，动画，Text, Button, ArkUI |
| database | 数据库，存储，RDB, preferences, 增删改查 |
| file-management | 文件，file, 目录，文件夹，读写 |
| application-models | Ability, 应用模型，生命周期，FA, Stage |
| media | 媒体，视频，音频，播放，录制，相机 |
| ... | ...（共 46 个领域） |

#### 3. 返回 Top 领域
```javascript
const domains = Object.entries(domainScores)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 2)
  .map(([d]) => d);
```

### 输出
```json
{
  "domains": ["network"],
  "confidence": 0.9,
  "reason": "识别到领域：network"
}
```

### 多领域处理

如果问题涉及多个领域：
```
问题："如何在 UI 中发起 HTTP 请求？"
识别：["ui", "network"]
处理：并发检索两个领域
```

---

## Step 3: 多路检索

### 目标
并发检索开发文档和 API 参考

### 操作

#### 1. 检索开发文档
```bash
# 读取领域索引
search_index/domains/{domain}/domain_index.json

# 读取章节索引
search_index/domains/{domain}/page_index.jsonl
```

**匹配逻辑**：
```javascript
const keywords = question.toLowerCase().split(/\s+/);
const matched = documents.filter(doc =>
  keywords.some(k => JSON.stringify(doc).toLowerCase().includes(k))
);
```

#### 2. 检索 API 参考（可选）
```bash
# 从 master_map.json 获取 Kit 映射
const kit = masterMap.domain_kit_mapping[domain];

# 读取 API 文档
docs/zh-cn/application-dev/reference/{kit}/
```

### 输出
```json
{
  "documents": [
    {
      "doc_title": "使用 HTTP 访问网络",
      "path": "../../docs/zh-cn/application-dev/network/http.md",
      "summary": "介绍了如何使用@ohos.net.http 模块"
    }
  ],
  "api_references": [
    { "kit": "apis-network-kit", "api": "@ohos.net.http" }
  ]
}
```

### 并发策略
- 同时检索所有识别的领域
- 设置超时（30 秒）
- 合并结果并去重

---

## Step 4: 答案校验

### 目标
验证检索结果是否正确

### 方法 1: LLM 验证（推荐）

**调用**：
```bash
node ../../../scripts/llm-chat.js --prompt="
验证检索结果是否覆盖问题：
问题：{问题}
检索到的文档：{文档摘要}
评估：1.是否覆盖问题要点？2.置信度（0-1）？
"
```

### 方法 2: 规则验证

**关键词覆盖率**：
```javascript
const keywords = question.toLowerCase().split(/\s+/);
const docText = JSON.stringify(documents).toLowerCase();
const matched = keywords.filter(k => docText.includes(k)).length;
const coverage = matched / keywords.length;
const isValid = coverage >= 0.5;
```

### 输出
```json
{
  "isValid": true,
  "confidence": 0.85,
  "reasons": ["关键词覆盖率：85%"]
}
```

---

## 错误处理

### 常见错误

| 错误 | 原因 | 处理 |
|------|------|------|
| 非 HarmonyOS 问题 | 入口过滤失败 | 返回错误提示 |
| 无法识别领域 | 关键词不匹配 | 返回多个可能领域 |
| 索引文件不存在 | 路径错误 | 检查索引路径 |
| 检索超时 | 文件过大 | 增加超时或减少并发 |

### 恢复策略

1. **LLM 失败** → 降级使用关键词匹配
2. **领域识别失败** → 使用默认领域（network）
3. **检索失败** → 返回部分结果
4. **校验失败** → 提示用户补充信息

---

## 完整示例

### 示例 1: HTTP 请求

**输入**：
```
"如何在 HarmonyOS 中发起 HTTP 请求？"
```

**执行**：
1. 入口过滤 → 相关（0.95）
2. 领域识别 → network（0.9）
3. 多路检索 → 5 篇文档
4. 答案校验 → 有效（0.85）

**输出**：
```json
{
  "success": true,
  "domains": ["network"],
  "documents": [...],
  "confidence": 0.85
}
```

---

## 相关文档

| 文档 | 说明 |
|------|------|
| **SKILL.md** | 精简版 Skill 定义（123 行） |
| **USAGE.md** | 外部调用指南（159 行） |
| **run.js** | Skill 执行助手（175 行） |
| **../../skill-development.md** | 开发指南 |

---

**版本**：v2.0 | **更新**：2026-03-17
