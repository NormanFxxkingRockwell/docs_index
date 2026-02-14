# Application Models 领域地图

## 领域概述

Application Models（应用模型）是OpenHarmony提供的应用程序开发和运行的应用模型框架，包括Stage模型和FA模型两种应用模型。Stage模型是主推模型，提供UIAbility、ExtensionAbility等应用组件，支持应用组件级的跨端迁移和多端协同、多设备和多窗口形态。FA模型是早期模型，提供PageAbility、ServiceAbility、DataAbility等应用组件。

## 核心概念

- **Stage模型**：当前系统主推的应用模型，提供AbilityStage组件管理器和WindowStage窗口管理器，支持多个应用组件共享同一个ArkTS引擎实例。
- **FA模型**：早期的应用模型，每个应用组件独享一个ArkTS引擎实例，适用于简单应用的开发。
- **UIAbility组件**：包含UI的应用组件，主要用于和用户交互，支持跨端迁移和多端协同。
- **ExtensionAbility组件**：面向特定场景的应用组件，如FormExtensionAbility（卡片）、InputMethodExtensionAbility（输入法）等。
- **应用组件**：应用的基本组成单位和运行入口，提供生命周期回调函数。
- **生命周期管理**：应用组件从创建到销毁的完整过程，系统会在特定时间点调用相应的回调函数。
- **应用间跳转**：从一个应用跳转至另外一个应用，传递相应的数据、执行特定的功能。
- **Want信息传递**：一种对象，用于在应用组件之间传递信息，分为显式Want和隐式Want。
- **Context应用上下文**：应用中对象的上下文，提供应用的一些基础信息，如resourceManager、applicationInfo等。
- **进程模型**：定义应用进程的创建和销毁方式，以及进程间的通信方式。

## 学习路径

1. **基础入门**
   - [Ability Kit简介](../../docs/zh-cn/application-dev/application-models/abilitykit-overview.md)
   - [应用模型](../../docs/zh-cn/application-dev/application-models/application-models.md)
   - [Ability Kit术语](../../docs/zh-cn/application-dev/application-models/ability-terminology.md)

2. **Stage模型开发**
   - [Stage模型开发概述](../../docs/zh-cn/application-dev/application-models/stage-model-development-overview.md)
   - [UIAbility组件概述](../../docs/zh-cn/application-dev/application-models/uiability-overview.md)
   - [UIAbility组件生命周期](../../docs/zh-cn/application-dev/application-model-models/uiability-lifecycle.md)
   - [ExtensionAbility组件](../../docs/zh-cn/application-dev/application-models/extensionability-overview.md)
   - [AbilityStage组件管理器](../../docs/zh-cn/application-dev/application-models/abilitystage.md)
   - [应用上下文Context](../../docs/zh-cn/application-dev/application-models/application-context-stage.md)

3. **组件交互**
   - [Want概述](../../docs/zh-cn/application-dev/application-models/want-overview.md)
   - [启动应用内的UIAbility组件](../../docs/zh-cn/application-dev/application-models/uiability-intra-device-interaction.md)
   - [应用间跳转概述](../../docs/zh-cn/application-dev/application-models/link-between-apps-overview.md)
   - [拉起指定应用概述](../../docs/zh-cn/application-dev/application-models/app-startup-overview.md)

4. **应用链接**
   - [使用Deep Linking实现应用间跳转](../../docs/zh-cn/application-dev/application-models/deep-linking-startup.md)
   - [使用App Linking实现应用间跳转](../../docs/zh-cn/application-dev/application-models/app-linking-startup.md)

5. **进程与线程**
   - [进程模型](../../docs/zh-cn/application-dev/application-models/process-model-stage.md)
   - [线程模型](../../docs/zh-cn/application-dev/application-models/thread-model-stage.md)

6. **配置文件**
   - [Stage模型应用配置文件](../../docs/zh-cn/application-dev/application-models/config-file-stage.md)

7. **FA模型开发**
   - [FA模型开发概述](../../docs/zh-cn/application-dev/application-models/fa-model-development-overview.md)
   - [PageAbility组件概述](../../docs/zh-cn/application-dev/application-models/pageability-overview.md)
   - [ServiceAbility组件概述](../../docs/zh-cn/application-dev/application-models/serviceability-overview.md)
   - [DataAbility组件概述](../../docs/zh-cn/application-dev/application-models/dataability-overview.md)

## 快速参考

| 概念 | 文档 |
|------|------|
| Ability Kit简介 | [Ability Kit简介](../../docs/zh-cn/application-dev/application-models/abilitykit-overview.md) |
| Stage模型开发 | [Stage模型开发概述](../../docs/zh-cn/application-dev/application-models/stage-model-development-overview.md) |
| FA模型开发 | [FA模型开发概述](../../docs/zh-cn/application-dev/application-models/fa-model-development-overview.md) |
| UIAbility组件 | [UIAbility组件概述](../../docs/zh-cn/application-dev/application-models/uiability-overview.md) |
| UIAbility生命周期 | [UIAbility组件生命周期](../../docs/zh-cn/application-dev/application-models/uiability-lifecycle.md) |
| ExtensionAbility组件 | [ExtensionAbility组件](../../docs/zh-cn/application-dev/application-models/extensionability-overview.md) |
| Want信息传递 | [Want概述](../../docs/zh-cn/application-dev/application-models/want-overview.md) |
| 应用间跳转 | [应用间跳转概述](../../docs/zh-cn/application-dev/application-models/link-between-apps-overview.md) |
| Context应用上下文 | [应用上下文Context](../../docs/zh-cn/application-dev/application-models/application-context-stage.md) |
| 进程模型 | [进程模型](../../docs/zh-cn/application-dev/application-models/process-model-stage.md) |
| 线程模型 | [线程模型](../../docs/zh-cn/application-dev/application-models/thread-model-stage.md) |
| 应用启动框架 | [应用启动框架AppStartup](../../docs/zh-cn/application-dev/application-models/app-startup.md) |
| 意图框架 | [意图框架概述](../../docs/zh-cn/application-dev/application-models/insight-intent-overview.md) |
| 流转 | [流转概述](../../docs/zh-cn/application-dev/application-models/inter-device-interaction-hop-overview.md) |
| 术语 | [Ability Kit术语](../../docs/zh-cn/application-dev/application-models/ability-terminology.md) |

## 统计信息

- 文档总数：129
- 核心概念：10 个
- 学习路径：21 个文档
- 快速参考：14 个条目