# File Management 领域地图

## 领域概述

Core File Kit（文件基础服务）为开发者提供一套完整的文件访问和管理能力，支持应用文件、用户文件和系统文件三种文件类型，以及本地文件系统和分布式文件系统。主要功能包括应用文件的查看、创建、读写、删除、移动等操作，用户文件的选择与保存，应用间文件分享，数据备份恢复，跨设备文件访问和拷贝，以及存储空间管理等。该领域采用沙箱隔离机制确保安全性，并通过URI和权限管理系统实现跨应用和跨设备的文件共享。

## 核心概念

- **应用文件访问** - 应用对应用文件目录下的文件进行查看、创建、读写、删除、移动、复制、获取属性等操作
- **用户文件URI** - 用户文件的唯一标识，用于访问和修改用户文件，包括文档类URI和媒体文件URI
- **文件选择与保存** - 使用系统预置的文件选择器（FilePicker）实现用户文件的选择和保存
- **文件分享** - 应用之间通过分享URI或文件描述符FD的方式进行文件共享
- **授权持久化** - 对文件进行持久化授权，使应用重启或设备重启后仍能直接访问之前已访问过的文件
- **分布式文件系统** - 提供跨设备的文件访问能力，支持两台设备组网后的文件互访
- **跨设备文件操作** - 支持跨设备文件访问和拷贝，适用于多设备数据流转场景
- **应用数据备份恢复** - 为设备上的应用、服务提供自身数据备份和恢复的解决方案
- **应用沙箱目录** - 应用专属的目录，提供安全隔离机制，限制应用只能访问自己的应用文件目录
- **文件空间统计** - 获取应用及文件系统的空间统计信息，包括系统剩余空间、应用自身占用空间大小等

## 文档索引

### 基础概念

| 文档 | 描述 |
|------|------|
| [Core File Kit简介](../../docs/zh-cn/application-dev/file-management/core-file-kit-intro.md) | Core File Kit的概述、使用场景、能力范围和框架原理 |
| [应用文件概述](../../docs/zh-cn/application-dev/file-management/app-file-overview.md) | 应用文件的概念、文件所有者和应用文件目录 |
| [应用沙箱目录](../../docs/zh-cn/application-dev/file-management/app-sandbox-directory.md) | 应用沙箱目录的概念、结构、加密级别和路径映射 |

### 应用文件访问

