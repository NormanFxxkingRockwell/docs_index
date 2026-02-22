# napi 领域地图

## 领域概述
napi领域提供Node-API和JSVM-API能力，支持ArkTS/JS与C/C++的交互，包括113个文档，涵盖NDK开发、异步任务、线程安全、内存管理、数据类型操作等核心功能。

## 核心概念
- **Node-API**
- **JSVM-API**
- **NDK**
- **异步**
- **线程**
- **内存**
- **生命周期**
- **数据类型**
- **接口**
- **模块**

## 文档索引

### 基础文档
1. [NDK工程构建概述](build-with-ndk-overview)
2. [C/C++标准库机制概述](c-cpp-overview)
3. [调试和性能分析概述](debug-performance-profiling-overview)
4. [代码开发概述](develop-code-overview)
5. [硬件兼容性简介](hw-guide)
6. [JSVM-API简介](jsvm-introduction)
7. [Node-API简介](napi-introduction)
8. [Node-API接口返回状态码介绍](napi_status_introduction)
9. [NDK开发导读](ndk-development-overview)
10. [OpenMP简介](openmp-overview)

### 核心功能
11. [代码开发概述](develop-code-overview)
12. [格物开发指导](gewu-ndk-api-guidelines)
13. [JSVM-API 支持的数据类型和接口](jsvm-data-types-interfaces)
14. [Node-API支持的数据类型和接口](napi-data-types-interfaces)
15. [Node-API开发规范](napi-guidelines)
16. [Node-API接口返回状态码介绍](napi_status_introduction)
17. [NativeBundle开发指导](native-bundle-guidelines)
18. [NDK开发导读](ndk-development-overview)
19. [内存管理purgeable内存开发指导](purgeable-memory-guidelines)
20. [QoS 开发指导](qos-guidelines)
21. [Rawfile开发指导](rawfile-guidelines)
22. [使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的任务](use-call-threadsafe-function-with-priority)
23. [使用JSVM-API接口进行array相关开发](use-jsvm-about-array)
24. [使用JSVM-API接口进行ArrayBuffer相关开发](use-jsvm-about-arraybuffer)
25. [使用JSVM-API接口操作bigint类型值](use-jsvm-about-bigint)
26. [使用JSVM-API接口进行class相关开发](use-jsvm-about-class)
27. [使用JSVM-API接口进行Date相关开发](use-jsvm-about-date)
28. [使用JSVM-API接口进行debug操作](use-jsvm-about-debug-option)
29. [使用JSVM-API接口提供Latin1/UTF16格式字符串相关开发](use-jsvm-about-external-string)
30. [使用JSVM-API接口进行JSON操作](use-jsvm-about-JSON)
31. [使用JSVM-API接口进行object相关开发](use-jsvm-about-object)
32. [使用JSVM-API接口进行primitive类相关开发](use-jsvm-about-primitive)
33. [使用JSVM-API接口进行private相关开发](use-jsvm-about-private)
34. [使用JSVM-API接口处理异步操作](use-jsvm-about-promise)
35. [使用JSVM-API接口设置JavaScript对象的属性](use-jsvm-about-property)
36. [使用JSVM-API提供的proxy接口](use-jsvm-about-proxy)
37. [使用JSVM-API接口创建和获取string值](use-jsvm-about-string)
38. [使用JSVM-API接口进行Trace相关开发](use-jsvm-about-trace)
39. [使用JSVM-API接口获取JSVM API的版本号](use-jsvm-about-version)
40. [使用JSVM-API接口进行WebAssembly模块相关开发](use-jsvm-about-wasm)
41. [使用JSVM-API接口进行Well-known symbols相关开发](use-jsvm-about-well-known-symbols)
42. [使用JSVM-API接口进行Wrapper object相关开发](use-jsvm-about-wrapper-object)
43. [使用JSVM-API接口创建和获取数值](use-jsvm-basic-data-types)
44. [使用JSVM-API接口进行虚拟机快照相关开发](use-jsvm-create-snapshot)
45. [使用JSVM-API接口进行错误处理开发](use-jsvm-error)
46. [使用JSVM-API接口进行任务队列相关开发](use-jsvm-execute_tasks)
47. [使用JSVM-API接口进行函数创建和调用](use-jsvm-function-call)
48. [使用JSVM-API接口进行JavaScript代码调试调优](use-jsvm-heapstatistics-debugger-cpuprofiler-heapsnapshot)
49. [使用JSVM-API接口进行生命周期相关开发](use-jsvm-life-cycle)
50. [使用JSVM-API实现JS与C/C++语言交互开发流程](use-jsvm-process)
51. [使用JSVM-API接口创建多个引擎执行JS代码并销毁](use-jsvm-runtime-task)
52. [使用Node-API接口进行array相关开发](use-napi-about-array)
53. [使用Node-API接口进行ArrayBuffer相关开发](use-napi-about-arraybuffer)
54. [使用Node-API接口操作bigint类型值](use-napi-about-bigint)
55. [使用Node-API接口进行buffer相关开发](use-napi-about-buffer)
56. [使用Node-API进行class相关开发](use-napi-about-class)
57. [使用Node-API接口注册和使用环境清理钩子](use-napi-about-cleanuphook)
58. [使用扩展的Node-API接口在当前线程中创建、切换和销毁上下文环境](use-napi-about-context)
59. [使用Node-API接口产生的异常日志/崩溃分析](use-napi-about-crash)
60. [使用扩展的Node-API接口创建和销毁临界区作用域及访问字符串内容](use-napi-about-critical)
61. [使用Node-API进行自定义异步操作相关开发](use-napi-about-custom-asynchronous-operations)
62. [使用Node-API接口进行Date相关开发](use-napi-about-date)
63. [使用Node-API接口关联数据，使其生命周期与当前环境的生命周期相关联](use-napi-about-environmental-life-cycle)
64. [使用Node-API接口进行错误处理开发](use-napi-about-error)
65. [使用Node-API进行扩展能力功能开发](use-napi-about-extension)
66. [使用Node-API接口进行函数创建和调用](use-napi-about-function)
67. [使用Node-API接口进行object相关开发](use-napi-about-object)
68. [使用Node-API其他实用接口](use-napi-about-other-practical-tools)
69. [使用Node-API接口进行primitive类相关开发](use-napi-about-primitive)
70. [使用Node-API接口处理异步操作](use-napi-about-promise)
71. [使用Node-API接口设置ArkTS对象的属性](use-napi-about-property)
72. [使用扩展的Node-API接口创建对ArkTS对象的Sendable强引用](use-napi-about-sendable-reference)
73. [使用Node-API接口创建和获取string值](use-napi-about-string)
74. [使用扩展的Node-API接口创建对ArkTS对象的强引用](use-napi-about-strong-reference)
75. [使用Node-API接口创建ArkTS运行时环境](use-napi-ark-runtime)
76. [使用Node-API接口进行异步任务开发](use-napi-asynchronous-task)
77. [使用Node-API接口创建基本数据类型](use-napi-basic-data-types)
78. [使用扩展的Node-API接口在异步线程中运行和停止事件循环](use-napi-event-loop)
79. [使用Node-API接口进行生命周期相关开发](use-napi-life-cycle)
80. [使用Node-API接口进行模块加载](use-napi-load-module-with-info)
81. [使用Node-API接口在主线程中进行模块加载](use-napi-load-module)
82. [使用Node-API实现跨语言交互开发流程](use-napi-process)
83. [使用Node-API接口进行线程安全开发](use-napi-thread-safety)

