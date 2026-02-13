# Application Test 领域地图

## 领域概述

Application Test领域是HarmonyOS应用测试的核心模块，提供了完整的测试解决方案。该领域包含单元测试框架（JsUnit）、UI测试框架（UITest）、白盒性能测试框架（PerfTest）、SmartPerf性能工具和wukong稳定性测试工具等多个测试组件。开发者可以使用这些工具编写ArkTS语言的自动化测试脚本，通过单元测试、UI测试、性能测试和稳定性测试等多种测试方式，全面验证应用的功能正确性、界面交互性、性能表现和稳定性。测试框架支持丰富的断言能力、Mock能力、数据驱动能力等高级特性，帮助开发者构建高效、可靠的测试体系。

## 核心概念

- **单元测试框架**：自动化测试框架基础底座，提供测试脚本识别、调度、执行和结果汇总的能力
- **UI测试框架**：提供UI界面查找和模拟操作能力，支持控件查找、事件模拟等
- **白盒性能测试**：针对指定代码段运行时的白盒性能测试能力，支持耗时、CPU使用率等指标采集
- **SmartPerf性能工具**：性能功耗测试工具，可监测FPS、CPU、GPU、RAM、Temp等指标
- **wukong稳定性测试**：随机事件注入、控件注入、异常捕获、报告生成等稳定性压力测试工具
- **测试断言**：判断用例实际结果值与预期值是否相符的能力
- **Mock能力**：对定义的函数进行Mock并修改函数的行为，使其返回指定的值或执行指定操作
- **数据驱动测试**：复用同一个测试脚本，使用不同输入数据驱动测试脚本执行
- **自动化测试**：编写测试脚本，通过测试结果查看相应功能的实现效果
- **性能指标采集**：采集应用和整机的性能指标，包括FPS、CPU、GPU、内存等

## 文档索引

### 基础文档

1. [Test Kit简介](../../docs/zh-cn/application-dev/application-test/test-kit-overview.md) - Test Kit为开发者提供了自动化测试框架，提供单元、UI和性能测试能力

### 核心测试框架

2. [单元测试框架使用指导指导](../../docs/zh-cn/application-dev/application-test/unittest-guidelines.md) - 单元测试框架（JsUnit）是自动化测试框架基础底座，提供测试脚本识别、调度、执行和结果汇总的能力

3. [UI测试测试框架使用指导指导](../../docs/zh-cn/application-dev/application-test/uitest-guidelines.md) - UI测试框架（UITest）为开发者提供UI界面查找和模拟操作能力

### 性能测试

4. [白盒性能测试框架使用指导](../../docs/zh-cn/application-dev/application-test/perftest-guideline.md) - 白盒性能测试框架（PerfTest）提供针对指定代码段运行时的白盒性能测试能力

5. [SmartPerf Device性能工具使用指导](../../docs/zh-cn/application-dev/application-test/smartperf-guidelines.md) - SmartPerf Device是一款基于系统开发的性能功耗测试工具

### 稳定性测试

6. [wukong稳定性工具使用指导](../../docs/zh-cn/application-dev/application-test/wukong-guidelines.md) - wukong是系统自带的一种命令行工具，支持Ability的随机事件注入、控件注入、异常捕获、报告生成

### 其他

7. [Test Kit（应用测试服务）](../../docs/zh-cn/application-dev/application-test/Readme-CN.md) - Test Kit是HarmonyOS应用测试服务的入口文档

## 学习路径

1. [Test Kit简介](../../docs/zh-cn/application-dev/application-test/test-kit-overview.md) - 了解Test Kit的整体架构和功能
2. [单元测试框架使用指导指导](../../docs/zh-cn/application-dev/application-test/unittest-guidelines.md) - 学习单元测试框架的基础用法
3. [UI测试测试框架使用指导指导](../../docs/zh-cn/application-dev/application-test/uitest-guidelines.md) - 掌握UI测试框架的使用方法
4. [白盒性能测试框架使用指导](../../docs/zh-cn/application-dev/application-test/perftest-guideline.md) - 学习性能测试的编写方法
5. [SmartPerf Device性能工具使用指导](../../docs/zh-cn/application-dev/application-test/smartperf-guidelines.md) - 了解性能监测工具的使用
6. [wukong稳定性工具使用指导](../../docs/zh-cn/application-dev/application-test/wukong-guidelines.md) - 学习稳定性测试工具的使用

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| 单元测试 | [单元测试框架使用指导指导](../../docs/zh-cn/application-dev/application-test/unittest-guidelines.md) |
| UI测试 | [UI测试测试框架使用指导指导](../../docs/zh-cn/application-dev/application-test/uitest-guidelines.md) |
| 性能测试 | [白盒性能测试框架使用指导](../../docs/zh-cn/application-dev/application-test/perftest-guideline.md) |
| SmartPerf工具 | [SmartPerf Device性能工具使用指导](../../docs/zh-cn/application-dev/application-test/smartperf-guidelines.md) |
| wukong稳定性测试 | [wukong稳定性工具使用指导](../../docs/zh-cn/application-dev/application-test/wukong-guidelines.md) |
| Test Kit简介 | [Test Kit简介](../../docs/zh-cn/application-dev/application-test/test-kit-overview.md) |

## 统计信息

- 文档总数：7
- 核心概念：10
- 主要测试框架：5（单元测试、UI测试、性能测试、SmartPerf、wukong）