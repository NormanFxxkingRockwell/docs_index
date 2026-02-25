# Quick Start 领域地图

## 领域概述

quick-start领域是OpenHarmony应用开发的快速入门指南，涵盖了从环境准备到应用开发的完整流程。主要内容包括ArkTS开发语言的基础知识、语法规范、编程实践和迁移指导；应用程序包结构（HAP、HAR、HSP）的概念和使用；Stage模型和FA模型的应用开发模式；应用配置文件（app.json5、module.json5）的详细说明；资源分类与访问方法；以及应用安装、卸载、更新和多实例管理等高级功能。该领域为初学者提供了系统性的学习路径，帮助开发者快速掌握OpenHarmony应用开发的核心技能。

## 核心概念

- ArkTS语言
- 应用程序包结构
- Stage模型
- 应用配置文件
- 资源管理
- 应用开发入门
- 应用安装与更新
- 应用多实例

## 文档索引

### 入门基础

| 文档标题 | 文档路径 |
|---------|---------|
| 入门 | docs/zh-cn/application-dev/quick-start/Readme-CN.md |
| 开发准备 | docs/zh-cn/application-dev/quick-start/start-overview.md |
| 初识ArkTS语言 | docs/zh-cn/application-dev/quick-start/arkts-get-started.md |
| ArkTS语言介绍 | docs/zh-cn/application-dev/quick-start/introduction-to-arkts.md |

### 应用开发

| 文档标题 | 文档路径 |
|---------|---------|
| 构建第一个ArkTS应用（Stage模型） | docs/zh-cn/application-dev/quick-start/start-with-ets-stage.md |
| 应用程序包概述 | docs/zh-cn/application-dev/quick-start/application-package-overview.md |
| 应用程序包术语 | docs/zh-cn/application-dev/quick-start/application-package-glossary.md |
| Stage模型应用程序包结构 | docs/zh-cn/application-dev/quick-start/application-package-structure-stage.md |
| FA模型应用程序包结构 | docs/zh-cn/application-dev/quick-start/application-package-structure-fa.md |

### 配置文件

| 文档标题 | 文档路径 |
|---------|---------|
| 应用配置文件概述（Stage模型） | docs/zh-cn/application-dev/quick-start/application-configuration-file-overview-stage.md |
| 应用配置文件概述（FA模型） | docs/zh-cn/application-dev/quick-start/application-configuration-file-overview-fa.md |
| app.json5配置文件 | docs/zh-cn/application-dev/quick-start/app-configuration-file.md |
| module.json5配置文件 | docs/zh-cn/application-dev/quick-start/module-configuration-file.md |
| app对象内部结构 | docs/zh-cn/application-dev/quick-start/app-structure.md |
| module对象内部结构 | docs/zh-cn/application-dev/quick-start/module-structure.md |
| deviceConfig内部结构 | docs/zh-cn/application-dev/quick-start/deviceconfig-structure.md |
| 资源分类与访问 | docs/zh-cn/application-dev/quick-start/resource-categories-and-access.md |

### 包结构

| 文档标题 | 文档路径 |
|---------|---------|
| HAP | docs/zh-cn/application-dev/quick-start/hap-package.md |
| HAR | docs/zh-cn/application-dev/quick-start/har-package.md |
| HSP | docs/zh-cn/application-dev/quick-start/in-app-hsp.md |
| 集成态HSP | docs/zh-cn/application-dev/quick-start/integrated-hsp.md |
| HAP转HAR指导 | docs/zh-cn/application-dev/quick-start/hap-to-har.md |
| HAR转HSP指导 | docs/zh-cn/application-dev/quick-start/har-to-hsp.md |
| HSP转HAR指导 | docs/zh-cn/application-dev/quick-start/hsp-to-har.md |

### 应用管理

