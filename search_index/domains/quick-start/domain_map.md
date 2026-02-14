# Quick Start 领域学习地图

## 领域概述

Quick Start 领域涵盖 OpenHarmony 应用开发的入门知识，包括开发准备、ArkTS 语言学习、应用程序包基础知识、配置文件管理、资源分类与访问、包类型转换（HAP/HAR/HSP）、应用安装卸载更新、以及编程规范和高性能编程实践等核心内容。支持 Stage 模型和 FA 模型两种应用模型，提供从零开始到构建第一个应用的完整学习路径。

## 核心概念

- **ArkTS语言**：OpenHarmony应用的默认开发语言，在TypeScript生态基础上做了扩展
- **Stage模型**：OpenHarmony API 9开始新增的应用模型，是目前主推的模型
- **FA模型**：OpenHarmony API 7开始支持的模型，已经不再主推
- **应用程序包**：应用所对应的软件包文件，包括HAP、HAR、HSP等类型
- **HAP**：Harmony Ability Package，应用安装和运行的基本单元
- **HAR**：Harmony Archive，静态共享包，编译态复用
- **HSP**：Harmony Shared Package，动态共享包，运行时复用
- **配置文件**：app.json5和module.json5配置文件，用于声明应用和模块的配置信息
- **资源管理**：应用资源（字符串、颜色、图片等）的分类、管理和访问
- **应用安装卸载**：应用程序包的安装、卸载和更新流程

## 学习路径

### 1. 快速入门

1. [入门](../../docs/zh-cn/application-dev/quick-start/Readme-CN.md) - 了解快速入门的完整内容导航
2. [开发准备](../../docs/zh-cn/application-dev/quick-start/start-overview.md) - 了解UI框架、应用模型、工具准备
3. [构建第一个ArkTS应用（Stage模型）](../../docs/zh-cn/application-dev/quick-start/start-with-ets-stage.md) - 完整的实战教程

### 2. ArkTS语言学习

4. [初识ArkTS语言](../../docs/zh-cn/application-dev/quick-start/arkts-get-started.md) - 了解ArkTS的主要特性
5. [ArkTS语言介绍](../../docs/zh-cn/application-dev/quick-start/introduction-to-arkts.md) - 掌握ArkTS基础语法
6. [ArkTS编程规范](../../docs/zh-cn/application-dev/quick-start/arkts-coding-style-guide.md) - 学习编程规范
7. [从TypeScript到ArkTS的适配规则](../../docs/zh-cn/application-dev/quick-start/typescript-to-arkts-migration-guide.md) - TypeScript迁移指导
8. [ArkTS高性能编程实践](../../docs/zh-cn/application-dev/quick-start/arkts-high-performance-programming.md) - 学习性能优化技巧

### 3. 应用程序包基础

9. [应用程序包概述](../../docs/zh-cn/application-dev/quick-start/application-package-overview.md) - 了解应用程序包基本概念
10. [Stage模型应用程序包结构](../../docs/zh-cn/application-dev/quick-start/application-package-structure-stage.md) - 了解包结构
11. [应用安装卸载与更新开发指导](../../docs/zh-cn/application-dev/quick-start/application-package-install-uninstall.md) - 了解应用生命周期

### 4. 配置文件管理

12. [应用配置文件概述（Stage模型）](../../docs/zh-cn/application-dev/quick-start/application-configuration-file-overview-stage.md) - 了解配置文件作用
13. [app.json5配置文件](../../docs/zh-cn/application-dev/quick-start/app-configuration-file.md) - 掌握应用级配置
14. [module.json5配置文件文件](../../docs/zh-cn/application-dev/quick-start/module-configuration-file.md) - 掌握模块级配置

### 5. 包类型详解

15. [HAP](../../docs/zh-cn/application-dev/quick-start/hap-package.md) - 了解HAP包
16. [HAR](../../docs/zh-cn/application-dev/quick-start/har-package.md) - 了解HAR包
17. [HSP](../../docs/zh-cn/application-dev/quick-start/in-app-hsp.md) - 了解HSP包

### 6. 资源管理

18. [资源分类与访问](../../docs/zh-cn/application-dev/quick-start/resource-categories-and-access.md) - 掌握资源管理

### 7. 高级主题

19. [集成态HSP](../../docs/zh-cn/application-dev/quick-start/integrated-hsp.md) - 跨应用共享
20. [应用安装与更新一致性校验](../../docs/zh-cn/application-dev/quick-start/install-and-update-consistency-verification.md) - 一致性校验机制
21. [应用程序包常见问题](../../docs/zh-cn/application-dev/quick-start/common-problem-of-application.md) - 常见问题解答

## 快速参考

| 主题 | 文档 |
|------|------|
| 开发准备 | [开发准备](../../docs/zh-cn/application-dev/quick-start/start-overview.md) |
| 构建第一个应用 | [构建第一个ArkTS应用（Stage模型）](../../docs/zh-cn/application-dev/quick-start/start-with-ets-stage.md) |
| ArkTS语言 | [ArkTS语言介绍](../../docs/zh-cn/application-dev/quick-start/introduction-to-arkts.md) |
| 编程规范 | [ArkTS编程规范](../../docs/zh-cn/application-dev/quick-start/arkts-coding-style-guide.md) |
| 高性能编程 | [ArkTS高性能编程实践](../../docs/zh-cn/application-dev/quick-start/arkts-high-performance-programming.md) |
| 应用程序包概述 | [应用程序包概述](../../docs/zh-cn/application-dev/quick-start/application-package-overview.md) |
| HAP | [HAP](../../docs/zh-cn/application-dev/quick-start/hap-package.md) |
| HAR | [HAR](../../docs/zh-cn/application-dev/quick-start/har-package.md) |
| HSP | [HSP](../../docs/zh-cn/application-dev/quick-start/in-app-hsp.md) |
| 配置文件 | [应用配置文件概述（Stage模型）](../../docs/zh-cn/application-dev/quick-start/application-configuration-file-overview-stage.md) |
| 资源管理 | [资源分类与访问](../../docs/zh-cn/application-dev/quick-start/resource-categories-and-access.md) |
| 应用安装卸载 | [应用安装卸载与更新开发指导](../../docs/zh-cn/application-dev/quick-start/application-package-install-uninstall.md) |
| TypeScript适配 | [从TypeScript到ArkTS的适配规则](../../docs/zh-cn/application-dev/quick-start/typescript-to-arkts-migration-guide.md) |
| 常见问题 | [应用程序包常见问题](../../docs/zh-cn/application-dev/quick-start/common-problem-of-application.md) |

## 文档统计

- 文档总数：38
- 核心概念：10个
- 学习路径：18个核心文档
