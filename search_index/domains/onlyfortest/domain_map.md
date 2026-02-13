# OnlyForTest 领域地图

## 概述

OnlyForTest 是一个测试领域，包含各种文档测试场景，涵盖 ArkTS 工具类（TaskPool、多线程并发、异步并发、ASON 解析）、原子化服务 API 测试、API 信息测试、相关实例测试、代码段检测、尖括号转义等多种测试场景。该领域用于验证文档处理工具的各种功能。

## 核心概念

- **TaskPool多线程** - 任务池提供多线程运行环境，降低资源消耗、提高系统性能
- **异步并发** - Promise和async/await提供异步并发能力
- **Actor并发模型** - 基于消息通信的并发模型，线程间内存隔离
- **原子化服务API** - 原子化服务API标记和识别测试
- **API信息测试** - API版本信息的解析和继承测试
- **相关实例测试** - 相关实例的识别和内部标记测试
- **代码段检测** - 各种代码段的检测和验证
- **尖括号转义** - 尖括号转义和HTML标签处理

## 学习路径

1. [TaskPool简介](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/taskpool-introduction.md) - 了解TaskPool任务池的基本概念和使用方法
2. [多线程并发概述](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/multi-thread-concurrency-overview.md) - 学习并发模型和Actor模型
3. [异步并发](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/async-concurrency-overview.md) - 掌握Promise和async/await的使用
4. [原子化服务添加属性测试](../../docs/zh-cn/application-dev/onlyfortest/reference/auto-service-test.md) - 测试原子化服务API标记
5. [API Info 测试场景1](../../docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-one.md) - 测试API信息解析
6. [API Info 测试场景2](../../docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-two.md) - 测试API信息继承
7. [验证示例代码同源--正常场景](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-normal.md) - 验证代码同源正常场景
8. [验证代码段检测---需检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-legal-code.md) - 测试代码段检测
9. [尖括号转义正常场景](../../docs/zh-cn/application-dev/onlyfortest/8Release/angle-brackets.md) - 测试尖括号转义

## 快速参考

| 概念 | 文档 |
|------|------|
| TaskPool简介 | [TaskPool简介](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/taskpool-introduction.md) |
| 多线程并发 | [多线程并发概述](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/multi-thread-concurrency-overview.md) |
| 异步并发 | [异步并发](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/async-concurrency-overview.md) |
| 原子化服务测试 | [原子化服务添加属性测试](../../docs/zh-cn/application-dev/onlyfortest/reference/auto-service-test.md) |
| API信息测试1 | [API Info 测试场景1](../../docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-one.md) |
| API信息测试2 | [API Info 测试场景2](../../docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-two.md) |
| 相关实例测试 | [相关实例测试](../../docs/zh-cn/application-dev/onlyfortest/reference/sample-test.md) |
| 代码同源正常 | [验证示例代码同源--正常场景](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-normal.md) |
| 代码段检测 | [验证代码段检测---需检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-legal-code.md) |
| 尖括号转义 | [尖括号转义正常场景](../../docs/zh-cn/application-dev/onlyfortest/8Release/angle-brackets.md) |

## 文档统计

- **文档总数**: 22
- **子目录数**: 4
  - reference/ (4个文档)
  - media/ (4个文档)
  - arkts-utils/ (10个文档)
  - 9Release/ (3个文档)
  - 8Release/ (2个文档)

## 测试场景分类

### ArkTS 工具类
- TaskPool多线程
- 多线程并发
- 异步并发
- ASON解析（正常和异常场景）

### API测试
- 原子化服务API测试
- API信息测试（场景1和2）
- 相关实例测试

### 代码验证
- 代码段检测（合法代码、非法代码、废弃文档）
- 尖括号转义（正常场景、系统场景）