# NAPI 领域学习地图

## 领域概述

OpenHarmony NDK（Native Development Kit）提供Native API、编译脚本和工具链，支持使用C/C++语言实现应用关键功能。包含Node-API（ArkTS/JS与C/C++交互）、JSVM-API（JS与C/C++交互）、NDK工程构建、C/C++标准库、线程调度、内存管理、性能调试、硬件等模块。支持性能敏感场景、复用C/C++库、CPU特性定制等开发需求。

## 核心概念

- **Node-API**：ArkTS/JS与C/C++跨语言交互接口
- **JSVM-API**：JS与C/C++跨语言交互接口
- **NDK工程构建**：CMake和Ninja构建系统
- **跨语言交互**：ArkTS/JS与C/C++之间的数据传递和方法调用
- **线程安全**：多线程环境下的安全开发
- **异步任务**：异步操作和任务调度
- **内存管理**：内存分配、释放和优化
- **性能优化**：代码优化和性能分析
- **模块注册**：Native模块的注册和加载
- **C/C++标准库**：libc和libc++标准库

## 学习路径

### 1. NDK基础

1. [napi](../../docs/zh-cn/application-dev/napi/Readme-CN.md) - NDK开发总览
2. [NDK开发导读](../../docs/zh-cn/application-dev/napi/ndk-development-overview.md) - 了解NDK适用场景和必备知识
3. [创建NDK工程](../../docs/zh-cn/application-dev/napi/create-with-ndk.md) - 创建第一个NDK工程
4. [NDK工程构建概述](../../docs/zh-cn/application-dev/napi/build-with-ndk-overview.md) - 了解构建系统
5. [使用DevEco Studio模板构建NDK工程](../../docs/zh-cn/application-dev/napi/build-with-ndk-ide.md) - 使用IDE构建
6. [使用命令行CMake构建NDK工程](../../docs/zh-cn/application-dev/napi/build-with-ndk-cmake.md) - 使用命令行构建
7. [在NDK工程中使用预构建库](../../docs/zh-cn/application-dev/napi/build-with-ndk-prebuilts.md) - 使用第三方库

### 2. C/C++标准库

8. [代码开发概述](../../docs/zh-cn/application-dev/napi/develop-code-overview.md) - 了解开放能力库
9. [C/C++标准库机制概述](../../docs/zh-cn/application-dev/napi/c-cpp-overview.md) - 了解C++兼容性和动态链接器
10. [fdsan使用指导](../../docs/zh-cn/application-dev/napi/fdsan.md) - 文件描述符检测工具

### 3. Node-API基础

11. [Node-API简介](../../docs/zh-cn/application-dev/napi/napi-introduction.md) - 了解Node-API架构和交互流程
12. [Node-API支持的数据类型和接口](../../docs/zh-cn/application-dev/napi/napi-data-types-interfaces.md) - 学习数据类型和接口
13. [Node-API开发规范](../../docs/zh-cn/application-dev/napi/napi-guidelines.md) - 掌握开发规范和最佳实践
14. [使用Node-API实现跨语言交互开发流程](../../docs/zh-cn/application-dev/napi/use-napi-process.md) - 实现第一个跨语言交互

### 4. Node-API进阶

15. [使用Node-API接口进行线程安全开发](../../docs/zh-cn/application-dev/napi/use-napi-thread-safety.md) - 多线程开发
16. [使用Node-API接口进行异步任务开发](../../docs/zh-cn/application-dev/napi/use-napi-asynchronous-task.md) - 异步操作
17. [Native与ArkTS对象绑定](../../docs/zh-cn/application-dev/napi/use-napi-object-wrap.md) - 对象绑定
18. [使用Node-API接口处理异步操作](../../docs/zh-cn/application-dev/napi/use-napi-about-promise.md) - Promise处理

### 5. JSVM-API基础

19. [JSVM-API简介](../../docs/zh-cn/application-dev/napi/jsvm-introduction.md) - 了解JSVM-API架构和交互流程
20. [JSVM-API支持的数据类型和接口](../../docs/zh-cn/application-dev/napi/jsvm-data-types-interfaces.md) - 学习数据类型和接口
21. [JSVM-API使用规范](../../docs/zh-cn/application-dev/napi/jsvm-guidelines.md) - 掌握使用规范和最佳实践
22. [使用JSVM-API实现JS与C/C++语言交互开发流程](../../docs/zh-cn/application-dev/napi/use-jsvm-process.md) - 实现第一个跨语言交互

### 6. 性能优化和调试

23. [JSVM通用调优实践](../../docs/zh-cn/application-dev/napi/jsvm-optimizations.md) - 性能优化
24. [使用code cache加速编译](../../docs/zh-cn/application-dev/napi/use-jsvm-about-code-cache.md) - 编译优化
25. [调试和性能分析概述](../../docs/zh-cn/application-dev/napi/debug-performance-profiling-overview.md) - 调试和性能分析
26. [C/C++内存错误检测](../../docs/zh-cn/application-dev/napi/debug-asan.md) - 内存错误检测

