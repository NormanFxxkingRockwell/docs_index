# File Management 领域学习地图

## 概述

Core File Kit（文件基础服务）为开发者提供一套访问和管理应用文件和用户文件的能力。涵盖应用文件访问与管理、应用文件分享、应用数据备份恢复、用户文件选择与保存、授权持久化、分布式文件系统、跨设备文件访问与拷贝等多种文件管理功能。

## 核心概念

- **应用沙箱**: 应用沙箱是一种以安全防护为目的的隔离机制，避免数据受到恶意路径穿越访问
- **应用文件访问**: 对应用文件目录下的应用文件进行查看、创建、读写、删除、移动、复制、获取属性等访问操作
- **用户文件访问**: 通过FilePicker选择和保存用户文件，包括文档、图片、视频、音频等
- **文件分享**: 应用之间通过分享URI进行文件共享的过程
- **数据备份恢复**: 应用数据备份和恢复的能力，保证数据不会因为应用升级、迁移等操作而丢失
- **授权持久化**: 应用重启或者设备重启后需要直接访问之前已访问过的文件，则对文件进行持久化授权
- **分布式文件系统**: 提供跨设备的文件访问能力，hmdfs在分布式软总线动态组网的基础上，为网络上各个设备节点提供一个全局一致的访问视图
- **跨设备文件访问**: 在两个设备上安装同一应用时，可跨设备读写另一个设备上该应用分布式目录下的文件
- **FilePicker**: 系统预置的文件选择器，用于选择和保存用户文件
- **文件URI**: 文件的唯一标识，在对用户文件进行访问与修改等操作时往往都会使用到URI

## 学习路径

### 1. 基础概念

1. [Core File Kit（文件基础服务）](../../docs/zh-cn/application-dev/file-management/Readme-CN.md) - 总体介绍
2. [Core File Kit简介](../../docs/zh-cn/application-dev/file-management/core-file-kit-intro.md) - 详细介绍Kit使用场景、能力范围、亮点特征

### 2. 应用文件管理

3. [应用文件概述](../../docs/zh-cn/application-dev/file-management/app-file-overview.md) - 了解应用文件概念
4. [应用沙箱目录](../../docs/zh-cn/application-dev/file-management/app-sandbox-directory.md) - 学习应用沙箱结构和加密级别
5. [应用文件访问(ArkTS)](../../docs/zh-cn/application-dev/file-management/app-file-access.md) - 学习如何访问和管理应用文件
6. [应用及文件系统空间统计](../../docs/zh-cn/application-dev/file-management/app-fs-space-statistics.md) - 学习如何获取空间统计信息

### 3. 应用文件分享

7. [应用文件分享](../../docs/zh-cn/application-dev/file-management/share-app-file.md) - 了解应用文件分享概念
8. [应用共享目录配置](../../docs/zh-cn/application-dev/file-management/share-app-file-configuration.md) - 学习如何配置共享目录范围

### 4. 应用数据备份恢复

9. [应用数据备份恢复概述](../../docs/zh-cn/application-dev/file-management/app-file-backup-overview.md) - 了解备份恢复概念
10. [应用接入数据备份恢复](../../docs/zh-cn/application-dev/file-management/app-file-backup-extension.md) - 学习如何接入备份恢复

### 5. 用户文件管理

11. [用户文件概述](../../docs/zh-cn/application-dev/file-management/user-file-overview.md) - 了解用户文件概念
12. [用户文件URI介绍](../../docs/zh-cn/application-dev/file-management/user-file-uri-intro.md) - 学习用户文件URI的使用
13. [选择用户文件](../../docs/zh-cn/application-dev/file-management/select-user-file.md) - 学习如何使用FilePicker选择文件
14. [保存用户文件](../../docs/zh-cn/application-dev/file-management/save-user-file.md) - 学习如何使用FilePicker保存文件
15. [授权持久化](../../docs/zh-cn/application-dev/file-management/file-persistPermission.md) - 学习如何持久化文件访问权限

### 6. 分布式文件系统

16. [分布式文件系统概述](../../docs/zh-cn/application-dev/file-management/distributed-fs-overview.md) - 了解分布式文件系统概念
17. [跨设备文件共享和访问](../../docs/zh-cn/application-dev/file-management/file-access-across-devices.md) - 学习如何实现跨设备文件访问
18. [跨设备文件拷贝](../../docs/zh-cn/application-dev/file-management/file-copy-across-devices.md) - 学习如何实现跨设备文件拷贝
19. [设置分布式文件数据等级](../../docs/zh-cn/application-dev/file-management/set-security-label.md) - 学习如何设置文件数据等级

## 快速参考

| 功能 | 文档 |
|------|------|
| 应用文件访问 | [应用文件访问(ArkTS)](../../docs/zh-cn/application-dev/file-management/app-file-access.md) |
| 应用沙箱目录 | [应用沙箱目录](../../docs/zh-cn/application-dev/file-management/app-sandbox-directory.md) |
| 空间统计 | [应用及文件系统空间统计](../../docs/zh-cn/application-dev/file-management/app-fs-space-statistics.md) |
| 应用文件分享 | [应用文件分享](../../docs/zh-cn/application-dev/file-management/share-app-file.md) |
| 数据备份恢复 | [应用接入数据备份恢复](../../docs/zh-cn/application-dev/file-management/app-file-backup-extension.md) |
| 选择用户文件 | [选择用户文件](../../docs/zh-cn/application-dev/file-management/select-user-file.md) |
| 保存用户文件 | [保存用户文件](../../docs/zh-cn/application-dev/file-management/save-user-file.md) |
| 授权持久化 | [授权持久化](../../docs/zh-cn/application-dev/file-management/file-persistPermission.md) |
| 分布式文件系统 | [分布式文件系统概述](../../docs/zh-cn/application-dev/file-management/distributed-fs-overview.md) |
| 跨设备文件访问 | [跨设备文件共享和访问](../../docs/zh-cn/application-dev/file-management/file-access-across-devices.md) |
| 跨设备文件拷贝 | [跨设备文件拷贝](../../docs/zh-cn/application-dev/file-management/file-copy-across-devices.md) |
| 用户文件URI | [用户文件URI介绍](../../docs/zh-cn/application-dev/file-management/user-file-uri-intro.md) |
| 公共目录 | [获取并使用公共目录](../../docs/zh-cn/application-dev/file-management/request-dir-permission.md) |
| C/C++文件访问 | [应用文件访问(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileio-guidelines.md) |
| C/C++FileUri | [FileUri开发指导(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileuri-guidelines.md) |

## 统计信息

- 文档总数: 28
- 核心概念: 10
- 支持语言: ArkTS, C/C++
