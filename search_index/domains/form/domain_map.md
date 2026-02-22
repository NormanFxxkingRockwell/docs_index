# Form 领域地图

## 领域概述
Form Kit提供卡片开发服务，支持将应用的重要信息或常用操作抽取到服务卡片上，通过将卡片添加到桌面上，以达到信息展示、服务直达的便捷体验效果。支持ArkTS卡片和JS卡片两种开发方式，包括动态卡片、静态卡片和互动卡片三种类型。

## 核心概念
- **ArkTS卡片**：使用ArkTS声明式开发范式语言开发的卡片，统一了卡片和应用页面的开发范式
- **JS卡片**：使用类Web范式（HML+CSS+JSON）开发页面的卡片
- **动态卡片**：支持UI组件和布局能力、通用事件能力和自定义动效能力
- **静态卡片**：仅支持UI组件和布局能力，通过FormLink组件跳转
- **互动卡片**：在动态卡片基础上，额外支持破框动效能力
- **卡片生命周期**：FormExtensionAbility的生命周期回调函数
- **卡片刷新**：卡片内容的主动刷新和被动刷新机制
- **卡片事件**：router、message和call三种事件类型
- **卡片配置**：FormExtensionAbility配置和卡片配置

## 文档索引

### 基础文档
1. [Form Kit简介](../../docs/zh-cn/application-dev/form/formkit-overview.md)
2. [ArkTS卡片概述](../../docs/zh-cn/application-dev/form/arkts-form-overview.md)
3. [创建ArkTS卡片](../../docs/zh-cn/application-dev/form/arkts-ui-widget-creation.md)
4. [配置ArkTS卡片的配置文件](../../docs/zh-cn/application-dev/form/arkts-ui-widget-configuration.md)
5. [JS卡片概述](../../docs/zh-cn/application-dev/form/js-ui-widget-overview.md)

### 核心功能
6. [管理ArkTS卡片生命周期](../../docs/zh-cn/application-dev/form/arkts-ui-widget-lifecycle.md)
7. [ArkTS卡片进程模型](../../docs/zh-cn/application-dev/form/arkts-ui-widget-process.md)
8. [ArkTS卡片界面开发概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-page-overview.md)
9. [ArkTS卡片为组件添加动效](../../docs/zh-cn/application-dev/form/arkts-ui-widget-page-animation.md)
10. [ArkTS卡片使用画布组件绘制自定义图形](../../docs/zh-cn/application-dev/form/arkts-ui-widget-page-custom-drawing.md)
11. [ArkTS卡片界面适配深浅色模式](../../docs/zh-cn/application-dev/form/arkts-ui-widget-dark-light-color-adapt.md)
12. [ArkTS卡片使用自定义字体](../../docs/zh-cn/application-dev/form/arkts-ui-widget-load-custom-font.md)

### 卡片刷新
13. [ArkTS卡片页面刷新概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-interaction-overview.md)
14. [ArkTS卡片主动刷新](../../docs/zh-cn/application-dev/form/arkts-ui-widget-active-refresh.md)
15. [ArkTS卡片被动刷新](../../docs/zh-cn/application-dev/form/arkts-ui-widget-passive-refresh.md)
16. [刷新本地图片和网络图片](../../docs/zh-cn/application-dev/form/arkts-ui-widget-image-update.md)
17. [根据卡片状态刷新不同内容](../../docs/zh-cn/application-dev/form/arkts-ui-widget-update-by-status.md)

### 卡片交互
18. [ArkTS卡片页面交互概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-overview.md)
19. [卡片跳转到应用页面（router事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-router.md)
20. [卡片拉起应用UIAbility到后台（call事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-call.md)
21. [卡片传递消息给应用（message事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-formextensionability.md)
22. [通过router或call事件刷新卡片内容](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-uiability.md)

### 卡片编辑
23. [ArkTS卡片编辑概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-formeditextensionability-overview.md)
24. [卡片编辑开发指导](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-formeditextensionability.md)

### 应用内功能
25. [应用内拉起卡片管理加桌](../../docs/zh-cn/application-dev/form/arkts-ui-widget-open-formmanager.md)

### 互动卡片
26. [互动卡片概述](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-overview.md)
27. [趣味交互类型互动卡片开发指导](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-funinteraction-development.md)
28. [场景动效类型互动卡片概述](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-sceneanimation-overview.md)
29. [场景动效类型互动卡片开发指导](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-sceneanimation-development.md)
30. [场景动效类型互动卡片开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-sceneanimation-development-sys.md)

### 系统应用扩展
31. [ArkTS卡片使用方开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/widget-host-development-guide-sys.md)
32. [卡片代理刷新（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-update-by-proxy-sys.md)
33. [ArkTS卡片玻璃材质适配（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-visual-effect-sys.md)
34. [ArkTS卡片新材质适配（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-effect-sys.md)

### JS卡片开发
35. [JS卡片开发指导（Stage模型）](../../docs/zh-cn/application-dev/form/js-ui-widget-development.md)
36. [JS卡片开发指导（FA模型）](../../docs/zh-cn/application-dev/form/widget-development-fa.md)

### 其他
37. [ArkTS卡片适配常见问题](../../docs/zh-cn/application-dev/form/arkts-ui-widget-adapt-faq.md)
38. [Form Kit（卡片开发服务）](../../docs/zh-cn/application-dev/form/Readme-CN.md)

## 学习路径
1. [Form Kit简介](../../docs/zh-cn/application-dev/form/formkit-overview.md) - 了解Form Kit的基本概念和架构
2. [ArkTS卡片概述](../../docs/zh-cn/application-dev/form/arkts-form-overview.md) - 了解ArkTS卡片的类型和特性
3. [创建ArkTS卡片](../../docs/zh-cn/application-dev/form/arkts-ui-widget-creation.md) - 学习创建卡片的方法
4. [配置ArkTS卡片的配置文件](../../docs/zh-cn/application-dev/form/arkts-ui-widget-configuration.md) - 学习配置卡片的方法
5. [管理ArkTS卡片生命周期](../../docs/zh-cn/application-dev/form/arkts-ui-widget-lifecycle.md) - 学习卡片生命周期管理
6. [ArkTS卡片页面开发概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-page-overview.md) - 学习卡片页面开发
7. [ArkTS卡片页面刷新概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-interaction-overview.md) - 学习卡片刷新机制
8. [ArkTS卡片页面交互概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-overview.md) - 学习卡片交互机制
9. [互动卡片概述](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-overview.md) - 学习互动卡片特性

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| ArkTS卡片概述 | [ArkTS卡片概述](../../docs/zh-cn/application-dev/form/arkts-form-overview.md) |
| 创建ArkTS卡片 | [创建ArkTS卡片](../../docs/zh-cn/application-dev/form/arkts-ui-widget-creation.md) |
| 配置卡片文件 | [配置ArkTS卡片的配置文件](../../docs/zh-cn/application-dev/form/arkts-ui-widget-configuration.md) |
| 卡片生命周期 | [管理ArkTS卡片生命周期](../../docs/zh-cn/application-dev/form/arkts-ui-widget-lifecycle.md) |
| 卡片页面开发 | [ArkTS卡片界面开发概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-page-overview.md) |
| 卡片刷新 | [ArkTS卡片页面刷新概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-interaction-overview.md) |
| 卡片交互 | [ArkTS卡片页面交互概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-overview.md) |
| 互动卡片 | [互动卡片概述](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-overview.md) |
| JS卡片概述 | [JS卡片概述](../../docs/zh-cn/application-dev/form/js-ui-widget-overview.md) |

## 统计信息
- 文档总数：38
- 核心概念：9