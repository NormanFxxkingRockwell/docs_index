# FAQs 领域地图

## 领域概述
FAQs（常见问题）领域涵盖OpenHarmony应用开发中各模块的常见问题解答，包括应用模型、ArkUI框架（ArkTS和JS）、ArkTS语言基础类库、包管理、资源管理、事件通知、图形图像、窗口管理、媒体、访问控制、数据管理、文件管理、网络管理、DFX、传感器、启动恢复、SDK、NDK、编译运行时、三四方库等，为开发者提供问题排查和解决方案参考。

## 核心概念
- **应用模型**：UIAbility、ServiceExtensionAbility、后台任务、进程管理、生命周期
- **ArkUI框架**：组件开发、布局开发、状态管理、路由导航、动画交互
- **ArkTS语言**：语法特性、多线程并发、模块加载、类型系统
- **网络管理**：HTTP请求、Socket连接、网络权限、DNS解析
- **数据管理**：关系型数据库、Preferences、PersistentStorage、数据持久化
- **文件管理**：文件读写、picker、文件监听、路径管理
- **媒体开发**：Camera、Video、Audio、AVPlayer、图片处理
- **窗口管理**：窗口属性、屏幕方向、状态栏导航栏、窗口监听
- **权限管理**：权限申请、权限处理、安全控件
- **多线程并发**：TaskPool、Worker、SharedArrayBuffer、线程安全
- **NDK开发**：napi、C/C++开发、多线程NDK、线程安全
- **日志调试**：hilog、faultLogger、性能分析、崩溃定位

## 文档索引

### 概览与索引
1. [常见问题](../../docs/zh-cn/application-dev/faqs/Readme-CN.md) - 常见问题总览索引

### 应用模型
2. [应用模型常见问题](../../docs/zh-cn/application-dev/faqs/faqs-ability.md) - UIAbility、ServiceExtensionAbility、后台任务、进程管理、生命周期等

