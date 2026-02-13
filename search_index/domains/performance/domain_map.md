# Performance 领域地图

## 领域概述

Performance 领域提供应用性能优化的全面指导，涵盖从基础的高性能编程实践到高级的性能分析工具使用，帮助开发者全方位提升应用性能。该领域包含72个文档，分为性能优化概览、ArkTS高性能编程、减少丢帧卡顿、提升应用启动和响应速度、多线程并发、组件复用、布局优化、状态管理、性能分析工具等多个方面。

## 核心概念

- **高性能编程**：TS&JS高性能编程实践，包括属性访问优化、对象创建优化等
- **多线程并发**：使用Worker和TaskPool实现多线程并发，避免主线程阻塞
- **组件复用**：通过@Reusable装饰器实现组件复用，减少频繁创建销毁的开销
- **布局优化**：减少视图嵌套层次，使用高性能布局节点，优化布局性能
- **状态管理**：合理使用状态变量，精准控制组件更新范围
- **性能分析工具**：使用CPU Profiler、SmartPerf-Host等工具分析性能问题
- **减少丢帧卡顿**：避免主线程耗时操作，减少渲染开销，优化动画性能
- **提升启动速度**：使用延迟加载、预加载、缓存等方法提升冷启动速度
- **懒加载优化**：使用LazyForEach实现懒加载，优化列表和滑动性能
- **动画性能优化**：合理使用动画，避免动画性能问题

## 文档索引

### 概览文档

1. [性能](../../docs/zh-cn/application-dev/performance/Readme-CN.md) - 性能优化领域导航文档
2. [应用性能优化概览](../../docs/zh-cn/application-dev/performance/performance-overview.md) - 介绍优化应用性能的方法和常用性能调优工具
3. [应用开发性能优化入门引导](../../docs/zh-cn/application-dev/performance/application-performance-optimization-guidance.md) - 介绍应用开发过程中常见性能问题的解决方案
4. [应用性能问题分析指导](../../docs/zh-cn/application-dev/performance/application-performance-guide.md) - 介绍应用性能问题的分析方法

### 高性能编程

5. [TS&JS高性能编程实践及使用工具的指导](../../docs/zh-cn/application-dev/performance/high-performance-programming.md) - 从应用编程指南、高性能编程实践、性能优化调试工具等维度提供参考指导
6. [性能提升的其他方法](../../docs/zh-cn/application-dev/performance/arkts-performance-improvement-recommendation.md) - 列举可提升性能的场景供开发者参考

### 多线程并发

7. [高效并发编程](../../docs/zh-cn/application-dev/performance/efficient-concurrent-programming.md) - 介绍并发编程的基本概念和ArkTS支持的异步并发和多线程并发能力
8. [多线程能力场景化示例实践](../../docs/zh-cn/application-dev/performance/multi_thread_capability.md) - 介绍多线程能力的场景化示例实践
9. [利用native的方式实现跨线程调用](../../docs/zh-cn/application-dev/performance/native-threads-call-js.md) - 介绍如何利用native的方式实现跨线程调用
10. [线程数据传输](../../docs/zh-cn/application-dev/performance/thread_data_transfer.md) - 介绍线程间数据传输的方法
11. [多线程共享内存](../../docs/zh-cn/application-dev/performance/thread_memory_shared.md) - 介绍多线程共享内存的使用方法
12. [跨线程序列化耗时点分析](../../docs/zh-cn/application-dev/performance/cross-thread-serialization-time-consumption-analysis.md) - 介绍跨线程序列化耗时点分析工具

### 组件复用

13. [组件复用实践](../../docs/zh-cn/application-dev/performance/component-recycle.md) - 介绍组件复用机制的使用方法和约束限制
14. [组件复用总览](../../docs/zh-cn/application-dev/performance/component-reuse-overview.md) - 系统描述六种复用类型及其应用场景
15. [组件复用性能优化指导](../../docs/zh-cn/application-dev/performance/component_recycle_case.md) - 重点介绍如何通过组件复用性能优化建议提升复用性能
16. [全局自定义组件复用实现](../../docs/zh-cn/application-dev/performance/node_custom_component_reusable_pool.md) - 介绍如何使用BuilderNode自定义复用组件池