### 高级功能
84. [C/C++内存错误检测](debug-asan)
85. [调试和性能分析概述](debug-performance-profiling-overview)
86. [JSVM-API调试&定位](jsvm-debugger-cpuprofiler-heapsnapshot)
87. [JSVM-API 内存泄漏问题定位指导](jsvm-locate-memory-leak)
88. [内存泄漏相关问题汇总](napi-faq-about-memory-leak)
89. [内存管理purgeable内存开发指导](purgeable-memory-guidelines)
90. [使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的任务](use-call-threadsafe-function-with-priority)
91. [使用DevTools进行网页内存分析](use-jsvm-about-analyze-memory-usage)
92. [使用JSVM-API接口处理异步操作](use-jsvm-about-promise)
93. [使用JSVM-API接口进行JavaScript代码调试调优](use-jsvm-heapstatistics-debugger-cpuprofiler-heapsnapshot)
94. [使用JSVM-API进行内存管理](use-jsvm-memory-management)
95. [使用扩展的Node-API接口在当前线程中创建、切换和销毁上下文环境](use-napi-about-context)
96. [使用Node-API进行自定义异步操作相关开发](use-napi-about-custom-asynchronous-operations)
97. [使用Node-API接口处理异步操作](use-napi-about-promise)
98. [使用Node-API接口进行异步任务开发](use-napi-asynchronous-task)
99. [使用扩展的Node-API接口在异步线程中运行和停止事件循环](use-napi-event-loop)
100. [使用Node-API接口在主线程中进行模块加载](use-napi-load-module)
101. [使用Node-API接口进行线程安全开发](use-napi-thread-safety)

