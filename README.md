# docs_index

HarmonyOS 文档索引项目，用于让 AI Agent 快速检索 HarmonyOS 开发文档。

> **⚠️ 版本提示**：请使用**最新发布版本**（如 `v1.0.0-20260212`），不要使用 `master` 分支。master 是开发版本，可能与索引不匹配。

---

## 🤖 AI Agent 使用指南

### 第一步：初始化文档子模块

```bash
# 进入子模块目录，用浅克隆拉取特定 commit（必须！确保与索引匹配）
cd docs && git init && git remote add origin https://gitcode.com/openharmony/docs.git && git fetch --depth=1 origin 60f80f86de5f7418ea4472b031c0b73e5918183e && git checkout FETCH_HEAD
```

### 第二步：使用 Skill 检索文档（唯一推荐方式）

**核心文件**：`search_index/skills/harmonyos/doc-navigator.md`

**执行流程**：

```
1. 读取导航指南 → search_index/skills/harmonyos-navigator.md
2. 入口过滤 → 用 LLM 判断问题是否与 HarmonyOS 相关
3. 领域识别 → 读取 master_map.json，识别问题涉及的领域
4. 多路检索 → 根据识别的领域，读取对应的 domain_index.json 和 page_index.jsonl
5. 答案校验 → 验证检索结果是否正确
6. 输出答案 → 返回文档路径、摘要和代码示例
```

**关键原则**：
- 按照检索流程**动态、有条件**地读取文件
- 每一步只读取**当前步骤需要**的文件
- 不要一次性读取所有索引文件
- **推荐使用章节索引（page_index.jsonl）提高检索精度**

**LLM 集成**（可选但推荐）：
- 入口过滤：用 LLM 判断相关性（比关键词匹配更准确）
- 领域识别：用 LLM 理解问题语义（支持多领域识别）
- 答案校验：用 LLM 验证覆盖度（检测幻觉风险）

**LLM 调用脚本**：
```bash
# 配置环境变量
export LLM_PROVIDER=deepseek
export LLM_API_KEY=sk-your-api-key

# 调用 LLM
node scripts/llm-chat.js --prompt="你的问题"

# 清理缓存
node scripts/llm-chat.js --cleanup=true
```

**性能优化**：
- ✅ 缓存机制（默认 24 小时，降低 API 调用成本）
- ✅ 并发控制（最大 3 个并发请求）
- ✅ 超时控制（30 秒超时）

详见：[search_index/skills/harmonyos/doc-navigator.md](search_index/skills/harmonyos/doc-navigator.md)

---

## 项目结构

```
docs_index/
├── docs/                      # HarmonyOS 官方文档（Git 子模块）
├── search_index/               # 文档索引（核心）
│   ├── master_map.json        # 总地图：46 个领域 + 51 个 API Kit
│   ├── domains/               # 各领域索引（44 个领域，100% 覆盖）
│   │   ├── network/
│   │   ├── ui/
│   │   └── ...
│   └── skills/                # Skill 系统（通用 Agent 技能框架）
│       ├── README.md          # Skill 系统说明
│       ├── skill-template.md  # Skill 模板
│       └── harmonyos/         # HarmonyOS 领域 Skills
│           ├── doc-navigator.md  # 文档导航 Skill
│           └── doc-indexer.md    # 文档索引 Skill
└── scripts/                    # 构建脚本
    ├── build_page_index.ts    # 章节索引生成脚本
    ├── build_all_page_index.ts # 批量生成脚本
    ├── llm-chat.js            # LLM 调用脚本（支持 DeepSeek/OpenAI/Anthropic）
    └── test-skill-llm.js      # Skill + LLM 测试脚本（30 题测试集）
```

---

## 索引说明

索引系统包含：
- **46 个领域**：network、ui、database、graphics 等
- **51 个 API Kit**：完整的 API 参考文档映射
- **领域 ↔ Kit 双向映射**：支持从领域查 Kit，或从 Kit 查领域

---

## 重要提示

### 为什么必须指定 commit？

docs 仓会持续更新，索引只与特定 commit 匹配：

```bash
cd docs && git checkout 60f80f86de5f7418ea4472b031c0b73e5918183e
```

- 拉取最新版本会导致索引失效
- 索引与 `60f80f86de5f7418ea4472b031c0b73e5918183e` 完全匹配
