# Task Management 领域地图

## 领域概述

Background Tasks Kit 是 OpenHarmony 提供的后台任务开发服务，旨在帮助应用在后台执行任务，扩展应用在后台的运行时间，同时降低设备耗电速度、保障用户使用流畅度。该Kit提供了多种后台任务类型，包括短时任务、长时任务、延迟任务、代理提醒和能效资源申请，开发者可以根据实际需求选择合适的后台任务类型。

## 核心概念

- **短时任务**：适用于实时性要求高、耗时不长的任务，例如状态保存、消息发送等
- **长时任务**：适用于长时间运行在后台、用户可感知的任务，例如后台播放音乐、导航、设备连接等
- **延迟任务**：对于实时性要求不高、可延迟执行的任务，系统会根据内存、功耗等统一调度
- **代理提醒**：应用退后台或进程终止后，系统会代理应用做定时提醒，支持倒计时、日历和闹钟三类
- **能效资源申请**：仅对系统特权应用开放，用于为进程申请CPU等资源，保障系统应用在后台执行的诉求
- **后台任务管理**：统一管理各类后台任务的申请、取消和状态查询
- **WorkScheduler**：延迟任务调度器，根据触发条件和系统状态统一调度任务执行
- **ReminderAgent**：代理提醒管理器，管理系统代理的定时提醒任务

## 文档索引

### 基础文档

1. [Background Tasks Kit简介](../../docs/zh-cn/application-dev/task-management/background-task-overview.md)

### 核心功能

2. [短时任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/transient-task.md)
3. [长时任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/continuous-task.md)
4. [延迟任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/work-scheduler.md)
5. [代理提醒(ArkTS)](../../docs/zh-cn/application-dev/task-management/agent-powered-reminder.md)

### 高级功能

6. [短时任务(C/C++)](../../docs/zh-cn/application-dev/task-management/native-transient-task.md)
7. [能效资源申请(ArkTS)（仅对系统特权应用开放）](../../docs/zh-cn/application-dev/task-management/efficiency-resource-request-sys.md)

## 学习路径

1. [Background Tasks Kit简介](../../docs/zh-cn/application-dev/task-management/background-task-overview.md) - 了解Background Tasks Kit的整体功能和后台任务类型
2. [短时任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/transient-task.md) - 学习如何使用短时任务执行耗时短的后台任务
3. [长时任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/continuous-task.md) - 学习如何使用长时任务执行长时间运行的后台任务
4. [延迟任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/work-scheduler.md) - 学习如何使用延迟任务执行时效性要求不高的任务
5. [代理提醒(ArkTS)](../../docs/zh-cn/application-dev/task-management/agent-powered-reminder.md) - 学习如何使用代理提醒实现定时提醒功能
6. [短时任务(C/C++)](../../docs/zh-cn/application-dev/task-management/native-transient-task.md) - 学习如何使用C/C++开发短时任务
7. [能效资源申请(ArkTS)（仅对系统特权应用开放）](../../docs/zh-cn/application-dev/task-management/efficiency-resource-request-sys.md) - 学习如何为系统特权应用申请能效资源

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| Background Tasks Kit简介 | [Background Tasks Kit简介](../../docs/zh-cn/application-dev/task-management/background-task-overview.md) |
| 短时任务(ArkTS) | [短时任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/transient-task.md) |
| 短时任务(C/C++) | [短时任务(C/C++)](../../docs/zh-cn/application-dev/task-management/native-transient-task.md) |
| 长时任务(ArkTS) | [长时任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/continuous-task.md) |
| 延迟任务(ArkTS) | [延迟任务(ArkTS)](../../docs/zh-cn/application-dev/task-management/work-scheduler.md) |
| 代理提醒(ArkTS) | [代理提醒(ArkTS)](../../docs/zh-cn/application-dev/task-management/agent-powered-reminder.md) |
| 能效资源申请(ArkTS) | [能效资源申请(ArkTS)](../../docs/zh-cn/application-dev/task-management/efficiency-resource-request-sys.md) |

## 统计信息

- 文档总数：8
- 核心概念：8