### 布局优化

17. [优化布局性能](../../docs/zh-cn/application-dev/performance/reduce-view-nesting-levels.md) - 介绍如何优化布局性能
18. [Flex布局性能提升使用指导](../../docs/zh-cn/application-dev/performance/flex-development-performance-boost.md) - 介绍Flex布局性能提升的方法
19. [命令式动态布局性能优化](../../docs/zh-cn/application-dev/performance/imperative_dynamic_layouts.md) - 介绍命令式动态布局的性能优化方法

### 启动和响应优化

20. [提升应用冷启动速度](../../docs/zh-cn/application-dev/performance/improve-application-cold-start-speed.md) - 介绍如何提升应用冷启动速度
21. [提升应用响应速度](../../docs/zh-cn/application-dev/performance/improve-application-response.md) - 介绍如何提升应用响应速度
22. [延迟加载lazy-import使用指导](../../docs/zh-cn/application-dev/performance/Lazy-Import-Instructions.md) - 介绍延迟加载lazy-import的使用方法
23. [减少首帧绘制时的冗余操作](../../docs/zh-cn/application-dev/performance/reduce-redundant-operations-when-render-first-frame.md) - 介绍如何减少首帧绘制时的冗余操作
24. [应用闪屏问题解决方案](../../docs/zh-cn/application-dev/performance/screen_flicker_solution.md) - 介绍应用闪屏问题的解决方案

### 列表和滑动优化

25. [LazyForEach优化](../../docs/zh-cn/application-dev/performance/lazyforeach_optimization.md) - 介绍LazyForEach的优化方法
26. [列表场景性能提升实践](../../docs/zh-cn-cn/application-dev/performance/list-perf-improvement.md) - 介绍列表场景的性能提升方法
27. [Grid高性能开发指导](../../docs/zh-cn/application-dev/performance/grid_optimization.md) - 介绍Grid组件的高性能开发方法
28. [Swiper高性能开发指导](../../docs/zh-cn/application-dev/performance/swiper_optimization.md) - 介绍Swiper组件的高性能开发方法
29. [WaterFlow高性能开发指导](../../docs/zh-cn/application-dev/performance/waterflow_optimization.md) - 介绍WaterFlow组件的高性能开发方法
30. [解决滑动白块](../../docs/zh-cn/application-dev/performance/resolve_sliding_white_blocks.md) - 介绍如何解决滑动白块问题

### 状态管理

31. [合理进行状态管理](../../docs/zh-cn/application-dev/performance/proper_state_management.md) - 介绍如何合理进行状态管理
32. [精准控制组件的更新范围](zh-cn/application-dev/performance/precisely-control-render-scope.md) - 介绍如何精准控制组件的更新范围
33. [合理选择条件渲染和显隐控制](../../docs/zh-cn/application-dev/performance/proper-choice-between-if-and-visibility.md) - 介绍如何合理选择条件渲染和显隐控制
34. [合理使用自定义组件冻结功能](../../docs/zh-cn/application-dev/performance/custom_component_freeze.md) - 介绍自定义组件冻结功能的原理机制和使用场景
35. [状态变量组件定位工具使用实践](../../docs/zh-cn/application-dev/performance/state_variable_dfx_pratice.md) - 介绍状态变量组件定位工具的使用方法

### 动画和渲染优化

