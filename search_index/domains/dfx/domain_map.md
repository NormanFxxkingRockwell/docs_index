# DFX 领域索引

## 概述

Performance Analysis Kit（性能分析服务）为开发者提供应用事件、日志、跟踪分析工具，可观测应用运行时状态，用于行为分析、故障分析、安全分析、统计分析，帮助开发者持续改进应用体验。提供故障检测、功耗检测、性能检测、日志打印、事件订阅、性能跟踪、分布式调用链跟踪、检测模式、系统调试信息获取、业务线程超时检测、错误管理及应用恢复等能力。支持 ArkTS 和 C/C++ 两种开发语言。

## 核心概念

- 故障检测
- 日志打印
- 事件订阅
- 性能跟踪
- 分布式调用链跟踪
- 检测模式
- 系统调试信息获取
- 业务线程超时检测
- 错误管理
- 应用恢复

## 学习路径

1. [Performance Analysis Kit（性能分析服务）](../../docs/zh-cn/application-dev/dfx/Readme-CN.md) - 总体介绍
2. [Performance Analysis Kit简介](../../docs/zh-cn/application-dev/dfx/performance-analysis-kit-overview.md) - 功能概述
3. [故障检测简介](../../docs/zh-cn/application-dev/dfx/fault-detection-overview.md) - 故障检测概述
4. [JS Crash（进程崩溃）检测](../../docs/zh-cn/application-dev/dfx/jscrashash-guidelines.md) - JS崩溃检测
5. [Cpp Crash（进程崩溃）检测](../../docs/zh-cn/application-dev/dfx/cppcrash-guidelines.md) - C++崩溃检测
6. [AddrSanitizer（地址越界）检测](../../docs/zh-cn/application-dev/dfx/address-sanitizer-guidelines.md) - 地址越界检测
7. [AppFreeze（应用冻屏）检测](../../docs/zh-cn/application-dev/dfx/appfreeze-guidelines.md) - 应用冻屏检测
8. [任务超时检测](../../docs/zh-cn/application-dev/dfx/apptask-timeout-guidelines.md) - 任务超时检测
9. [应用终止检测](../../docs/zh-cn/application-dev/dfx/appkilled-guidelines.md) - 应用终止检测
10. [使用HiLog打印日志（ArkTS）](../../docs/zh-cn/application-dev/dfx/hilog-guidelines-arkts.md) - ArkTS日志打印
11. [使用HiLog打印日志（C/C++）](../../docs/zh-cn/application-dev/dfx/hilog-guidelines-ndk.md) - C/C++日志打印
12. [HiAppEvent介绍](../../docs/zh-cn/application-dev/dfx/hiappevent-intro.md) - 事件打点机制
13. [事件订阅简介](../../docs/zh-cn/application-dev/dfx/event-subscription-overview.md) - 事件订阅概述
14. [事件订阅（ArkTS）](../../docs/zh-cn/application-dev/dfx/hiappevent-watcher-app-events-arkts.md) - ArkTS事件订阅
15. [事件订阅（C/C++）](../../docs/zh-cn/application-dev/dfx/hiappevent-watcher-app-events-ndk.md) - C/C++事件订阅
16. [HiTraceMeter介绍](../../docs/zh-cn/application-dev/dfx/hitracemeter-intro.md) - 性能跟踪概述
17. [使用HiTraceMeter跟踪性能（ArkTSkt）](../../docs/zh-cn/application-dev/dfx/hitracemeter-guidelines-arkts.md) - ArkTS性能跟踪
18. [使用HiTraceMeter跟踪性能（C/C++）](../../docs/zh-cn/application-dev/dfx/hitracemeter-guidelines-ndk.md) - C/C++性能跟踪
19. [HiTraceChain介绍](../../docs/zh-cn/application-dev/dfx/hitracechain-intro.md) - 分布式调用链跟踪概述
20. [使用HiTraceChain打点（ArkTS）](../../docs/zh-cn/application-dev/dfx/hitracechain-guidelines-arkts.md) - ArkTS调用链跟踪
21. [使用HiTraceChain打点（C/C++）](../../docs/zh-cn/application-dev/dfx/hitracechain-guidelines-ndk.md) - C/C++调用链跟踪
22. [使用HiChecker检测问题（ArkTS）](../../docs/zh-cn/application-dev/dfx/hichecker-guidelines-arkts.md) - 检测模式
23. [HiDebug能力概述](../../docs/zh-cn/application-dev/dfx/hidebug-guidelines.md) - 系统调试信息获取概述
24. [使用HiCollie检测业务线程卡死卡顿问题（C/C++）](../../docs/zh-cn/application-dev/dfx/hicollie-guidelines-ndk.md) - 业务线程超时检测
25. [错误管理开发指导](../../docs/zh-cn/application-dev/dfx/errormanager-guidelines.md) - 错误管理
26. [应用恢复开发指导](../../docs/zh-cn/application-dev/dfx/apprecovery-guidelines.md) - 应用恢复
27. [hilog](../../docs/zh-cn/application-dev/dfx/hilog.md) - 日志命令行工具
28. [hidumper](../../docs/zh-cn/application-dev/dfx/hidumper.md) - 系统信息导出工具
29. [hitrace](../../docs/zh-cn/application-dev/dfx/hitrace.md) - trace采集工具

