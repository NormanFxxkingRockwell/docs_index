# File Management 领域学习地图

## 概述

Core File Kit提供完整的文件管理能力，包括应用文件和用户文件的访问、管理、分享与备份。应用文件在沙箱隔离机制下进行安全存储和访问，支持文件读写、目录操作、空间统计等基础功能。用户文件通过FilePicker选择器实现安全访问，支持图片、视频、音频、文档等多种类型。分布式文件系统提供跨设备文件访问和拷贝能力，实现设备间数据无缝流转。文件分享机制支持应用间文件共享和持久化授权管理。备份恢复框架确保应用数据安全，支持应用接入数据备份与恢复功能。

## 核心概念

- **应用文件**: 应用文件包括应用安装文件、应用资源文件和应用缓存文件，文件所有者是应用
- **用户文件**: 用户文件是指登录到终端设备的用户所拥有的文件，包括图片、视频、音频、文档等
- **文件URI**: 用户文件URI是文件的唯一标识，在对用户文件进行访问与修改等操作时往往都会使用到URI
- **文件权限**: 应用对用户文件的创建、访问、删除等行为需要提前获取用户授权
- **分布式文件系统**: 提供跨设备的文件访问和拷贝能力，hmdfs在分布式软总线动态组网的基础上，为网络上各个设备节点提供一个全局一致的访问视图
- **应用沙箱**: 应用沙箱是一种以安全防护为目的的隔离机制，避免数据受到恶意路径穿越访问
- **文件备份恢复**: 备份恢复框架是为设备上的应用、服务提供自身数据备份和恢复的解决方案
- **文件分享**: 应用文件分享是应用之间通过分享URI（Uniform Resource Identifier）进行文件共享的过程
- **FilePicker**: 系统预置的文件选择器，用于选择和保存用户文件
- **文件访问**: 通过基础文件操作接口（ohos.file.fs）实现应用文件访问能力

## 学习路径

### 1. 基础概念

1. [Core File Kit简介](../../docs/zh-cn/application-dev/file-management/core-file-kit-intro.md) - 详细介绍Kit使用场景、能力范围、亮点特征
2. [Core File Kit（文件基础服务）](../../docs/zh-cn/application-dev/file-management/Readme-CN.md) - 总体介绍

### 2. 应用文件管理

