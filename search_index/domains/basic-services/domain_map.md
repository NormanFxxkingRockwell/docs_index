# Basic Services Kit 领域地图

## 领域概述

Basic Services Kit是OpenHarmony提供的基础服务框架，为应用开发者提供常用的基础能力。包括账号管理（系统账号、域账号、分布式账号、应用账号）、进程线程通信（公共事件、Emitter）、剪贴板服务、文件压缩解压、打印服务、USB管理、文件上传下载、划词服务、电源管理和升级服务等功能模块。

账号管理支持多用户数据隔离和权限控制；公共事件提供进程间通信能力；剪贴板支持跨设备数据共享；压缩解压提供zlib和gzip格式支持；打印支持系统打印预览和扩展能力；USB支持Host模式和串口通信；上传下载支持代理和速度控制；划词服务提供全局x本选择能力；电源管理提供运行锁防止系统睡眠；升级服务提供升级包部署能力。

## 核心概念

- **账号管理**：系统账号、域账号、分布式账号、应用账号
- **公共事件**：进程间通信、事件订阅发布
- **压缩**：zlib、gzip格式压缩解压
- **剪贴板**：复制粘贴、权限管控、延迟复制
- **电源管理**：运行锁、系统睡眠控制
- **打印**：文件打印、打印扩展能力
- **上传下载**：文件传输、代理、速度控制
- **划词服务**：x本选择、扩展能力
- **升级服务**：升级包部署、示例服务器
- **USB**：Host模式、串口通信、设备管理

## 文档索引

### 账号管理 (Account)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 账号管理概述（仅对系统应用开放） | account-account-overview-sys | docs/zh-cn/application-dev/basic-services/account/account-overview-sys.md |
| 管理系统账号（仅对系统应用开放） | account-manage-os-account-sys | docs/zh-cn/application-dev/basic-services/account/manage-os-account-sys.md |
| 管理系统账号凭据（仅对系统应用开放） | account-manage-os-account-credential-sys | docs/zh-cn/application-dev/basic-services/account/manage-os-account-credential-sys.md |
| 使用约束管控系统账号（仅对系统应用开放） | account-control-os-account-by-constraints-sys | docs/zh-cn/application-dev/basic-services/account/control-os-account-by-constraints-sys.md |
| 管理域账号（仅对系统应用开放） | account-manage-domain-account-sys | docs/zh-cn/application-dev/basic-services/account/manage-domain-account-sys.md |
| 认证域账号（仅对系统应用开放） | account-auth-domain-account-sys | docs/zh-cn/application-dev/basic-services/account/auth-domain-account-sys.md |
| 管理域账号插件（仅对系统应用开放） | account-manage-domain-plugin-sys | docs/zh-cn/application-dev/basic-services/account/manage-domain-plugin-sys.md |
| 管理分布式账号（仅对系统应用开放） | account-manage-distributed-account-sys | docs/zh-cn/application-dev/basic-services/account/manage-distributed-account-sys.md |
| 管理应用账号 | account-manage-application-account | docs/zh-cn/application-dev/basic-services/account/manage-application-account.md |

### 公共事件 (Common Event)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 公共事件简介 | common-event-common-event-overview | docs/zh-cn/application-dev/basic-services/common-event/common-event-overview.md |
| 动态订阅公共事件 | common-event-common-event-subscription | docs/zh-cn/application-dev/basic-services/common-event/common-event-subscription.md |
| 取消动态订阅公共事件 | common-event-common-event-unsubscription | docs/zh-cn/application-dev/basic-services/common-event/common-event-unsubscription.md |
| 发布公共事件 | common-event-common-event-publish | docs/zh-cn/application-dev/basic-services/common-event/common-event-publish.md |
| 静态订阅公共事件（仅对系统应用开放） | common-event-common-event-static-subscription-sys | docs/zh-cn/application-dev/basic-services/common-event/common-event-static-subscription-sys.md |
| 移除粘性公共事件（仅对系统应用开放） | common-event-common-event-remove-sticky-sys | docs/zh-cn/application-dev/basic-services/common-event/common-event-remove-sticky-sys.md |
| 使用Emitter进行线程间通信 | common-event-itc-with-emitter | docs/zh-cn/application-dev/basic-services/common-event/itc-with-emitter.md |
| 订阅公共事件（C/C++） | common-event-native-common-event-subscription | docs/zh-cn/application-dev/basic-services/common-event/native-common-event-subscription.md |
| 取消订阅公共事件（C/C++） | common-event-native-common-event-unsubscription | docs/zh-cn/application-dev/basic-services/common-event/native-common-event-unsubscription.md |

