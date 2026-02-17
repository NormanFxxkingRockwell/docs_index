# ArkTS 领域地图

**总文档数**: 93

## 子模块

### arkts-overview

**描述**: ArkTS编程语言基础，包括语言简介、TypeScript扩展、与TS/JS互操作等。

**文档数**: 3

**文档列表**:

- [ArkTS基础类库概述](../../docs/zh-cn/application-dev/arkts-utils/arkts-utils-overview.md) - `arkts-utils-overview`
- [ArkTS简介](../../docs/zh-cn/application-dev/arkts-utils/arkts-overview.md) - `arkts-overview`
- [ArkTS（方舟编程语言）](../../docs/zh-cn/application-dev/arkts-utils/Readme-CN.md) - `Readme-CN`

### buffer

**描述**: Buffer二进制数据处理，包括ArrayBuffer、DataView等。

**文档数**: 3

**文档列表**:

- [ArrayBuffer对象](../../docs/zh-cn/application-dev/arkts-utils/arraybuffer-object.md) - `arraybuffer-object`
- [Buffer与FastBuffer](../../docs/zh-cn/application-dev/arkts-utils/buffer.md) - `buffer`
- [SharedArrayBuffer对象](../../docs/zh-cn/application-dev/arkts-utils/shared-arraybuffer-object.md) - `shared-arraybuffer-object`

### bytecode

**描述**: 字节码编译和处理，包括字节码格式、反汇编等。

**文档数**: 12

**文档列表**:

- [ArkGuard字节码混淆原理及功能](../../docs/zh-cn/application-dev/arkts-utils/bytecode-obfuscation.md) - `bytecode-obfuscation`
- [ArkGuard字节码混淆工具概述](../../docs/zh-cn/application-dev/arkts-utils/bytecode-obfuscation-overview.md) - `bytecode-obfuscation-overview`
- [ArkGuard字节码混淆常见问题](../../docs/zh-cn/application-dev/arkts-utils/bytecode-obfuscation-questions.md) - `bytecode-obfuscation-questions`
- [ArkGuard字节码混淆开启指南](../../docs/zh-cn/application-dev/arkts-utils/bytecode-obfuscation-guide.md) - `bytecode-obfuscation-guide`
- [Disassembler反汇编工具](../../docs/zh-cn/application-dev/arkts-utils/tool-disassembler.md) - `tool-disassembler`
- [不同包类型的字节码混淆建议](../../docs/zh-cn/application-dev/arkts-utils/bytecode-obfuscation-practice.md) - `bytecode-obfuscation-practice`
- [方舟字节码函数命名规则](../../docs/zh-cn/application-dev/arkts-utils/arkts-bytecode-function-name.md) - `arkts-bytecode-function-name`
- [方舟字节码基本原理](../../docs/zh-cn/application-dev/arkts-utils/arkts-bytecode-fundamentals.md) - `arkts-bytecode-fundamentals`
- [方舟字节码文件格式](../../docs/zh-cn/application-dev/arkts-utils/arkts-bytecode-file-format.md) - `arkts-bytecode-file-format`
- [方舟字节码概述](../../docs/zh-cn/application-dev/arkts-utils/arkts-bytecode-overview.md) - `arkts-bytecode-overview`
- [方舟字节码生成常见问题](../../docs/zh-cn/application-dev/arkts-utils/es2abc-faq.md) - `es2abc-faq`
- [编译期自定义修改方舟字节码](../../docs/zh-cn/application-dev/arkts-utils/customize-bytecode-during-compilation.md) - `customize-bytecode-during-compilation`

### compilation

**描述**: ArkTS编译工具链，包括配置、编译选项等。

**文档数**: 2

**文档列表**:

- [ArkTS编译工具链概述](../../docs/zh-cn/application-dev/arkts-utils/compilation-tool-chain-overview.md) - `compilation-tool-chain-overview`
- [在build-profile.json5中配置arkOptions](../../docs/zh-cn/application-dev/arkts-utils/arkoptions-guide.md) - `arkoptions-guide`

### concurrency

**描述**: 并发编程相关，包括异步锁、条件变量、线程同步等机制。

**文档数**: 7

**文档列表**:

