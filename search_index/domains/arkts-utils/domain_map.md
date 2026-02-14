# ArkTS Utils 领域地图

## 领域概述

ArkTS Utils 是 OpenHarmony 应用开发的核心工具集，包含 ArkTS 语言、基础类库、并发编程、运行时、编译工具链等多个方面。涵盖 XML 处理、Buffer、容器类库、TaskPool/Worker 并发、Sendable 对象、GC 垃圾回收、模块化运行、字节码、混淆工具等丰富功能。

## 核心概念

- **ArkTS语言**：OpenHarmony应用开发的官方高级语言，在TypeScript生态基础上扩展
- **基础类库**：提供XML、Buffer、容器等基础能力
- **并发编程**：支持异步并发和多线程并发
- **TaskPool**：提供多线程环境，降低资源消耗并提高系统性能
- **Worker**：提供多线程运行环境，避免耗时任务阻塞宿主线程
- **Sendable对象**：支持引用传递，实现高效的并发通信
- **容器类库**：提供线性和非线性容器，优化数据访问速度
- **GC垃圾回收**：基于对象追踪算法，采用HPP GC高性能垃圾回收
- **字节码**：ArkTS/TS/JS源码编译后的二进制产物
- **代码混淆**：ArkGuard提供字节码混淆能力，保护代码安全

## 学习路径

1. **入门基础**
   - [ArkTS简介](../../docs/zh-cn/application-dev/arkts-utils/arkts-overview.md)
   - [ArkTS基础类库概述](../../docs/zh-cn/application-dev/arkts-utils/arkts-utils-overview.md)

2. **并发编程**
   - [并发概述](../../docs/zh-cn/application-dev/arkts-utils/concurrency-overview.md)
   - [TaskPool简介](../../docs/zh-cn/application-dev/arkts-utils/taskpool-introduction.md)
   - [Worker简介](../../docs/zh-cn/application-dev/arkts-utils/worker-introduction.md)
   - [线程间通信对象概述](../../docs/zh-cn/application-dev/arkts-utils/serializable-overview.md)
   - [Sendable对象简介](../../docs/zh-cn/application-dev/arkts-utils/arkts-sendable.md)
   - [Sendable使用场景](../../docs/zh-cn/application-dev/arkts-utils/sendable-guide.md)

3. **数据结构与处理**
   - [容器类库概述](../../docs/zh-cn/application-dev/arkts-utils/container-overview.md)
   - [线性容器](../../docs/zh-cn/application-dev/arkts-utils/linear-container.md)
   - [XML概述](../../docs/zh-cn/application-dev/arkts-utils/xml-overview.md)
   - [Buffer与FastBuffer](../../docs/zh-cn/application-dev/arkts-utils/buffer.md)

4. **运行时与内存管理**
   - [ArkTS运行时概述](../../docs/zh-cn/application-dev/arkts-utils/arkts-runtime-overview.md)
   - [GC垃圾回收](../../docs/zh-cn/application-dev/arkts-utils/gc-introduction.md)
   - [模块化运行简介](../../docs/zh-cn/application-dev/arkts-utils/module-principle.md)

5. **编译与优化**
   - [ArkTS编译工具链概述](../../docs/zh-cn/application-dev/arkts-utils/compilation-tool-chain-overview.md)
   - [方舟字节码概述](../../docs/zh-cn/application-dev/arkts-utils/arkts-bytecode-overview.md)
   - [ArkGuard字节码混淆工具概述](../../docs/zh-cn/application-dev/arkts-utils/bytecode-obfuscation-overview.md)

## 快速参考

| 概念 | 文档路径 |
|--------|----------|
| ArkTS简介 | [arkts-overview.md](../../docs/zh-cn/application-dev/arkts-utils/arkts-overview.md) |
| 基础类库 | [arkts-utils-overview.md](../../docs/zh-cn/application-dev/arkts-utils/arkts-utils-overview.md) |
| 并发概述 | [concurrency-overview.md](../../docs/zh-cn/application-dev/arkts-utils/concurrency-overview.md) |
| TaskPool | [taskpool-introduction.md](../../docs/zh-cn/application-dev/arkts-utils/taskpool-introduction.md) |
| Worker | [worker-introduction.md](../../docs/zh-cn/application-dev/arkts-utils/worker-introduction.md) |
| Sendable对象 | [arkts-sendable.md](../../docs/zh-cn/application-dev/arkts-utils/arkts-sendable.md) |
| 容器类库 | [container-overview.md](../../docs/zh-cn/application-dev/arkts-utils/container-overview.md) |
| 线性容器 | [linear-container.md](../../docs/zh-cn/application-dev/arkts-utils/linear-container.md) |
| XML | [xml-overview.md](../../docs/zh-cn/application-dev/arkts-utils/xml-overview.md) |
| Buffer | [buffer.md](../../docs/zh-cn/application-dev/arkts-utils/buffer.md) |
| 运行时 | [arkts-runtime-overview.md](../../docs/zh-cn/application-dev/arkts-utils/arkts-runtime-overview.md) |
| GC垃圾回收 | [gc-introduction.md](../../docs/zh-cn/application-dev/arkts-utils/gc-introduction.md) |
| 模块化 | [module-principle.md](../../docs/zh-cn/application-dev/arkts-utils/module-principle.md) |
| 编译工具链 | [compilation-tool-chain-overview.md](../../docs/zh-cn/application-dev/arkts-utils/compilation-tool-chain-overview.md) |
| 字节码 | [arkts-bytecode-overview.md](../../docs/zh-cn/application-dev/arkts-utils/arkts-bytecode-overview.md) |
| 字节码混淆 | [bytecode-obfuscation-overview.md](../../docs/zh-cn/application-dev/arkts-utils/bytecode-obfuscation-overview.md) |

## 统计信息

- 文档总数：93
- 核心概念：10个
- 学习路径：20个文档
- 快速参考：15个条目