36. [合理使用动画](../../docs/zh-cn/application-dev/performance/reasonable-using-animation.md) - 介绍如何合理使用动画
37. [应用程序动效能力实践](../../docs/zh-cn/application-dev/performance/animation_practice.md) - 介绍如何在开发应用程序时合理地使用动效
38. [使用animation代替animator](../../docs/zh-cn/application-dev/performance/using-animation-insteadof-animator.md) - 介绍使用animation代替animator的方法
39. [合理使用renderGroup](../../docs/zh-cn/application-dev/performance/reasonable-using-renderGroup.md) - 介绍如何合理使用renderGroup缓存提升属性动画性能
40. [图像模糊动效优化](../../docs/zh-cn/application-dev/performance/fuzzy_scene_performance_optimization.md) - 介绍图像模糊动效的优化方法
41. [长帧优化](../../docs/zh-cn/application-dev/performance/long-frame-optimization.md) - 介绍长帧问题的优化方法
42. [不可见刷新性能优化](../../docs/zh-cn/application-dev/performance/invisible-refresh-performance.md) - 介绍不可见刷新的性能优化方法
43. [合理释放高负载组件渲染](../../docs/zh-cn/application-dev/performance/reasonably-dispose-highly-loaded-component-render.md) - 介绍如何合理释放高负载组件的渲染

### 性能分析工具

44. [应用性能分析工具CPU Profiler的使用指导](../../docs/zh-cn/application-dev/performance/application-performance-analysis.md) - 介绍应用性能分析工具CPU Profiler的使用方法
45. [性能优化工具SmartPerf-Host](../../docs/zh-cn/application-dev/performance/performance-optimization-using-smartperf-host.md) - 介绍SmartPerf-Host性能优化工具的使用方法
46. [使用HiDumper进行性能优化](../../docs/zh-cn/application-dev/performance/performance-optimization-using-hidumper.md) - 介绍如何使用HiDumper工具进行性能优化
47. [常用Trace使用指导](../../docs/zh-cn/application-dev/performance/common-trace-using-instructions.md) - 介绍OpenHarmony中常用的Trace
48. [页面布局检查器ArkUI Inspector使用指导](../../docs/zh-cn/application-dev/performance/arkUI-inspector.md) - 介绍DevEco Studio内置ArkUI Inspector工具的使用方法
49. [时延类性能问题分析实践](../../docs/zh-cn/application-dev/performance/delay_related_performance.md) - 介绍时延问题分析思路

### Native和N-API优化

50. [安全和高效地使用N-API开发Native模块](../../docs/zh-cn/application-dev/performance/develop-Native-modules-using-NAPI-safely-and-efficiently.md) - 从对象生命周期管理、跨语言调用开销等角度给出N-API开发指导
51. [复杂绘制场景下使用Native Drawing自绘制能力替代Canvas提升性能](../../docs/zh-cn/application-dev/performance/native_drawing_substitute_canvas.md) - 介绍在复杂绘制场景下使用Native Drawing自绘制能力替代Canvas

### 高级优化

52. [使用AOT进行性能优化](../../docs/zh-cn/application-dev/performance/performance-optimization-using-aot.md) - 介绍如何使用AOT编译器进行性能优化
53. [主动关闭CPU访问窗口缓冲区数据降低功耗](../../docs/zh-cn/application-dev/performance/close_CPU_access_window_buffer_data.md) - 介绍如何主动关闭CPU访问窗口缓冲区数据以降低功耗
54. [高效利用HWC](../../docs/zh-cn/application-dev/performance/utilize_hwc_efficiently.md) - 介绍如何高效利用HWC硬件合成器
55. [高负载场景下线程优先级设置防止关键线程被打断](../../docs/zh-cn/application-dev/performance/qos-protect-critical-threads.md) - 介绍在高负载场景下如何设置线程优先级
56. [减少包体积](../../docs/zh-cn/application-dev/performance/reduce-package-size.md) - 介绍如何减少应用包体积

### 避免性能问题