- [多线程取消TaskPool任务场景](../../docs/zh-cn/application-dev/arkts-utils/multi-thread-cancel-task.md) - `multi-thread-cancel-task`
- [多线程并发概述](../../docs/zh-cn/application-dev/arkts-utils/multi-thread-concurrency-overview.md) - `multi-thread-concurrency-overview`
- [并发常见问题](../../docs/zh-cn/application-dev/arkts-utils/concurrency-faq.md) - `concurrency-faq`
- [并发概述](../../docs/zh-cn/application-dev/arkts-utils/concurrency-overview.md) - `concurrency-overview`
- [异步并发 (Promise和async/await)](../../docs/zh-cn/application-dev/arkts-utils/async-concurrency-overview.md) - `async-concurrency-overview`
- [异步等待](../../docs/zh-cn/application-dev/arkts-utils/arkts-condition-variable-introduction.md) - `arkts-condition-variable-introduction`
- [异步锁](../../docs/zh-cn/application-dev/arkts-utils/arkts-async-lock-introduction.md) - `arkts-async-lock-introduction`

### container

**描述**: 容器类库，提供线性容器（ArrayList、Vector等）和非线性容器（HashMap、TreeMap等）。

**文档数**: 4

**文档列表**:

- [容器类对象](../../docs/zh-cn/application-dev/arkts-utils/container-object.md) - `container-object`
- [容器类库概述](../../docs/zh-cn/application-dev/arkts-utils/container-overview.md) - `container-overview`
- [线性容器](../../docs/zh-cn/application-dev/arkts-utils/linear-container.md) - `linear-container`
- [非线性容器](../../docs/zh-cn/application-dev/arkts-utils/nonlinear-container.md) - `nonlinear-container`

### default

**描述**: 通用ArkTS文档，包括线程间通信、开发实践等。

**文档数**: 22

**文档列表**:

- [ArkTS线程间通信概述](../../docs/zh-cn/application-dev/arkts-utils/interthread-communication-overview.md) - `interthread-communication-overview`
- [ArkTS跨语言交互](../../docs/zh-cn/application-dev/arkts-utils/arkts-cross-language-interaction.md) - `arkts-cross-language-interaction`
- [C++线程间数据共享场景](../../docs/zh-cn/application-dev/arkts-utils/native-interthread-shared.md) - `native-interthread-shared`
- [CPU密集型任务开发指导 (TaskPool和Worker)](../../docs/zh-cn/application-dev/arkts-utils/cpu-intensive-task-development.md) - `cpu-intensive-task-development`
- [I/O密集型任务开发指导 (TaskPool)](../../docs/zh-cn/application-dev/arkts-utils/io-intensive-task-development.md) - `io-intensive-task-development`
- [Transferable对象（NativeBinding对象）](../../docs/zh-cn/application-dev/arkts-utils/transferabled-object.md) - `transferabled-object`
- [使用TaskPool执行多个耗时任务](../../docs/zh-cn/application-dev/arkts-utils/multi-time-consuming-tasks.md) - `multi-time-consuming-tasks`
- [使用TaskPool执行独立的耗时任务](../../docs/zh-cn/application-dev/arkts-utils/independent-time-consuming-task.md) - `independent-time-consuming-task`
- [全局配置项功能场景](../../docs/zh-cn/application-dev/arkts-utils/global-configuration-guide.md) - `global-configuration-guide`
- [共享容器](../../docs/zh-cn/application-dev/arkts-utils/arkts-collections-introduction.md) - `arkts-collections-introduction`
- [同步任务开发指导 (TaskPool和Worker)](../../docs/zh-cn/application-dev/arkts-utils/sync-task-development.md) - `sync-task-development`
- [基础库常见问题](../../docs/zh-cn/application-dev/arkts-utils/commonlibrary-faq.md) - `commonlibrary-faq`
- [常驻任务并发场景简介](../../docs/zh-cn/application-dev/arkts-utils/resident-task-overview.md) - `resident-task-overview`
- [常驻任务开发指导（Worker）](../../docs/zh-cn/application-dev/arkts-utils/resident-task-guide.md) - `resident-task-guide`
- [应用多线程开发概述](../../docs/zh-cn/application-dev/arkts-utils/multithread-develop-overview.md) - `multithread-develop-overview`
- [批量数据写数据库场景](../../docs/zh-cn/application-dev/arkts-utils/batch-database-operations-guide.md) - `batch-database-operations-guide`
- [普通对象](../../docs/zh-cn/application-dev/arkts-utils/normal-object.md) - `normal-object`
- [线程间通信对象概述](../../docs/zh-cn/application-dev/arkts-utils/serializable-overview.md) - `serializable-overview`
- [耗时任务并发场景简介](../../docs/zh-cn/application-dev/arkts-utils/time-consuming-task-overview.md) - `time-consuming-task-overview`
- [自定义Native Transferable对象的多线程操作场景](../../docs/zh-cn/application-dev/arkts-utils/napi-coerce-to-native-binding-object.md) - `napi-coerce-to-native-binding-object`
- [长时任务并发场景简介](../../docs/zh-cn/application-dev/arkts-utils/long-time-task-overview.md) - `long-time-task-overview`
- [长时任务开发指导（TaskPool）](../../docs/zh-cn/application-dev/arkts-utils/long-time-task-guide.md) - `long-time-task-guide`

