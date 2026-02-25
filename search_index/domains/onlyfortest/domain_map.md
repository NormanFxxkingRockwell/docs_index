# onlyfortest 领域地图

## 领域概述

onlyfortest领域是专门用于测试文档索引和搜索功能的测试领域。该领域包含了多种测试场景，涵盖API版本信息提取与继承、代码段检测、异步并发编程、多线程并发、示例代码同源验证、原子化服务API支持、文档结构解析、尖括号转义处理、废弃接口处理以及内部链接标记等功能。这些测试文档主要用于验证文档解析工具和索引系统的正确性和完整性。

## 核心概念

- API版本管理
- 代码段检测
- 异步并发编程
- 多线程并发
- 示例代码验证
- 原子化服务
- 文档结构解析
- 尖括号转义
- 废弃接口处理
- 内部链接标记

## 文档索引

### 基础文档

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 异步并发 (Promise和async/await) | arkts-utils/async-concurrency-overview | docs/zh-cn/application-dev/onlyfortest/arkts-utils/async-concurrency-overview.md |
| 多线程并发概述 | arkts-utils/multi-thread-concurrency-overview | docs/zh-cn/application-dev/onlyfortest/arkts-utils/multi-thread-concurrency-overview.md |
| TaskPool简介 | arkts-utils/taskpool-introduction | docs/zh-cn/application-dev/onlyfortest/arkts-utils/taskpool-introduction.md |

### 核心功能文档

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| API Info 测试场景1 | media/api-info-TC-one-dev | docs/zh-cn/application-dev/onlyfortest/media/api-info-TC-one-dev.md |
| API Info 测试场景2 | media/api-info-TC-two-dev | docs/zh-cn/application-dev/onlyfortest/media/api-info-TC-two-dev.md |
| 验证示例代码同源--正常场景 | arkts-utils/ason-parsing-generation-normal | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-normal.md |
| 验证代码段检测---需检测 | 9Release/check-legal-code | docs/zh-cn/application-dev/onlyfortest/9Release/check-legal-code.md |
| 验证代码段检测---不检测 | 9Release/check-illegal-code | docs/zh-cn/application-dev/onlyfortest/9Release/check-illegal-code.md |

### 高级功能文档

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 原子化服务添加属性测试 | media/auto-service-test-dev | docs/zh-cn/application-dev/onlyfortest/media/auto-service-test-dev.md |
| 尖括号转义正常场景 | 8Release/angle-brackets | docs/zh-cn/application-dev/onlyfortest/8Release/angle-brackets.md |
| 验证废弃文档中的代码段检测 | 9Release/check-deprecated-doc | docs/zh-cn/application-dev/onlyfortest/9Release/check-deprecated-doc.md |
| 相关实例测试 | media/sample-test-dev | docs/zh-cn/application-dev/onlyfortest/media/sample-test-dev.md |
| reference文件夹下相关实例 | reference/sample-test | docs/zh-cn/application-dev/onlyfortest/reference/sample-test.md |

### 异常测试文档

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 验证示例代码同源--异常场景1 | arkts-utils/ason-parsing-generation-Abnormal-1 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-1.md |
| 验证示例代码同源--异常场景2 | arkts-utils/ason-parsing-generation-Abnormal-2 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-2.md |
| 验证示例代码同源--异常场景3 | arkts-utils/ason-parsing-generation-Abnormal-3 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-3.md |
| 验证示例代码同源--异常场景4 | arkts-utils/ason-parsing-generation-Abnormal-4 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-4.md |
| 验证示例代码同源--异常场景5 | arkts-utils/ason-parsing-generation-Abnormal-5 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-5.md |

### Reference文件夹文档

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| API Info 测试场景1（reference文件夹下） | reference/api-info-test-kit/api-info-TC-one | zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-one.md |
| API Info 测试场景2（reference文件夹下） | reference/api-info-test-kit/api-info-TC-two | docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-two.md |
| 尖括号转义正常场景-系统 | 8Release/angle-brackets-sys | zh-cn/application-dev/onlyfortest/8Release/angle-brackets-sys.md |

## 学习路径

### 第1步：异步并发 (Promise和async/await)
- **文档ID**: arkts-utils/async-concurrency-overview
- **分类**: 基础
- **描述**: 学习Promise和async/await的异步并发能力，包括Promise的基本用法、状态管理（pending、fulfilled、rejected）、then/catch方法的使用，以及async/await语法糖的用法和异常处理。

### 第2步：多线程并发概述
- **文档ID**: arkts-utils/multi-thread-concurrency-overview
- **分类**: 基础
- **描述**: 了解ArkTS的多线程并发能力，包括TaskPool和Worker两种并发能力，它们都基于Actor并发模型实现。文档详细对比了Actor并发模型和内存共享并发模型的差异。

### 第3步：TaskPool简介
- **文档ID**: arkts-utils/taskpool-introduction
- **分类**: 基础
- **描述**: 掌握任务池（TaskPool）的使用方法，任务池为应用程序提供一个多线程的运行环境，降低整体资源的消耗、提高系统的整体性能，且无需关心线程实例的生命周期。

### 第4步：API Info 测试场景1
- **文档ID**: media/api-info-TC-one-dev
- **分类**: 核心
- **描述**: 测试API version信息的继承和废弃标记功能。本模块首批接口从API version 3开始支持。文档包含多个测试章节。