57. [避免在主线程中执行耗时操作](../../docs/zh-cn/application-dev/performance/avoid_time_consuming_operations_in_mainthread.md) - 介绍如何在应用开发中避免在主线程中执行耗时操作
58. [避免在滑动场景的高频回调接口中处理耗时操作](../../docs/zh-cn/application-dev/performance/avoid_high_frequency_callback_execute_lengthy_operation.md) - 介绍四种需要避免处理耗时操作的高频场景
59. [避免开发过程中的冗余操作](../../docs/zh-cn/application-dev/performance/avoiding-redundant-operations.md) - 介绍如何识别并减少冗余操作
60. [合理使用系统接口](../../docs/zh-cn/application-dev/performance/reasonable_using_system_interfaces.md) - 介绍如何合理使用系统接口

### 缓存和预加载优化

61. [合理使用缓存提升性能](../../docs/zh-cn/application-dev/performance/reasonable_using_cache_improve_performance.md) - 介绍如何合理使用缓存提升性能
62. [合理使用后台任务](../../docs/zh-cn/application-dev/performance/reasonable-running-backgroundTask.md) - 介绍如何合理使用后台任务

### 特定场景优化

63. [文件上传下载性能提升指导](../../docs/zh-cn/application-dev/performance/improve-file-upload-and-download-performance.md) - 介绍文件上传下载的性能提升方法
64. [音画同步最佳实践](../../docs/zh-cn/application-dev/performance/audio-video-synchronization.md) - 指导第三方视频播放应用正确获取并使用音频相关信息来保证播放时的音视频同步
65. [在线视频播放卡顿实践](../../docs/zh-cn/application-dev/performance/online_video_playback_lags_practice.md) - 介绍在线视频播放卡顿问题的分析和解决方法
66. [性能快速切换短视频](../../docs/zh-cn/application-dev/performance/performance-quick-switch-short-video.md) - 介绍短视频快速切换场景的性能优化方法
67. [性能相机拍摄实践](../../docs/zh-cn/application-dev/performance/performance-camera-shot2see.md) - 介绍相机拍摄场景的性能优化方法

### Web性能优化

68. [Web组件性能优化](../../docs/zh-cn/application-dev/performance/performance-web-import.md) - 介绍Web组件的性能优化方法
69. [Web性能分析](../../docs/zh-cn/application-dev/performance/web-analyse.md) - 介绍Web组件的性能分析方法
70. [WebView渲染应用组件](../../docs/zh-cn/application-dev/performance/webview-render-app-components.md) - 介绍WebView渲染应用组件的性能优化方法

### 实践指导

71. [应用性能优化常见问题解决指导](../../docs/zh-cn/application-dev/performance/performance-optimization-practical-guidance.md) - 介绍应用性能优化的常见问题解决指导
72. [性能动态导入](../../docs/zh-cn/application-dev/performance/performance-dynamic-import.md) - 介绍动态导入的性能优化方法

## 学习路径