### gc

**描述**: GC垃圾回收机制，提供内存管理和垃圾回收功能。

**文档数**: 1

**文档列表**:

- [GC垃圾回收](../../docs/zh-cn/application-dev/arkts-utils/gc-introduction.md) - `gc-introduction`

### json

**描述**: JSON扩展库，提供ASON等JSON处理能力。

**文档数**: 2

**文档列表**:

- [ASON解析与生成](../../docs/zh-cn/application-dev/arkts-utils/ason-parsing-generation.md) - `ason-parsing-generation`
- [JSON扩展库](../../docs/zh-cn/application-dev/arkts-utils/arkts-json.md) - `arkts-json`

### module

**描述**: 模块化运行，包括动态加载、懒加载、模块导入等。

**文档数**: 8

**文档列表**:

- [业务模块并发加载场景](../../docs/zh-cn/application-dev/arkts-utils/concurrent-loading-modules-guide.md) - `concurrent-loading-modules-guide`
- [动态加载](../../docs/zh-cn/application-dev/arkts-utils/arkts-dynamic-import.md) - `arkts-dynamic-import`
- [同步方式动态加载Native模块](../../docs/zh-cn/application-dev/arkts-utils/js-apis-load-native-module.md) - `js-apis-load-native-module`
- [基于Node-API加载模块](../../docs/zh-cn/application-dev/arkts-utils/load-module-base-nodeapi.md) - `load-module-base-nodeapi`
- [延迟加载（lazy import）](../../docs/zh-cn/application-dev/arkts-utils/arkts-lazy-import.md) - `arkts-lazy-import`
- [模块加载副作用及优化](../../docs/zh-cn/application-dev/arkts-utils/arkts-module-side-effects.md) - `arkts-module-side-effects`
- [模块化运行简介](../../docs/zh-cn/application-dev/arkts-utils/module-principle.md) - `module-principle`
- [静态方式加载Native模块](../../docs/zh-cn/application-dev/arkts-utils/arkts-import-native-module.md) - `arkts-import-native-module`

### obfuscation

**描述**: 源码和字节码混淆，提供代码保护功能。

**文档数**: 5

**文档列表**:

- [ArkGuard混淆原理及功能](../../docs/zh-cn/application-dev/arkts-utils/source-obfuscation.md) - `source-obfuscation`
- [ArkGuard混淆常见问题](../../docs/zh-cn/application-dev/arkts-utils/source-obfuscation-questions.md) - `source-obfuscation-questions`
- [ArkGuard混淆开启指南](../../docs/zh-cn/application-dev/arkts-utils/source-obfuscation-guide.md) - `source-obfuscation-guide`
- [ArkGuard源码混淆工具概述](../../docs/zh-cn/application-dev/arkts-utils/source-obfuscation-overview.md) - `source-obfuscation-overview`
- [不同包类型的源码混淆建议](../../docs/zh-cn/application-dev/arkts-utils/source-obfuscation-practice.md) - `source-obfuscation-practice`

### runtime

**描述**: ArkTS运行时，包括GC垃圾回收、模块化运行等。

**文档数**: 2

**文档列表**:

