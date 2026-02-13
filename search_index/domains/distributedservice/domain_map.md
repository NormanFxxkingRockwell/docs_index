# Distributed Service 领域地图

## 领域概述

Distributed Service Kit（分布式管理服务）是HarmonyOS分布式应用开发的核心模块，提供了完整的分布式能力解决方案。该领域包含分布式设备管理、跨设备连接UIAbility、DistributedExtensionAbility、增强连接等多个分布式组件。开发者可以使用这些工具实现多端应用协作，包括设备发现、设备绑定、设备认证、跨设备数据传输、跨设备拉起应用等功能。分布式设备管理提供发现、绑定、查询和监听四大功能，是分布式业务的入口。跨设备连接能力支持应用间协同连接与通信，包括文本、字节流、图片和传输流的数据交互。增强连接能力通过多通道合并算法，相比传统蓝牙连接增加设备连接数量，增强连接稳定性。DistributedExtensionAbility允许应用在后台运行某些任务，或者将部分功能迁移到其他设备上执行，从而实现分布式能力。

## 核心概念

- **分布式设备管理**：分布式业务入口，对周边可信和非可信设备进行统一管理
- **跨设备连接**：实现应用跨设备协同连接与通信能力，支持多端应用协作
- **DistributedExtensionAbility**：用于扩展应用的功能或实现跨设备协同，支持后台任务执行
- **增强连接**：通过多通道合并算法实现跨设备互联，增强连接稳定性
- **设备发现**：发现周围终端设备并上报，支持按设备类型、距离、可信性筛选
- **设备绑定**：通过PIN码、碰、扫、靠等设备认证框架建立可信关系
- **设备认证**：提供对接各种认证交互接口，建立设备间的可信关系
- **跨设备数据传输**：实现跨设备数据传输，包括文本、字节流、图片和传输流
- **分布式组件管理**：提供分布式组件的管理能力，实现多端应用协作
- **多端协同**：多个终端设备上的应用协同完成同一业务场景

## 文档索引

### 基础文档

1. [Distributed Service Kit简介](../../docs/zh-cn/application-dev/distributedservice/distributedservice-kit-intro.md) - Distributed Service Kit实现了分布式设备管理、分布式硬件管理、分布式键鼠穿越、分布式组件管理等能力

### 核心功能

2. [分布式设备管理开发指南](../../docs/zh-cn/application-dev/distributedservice/devicemanager-guidelines.md) - 分布式设备管理是分布式业务入口，提供发现、绑定、查询和监听四大功能

3. [跨设备连接UIAbility开发指南](../../docs/zh-cn/application-dev/distributedservice/abilityconnectmanager-guidelines.md) - 自API version 18起，系统新增支持应用跨设备协同连接与通信能力

### 系统应用专用

4. [跨设备连接UIAbility开发指南（仅对系统应用开放）](../../docs/zh-cn/application-dev/distributedservice/abilityconnectmanager-guidelines-sys.md) - 系统应用专用的跨设备连接能力，支持字节流、图片和传输流

5. [DistributedExtensionAbility开发指南（仅对系统应用开放）](../../docs/zh-cn/application-dev/distributedservice/distributedextension-guidelines-sys.md) - DistributedExtensionAbility用于扩展应用的功能或实现跨设备协同

### 高级功能

6. [增强连接开发指导](../../docs/zh-cn/application-dev/distributedservice/linkEnhance_development-guide.md) - OpenHarmony提供了分布式增强连接能力，通过多通道合并算法增强连接稳定性

### 其他

7. [Distributed Service Kit（分布式管理服务）](../../docs/zh-cn/application-dev/distributedservice/Readme-CN.md) - Distributed Service Kit是分布式管理服务的入口文档

## 学习路径

1. [Distributed Service Kit简介](../../docs/zh-cn/application-dev/distributedservice/distributedservice-kit-intro.md) - 了解Distributed Service Kit的整体架构和功能
2. [分布式设备管理开发指南](../../docs/zh-cn/application-dev/distributedservice/devicemanager-guidelines.md) - 学习分布式设备管理的基础用法
3. [跨设备连接UIAbility开发指南](../../docs/zh-cn/application-dev/distributedservice/abilityconnectmanager-guidelines.md) - 掌握跨设备连接的使用方法
4. [跨设备连接UIAbility开发指南（仅对系统应用开放）](../../docs/zh-cn/application-dev/distributedservice/abilityconnectmanager-guidelines-sys.md) - 学习系统应用专用的跨设备连接能力
5. [DistributedExtensionAbility开发指南（仅对系统应用开放）](../../docs/zh-cn/application-dev/distributedservice/distributedextension-guidelines-sys.md) - 了解DistributedExtensionAbility的使用方法
6. [增强连接开发指导](../../docs/zh-cn/application-dev/distributedservice/linkEnhance_development-guide.md) - 学习增强连接的使用方法

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| 分布式设备管理 | [分布式设备管理开发指南](../../docs/zh-cn/application-dev/distributedservice/devicemanager-guidelines.md) |
| 跨设备连接 | [跨设备连接UIAbility开发指南](../../docs/zh-cn/application-dev/distributedservice/abilityconnectmanager-guidelines.md) |
| DistributedExtensionAbility | [DistributedExtensionAbility开发指南（仅对系统应用开放）](../../docs/zh-cn/application-dev/distributedservice/distributedextension-guidelines-sys.md) |
| 增强连接 | [增强连接开发指导](../../docs/zh-cn/application-dev/distributedservice/linkEnhance_development-guide.md) |
| Distributed Service Kit简介 | [Distributed Service Kit简介](../../docs/zh-cn/application-dev/distributedservice/distributedservice-kit-intro.md) |

## 统计信息

- 文档总数：7
- 核心概念：10
- 主要功能模块：5（分布式设备管理、跨设备连接、DistributedExtensionAbility、增强连接、分布式组件管理）