## 快速参考

| 概念 | 文档 |
|--------|--------|
| 故障检测 | [故障检测简介](../../docs/zh-cn/application-dev/dfx/fault-detection-overview.md) |
| JS崩溃检测 | [JS Crash（进程崩溃）检测](../../docs/zh-cn/application-dev/dfx/jscrash-guidelines.md) |
| CPP崩溃检测 | [Cpp Crash（进程崩溃）检测](../../docs/zh-cn/application-dev/dfx/cppcrash-guidelines.md) |
| 应用冻屏检测 | [AppFreeze（应用冻屏）检测](../../docs/zh-cn/application-dev/dfx/appfreeze-guidelines.md) |
| 地址越界检测 | [AddrSanitizer（地址越界）检测](../../docs/zh-cn/application-dev/dfx/address-sanitizer-guidelines.md) |
| HiLog日志 | [使用HiLog打印日志（ArkTS）](../../docs/zh-cn/application-dev/dfx/hilog-guidelines-arkts.md) |
| HiAppEvent事件 | [HiAppEvent介绍](../../docs/zh-cn/application-dev/dfx/hiappevent-intro.md) |
| HiTraceMeter性能跟踪 | [HiTraceMeter介绍](../../docs/zh-cn/application-dev/dfx/hitracemeter-intro.md) |
| HiTraceChain调用链 | [HiTraceChain介绍](../../docs/zh-cn/application-dev/dfx/hitracechain-intro.md) |
| HiChecker检测 | [使用HiChecker检测问题（ArkTS）](../../docs/zh-cn/application-dev/dfx/hichecker-guidelines-arkts.md) |
| HiDebug调试信息 | [HiDebug能力概述](../../docs/zh-cn/application-dev/dfx/hidebug-guidelines.md) |
| HiCollie超时检测 | [使用HiCollie检测业务线程卡死卡顿问题（C/C++）](../../docs/zh-cn/application-dev/dfx/hicollie-guidelines-ndk.md) |
| 错误管理 | [错误管理开发指导](../../docs/zh-cn/application-dev/dfx/errormanager-guidelines.md) |
| 应用恢复 | [应用恢复开发指导](../../docs/zh-cn/application-dev/dfx/apprecovery-guidelines.md) |
| hilog命令 | [hilog](../../docs/zh-cn/application-dev/dfx/hilog.md) |
| hidumper命令 | [hidumper](../../docs/zh-cn/application-dev/dfx/hidumper.md) |
| hitrace命令 | [hitrace](../../docs/zh-cn/application-dev/dfx/hitrace.md) |
| 术语 | [Performance Analysis Kit术语](../../docs/zh-cn/application-dev/dfx/performance-analysis-kit-terminology.md) |

## 文档统计

- 文档总数：66
- 核心概念：10
- 学习路径：29
- 快速参考：17