| 文档标题 | 文档路径 |
|---------|---------|
| 应用安装卸载与更新开发指导 | docs/zh-cn/application-dev/quick-start/application-package-install-uninstall.md |
| 应用安装与更新一致性校验 | docs/zh-cn/application-dev/quick-start/install-and-update-consistency-verification.md |
| 应用程序包常见问题 | docs/zh-cn/application-dev/quick-start/common-problem-of-application.md |
| 创建应用分身 | zh-cn/application-dev/quick-start/app-clone.md |
| 创建应用多实例 | docs/zh-cn/application-dev/quick-start/multiInstance.md |

### 应用配置

| 文档标题 | 文档路径 |
|---------|---------|
| 配置应用图标和名称 | docs/zh-cn/application-dev/quick-start/layered-image.md |
| 创建应用静态快捷方式 | docs/zh-cn/application-dev/quick-start/typical-scenario-configuration.md |

### ArkTS迁移与规范

| 文档标题 | 文档路径 |
|---------|---------|
| 从TypeScript到ArkTS的适配规则 | docs/zh-cn/application-dev/quick-start/typescript-to-arkts-migration-guide.md |
| ArkTS语法适配背景 | docs/zh-cn/application-dev/quick-start/arkts-migration-background.md |
| 适配指导案例 | docs/zh-cn/application-dev/quick-start/arkts-more-cases.md |
| 从Swift到ArkTS的迁移指导 | docs/zh-cn/application-dev/quick-start/getting-started-with-arkts-for-swift-programmers.md |
| 从Java到ArkTS的迁移指导 | docs/zh-cn/application-dev/quick-start/getting-started-with-arkts-for-java-programmers.md |
| ArkTS编程规范 | docs/zh-cn/application-dev/quick-start/arkts-coding-style-guide.md |
| ArkTS高性能编程实践 | docs/zh-cn/application-dev/quick-start/arkts-high-performance-programming.md |

## 学习路径

### 第一阶段：入门基础

1. **入门** - 应用开发快速入门指南，提供文档导航索引
2. **开发准备** - 介绍开发准备工作，包括UI框架、应用模型和DevEco Studio
3. **初识ArkTS语言** - 了解ArkTS开发语言的基本概念和特点
4. **ArkTS语言介绍** - 详细介绍ArkTS的核心功能、语法和最佳实践

### 第二阶段：应用开发

1. **构建第一个ArkTS应用（Stage模型）** - 使用ArkTS和Stage模型构建第一个应用
2. **应用程序包概述** - 了解应用与应用程序包的概念和Module类型
3. **Stage模型应用程序包结构** - 了解Stage模型应用程序包在不同阶段的形态
4. **FA模型应用程序包结构** - 了解FA模型的应用程序包结构

### 第三阶段：配置文件

1. **应用配置文件概述（Stage模型）** - 了解Stage模型的配置文件结构
2. **app.json5配置文件** - 应用级配置文件的详细说明
3. **module.json5配置文件** - 模块级配置文件的详细说明
4. **资源分类与访问** - 了解应用资源的分类与访问方法

### 第四阶段：包结构详解

1. **HAP** - 了解HAP应用安装和运行的基本单元
2. **HAR** - 了解HAR静态共享包的使用
3. **HSP** - 了解HSP动态共享包的使用
4. **集成态HSP** - 了解集成态HSP的跨工程集成

### 第五阶段：应用管理

1. **应用安装卸载与更新开发指导** - 了解应用的安装、卸载和更新流程
2. **应用安装与更新一致性校验** - 了解签名证书和配置文件的一致性校验
3. **创建应用分身** - 了解应用分身功能的实现
4. **创建应用多实例** - 了解应用多实例的实现

## 快速参考