3. [应用文件概述](../../docs/zh-cn/application-dev/file-management/app-file-overview.md) - 了解应用文件概念
4. [应用沙箱目录](../../docs/zh-cn/application-dev/file-management/app-sandbox-directory.md) - 学习应用沙箱结构和加密级别
5. [应用文件访问](../../docs/zh-cn/application-dev/file-management/app-file-access.md) - 学习如何访问和管理应用文件
6. [应用文件访问(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileio-guidelines.md) - 学习C/C++接口访问应用文件
7. [应用及文件系统空间统计](../../docs/zh-cn/application-dev/file-management/app-fs-space-statistics.md) - 学习如何获取空间统计信息

### 3. 用户文件管理

8. [用户文件概述](../../docs/zh-cn/application-dev/file-management/user-file-overview.md) - 了解用户文件概念
9. [用户文件URI介绍](../../docs/zh-cn/application-dev/file-management/user-file-uri-intro.md) - 学习用户文件URI的使用
10. [选择用户文件](../../docs/zh-cn/application-dev/file-management/select-user-file.md) - 学习如何使用FilePicker选择文件
11. [保存用户文件](../../docs/zh-cn/application-dev/file-management/save-user-file.md) - 学习如何使用FilePicker保存文件
12. [获取并使用公共目录](../../docs/zh-cn/application-dev/file-management/request-dir-permission.md) - 学习如何获取和使用公共目录
13. [获取用户目录环境(C/C++)](../../docs/zh-cn/application-dev/file-management/native-environment-guidelines.md) - 学习C/C++接口获取用户目录

### 4. 文件分享与权限

14. [应用文件分享](../../docs/zh-cn/application-dev/file-management/share-app-file.md) - 了解应用文件分享概念
15. [应用共享目录配置](../../docs/zh-cn/application-dev/file-management/share-app-file-configuration.md) - 学习如何配置共享目录范围
16. [授权持久化](../../docs/zh-cn/application-dev/file-management/file-persistPermission.md) - 学习如何持久化文件访问权限
17. [授权持久化(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileshare-guidelines.md) - 学习C/C++接口授权持久化
18. [FileUri开发指导(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileuri-guidelines.md) - 学习C/C++接口FileUri操作

### 5. 分布式文件系统

19. [分布式文件系统概述](../../docs/zh-cn/application-dev/file-management/distributed-fs-overview.md) - 了解分布式文件系统概念
20. [跨设备文件共享和访问](../../docs/zh-cn/application-dev/file-management/file-access-across-devices.md) - 学习如何实现跨设备文件访问
21. [跨设备文件拷贝](../../docs/zh-cn/application-dev/file-management/file-copy-across-devices.md) - 学习如何实现跨设备文件拷贝
22. [设置分布式文件数据等级](../../docs/zh-cn/application-dev/file-management/set-security-label.md) - 学习如何设置文件数据等级

### 6. 应用数据备份恢复

23. [应用数据备份恢复概述](../../docs/zh-cn/application-dev/file-management/app-file-backup-overview.md) - 了解备份恢复概念
24. [应用接入数据备份恢复](../../docs/zh-cn/application-dev/file-management/app-file-backup-extension.md) - 学习如何接入备份恢复

### 7. 系统应用功能（仅对系统应用开放）

25. [管理外置存储设备（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/manage-external-storage-sys.md) - 学习如何管理外置存储设备
26. [开发用户文件管理器（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/dev-user-file-manager-sys.md) - 学习如何开发用户文件管理器
27. [向应用沙箱推送文件（仅对系统应用开放））](../../docs/zh-cn/application-dev/file-management/send-file-to-app-sandbox-sys.md) - 学习如何向应用沙箱推送文件

## 快速参考

| 功能 | 文档 |
|------|------|
| Core File Kit简介 | [Core File Kit简介](../../docs/zh-cn/application-dev/file-management/core-file-kit-intro.md) |
| 应用文件概述 | [应用文件概述](../../docs/zh-cn/application-dev/file-management/app-file-overview.md) |
| 应用沙箱目录 | [应用沙箱目录](../../docs/zh-cn/application-dev/file-management/app-sandbox-directory.md) |
| 应用文件访问 | [应用文件访问](../../docs/zh-cn/application-dev/file-management/app-file-access.md) |
| 应用文件访问(C/C++) | [应用文件访问(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileio-guidelines.md) |
| 应用及文件系统空间统计 | [应用及文件系统空间统计](../../docs/zh-cn/application-dev/file-management/app-fs-space-statistics.md) |
| 应用数据备份恢复概述 | [应用数据备份恢复概述](../../docs/zh-cn/application-dev/file-management/app-file-backup-overview.md) |
| 应用接入数据备份恢复 | [应用接入数据备份恢复](../../docs/zh-cn/application-dev/file-management/app-file-backup-extension.md) |
| 应用触发数据备份恢复（仅对系统应用开放） | [应用触发数据备份恢复（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/app-file-backup-sys.md) |
| 用户文件概述 | [用户文件概述](../../docs/zh-cn/application-dev/file-management/user-file-overview.md) |
| 用户文件URI介绍 | [用户文件URI介绍](../../docs/zh-cn/application-dev/file-management/user-file-uri-intro.md) |
| 选择用户文件 | [选择用户文件](../../docs/zh-cn/application-dev/file-management/select-user-file.md) |
| 保存用户文件 | [保存用户文件](../../docs/zh-cn/application-dev/file-management/save-user-file.md) |
| 获取并使用公共目录 | [获取并使用公共目录](../../docs/zh-cn/application-dev/file-management/request-dir-permission.md) |
| 获取用户目录环境(C/C++) | [获取用户目录环境(C/C++)](../../docs/zh-cn/application-dev/file-management/native-environment-guidelines.md) |
| 应用文件分享 | [应用文件分享](../../docs/zh-cn/application-dev/file-management/share-app-file.md) |
| 应用共享目录配置 | [应用共享目录配置](../../docs/zh-cn/application-dev/file-management/share-app-file-configuration.md) |
| 授权持久化 | [授权持久化](../../docs/zh-cn/application-dev/file-management/file-persistPermission.md) |
| 授权持久化(C/C++) | [授权持久化(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileshare-guidelines.md) |
| FileUri开发指导(C/C++) | [FileUri开发指导(C/C++)](../../docs/zh-cn/application-dev/file-management/native-fileuri-guidelines.md) |
| 分布式文件系统概述 | [分布式文件系统概述](../../docs/zh-cn/application-dev/file-management/distributed-fs-overview.md) |
| 跨设备文件共享和访问 | [跨设备文件共享和访问](../../docs/zh-cn/application-dev/file-management/file-access-across-devices.md) |
| 跨设备文件拷贝 | [跨设备文件拷贝](../../docs/zh-cn/application-dev/file-management/file-copy-across-devices.md) |
| 设置分布式文件数据等级 | [设置分布式文件数据等级](../../docs/zh-cn/application-dev/file-management/set-security-label.md) |
| 管理外置存储设备（仅对系统应用开放） | [管理外置存储设备（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/manage-external-storage-sys.md) |
| 开发用户文件管理器（仅对系统应用开放） | [开发用户文件管理器（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/dev-user-file-manager-sys.md) |
| 向应用沙箱推送文件（仅对系统应用开放） | [向应用沙箱推送文件（仅对系统应用开放）](../../docs/zh-cn/application-dev/file-management/send-file-to-app-sandbox-sys.md) |
| Core File Kit（文件基础服务） | [Core File Kit（文件基础服务）](../../docs/zh-cn/application-dev/file-management/Readme-CN.md) |

## 统计信息

- 文档总数: 28
- 核心概念: 10
- 支持语言: ArkTS, C/C++
