# onlyfortest 领域文档地图

## 领域概述

onlyfortest是文档测试领域，包含各种文档格式和代码段的测试场景，用于验证文档构建、代码段检测、API Info继承机制、原子化服务API标记、相关实例识别等功能，以及ArkTS并发编程相关的示例代码。

## 核心概念

- 尖括号转义
- 代码段检测
- 代码同源验证
- 异步并发
- 多线程并发
- TaskPool
- API Info
- 原子化服务
- 相关实例
- @Concurrent装饰器

## 学习路径

### 1. 文档格式测试

- [尖括号转义正常场景](../../docs/zh-cn/application-dev/onlyfortest/8Release/angle-brackets.md)
- [尖括号转义正常场景-系统](../../docs/zh-cn/application-dev/onlyfortest/8Release/angle-brackets-sys.md)

### 2. 代码段检测测试

- [验证废弃文档中的代码段检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-deprecated-doc.md)
- [验证代码段检测---不检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-illegal-code.md)
- [验证代码段检测---需检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-legal-code.md)

### 3. 代码同源验证

- [验证示例代码同源--正常场景](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-normal.md)
- [验证示例代码同源--异常场景1](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-1.md)
- [验证示例代码同源--异常场景2](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-2.md)
- [验证示例代码同源--异常场景3](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-3.md)
- [验证示例代码同源--异常场景4](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-4.md)
- [验证示例代码同源--异常场景5](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-5.md)

### 4. ArkTS并发编程

- [异步并发 (Promise和async/await)](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/async-concurrency-overview.md)
- [多线程并发概述](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/multi-thread-concurrency-overview.md)
- [TaskPool简介](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/taskpool-introduction.md)

### 5. API Info测试（media文件夹）

- [API Info 测试场景1](../../docs/zh-cn/application-dev/onlyfortest/media/media/api-info-TC-one-dev.md)
- [API Info 测试场景2](../../docs/zh-cn/application-dev/onlyfortest/media/api-info-TC-two-dev.md)
- [原子化服务添加属性测试](../../docs/zh-cn/application-dev/onlyfortest/media/auto-service-test-dev.md)
- [相关实例测试](../../docs/zh-cn/application-dev/onlyfortest/media/sample-test-dev.md)

### 6. API Info测试（reference文件夹）

- [API Info 测试场景1（reference文件夹下）](../../docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-one.md)
- [API Info 测试场景2（reference文件夹下）](../../docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-two.md)
- [原子化服务添加属性测试（reference文件夹下）](../../docs/zh-cn/application-dev/onlyfortest/reference/auto-service-test.md)
- [reference文件夹下相关实例](../../docs/zh-cn/application-dev/onlyfortest/reference/sample-test.md)

## 快速参考

| 概念 | 文档链接 |
|--------|----------|
| 尖括号转义 | [尖括号转义正常场景](../../docs/zh-cn/application-dev/onlyfortest/8Release/angle-brackets.md) |
| 代码段检测 | [验证代码段检测---需检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-legal-code.md) |
| 代码同源验证 | [验证示例代码同源--正常场景](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-normal.md) |
| 异步并发 | [异步并发 (Promise和async/await)](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/async-concurrency-overview.md) |
| 多线程并发 | [多线程并发概述](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/multi-thread-concurrency-overview.md) |
| TaskPool | [TaskPool简介](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/taskpool-introduction.md) |
| API Info | [API Info 测试场景1](../../docs/zh-cn/application-dev/onlyfortest/media/api-info-TC-one-dev.md) |
| 原子化服务 | [原子化服务添加属性测试](../../docs/zh-cn/application-dev/onlyfortest/media/auto-service-test-dev.md) |
| 相关实例 | [相关实例测试](../../docs/zh-cn/application-dev/onlyfortest/media/sample-test-dev.md) |

## 文档统计

- 文档总数：22
- 文档格式测试：2
- 代码段检测测试：3
- 代码同源验证测试：6
- ArkTS并发编程：3
- API Info测试（media）：4
- API Info测试（reference）：4