## 快速参考

### NDK工程

| 主题 | 文档 |
|------|------|
| NDK开发导读 | [NDK开发导读](../../docs/zh-cn/application-dev/napi/ndk-development-overview.md) |
| 创建NDK工程 | [创建NDK工程](../../docs/zh-cn/application-dev/napi/create-with-ndk.md) |
| NDK工程构建概述 | [NDK工程构建概述](../../docs/zh-cn/application-dev/napi/build-with-ndk-overview.md) |
| 使用DevEco Studio构建 | [使用DevEco Studio模板构建NDK工程](../../docs/zh-cn/application-dev/napi/build-with-ndk-ide.md) |
| 使用CMake构建 | [使用命令行CMake构建NDK工程](../../docs/zh-cn/application-dev/napi/build-with-ndk-cmake.md) |
| 使用预构建库 | [在NDK工程中使用预构建库](../../docs/zh-cn/application-dev/napi/build-with-ndk-prebuilts.md) |

### C/C++标准库

| 主题 | 文档 |
|------|------|
| C/C++标准库 | [C/C++标准库机制概述](../../docs/zh-cn/application-dev/napi/c-cpp-overview.md) |
| fdsan | [fdsan使用指导](../../docs/zh-cn/application-dev/napi/fdsan.md) |

### Node-API

| 主题 | 文档 |
|------|------|
| Node-API简介 | [Node-API简介](../../docs/zh-cn/application-dev/napi/napi-introduction.md) |
| Node-API数据类型和接口 | [Node-API支持的数据类型和接口](../../docs/zh-cn/application-dev/napi/napi-data-types-interfaces.md) |
| Node-API开发规范 | [Node-API开发规范](../../docs/zh-cn/application-dev/napi/napi-guidelines.md) |
| Node-API跨语言交互 | [使用Node-API实现跨语言交互开发流程](../../docs/zh-cn/application-dev/napi/use-napi-process.md) |
| Node-API线程安全 | [使用Node-API接口进行线程安全开发](../../docs/zh-cn/application-dev/napi/use-napi-thread-safety.md) |
| Node-API异步任务 | [使用Node-API接口进行异步任务开发](../../docs/zh-cn/application-dev/napi/use-napi-asynchronous-task.md) |
| Node-API对象绑定 | [Native与ArkTS对象绑定](../../docs/zh-cn/application-dev/napi/use-napi-object-wrap.md) |

### JSVM-API

| 主题 | 文档 |
|------|------|
| JSVM-API简介 | [JSVM-API简介](../../docs/zh-cn/application-dev/napi/jsvm-introduction.md) |
| JSVM-API数据类型和接口 | [JSVM-API支持的数据类型和接口](../../docs/zh-cn/application-dev/napi/jsvm-data-types-interfaces.md) |
| JSVM-API使用规范 | [JSVM-API使用规范](../../docs/zh-cn/application-dev/napi/jsvm-guidelines.md) |
| JSVM-API跨语言交互 | [使用JSVM-API实现JS与C/C++语言交互开发流程](../../docs/zh-cn/application-dev/napi/use-jsvm-process.md) |

### 性能优化和调试

| 主题 | 文档 |
|------|------|
| OpenMP | [OpenMP简介](../../docs/zh-cn/application-dev/napi/openmp-overview.md) |
| Rawfile | [Rawfile开发指导](../../docs/zh-cn/application-dev/napi/rawfile-guidelines.md) |
| QoS | [QoS开发指导](../../docs/zh-cn/application-dev/napi/qos-guidelines.md) |
| Purgeable memory | [Purgeable memory开发指导](../../docs/zh-cn/application-dev/napi/purgeable-memory-guidelines.md) |
| NativeBundle | [NativeBundle开发指导](../../docs/zh-cn/application-dev/napi/native-bundle-guidelines.md) |
| 调试和性能分析 | [调试和性能分析概述](../../docs/zh-cn/application-dev/napi/debug-performance-profiling-overview.md) |
| C/C++内存错误检测 | [C/C++内存错误检测](../../docs/zh-cn/application-dev/napi/debug-asan.md) |

### 硬件兼容性

| 主题 | 文档 |
|------|------|
| 硬件兼容性 | [硬件兼容性简介](../../docs/zh-cn/application-dev/napi/hw-guide.md) |
| OpenHarmony ABI | [OpenHarmony ABI](../../docs/zh-cn/application-dev/napi/ohos-abi.md) |
| CPU特性 | [CPU特性](../../docs/zh-cn/application-dev/napi/cpu-features.md) |
| Neon指令扩展 | [使用Neon指令扩展](../../docs/zh-cn/application-dev/napi/neon-guide.md) |

## 文档统计

- 总文档数：113
- 核心概念：10个
- 学习路径：22个步骤
- 快速参考：20+个主题