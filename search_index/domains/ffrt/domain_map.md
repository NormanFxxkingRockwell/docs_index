# FFRT 领域地图

## 领域概述

Function Flow Runtime (FFRT) 是一种并发编程框架，旨在简化并发编程和任务调度的复杂性。FFRT采用基于任务的调度方式，开发者只需关注任务及其依赖关系，而无需处理底层的线程和计算资源；同时，FFRT采用基于协程的任务执行方式，可以提高任务并行度、提升线程利用率并充分利用多核平台的计算资源，保证系统对所有资源的集约化管理，最终解决系统线程资源滥用问题。

## 核心概念

- **任务管理**：FFRT中的任务是一种面向开发者的编程线索和面向运行时的执行对象，包含一组指令序列及其操作的数据上下文环境
- **任务队列**：用于管理任务的执行顺序和并发度，包括串行队列和并发队列两种类型
- **同步原语**：FFRT提供的同步机制，包括互斥锁、读写锁和条件变量等，用于实现线程安全的数据访问
- **任务依赖**：任务之间的依赖关系，决定了某个任务是否需要等待其他任务完成才能开始执行
- **数据依赖**：通过数据对象的生产者和消费者关系来表达任务依赖，支持Read-after-Write、Write-after-Read和Write-after-Write等依赖关系
- **QoS等级**：定义了任务的服务质量等级，用于指示任务的优先级和资源分配
- **任务优先级**：用于控制任务在队列中的执行顺序，高优先级任务优先执行
- **并发度控制**：通过队列最大并发度设置，控制同一时刻同时执行的任务数量
- **协程调度**：FFRT采用基于协程的任务执行方式，相比内核线程调度机制更为轻量
- **任务伙伴**：支持将大任务拆分为小任务交给其他线程执行，同时支持任务在指定线程上执行和批量任务合并

## 文档索引

### 基础文档

1. [Function Flow Runtime Kit概述](../../docs/zh-cn/application-dev/ffrt/ffrt-overview.md)
2. [Function Flow Runtime并发范式](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-paradigm.md)

### 核心功能

3. [Function Flow Runtime串行队列(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-serial-queue-c.md)
4. [Function Flow Runtime串行队列(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-serial-queue-cpp.md)
5. [Function Flow Runtime并发队列(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-concurrent-queue-c.md)
6. [Function Flow Runtime并发队列(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-concurrent-queue-cpp.md)

### 高级功能

7. [Function Flow Runtime图依赖并发(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-graph-c.md)
8. [Function Flow Runtime图依赖并发(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-graph-cpp.md)
9. [Function Flow Runtime任务伙伴(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-job-partner-cpp.md)

### 参考文档

10. [Function Flow Runtime开发指导](../../docs/zh-cn/application-dev/ffrt/ffrt-development-guideline.md)
11. [Function Flow Runtime C API](../../docs/zh-cn/application-dev/ffrt/ffrt-api-guideline-c.md)

### 文档索引

12. [FFRT](../../docs/zh-cn/application-dev/ffrt/Readme-CN.md)

## 学习路径

1. [Function Flow Runtime Kit概述](../../docs/zh-cn/application-dev/ffrt/ffrt-overview.md) - 了解FFRT的基本概念和编程模型
2. [Function Flow Runtime并发范式](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-paradigm.md) - 了解FFRT支持的各种并发范式
3. [Function Flow Runtime串行队列(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-serial-queue-c.md) - 学习串行队列的C API使用方法
4. [Function Flow Runtime串行队列(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-serial-queue-cpp.md) - 学习串行队列的C++ API使用方法
5. [Function Flow Runtime并发队列(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-concurrent-queue-c.md) - 学习并发队列的C API使用方法
6. [Function Flow Runtime并发队列(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-concurrent-queue-cpp.md) - 学习并发队列的C++ API使用方法
7. [Function Flow Runtime图依赖并发(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-graph-c.md) - 学习图依赖并发的C API使用方法
8. [Function Flow Runtime图依赖并发(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-graph-cpp.md) - 学习图依赖并发的C++ API使用方法
9. [Function Flow Runtime任务伙伴(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-job-partner-cpp.md) - 学习任务伙伴功能
10. [Function Flow Runtime开发指导](../../docs/zh-cn/application-dev/ffrt/ffrt-development-guideline.md) - 了解FFRT的开发指导和使用建议
11. [Function Flow Runtime C API](../../docs/zh-cn/application-dev/ffrt/ffrt-api-guideline-c.md) - 查阅C API接口文档

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| FFRT概述 | [Function Flow Runtime Kit概述](../../docs/zh-cn/application-dev/ffrt/ffrt-overview.md) |
| 并发范式 | [Function Flow Runtime并发范式](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-paradigm.md) |
| 串行队列(C) | [Function Flow Runtime串行队列(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-serial-queue-c.md) |
| 串行队列(C++) | [Function Flow Runtime串行队列(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-serial-queue-cpp.md) |
| 并发队列(C) | [Function Flow Runtime并发队列(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-concurrent-queue-c.md) |
| 并发队列(C++) | [Function Flow Runtime并发队列(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-concurrent-queue-cpp.md) |
| 图依赖并发(C) | [Function Flow Runtime图依赖并发(C)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-graph-c.md) |
| 图依赖并发(C++) | [Function Flow Runtime图依赖并发(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-graph-cpp.md) |
| 任务伙伴(C++) | [Function Flow Runtime任务伙伴(C++)](../../docs/zh-cn/application-dev/ffrt/ffrt-concurrency-job-partner-cpp.md) |
| 开发指导 | [Function Flow Runtime开发指导](../../docs/zh-cn/application-dev/ffrt/ffrt-development-guideline.md) |
| C API | [Function Flow Runtime C API](../../docs/zh-cn/application-dev/ffrt/ffrt-api-guideline-c.md) |

## 统计信息

- 文档总数：12
- 核心概念：9
- 主要并发范式：4（串行队列、并发队列、图依赖、任务伙伴）