| 文档 | 描述 |
|------|------|
| [应用文件访问(ArkTS)](../../docs/zh-cn/application-dev/file-management/app-file-access.md) | 使用ohos.file.fs模块进行应用文件访问操作 |
| [应用文件访问(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileio-guidelines.md) | 使用FileIO模块进行应用文件访问操作 |

### 用户文件访问

| 文档 | 描述 |
|------|------|
| [用户文件URI介绍](../../docs/zh-cn/application-dev/file-management/user-file-uri-intro.md) | 用户文件URI的概念、类型和使用方式 |
| [选择用户文件](../../docs/zh-cn/application-dev/file-management/select-user-file.md) | 使用FilePicker实现用户文件选择功能 |
| [保存用户文件](../../docs/zh-cn/application-dev/file-management/save-user-file.md) | 使用FilePicker保存用户文件 |

### 文件分享

| 文档 | 描述 |
|------|------|
| [应用文件分享](../../docs/zh-cn/application-dev/file-management/share-app-file.md) | 应用之间通过分享URI进行文件共享 |
| [应用共享目录配置](../../docs/zh-cn/application-dev/file-management/share-app-file-configuration.md) | 配置应用共享目录范围以防止应用敏感数据泄露 |

### 授权持久化

| 文档 | 描述 |
|------|------|
| [授权持久化](../../docs/zh-cn/application-dev/file-management/file-persistPermission.md) | 文件授权持久化的机制和使用方法 |
| [授权持久化(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileshare-guidelines.md) | 使用FileShare Native API进行持久化授权 |

### 分布式文件系统

| 文档 | 描述 |
|------|------|
| [分布式文件系统概述](../../docs/zh-cn/application-dev/file-management/distributed-fs-overview.md) | OpenHarmony分布式文件系统（hmdfs）的基本概念和架构设计 |
| [跨设备文件共享和访问](../../docs/zh-cn/application-dev/file-management/file-access-across-devices.md) | 分布式文件系统提供的跨设备文件访问能力 |
| [跨设备文件拷贝](../../docs/zh-cn/application-dev/file-management/file-copy-across-devices.md) | 分布式文件系统提供的跨设备文件拷贝能力 |
| [设置分布式文件数据等级](../../docs/zh-cn/application-dev/file-management/set-security-label.md) | 设置和获取文件安全标签，实现数据分级和流转策略 |

### 数据备份恢复

| 文档 | 描述 |
|------|------|
| [应用数据备份恢复概述](../../docs/zh-cn/application-dev/file-management/app-file-backup-overview.md) | 应用数据备份恢复的概念和基本原理 |
| [应用接入数据备份恢复](../../docs/zh-cn/application-dev/file-management/app-file-backup-extension.md) | 通过BackupExtensionAbility实现应用接入数据备份恢复功能 |
| [应用触发数据备份/恢复（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/app-file-backup-sys.md) | 系统应用开发者使用备份恢复API |

### 其他功能

| 文档 | 描述 |
|------|------|
| [应用及文件系统空间统计](../../docs/zh-cn/application-dev/file-management/app-fs-space-statistics.md) | 获取应用及文件系统的空间统计信息 |
| [获取并使用公共目录](../../docs/zh-cn/application-dev/file-management/request-dir-permission.md) | 获取并使用公共目录（Download、Documents、Desktop） |
| [获取用户目录环境(C/C++)](../../docs/zh-cn/application-dev/file-management/native-environment-guidelines.md) | 使用Environment接口获取公共文件用户目录路径 |

### 系统应用专用

| 文档 | 描述 |
|------|------|
| [开发用户文件管理器（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/dev-user-file-manager-sys.md) | 开发用户文件管理器 |
| [管理外置存储存储（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/manage-external-storage-sys.md) | 管理外置存储设备 |
| [向应用沙箱推送文件（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/send-file-to-app-sandbox-sys.md) | 向应用沙箱推送文件 |

## 学习路径

推荐按照以下顺序学习 File Management 领域：

1. **基础概念** - 了解 Core File Kit 的整体架构和基本概念
   - Core File Kit简介
   - 应用文件概述
   - 应用沙箱目录

2. **应用文件访问** - 学习如何访问和管理应用文件
   - 应用文件访问(ArkTS)

3. **用户文件访问** - 学习如何选择和保存用户文件
   - 用户文件URI介绍
   - 选择用户文件
   - 保存用户文件

4. **文件分享** - 学习应用间文件共享
   - 应用文件分享
   - 授权持久化

5. **分布式文件系统** - 学习跨设备文件操作
   - 分布式文件系统概述
   - 跨设备文件共享和访问
   - 跨设备文件拷贝

6. **数据备份恢复** - 学习应用数据备份恢复
   - 应用数据备份恢复概述
   - 应用接入数据备份恢复

7. **高级功能** - 学习其他高级功能
   - 应用及文件系统空间统计

## 快速参考

| 文档标题 | 文档ID |
|----------|--------|
| Core File Kit简介 | core-file-kit-intro |
| 应用文件概述 | app-file-overview |
| 应用沙箱目录 | app-sandbox-directory |
| 应用文件访问(ArkTS) | app-file-access |
| 应用文件访问(C/C++) | native-fileio-guidelines |
| 用户文件URI介绍 | user-file-uri-intro |
| 选择用户文件 | select-user-file |
| 保存用户文件 | save-user-file |
| 应用文件分享 | share-app-file |
| 应用共享目录配置 | share-app-file-configuration |
| 授权持久化 | file-persistPermission |
| 授权持久化(C/C++) | native-fileshare-guidelines |
| 分布式文件系统概述 | distributed-fs-overview |
| 跨设备文件共享和访问 | file-access-across-devices |
| 跨设备文件拷贝 | file-copy-across-devices |
| 设置分布式文件数据等级 | set-security-label |
| 应用数据备份恢复概述 | app-file-backup-overview |
| 应用接入数据备份恢复 | app-file-backup-extension |
| 应用触发数据备份/恢复（仅对系统应用开放） | app-file-backup-sys |
| 应用及文件系统空间统计 | app-fs-space-statistics |
| 获取并使用公共目录 | request-dir-permission |
| 获取用户目录环境(C/C++) | native-environment-guidelines |
| FileUri开发指导(C/C++) | native-fileuri-guidelines |
| 开发用户文件管理器（仅对系统应用开放） | dev-user-file-manager-sys |
| 管理外置存储存储（仅对系统应用开放） | manage-external-storage-sys |
| 向应用沙箱推送文件（仅对系统应用开放） | send-file-to-app-sandbox-sys |

## 统计信息

- **文档总数**: 28
- **核心概念数**: 10
- **子领域数**: 7
  - 基础概念: 3
  - 应用文件访问: 2
  - 用户文件访问: 3
  - 文件分享: 2
  - 授权持久化: 2
  - 分布式文件系统: 4
  - 数据备份恢复: 3