### 压缩 (Compress)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 压缩与解压 | compress-deflate-and-inflate | docs/zh-cn/application-dev/basic-services/compress/deflate-and-inflate.md |

### 剪贴板 (Pasteboard)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 申请访问剪贴板权限 | pasteboard-get-pastedata-permission-guidelines | docs/zh-cn/application-dev/basic-services/pasteboard/get-pastedata-permission-guidelines.md |
| 使用剪贴板进行复制粘贴 | pasteboard-use-pasteboard-to-copy-and-paste | docs/zh-cn/application-dev/basic-services/pasteboard/use-pasteboard-to-copy-and-paste.md |
| 使用剪贴板进行复制粘贴 (C/C++) | pasteboard-native-use-pasteboard | docs/zh-cn/application-dev/basic-services/pasteboard/native-use-pasteboard.md |
| 使用剪贴板进行延迟复制粘贴 | pasteboard-pasteboard-time-lapse-copy-and-paste | docs/zh-cn/application-dev/basic-services/pasteboard/pasteboard-time-lapse-copy-and-paste.md |

### 电源管理 (Power Manager)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 阻止系统闲时进入睡眠开发指南 | powermgr-runningLock-runningLock-dev | docs/zh-cn/application-dev/basic-services/powermgr/runningLock/runningLock-dev.md |

### 打印 (Print)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 文件打印（C/C++） | print-native-print-file | docs/zh-cn/application-dev/basic-services/print/native-print-file.md |
| 打印扩展能力 | print-printExtensionAbilityGuide | docs/zh-cn/application-dev/basic-services/print/printExtensionAbilityGuide.md |

### 上传下载 (Request)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 应用文件上传下载 | request-app-file-upload-download | docs/zh-cn/application-dev/basic-services/request/request-app-file-upload-download.md |

### 划词服务 (Selection Input)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 划词服务概述 | selectionInput-selection-services-intro | docs/zh-cn/application-dev/basic-services/selectionInput/selection-services-intro.md |
| 实现一个划词扩展能力 | selectionInput-selection-services-application-guide | docs/zh-cn/application-dev/basic-services/selectionInput/selection-services-application-guide.md |

### 升级服务 (Update)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| 示例服务器开发概述 | update-sample-server-overview | docs/zh-cn/application-dev/basic-services/update/sample-server-overview.md |
| 示例服务器开发指导 | update-sample-server-guidelines | docs/zh-cn/application-dev/basic-services/update/sample-server-guidelines.md |

### USB (USB)

| 文档标题 | 文档ID | 路径 |
|---------|--------|------|
| USB服务开发概述 | usb-usb-overview | docs/zh-cn/application-dev/basic-services/usb/usb-overview.md |
| USB服务开发指导 | usb-usb-guidelines | docs/zh-cn/application-dev/basic-services/usb/usb-guidelines.md |
| USB服务开发术语 | usb-usb-glossary | docs/zh-cn/application-dev/basic-services/usb/usb-glossary.md |
| USB服务开发概述 | usb-usbManager-usbHost-overview | docs/zh-cn/application-dev/basic-services/usb/usbManager/usbHost-overview.md |
| USB设备管理 | usb-usbManager-usbHost-deviceManager | docs/zh-cn/application-dev/basic-services/usb/usbManager/usbHost/deviceManager.md |
| USB控制传输 | usb-usbManager-usbHost-controlTransfer | docs/zh-cn/application-dev/basic-services/usb/usbManager/usbHost/controlTransfer.md |
| USB中断传输 | usb-usbManager-usbHost-interruptTransfer | docs/zh-cn/application-dev/basic-services/usb/usbManager/usbHost/interruptTransfer.md |
| USB批量传输 | usb-usbManager-usbHost-bulkTransfer | docs/zh-cn/application-dev/basic-services/usb/usbManager/usbHost/bulkTransfer.md |
| USB实时传输 | usb-usbManager-usbHost-isochronousTransfer | docs/zh-cn/application-dev/basic-services/usb/usbManager/usbHost/isochronousTransfer.md |
| USB串口通信服务开发概述 | usb-usbSerial-usbSerial-overview | docs/zh-cn/application-dev/basic-services/usb/usbSerial/overview.md |
| USB串口配置管理 | usb-usbSerial-usbSerial-configuration | docs/zh-cn/application-dev/basic-services/usb/usbSerial/usbSerial-configuration.md |
| USB串口通信管理 | usb-usbSerial-usbSerial-communication | docs/zh-cn/application-dev/basic-services/usb/usbSerial/usbSerial-communication.md |
| 常见问题 | usb-faqs-usb | docs/zh-cn/application-dev/basic-services/usb/faqs-usb.md |

