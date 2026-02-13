# Basic Services 领域索引

## 领域概述

Basic Services Kit 是 OpenHarmony 提供的基础服务套件，涵盖账号管理、进程线程通信、剪贴板服务、上传下载、压缩解压、划词服务、电源管理、打印、USB 服务、升级服务等多种基础能力。支持 ArkTS 和 C/C++ 两种开发语言，部分功能仅对系统应用开放。

## 核心概念

| 概念 | 描述 |
|------|------|
| 账号管理 | 提供系统账号、域账号、分布式账号、应用账号的管理能力 |
| 进程线程通信 | 提供公共事件和 Emitter 进行进程间和线程间通信 |
| 剪贴板服务 | 提供内容复制粘贴能力，支持多种数据类型 |
| 文件上传下载 | 提供文件上传到服务器和从服务器下载的能力 |
| 压缩与解压 | Zlib 格式的文件压缩解压缩能力 |
| 划词服务 | 全局获取用户选中文本并实现划词弹窗功能 |
| 电源管理 | 提供运行锁防止系统自动睡眠 |
| 打印服务 | 提供文件打印和打印扩展能力 |
| USB 服务 | 提供 USB Host 设备管理和串口通信能力 |
| 升级服务 | 提供升级包查询和下载能力 |

## 学习路径

1. **基础入门**
   - [Basic Services Kit 概述](../../docs/zh-cn/application-dev/basic-services/Readme-CN.md)
   - [Basic Services Kit 简介](../../docs/zh-cn/application-dev/basic-services/basic-services-kit-overview.md)

2. **账号管理**
   - [账号管理概述](../../docs/zh-cn/application-dev/basic-services/account/account-overview-sys.md)
   - [管理应用账号](../../docs/zh-cn/application-dev/basic-services/account/manage-application-account.md)

3. **进程线程通信**
   - [公共事件简介](../../docs/zh-cn/application-dev/basic-services/common-event/common-event-overview.md)
   - [动态订阅公共事件](../../docs/zh-cn/application-dev/basic-services/common-event/common-event-subscription.md)
   - [发布公共事件](../../docs/zh-cn/application-dev/basic-services/common-event/common-event-publish.md)
   - [使用 Emitter 进行线程间通信](../../docs/zh-cn/application-dev/basic-services/common-event/itc-with-emitter.md)

4. **剪贴板服务**
   - [申请访问剪贴板权限](../../docs/zh-cn/application-dev/basic-services/pasteboard/get-pastedata-permission-guidelines.md)
   - [使用剪贴板进行复制粘贴](../../docs/zh-cn/application-dev/basic-services/pasteboard/use-pasteboard-to-copy-and-paste.md)

5. **文件上传下载**
   - [应用文件上传下载](../../docs/zh-cn/application-dev/basic-services/request/app-file-upload-download.md)

6. **压缩与解压**
   - [压缩与解压](../../docs/zh-cn/application-dev/basic-services/compress/deflate-and-inflate.md)

7. **电源管理**
   - [阻止系统闲时进入睡眠开发指南](../../docs/zh-cn/application-dev/basic-services/powermgr/runningLock/runningLock-dev.md)

8. **打印服务**
   - [文件打印（C/C++）](../../docs/zh-cn/application-dev/basic-services/print/native-print-file.md)
   - [打印扩展能力](../../docs/zh-cn/application-dev/basic-services/print/printExtensionAbilityGuide.md)

9. **USB 服务**
   - [USB 服务开发概述](../../docs/zh-cn/application-dev/basic-services/usb/usbManager/usbHost-overview.md)
   - [USB 设备管理](../../docs/zh-cn/application-dev/basic-services/usb/usbManager/usbHost/deviceManager.md)

## 快速参考

| 功能 | 文档链接 |
|------|----------|
| 账号管理 | [账号管理概述](../../docs/zh-cn/application-dev/basic-services/account/Readme-CN.md) |
| 进程线程通信 | [公共事件简介](../../docs/zh-cn/application-dev/basic-services/common-event/Readme-CN.md) |
| 剪贴板服务 | [剪贴板服务](../../docs/zh-cn/application-dev/basic-services/pasteboard/Readme-CN.md) |
| 文件上传下载 | [上传下载](../../docs/zh-cn/application-dev/basic-services/request/Readme-CN.md) |
| 压缩与解压 | [压缩与解压](../../docs/zh-cn/application-dev/basic-services/compress/Readme-CN.md) |
| 划词服务 | [划词服务](../../docs/zh-cn/application-dev/basic-services/selectionInput/Readme-CN.md) |
| 电源管理 | [电源管理](../../docs/zh-cn/application-dev/basic-services/powermgr/Readme-CN.md) |
| 打印服务 | [打印](../../docs/zh-cn/application-dev/basic-services/print/Readme-CN.md) |
| USB 服务 | [USB 服务](../../docs/zh-cn/application-dev/basic-services/usb/Readme-CN.md) |
| 升级服务 | [升级服务](../../docs/zh-cn/application-dev/basic-services/update/Readme-CN.md) |
| 应用账号 | [管理应用账号](../../docs/zh-cn/application-dev/basic-services/account/manage-application-account.md) |
| 公共事件 | [公共事件简介](../../docs/zh-cn/application-dev/basic-services/common-event/common-event-overview.md) |
| Emitter | [使用 Emitter 进行线程间通信](../../docs/zh-cn/application-dev/basic-services/common-event/itc-with-emitter.md) |