- [ArkTS运行时常见问题](../../docs/zh-cn/application-dev/arkts-utils/arkts-runtime-faq.md) - `arkts-runtime-faq`
- [ArkTS运行时概述](../../docs/zh-cn/application-dev/arkts-utils/arkts-runtime-overview.md) - `arkts-runtime-overview`

### sendable

**描述**: Sendable对象，支持跨线程引用传递，提升并发实例间通信性能。

**文档数**: 8

**文档列表**:

- [ArkUI数据更新场景](../../docs/zh-cn/application-dev/arkts-utils/makeobserved-sendable.md) - `makeobserved-sendable`
- [Sendable使用场景](../../docs/zh-cn/application-dev/arkts-utils/sendable-guide.md) - `sendable-guide`
- [Sendable使用规则与约束](../../docs/zh-cn/application-dev/arkts-utils/sendable-constraints.md) - `sendable-constraints`
- [Sendable对象冻结](../../docs/zh-cn/application-dev/arkts-utils/sendable-freeze.md) - `sendable-freeze`
- [Sendable对象简介](../../docs/zh-cn/application-dev/arkts-utils/arkts-sendable.md) - `arkts-sendable`
- [共享模块](../../docs/zh-cn/application-dev/arkts-utils/arkts-sendable-module.md) - `arkts-sendable-module`
- [自定义Native Sendable对象的多线程操作场景](../../docs/zh-cn/application-dev/arkts-utils/napi-define-sendable-object.md) - `napi-define-sendable-object`
- [获取最近访问列表场景](../../docs/zh-cn/application-dev/arkts-utils/sendablelrucache-recent-list.md) - `sendablelrucache-recent-list`

### taskpool

**描述**: TaskPool多任务池，提供任务队列管理、任务优先级、任务组等功能。

**文档数**: 6

**文档列表**:

- [ArkUI瀑布流渲染场景](../../docs/zh-cn/application-dev/arkts-utils/taskpool-waterflow.md) - `taskpool-waterflow`
- [TaskPool任务与宿主线程通信](../../docs/zh-cn/application-dev/arkts-utils/taskpool-communicates-with-mainthread.md) - `taskpool-communicates-with-mainthread`
- [TaskPool和Worker的对比 (TaskPool和Worker)](../../docs/zh-cn/application-dev/arkts-utils/taskpool-vs-worker.md) - `taskpool-vs-worker`
- [TaskPool指定任务并发度场景](../../docs/zh-cn/application-dev/arkts-utils/taskpool-async-task-guide.md) - `taskpool-async-task-guide`
- [TaskPool简介](../../docs/zh-cn/application-dev/arkts-utils/taskpool-introduction.md) - `taskpool-introduction`
- [Worker常驻线程通过TaskPool进行多任务并发处理](../../docs/zh-cn/application-dev/arkts-utils/worker-and-taskpool.md) - `worker-and-taskpool`

### worker

**描述**: Worker多线程，提供独立线程环境、线程间通信、后台任务处理等。

**文档数**: 4

**文档列表**:

- [Worker同步调用宿主线程的接口](../../docs/zh-cn/application-dev/arkts-utils/worker-invoke-mainthread-interface.md) - `worker-invoke-mainthread-interface`
- [Worker和宿主线程的即时消息通信](../../docs/zh-cn/application-dev/arkts-utils/worker-communicates-with-mainthread.md) - `worker-communicates-with-mainthread`
- [Worker简介](../../docs/zh-cn/application-dev/arkts-utils/worker-introduction.md) - `worker-introduction`
- [多级Worker间高性能消息通信](../../docs/zh-cn/application-dev/arkts-utils/worker-postMessage-sendable.md) - `worker-postMessage-sendable`

### xml

**描述**: XML处理，提供XML生成、解析、转换等功能。

**文档数**: 4

**文档列表**:

- [XML概述](../../docs/zh-cn/application-dev/arkts-utils/xml-overview.md) - `xml-overview`
- [XML生成](../../docs/zh-cn/application-dev/arkts-utils/xml-generation.md) - `xml-generation`
- [XML解析](../../docs/zh-cn/application-dev/arkts-utils/xml-parsing.md) - `xml-parsing`
- [XML转换](../../docs/zh-cn/application-dev/arkts-utils/xml-conversion.md) - `xml-conversion`