## 学习路径
1. [NDK工程构建概述](build-with-ndk-overview)
2. [C/C++标准库机制概述](c-cpp-overview)
3. [调试和性能分析概述](debug-performance-profiling-overview)
4. [代码开发概述](develop-code-overview)
5. [硬件兼容性简介](hw-guide)
6. [JSVM-API简介](jsvm-introduction)
7. [Node-API简介](napi-introduction)
8. [Node-API接口返回状态码介绍](napi_status_introduction)
9. [NDK开发导读](ndk-development-overview)
10. [OpenMP简介](openmp-overview)
11. [代码开发概述](develop-code-overview)
12. [格物开发指导](gewu-ndk-api-guidelines)
13. [JSVM-API 支持的数据类型和接口](jsvm-data-types-interfaces)
14. [Node-API支持的数据类型和接口](napi-data-types-interfaces)
15. [Node-API开发规范](napi-guidelines)
16. [Node-API接口返回状态码介绍](napi_status_introduction)
17. [NativeBundle开发指导](native-bundle-guidelines)
18. [NDK开发导读](ndk-development-overview)
19. [内存管理purgeable内存开发指导](purgeable-memory-guidelines)
20. [QoS 开发指导](qos-guidelines)

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| 使用命令行CMake构建NDK工程 | [使用命令行CMake构建NDK工程](../../docs/docs/zh-cn/application-dev/napi\build-with-ndk-cmake.md) |
| 使用DevEco Studio模板构建NDK工程 | [使用DevEco Studio模板构建NDK工程](../../docs/docs/zh-cn/application-dev/napi\build-with-ndk-ide.md) |
| NDK工程构建概述 | [NDK工程构建概述](../../docs/docs/zh-cn/application-dev/napi\build-with-ndk-overview.md) |
| 在NDK工程中使用预构建库 | [在NDK工程中使用预构建库](../../docs/docs/zh-cn/application-dev/napi\build-with-ndk-prebuilts.md) |
| C/C++标准库机制概述 | [C/C++标准库机制概述](../../docs/docs/zh-cn/application-dev/napi\c-cpp-overview.md) |
| CPU特性 | [CPU特性](../../docs/docs/zh-cn/application-dev/napi\cpu-features.md) |
| 创建NDK工程 | [创建NDK工程](../../docs/docs/zh-cn/application-dev/napi\create-with-ndk.md) |
| C/C++内存错误检测 | [C/C++内存错误检测](../../docs/docs/zh-cn/application-dev/napi\debug-asan.md) |
| 调试和性能分析概述 | [调试和性能分析概述](../../docs/docs/zh-cn/application-dev/napi\debug-performance-profiling-overview.md) |
| 代码开发概述 | [代码开发概述](../../docs/docs/zh-cn/application-dev/napi\develop-code-overview.md) |
| fdsan使用指导 | [fdsan使用指导](../../docs/docs/zh-cn/application-dev/napi\fdsan.md) |
| 格物开发指导 | [格物开发指导](../../docs/docs/zh-cn/application-dev/napi\gewu-ndk-api-guidelines.md) |
| 硬件兼容性简介 | [硬件兼容性简介](../../docs/docs/zh-cn/application-dev/napi\hw-guide.md) |
| JSVM-API 申请JIT权限指导 | [JSVM-API 申请JIT权限指导](../../docs/docs/zh-cn/application-dev/napi\jsvm-apply-jit-profile.md) |
| JSVM-API 支持的数据类型和接口 | [JSVM-API 支持的数据类型和接口](../../docs/docs/zh-cn/application-dev/napi\jsvm-data-types-interfaces.md) |
| JSVM-API调试&定位 | [JSVM-API调试&定位](../../docs/docs/zh-cn/application-dev/napi\jsvm-debugger-cpuprofiler-heapsnapshot.md) |
| JSVM-API常见问题 | [JSVM-API常见问题](../../docs/docs/zh-cn/application-dev/napi\jsvm-frequently-questions.md) |
| JSVM-API使用规范 | [JSVM-API使用规范](../../docs/docs/zh-cn/application-dev/napi\jsvm-guidelines.md) |
| JSVM-API简介 | [JSVM-API简介](../../docs/docs/zh-cn/application-dev/napi\jsvm-introduction.md) |
| JSVM-API 内存泄漏问题定位指导 | [JSVM-API 内存泄漏问题定位指导](../../docs/docs/zh-cn/application-dev/napi\jsvm-locate-memory-leak.md) |

## 统计信息
- 文档总数：113
- 核心概念：18