## 学习路径

### 阶段1：基础概念了解

1. **Basic Services Kit简介** - 了解Basic Services Kit的整体架构和能力范围
2. **账号管理基础** - 理解账号管理的基本概念和四类账号的关系

### 阶段2：基础功能开发

3. **应用账号管理** - 学习如何管理应用账号（面向普通应用）
4. **公共事件通信** - 了解公共事件服务的分类和运作机制
5. **动态订阅公共事件** - 学习如何在应用运行时动态订阅公共事件
6. **发布公共事件** - 学习如何发布公共事件进行进程间通信
7. **Emitter线程间通信** - 学习使用Emitter进行进程内线程间通信

### 阶段3：数据操作能力

8. **剪贴板复制粘贴** - 学习使用剪贴板进行复制粘贴操作
9. **剪贴板权限管理** - 了解剪贴板权限管控和弹窗适配优化
10. **文件压缩解压** - 学习使用zlib进行文件和缓冲区的压缩解压
11. **文件上传下载** - 学习文件上传下载功能，包括代理和速度控制

### 阶段4：设备与系统交互

12. **USB服务概述** - 了解USB服务的基本概念和运作机制
13. **USB设备管理** - 学习USB设备管理、权限控制和配置
14. **USB串口通信** - 了解USB串口通信服务的基本功能
15. **划词服务概述** - 了解划词服务的框架原理和能力范围
16. **实现划词扩展能力** - 学习如何实现划词扩展能力应用
17. **电源运行锁** - 学习使用运行锁阻止系统闲时进入睡眠

### 阶段5：高级功能

18. **文件打印** - 学习文件打印功能（C/C++实现）
19. **升级服务** - 了解升级服务的示例服务器功能
20. **系统账号管理** - 学习系统账号管理（仅对系统应用开放）

## 快速参考

| 功能模块 | 文档 | 文档ID |
|---------|------|--------|
| **Basic Services Kit简介** | Basic Services Kit简介 | basic-services-kit-overview |
| **账号管理概述** | 账号管理概述（仅对系统应用开放） | account-account-overview-sys |
| **应用账号管理** | 管理应用账号 | account-manage-application-account |
| **公共事件简介** | 公共事件简介 | common-event-common-event-overview |
| **动态订阅公共事件** | 动态订阅公共事件 | common-event-common-event-subscription |
| **发布公共事件** | 发布公共事件 | common-event-common-event-publish |
| **Emitter通信** | 使用Emitter进行线程间通信 | common-event-itc-with-emitter |
| **剪贴板复制粘贴** | 使用剪贴板进行复制粘贴 | pasteboard-use-pasteboard-to-copy-and-paste |
| **剪贴板权限** | 申请访问剪贴板权限 | pasteboard-get-pastedata-permission-guidelines |
| **压缩解压** | 压缩与解压 | compress-deflate-and-inflate |
| **上传下载** | 应用文件上传下载 | request-app-file-upload-download |
| **USB服务概述** | USB服务开发概述 | usb-usb-overview |
| **USB设备管理** | USB设备管理 | usb-usbManager-usbHost-deviceManager |
| **USB串口通信** | USB串口通信服务开发概述 | usb-usbSerial-usbSerial-overview |
| **划词服务概述** | 划词服务概述 | selectionInput-selection-services-intro |
| **划词扩展能力** | 实现一个划词扩展能力 | selectionInput-selection-services-application-guide |
| **电源管理** | 阻止系统闲时进入睡眠开发指南 | powermgr-runningLock-runningLock-dev |
| **打印** | 文件打印（C/C++） | print-native-print-file |
| **升级服务** | 示例服务器开发概述 | update-sample-server-overview |

## 统计信息

- **文档总数**：57
- **核心概念**：10个
- **功能模块**：10个
  - 账号管理：9个文档
  - 公共事件：9个文档
  - 压缩：1个文档
  - 剪贴板：4个文档
  - 电源管理：1个文档
  - 打印：2个文档
  - 上传下载：1个文档
  - 划词服务：2个文档
  - 升级服务：2个文档
  - USB：13个文档

## 相关资源

- **Kit名称**：Basic Services Kit
- **子系统**：Account, Common, MiscServices, Notification, PowerManager, Print, Request, SelectionInput, Update, USB
- **适用场景**：应用开发、系统应用开发、设备管理、数据传输、进程间通信
