# onlyfortest 领域地图

## 概述

- **领域名称**: onlyfortest
- **文档数量**: 22
- **核心概念数**: 10

## 领域摘要

OnlyForTest领域是一个专门的测试领域，用于验证文档系统的各种功能和边界情况。该领域包含22个测试文档，涵盖了代码段检测（JavaScript/TypeScript）、API信息版本测试、多线程并发编程（TaskPool/Worker）、异步并发（Promise/async/await）、示例代码同源验证（正常和异常场景）、原子化服务测试、废弃文档检测、尖括号转义处理等多个测试场景。这些文档用于确保文档系统在不同场景下能够正确解析、处理和展示内容。

## 核心概念

- 代码段检测
- API信息测试
- 并发编程
- TaskPool
- Worker
- 示例代码同源验证
- 原子化服务
- Promise
- async/await
- 尖括号转义

## 学习路径

### 阶段 1: 并发编程基础

学习多线程并发、TaskPool和异步并发的基础知识

- [多线程并发概述](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/multi-thread-concurrency-overview.md)
- [TaskPool简介](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/taskpool-introduction.md)
- [异步并发](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/async-concurrency-overview.md)

### 阶段 2: API信息测试

了解API Info测试场景和版本支持

- [API Info 测试场景1（reference文件夹下）](../../docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-one.md)
- [API Info 测试场景2（reference文件夹下）](../../docs/zh-cn/application-dev/onlyfortest/reference/api-info-test-kit/api-info-TC-two.md)
- [API Info 测试场景1](../../docs/zh-cn/application-dev/onlyfortest/media/api-info-TC-one-dev.md)
- [API Info 测试场景2](../../docs/zh-cn/application-dev/onlyfortest/media/api-info-TC-two-dev.md)

### 阶段 3: 示例代码同源验证

掌握示例代码同源的正常和异常场景

- [验证示例代码同源--正常场景](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-normal.md)
- [验证示例代码同源--异常场景1](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-1.md)
- [验证示例代码同源--异常场景2](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-2.md)
- [验证示例代码同源--异常场景3](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-3.md)
- [验证示例代码同源--异常场景4](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-4.md)
- [验证示例代码同源--异常场景5](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils/ason-parsing-generation-Abnormal-5.md)

### 阶段 4: 代码段检测

学习代码段检测和废弃文档处理

- [验证代码段检测---需检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-legal-code.md)
- [验证废弃文档中的代码段检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-deprecated-doc.md)
- [验证代码段检测---不检测](../../docs/zh-cn/application-dev/onlyfortest/9Release/check-illegal-code.md)

### 阶段 5: 尖括号转义测试

了解尖括号在不同场景下的转义处理

- [尖括号转义正常场景](../../docs/zh-cn/application-dev/onlyfortest/9Release/angle-brackets.md)
- [尖括号转义正常场景-系统](../../docs/zh-cn/application-dev/onlyfortest/9Release/angle-brackets-sys.md)

### 阶段 6: 原子化服务测试

学习原子化服务的属性测试

- [原子化服务添加属性测试（reference文件夹下）](../../docs/zh-cn/application-dev/onlyfortest/reference/auto-service-test.md)
- [原子化服务添加属性测试](../../docs/zh-cn/application-dev/onlyfortest/media/auto-service-test-dev.md)

### 阶段 7: 相关实例参考

查看相关实例的参考示例

- [reference文件夹下相关实例](../../docs/zh-cn/application-dev/onlyfortest/reference/sample-test.md)
- [相关实例测试](../../docs/zh-cn/application-dev/onlyfortest/media/sample-test-dev.md)

## 子领域

### ArkTS工具

ArkTS相关的工具和并发编程文档

- 多线程并发概述
- TaskPool简介
- 异步并发
- 验证示例代码同源--正常场景
- 验证示例代码同源--异常场景1
- 验证示例代码同源--异常场景2
- 验证示例代码同源--异常场景3
- 验证示例代码同源--异常场景4
- 验证示例代码同源--异常场景5

### 9版本发布

9版本相关的测试和验证文档

- 验证代码段检测---需检测
- 验证废弃文档中的代码段检测
- 验证代码段检测---不检测
- 尖括号转义正常场景
- 尖括号转义正常场景-系统

### 参考文档

reference文件夹下的参考示例文档

- API Info 测试场景1（reference文件夹下）
- API Info 测试场景2（reference文件夹下）
- 原子化服务添加属性测试（reference文件夹下）
- reference文件夹下相关实例

### 媒体文档

media文件夹下的测试文档

- API Info 测试场景1
- API Info 测试场景2
- 原子化服务添加属性测试
- 相关实例测试

## 快速参考

| 文档标题 | 路径 |
|---------|------|
| 多线程并发概述 | ../../arkts-utils/multi-thread-concurrency-overview.md |
| TaskPool简介 | ../../arkts-utils/taskpool-introduction.md |
| 异步并发 | ../../arkts-utils/async-concurrency-overview.md |
| 验证示例代码同源--正常场景 | ../../arkts-utils/ason-parsing-generation-normal.md |
| 验证示例代码同源--异常场景1 | ../../arkts-utils/ason-parsing-generation-Abnormal-1.md |
| 验证示例代码同源--异常场景2 | ../../arkts-utils/ason-parsing-generation-Abnormal-2.md |
| 验证示例代码同源--异常场景3 | ../../arkts-utils/ason-parsing-generation-Abnormal-3.md |
| 验证示例代码同源--异常场景4 | ../../arkts-utils/ason-parsing-generation-Abnormal-4.md |
| 验证示例代码同源--异常场景5 | ../../arkts-utils/ason-parsing-generation-Abnormal-5.md |
| 验证代码段检测---需检测 | ../../9Release/check-legal-code.md |
| 验证废弃文档中的代码段检测 | ../../9Release/check-deprecated-doc.md |
| 验证代码段检测---不检测 | ../../9Release/check-illegal-code.md |
| 尖括号转义正常场景 | ../../9Release/angle-brackets.md |
| 尖括号转义正常场景-系统 | ../../9Release/angle-brackets-sys.md |
| API Info 测试场景1（reference文件夹下） | ../../reference/api-info-test-kit/api-info-TC-one.md |
| API Info 测试场景2（reference文件夹下） | ../../reference/api-info-test-kit/api-info-TC-two.md |
| 原子化服务添加属性测试（reference文件夹下） | ../../reference/auto-service-test.md |
| reference文件夹下相关实例 | ../../reference/sample-test.md |
| API Info 测试场景1 | ../../media/api-info-TC-one-dev.md |
| API Info 测试场景2 | ../../media/api-info-TC-two-dev.md |
| 原子化服务添加属性测试 | ../../media/auto-service-test-dev.md |
| 相关实例测试 | ../../media/sample-test-dev.md |

---

*最后更新: 2026-02-24*