### ArkUI框架（ArkTS）
3. [ArkTS语法使用常见问题](../../docs/zh-cn/application-dev/faqs/faqs-arkui-arkts.md) - 动态创建组件、@Builder装饰器、状态管理、数据类型转换等
4. [ArkUI组件开发常见问题(ArkTS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-component.md) - 自定义弹窗、TextInput、Video、Scroll、、多态样式等
5. [ArkUI布局开发常见问题(ArkTS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-layout.md) - 布局容器、List、Grid、ForEach、CustomDialog等
6. [ArkUI动画/交互事件开发常见问题(ArkTS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-animation-interactive-event.md) - 焦点事件、手势、、动画、转场、拖拽、软键盘等
7. [ArkUI路由/导航开发常见问题(ArkTS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-route-nav.md) - router参数传递、页面跳转、页面回收等

### ArkUI框架（JS）
8. [ArkUI框架开发常见问题(JS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-js.md) - 类web范式、input组件、数组监听、TS版本等

### Web开发
9. [Web开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-arkui-web.md) - H5与ArkTS交互、Web事件拦截、调试工具、WebRTC等

### ArkTS语言
10. [ArkTS语言基础类库开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-arkts-utils.md) - TaskPool、Worker、并发、多线程、SharedArrayBuffer等
11. [ArkTS语言模块化加载异常常见问题](../../docs/zh-cn/application-dev/faqs/faqs-arkts-module.md) - 模块加载、动态import、so加载、循环依赖等

### 其他模块
12. [包管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-bundle-management.md) - bundleManager、版本信息、应用信息等
13. [资源管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-globalization.md) - ResourceManager、rawfile、资源访问、xml解析等
14. [事件通知开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-event-notification.md) - commonEvent、EventHub、Notification等
15. [图形图像开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-graphics.md) - display、window、effectKit、EGL、转场动画等
16. [媒体开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-multimedia.md) - Camera、Video、Audio、AVPlayer、图片处理等
17. [程序访问控制开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-ability-access-control.md) - 权限申请、权限处理、安全控件等
18. [数据管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-distributed-data-management.md) - rdb、Preferences、PersistentStorage、数据持久化等
19. [文件管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-file-management.md) - 文件读写、picker、文件监听、路径管理等
20. [网络管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-network-management.md) - HTTP、axios、Socket、connection、网络权限等
21. [DFX开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-dfx.md) - hilog、faultLogger、性能分析、崩溃定位等
22. [泛Sensor服务开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-sensor.md) - 传感器、震动、权限申请等
23. [启动恢复开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-startup.md) - deviceInfo、系统版本、UDID、屏保等

### SDK与NDK
24. [SDK使用常见问题](../../docs/zh-cn/application-dev/faqs/faqs-sdk.md) - cmake、OHOS_ARCH、OH_LOG_Print、rawfile等
25. [NDK开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-ndk.md) - napi、C/C++、pthread、多线程、Native API等

### 其他
26. [语言编译运行时常见问题](../../docs/zh-cn/application-dev/faqs/faqs-compiler-runtime.md) - 编译、运行时、语言等
27. [三四方库使用常见问题](../../docs/zh-cn/application-dev/faqs/faqs-third-fourth-party-library.md) - 三方库、四方库、ohpm、AKI等
28. [如何编译full-SDK](../../docs/zh-cn/application-dev/faqs/full-sdk-compile-guide.md) - full-SDK编译指南
29. [如何替换full-SDK](../../docs/zh-cn/application-dev/faqs/full-sdk-switch-guide.md) - full-SDK替换指南

## 学习路径
推荐的学习顺序：

1. **问题索引**：先阅读常见问题总览，了解各模块问题分布
2. **应用模型**：学习应用模型相关常见问题，了解UIAbility、生命周期等等
3. **ArkUI框架**：学习ArkTS语法、组件开发、布局开发、动画交互等
4. **核心模块**：根据需要学习网络、数据、文件、媒体等核心模块问题
5. **高级特性**：学习多线程并发、NDK开发、权限管理等高级特性问题
6. **调试优化**：学习DFX日志、性能分析、崩溃定位等调试问题

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| 应用模型 | [应用模型常见问题](../../docs/zh-cn/application-dev/faqs/faqs-ability.md) |
| ArkTS语法 | [ArkTS语法使用常见问题](../../docs/zh-cn/application-dev/faqs/faqs-arkui-arkts.md) |
| 组件开发 | [ArkUI组件开发常见问题(ArkTS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-component.md) |
| 布局开发 | [ArkUI布局开发常见问题(ArkTS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-layout.md) |
| 动画交互 | [ArkUI动画/交互事件开发常见问题(ArkTS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-animation-interactive-event.md) |
| 路由导航 | [ArkUI路由/导航开发常见问题(ArkTS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-route-nav.md) |
| JS开发 | [ArkUI框架开发常见问题(JS)](../../docs/zh-cn/application-dev/faqs/faqs-arkui-js.md) |
| Web开发 | [Web开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-arkui-web.md) |
| 多线程并发 | [ArkTS语言基础类库开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-arkts-utils.md) |
| 模块加载 | [ArkTS语言模块化加载异常常见问题](../../docs/zh-cn/application-dev/faqs/faqs-arkts-module.md) |
| 包管理 | [包管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-bundle-management.md) |
| 资源管理 | [资源管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-globalization.md) |
| 事件通知 | [事件通知开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-event-notification.md) |
| 图形图像 | [图形图像开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-graphics.md) |
| 媒体开发 | [媒体开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-multimedia.md) |
| 权限管理 | [程序访问控制开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-ability-access-control.md) |
| 数据管理 | [数据管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-distributed-data-management.md) |
| 文件管理 | [文件管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-file-management.md) |
| 网络管理 | [网络管理开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-network-management.md) |
| DFX调试 | [DFX开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-dfx.md) |
| 传感器 | [泛Sensor服务开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-sensor.md) |
| 启动恢复 | [启动恢复开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-startup.md) |
| SDK使用 | [SDK使用常见问题](../../docs/zh-cn/application-dev/faqs/faqs-sdk.md) |
| NDK开发 | [NDK开发常见问题](../../docs/zh-cn/application-dev/faqs/faqs-ndk.md) |
| 三四方库 | [三四方库使用常见问题](../../docs/zh-cn/application-dev/faqs/faqs-third-fourth-party-library.md) |
| full-SDK编译 | [如何编译full-SDK](../../docs/zh-cn/application-dev/faqs/full-sdk-compile-guide.md) |
| full-SDK替换 | [如何替换full-SDK](../../docs/zh-cn/application-dev/faqs/full-sdk-switch-guide.md) |

## 统计信息
- 文档总数：30
- 核心概念：18
- 覆盖模块：应用模型、ArkUI、ArkTS、网络、数据、文件、媒体、窗口、权限、DFX、传感器、SDK、NDK等
