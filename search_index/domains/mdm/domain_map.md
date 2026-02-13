# MDM 领域地图

## 领域概述

MDM Kit（企业设备管理服务）是HarmonyOS企业级设备管理的核心模块，为企业MDM应用提供完整的设备管理解决方案。该领域包含MDM Kit开发指南、应用模型、EnterpriseAdminExtensionAbility开发指南、多应用管控、术语等多个文档。开发者可以使用这些工具实现企业设备管理功能，包括企业设备管理与事件监听、应用管理、禁用管理、安全管理、设备设置、设备控制、设备信息获取、硬件外设管理、系统管理、网络通信管理等。EnterpriseAdminExtensionAbility是设备管理应用的必备组件，开发者需要继承该组件实现MDM业务逻辑。应用模型提供了应用程序必需的组件和运行机制，使应用开发更简单、高效。多应用管控支持企业引入多家EMM厂商来共同管理企业PC设备，分散管理权限，满足不同场景的管控诉求。

## 核心概念

- **MDM应用**：集成了MDM（Mobile Device Management，移动设备管理）管理功能的应用，能够集中管理、监控和保护企业内的移动设备
- **企业设备管理**：企业MDM应用提供设备管理API，用于管理并保护公司设备上的数据和应用程序
- **EnterpriseAdminExtensionAbility**：企业设备管理扩展能力组件，是MDM应用的必备组件
- **Admin角色**：包括SDA（超级设备管理员）、DA（设备管理员）、BDA（BYOD设备管理员）三种角色
- **设备管控**：对设备进行集中管理、远程配置和监控，保障设备和数据的安全性和稳定性
- **策略冲突**：多个MDM应用同时调用管控接口时产生的策略冲突问题及处理机制
- **COPE场景**：企业统一购买设备并分发给企业员工使用，设备所属权属于企业
- **BYOD场景**：企业允许员工携带自己的设备到公司办公，并将这些设备接入办公环境
- **多应用管控**：企业引入多家EMM厂商来共同管理企业PC设备，分散管理权限
- **设备认证**：通过PIN码、碰、扫、靠等设备认证框架建立可信关系
- **安全管理**：包括应用管理、禁用管理、安全管理、设备设置等安全相关功能

## 文档索引

### 导航

1. [MDM Kit（企业设备管理）](../../docs/zh-cn/application-dev/mdm/Readme-CN.md) - MDM Kit是企业设备管理服务的入口文档

### 基础文档

2. [MDM Kit简介](../../docs/zh-cn/application-dev/mdm/mdm-kit-intro.md) - MDM Kit为企业MDM应用提供设备管理API，用于管理并保护公司设备上的数据和应用程序
3. [MDM Kit术语](../../docs/zh-cn/application-dev/mdm/mdm-kit-term.md) - 介绍EDM、BYOD、Admin角色、MDM应用等核心概念

### 核心功能

4. [应用模型](../../docs/zh-cn/application-dev/mdm/mdm-kit-application-model.md) - 应用模型是系统为开发者提供的应用程序所需能力的抽象提炼
5. [EnterpriseAdminExtensionAbility开发指南](../../docs/zh-cn/application-dev/mdm/mdm-kit-admin.md) - 企业设备管理扩展能力组件，是设备管理应用必备组件
6. [MDM Kit开发指南](../../docs/zh-cn/application-dev/mdm/mdm-kit-guide.md) - MDM Kit为MDM应用提供设备管理能力，包括企业设备管理与事件监听、应用管理等

### 高级功能

7. [多应用管控](../../docs/zh-cn/application-dev/mdm/mdm-kit-multi-mdm.md) - 在企业PC设备管理场景下，企业可以引入多家EMM厂商来共同管理企业PC设备

## 学习路径

1. [MDM Kit（企业设备管理）](../../docs/zh-cn/application-dev/mdm/Readme-CN.md) - 了解MDM Kit的文档结构和导航
2. [MDM Kit简介](../../docs/zh-cn/application-dev/mdm/mdm-kit-intro.md) - 了解MDM Kit的整体架构和功能
3. [MDM Kit术语](../../docs/zh-cn/application-dev/mdm/mdm-kit-term.md) - 掌握EDM、BYOD、Admin角色等核心概念
4. [应用模型](../../docs/zh-cn/application-dev/mdm/mdm-kit-application-model.md) - 学习应用模型和进程模型
5. [EnterpriseAdminExtensionAbility开发指南](../../docs/zh-cn/application-dev/mdm/mdm-kit-admin.md) - 掌握EnterpriseAdminExtensionAbility的开发方法
6. [MDM Kit开发指南](../../docs/zh-cn/application-dev/mdm/mdm-kit-guide.md) - 学习MDM Kit的使用方法
7. [多应用管控](../../docs/zh-cn/application-dev/mdm/mdm-kit-multi-mdm.md) - 了解多应用管控的策略冲突处理

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| MDM Kit | [MDM Kit（企业设备管理）](../../docs/zh-cn/application-dev/mdm/Readme-CN.md) |
| MDM Kit简介 | [MDM Kit简介](../../docs/zh-cn/application-dev/mdm/mdm-kit-intro.md) |
| MDM Kit术语 | [MDM Kit术语](../../docs/zh-cn/application-dev/mdm/mdm-kit-term.md) |
| 应用模型 | [应用模型](../../docs/zh-cn/application-dev/mdm/mdm-kit-application-model.md) |
| EnterpriseAdminExtensionAbility | [EnterpriseAdminExtensionAbility开发指南](../../docs/zh-cn/application-dev/mdm/mdm-kit-admin.md) |
| MDM Kit开发指南 | [MDM Kit开发指南](../../docs/zh-cn/application-dev/mdm/mdm-kit-guide.md) |
| 多应用管控 | [多应用管控](../../docs/zh-cn/application-dev/mdm/mdm-kit-multi-mdm.md) |

## 统计信息

- 文档总数：7
- 核心概念：12
- 主要功能模块：6（MDM Kit、应用模型、EnterpriseAdminExtensionAbility、多应用管控、术语、开发指南）