| 文档标题 | 文档路径 |
|---------|---------|
| 入门 | docs/zh-cn/application-dev/quick-start/Readme-CN.md |
| 开发准备 | docs/zh-cn/application-dev/quick-start/start-overview.md |
| 初识ArkTS语言 | docs/zh-cn/application-dev/quick-start/arkts-get-started.md |
| ArkTS语言介绍 | docs/zh-cn/application-dev/quick-start/introduction-to-arkts.md |
| 构建第一个ArkTS应用（Stage模型） | docs/zh-cn/application-dev/quick-start/start-with-ets-stage.md |
| 应用程序包概述 | docs/zh-cn/application-dev/quick-start/application-package-overview.md |
| 应用程序包术语 | docs/zh-cn/application-dev/quick-start/application-package-glossary.md |
| Stage模型应用程序包结构 | docs/zh-cn/application-dev/quick-start/application-package-structure-stage.md |
| FA模型应用程序包结构 | docs/zh-cn/application-dev/quick-start/application-package-structure-fa.md |
| 应用配置文件概述（Stage模型） | docs/zh-cn/application-dev/quick-start/application-configuration-file-overview-stage.md |
| 应用配置文件概述（FA模型） | docs/zh-cn/application-dev/quick-start/application-configuration-file-overview-fa.md |
| app.json5配置文件 | docs/zh-cn/application-dev/quick-start/app-configuration-file.md |
| module.json5配置文件 | docs/zh-cn/application-dev/quick-start/module-configuration-file.md |
| app对象内部结构 | docs/zh-cn/application-dev/quick-start/app-structure.md |
| module对象内部结构 | docs/zh-cn/application-dev/quick-start/module-structure.md |
| deviceConfig内部结构 | docs/zh-cn/application-dev/quick-start/deviceconfig-structure.md |
| 资源分类与访问 | docs/zh-cn/application-dev/quick-start/resource-categories-and-access.md |
| HAP | docs/zh-cn/application-dev/quick-start/hap-package.md |
| HAR | docs/zh-cn/application-dev/quick-start/har-package.md |
| HSP | docs/zh-cn/application-dev/quick-start/in-app-hsp.md |
| 集成态HSP | docs/zh-cn/application-dev/quick-start/integrated-hsp.md |
| HAP转HAR指导 | docs/zh-cn/application-dev/quick-start/hap-to-har.md |
| HAR转HSP指导 | docs/zh-cn/application-dev/quick-start/har-to-hsp.md |
| HSP转HAR指导 | docs/zh-cn/application-dev/quick-start/hsp-to-har.md |
| 应用安装卸载与更新开发指导 | docs/zh-cn/application-dev/quick-start/application-package-install-uninstall.md |
| 应用安装与更新一致性校验 | docs/zh-cn/application-dev/quick-start/install-and-update-consistency-verification.md |
| 应用程序包常见问题 | docs/zh-cn/application-dev/quick-start/common-problem-of-application.md |
| 创建应用分身 | zh-cn/application-dev/quick-start/app-clone.md |
| 创建应用多实例 | docs/zh-cn/application-dev/quick-start/multiInstance.md |
| 配置应用图标和名称 | docs/zh-cn/application-dev/quick-start/layered-image.md |
| 创建应用静态快捷方式 | docs/zh-cn/application-dev/quick-start/typical-scenario-configuration.md |
| 从TypeScript到ArkTS的适配规则 | docs/zh-cn/application-dev/quick-start/typescript-to-arkts-migration-guide.md |
| ArkTS语法适配背景 | docs/zh-cn/application-dev/quick-start/arkts-migration-background.md |
| 适配指导案例 | docs/zh-cn/application-dev/quick-start/arkts-more-cases.md |
| 从Swift到ArkTS的迁移指导 | docs/zh-cn/application-dev/quick-start/getting-started-with-arkts-for-swift-programmers.md |
| 从Java到ArkTS的迁移指导 | docs/zh-cn/application-dev/quick-start/getting-started-with-arkts-for-java-programmers.md |
| ArkTS编程规范 | docs/zh-cn/application-dev/quick-start/arkts-coding-style-guide.md |
| ArkTS高性能编程实践 | docs/zh-cn/application-dev/quick-start/arkts-high-performance-programming.md |

## 统计信息

- **领域名称**: quick-start
- **文档总数**: 38
- **核心概念**: 8
- **学习阶段**: 5