1. **入门阶段**：先阅读[性能](../../docs/zh-cn/application-dev/performance/Readme-CN.md)和[应用性能优化概览](../../docs/zh-cn/application-dev/performance/performance-overview.md)，了解性能优化的基本概念和方法
2. **基础阶段**：学习[应用开发性能优化入门引导](../../docs/zh-cn/application-dev/performance/application-performance-optimization-guidance.md)，掌握性能优化的四要素
3. **编程实践**：学习[TS&JS高性能编程实践](../../docs/zh-cn/application-dev/performance/high-performance-programming.md)和[高效并发编程](../../docs/zh-cn/application-dev/performance/efficient-concurrent-programming.md)
4. **组件优化**：学习[组件复用实践](../../docs/zh-cn/application-dev/performance/component-recycle.md)和[优化布局性能](../../docs/zh-cn/application-dev/performance/reduce-view-nesting-levels.md)
5. **启动优化**：学习[提升应用冷启动速度](../../docs/zh-cn/application-dev/performance/improve-application-cold-start-speed.md)和[提升应用响应速度](../../docs/zh-cn/application-dev/performance/improve-application-response.md)
6. **性能分析**：学习[应用性能分析工具CPU Profiler](../../docs/zh-cn/application-dev/performance/application-performance-analysis.md)和[SmartPerf-Host](../../docs/zh-cn/application-dev/performance/performance-optimization-using-smartperf-host.md)

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| 性能优化概览 | [应用性能优化概览](../../docs/zh-cn/application-dev/performance/performance-overview.md) |
| 高性能编程 | [TS&JS高性能编程实践](../../docs/zh-cn/application-dev/performance/high-performance-programming.md) |
| 多线程并发 | [高效并发编程](../../docs/zh-cn/application-dev/performance/efficient-concurrent-programming.md) |
| 组件复用 | [组件复用实践](../../docs/zh-cn/application-dev/performance/component-recycle.md) |
| 布局优化 | [优化布局性能](../../docs/zh-cn/application-dev/performance/reduce-view-nesting-levels.md) |
| 状态管理 | [合理进行状态管理](../../docs/zh-cn/application-dev/performance/proper_state_management.md) |
| CPU Profiler | [应用性能分析工具CPU Profiler](../../docs/zh-cn/application-dev/performance/application-performance-analysis.md) |
| SmartPerf-Host | [性能优化工具SmartPerf-Host](../../docs/zh-cn/application-dev/performance/performance-optimization-using-smartperf-host.md) |
| 提升冷启动速度 | [提升应用冷启动速度](../../docs/zh-cn/application-dev/performance/improve-application-cold-start-speed.md) |
| 提升响应速度 | [提升应用响应速度](../../docs/zh-cn/application-dev/performance/improve-application-response.md) |
| 避免主线程耗时操作 | [避免在主线程中执行耗时操作](../../docs/zh-cn/application-dev/performance/avoid_time_consuming_operations_in_mainthread.md) |
| 组件复用总览 | [组件复用总览](../../docs/zh-cn/application-dev/performance/component-reuse-overview.md) |
| LazyForEach优化 | [LazyForEach优化](../../docs/zh-cn/application-dev/performance/lazyforeach_optimization.md) |
| List性能提升 | [列表场景性能提升实践](../../docs/zh-cn/application-dev/performance/list-perf-improvement.md) |
| Grid优化 | [Grid高性能开发指导](../../docs/zh-cn/application-dev/performance/grid_optimization.md) |
| Swiper优化 | [Swiper高性能开发指导](../../docs/zh-cn/application-dev/performance/swiper_optimization.md) |
| WaterFlow优化 | [WaterFlow高性能开发指导](../../docs/zh-cn/application-dev/performance/waterflow_optimization.md) |
| 合理使用动画 | [合理使用动画](../../docs/zh-cn/application-dev/performance/reasonable-using-animation.md) |
| 合理使用renderGroup | [合理使用renderGroup](../../docs/zh-cn/application-dev/performance/reasonable-using-renderGroup.md) |
| 精准控制渲染范围 | [精准控制组件的更新范围](../../docs/zh-cn/application-dev/performance/precisely-control-render-scope.md) |
| 合理进行状态管理 | [合理进行状态管理](../../docs/zh-cn/application-dev/performance/proper_state_management.md) |
| 避免冗余操作 | [避免开发过程中的冗余操作](../../docs/zh-cn/application-dev/performance/avoiding-redundant-operations.md) |
| 音画同步 | [音画同步最佳实践](../../docs/zh-cn/application-dev/performance/audio-video-synchronization.md) |
| N-API开发 | [安全和高效地使用N-API开发Native模块](../../docs/zh-cn/application-dev/performance/develop-Native-modules-using-NAPI-safely-and-efficiently.md) |
| ArkUI Inspector | [页面布局检查器ArkUI Inspector](../../docs/zh-cn/application-dev/performance/arkUI-inspector.md) |
| 常用Trace | [常用Trace使用指导](../../docs/zh-cn/application-dev/performance/common-trace-using-instructions.md) |

## 统计信息

- 文档总数：72
- 核心概念：10
- 主要分类：11个（概览、高性能编程、多线程并发、组件复用、布局优化、启动和响应优化、列表和滑动优化、状态管理、动画和渲染优化、性能分析工具、高级优化）