### 第5步：API Info 测试场景2
- **文档ID**: media/api-info-TC-two-dev
- **分类**: 核心
- **描述**: 测试API version信息的继承和废弃标记功能。本模块首批接口从API version 4开始支持。文档包含多个测试章节。

### 第6步：验证示例代码同源--正常场景
- **文档ID**: arkts-utils/ason-parsing-generation-normal
- **分类**: 核心
- **描述**: 验证示例代码同源的正常场景，前提是同一文档中如果出现多次引用同一段代码，则引用代码必须完全相同。文档包含引用全量代码和引用部分代码（Exclude字段）的示例场景。

### 第7步：验证代码段检测---需检测
- **文档ID**: 9Release/check-legal-code
- **分类**: 核心
- **描述**: 测试和验证不同类型代码段的检测功能，包括 js、ts、JavaScript、javascript、TypeScript、typescript 等多种代码段格式。文档还包含无标注代码段、标注 nocheck 的代码段以及废弃接口的示例。

### 第8步：验证代码段检测---不检测
- **文档ID**: 9Release/check-illegal-code
- **分类**: 核心
- **描述**: 验证代码段检测功能，主要检测非 JavaScript/TypeScript 相关的代码段。文档包含多个代码段示例：C++、json、java、html、text、shell 等语言代码段，以及一个带有 code_no_check_fa 标记的 JavaScript 代码段。

### 第9步：原子化服务添加属性测试
- **文档ID**: media/auto-service-test-dev
- **分类**: 高级
- **描述**: 学习原子化服务中 Swiper 组件的使用方法，包含多个测试用例，展示了不同场景下的参数配置和 API 版本支持情况。

### 第10步：尖括号转义正常场景
- **文档ID**: 8Release/angle-brackets
- **分类**: 高级
- **描述**: 测试尖括号在Markdown中的各种场景，包括转义字符、行内代码、代码块以及HTML标签的处理方式。

### 第11步：验证废弃文档中的代码段检测
- **文档ID**: 9Release/check-deprecated-doc
- **分类**: 高级
- **描述**: 测试废弃文档中各种代码段的检测功能，包括 js、ts、JavaScript、TypeScript 等不同标注的代码段，以及无标注和标注 nocheck 的代码段。

### 第12步：相关实例测试
- **文档ID**: media/sample-test-dev
- **分类**: 高级
- **描述**: 测试相关实例的内部链接标记。包括：相关实例（H2无H3）、Not-相关实例、相关实例（H2有H3）、Section章节以及Samples章节。

### 第13步：reference文件夹下相关实例
- **文档ID**: reference/sample-test
- **分类**: 高级
- **描述**: 测试文档索引和搜索功能。本文档包含多个测试实例，展示了相关实例和非相关实例的不同组合。

## 快速参考

| 文档标题 | 路径 |
|---------|------|
| API Info 测试场景2 | docs/zh-cn/application-dev/onlyfortest/media/api-info-TC-two-dev.md |
| 相关实例测试 | docs/zh-cn/application-dev/onlyfortest/media/sample-test-dev.md |
| reference文件夹下相关实例 | docs/zh-cn/application-dev/onlyfortest/reference/sample-test.md |
| API Info 测试场景1（reference文件夹下） | zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-one.md |
| 验证代码段检测---不检测 | docs/zh-cn/application-dev/onlyfortest/9Release/check-illegal-code.md |
| API Info 测试场景2（reference文件夹下） | docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-two.md |
| 原子化服务添加属性测试 | docs/zh-cn/application-dev/onlyfortest/media/auto-service-test-dev.md |
| API Info 测试场景1 | docs/zh-cn/application-dev/onlyfortest/media/api-info-TC-one-dev.md |
| TaskPool简介 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/taskpool-introduction.md |
| 异步并发 (Promise和async/await) | docs/zh-cn/application-dev/onlyfortest/arkts-utils/async-concurrency-overview.md |
| 验证示例代码同源--正常场景 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-normal.md |
| 多线程并发概述 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/multi-thread-concurrency-overview.md |
| 验证示例代码同源--异常场景5 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-5.md |
| 验证示例代码同源--异常场景4 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-4.md |
| 验证示例代码同源--异常场景3 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-3.md |
| 验证示例代码同源--异常场景2 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-2.md |
| 验证示例代码同源--异常场景1 | docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-1.md |
| 验证代码段检测---需检测 | docs/zh-cn/application-dev/onlyfortest/9Release/check-legal-code.md |
| 验证废弃文档中的代码段检测 | docs/zh-cn/application-dev/onlyfortest/9Release/check-deprecated-doc.md |
| 尖括号转义正常场景 | docs/zh-cn/application-dev/onlyfortest/8Release/angle-brackets.md |
| 尖括号转义正常场景-系统 | zh-cn/application-dev/onlyfortest/8Release/angle-brackets-sys.md |

## 统计信息

- **文档总数**: 21
- **核心概念**: 10
- **分类数量**: 5
  - 基础文档: 3
  - 核心功能文档: 5
  - 高级功能文档: 5
  - 异常测试文档: 5
  - Reference文件夹文档: 3