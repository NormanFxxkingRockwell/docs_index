# Form 领域地图

## 领域概述
Form Kit（卡片开发服务）提供了一种在桌面上嵌入显示应用信息的开发框架和API，支持ArkTS卡片和JS卡片两种开发方式。ArkTS卡片支持声明式开发范式、动效能力、自定义绘制和逻辑代码运行，分为动态卡片、静态卡片和互动卡片三种类型。支持卡片主动刷新、被动刷新、页面交互、卡片编辑、互动卡片等功能。

## 核心概念
- **ArkTS卡片**：基于ArkTS声明式开发范式语言开发的卡片
- **JS卡片**：使用类Web范式（HML+CSS+JSON）开发页面的卡片
- **动态卡片**：支持UI组件和布局能力、通用事件能力和自定义动效能力
- **静态卡片**：仅支持UI组件和布局能力
- **互动卡片**：在动态卡片基础上，额外支持破框动效能力
- **卡片刷新**：包括主动刷新、被动刷新（定时刷新、定点刷新、条件刷新）
- **卡片交互**：通过router、message、call三种类型的事件实现页面交互
- **FormExtensionAbility**：卡片扩展模块，提供卡片创建、销毁、刷新等生命周期回调
- **postCardAction**：动态卡片用于卡片内部和提供方应用间的交互
- **卡片生命周期**：包括onAddForm、onUpdateForm、onFormEvent、onRemoveForm等回调

## 文档索引

### 基础文档
1. [Form Kit简介](../../docsarkit-overview.md)
2. [ArkTS卡片概述](../../docs/zh-cn/application-dev/form/arkts-form-overview.md)
3. [JS卡片概述](../../docs/zh-cn/application-dev/form/js-ui-widget-overview.md)

### ArkTS卡片开发
4. [创建ArkTS卡片](../../docs/zh-cn/application-dev/form/arkts-ui-widget-creation.md)
5. [配置ArkTS卡片的配置文件](../../docs/zh-cn/application-dev/form/arkts-ui-widget-configuration.md)
6. [管理ArkTS卡片生命周期](../../docs/zh-cn/application-dev/form/arkts-ui-widget-lifecycle.md)
7. [ArkTS卡片进程模型](../../docs/zh-cn/application-dev/form/arkts-ui-widget-process.md)

### ArkTS卡片UI界面开发
8. [ArkTS卡片界面开发概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-page-overview.md)
9. [ArkTS卡片为组件添加动效](../../docs/zh-cn/application-dev/form/arkts-ui-widget-page-animation.md)
10. [ArkTS卡片使用画布组件绘制自定义图形](../../docs/zh-cn/application-dev/form/arkts-ui-widget-page-custom-drawing.md)
11. [ArkTS卡片界面适配深浅色模式](../../docs/zh-cn/application-dev/form/arkts-ui-widget-dark-light-color-adapt.md)
12. [ArkTS卡片使用自定义字体](../../docs/zh-cn/application-dev/form/arkts-ui-widget-load-custom-font.md)
13. [ArkTS卡片玻璃材质适配（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-visual-effect-sys.md)
14. [ArkTS卡片新材质适配（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-effect-sys.md)

### ArkTS卡片页面刷新
15. [ArkTS卡片页面刷新概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-interaction-overview.md)
16. [ArkTS卡片主动刷新](../../docs/zh-cn/application-dev/form/arkts-ui-widget-active-refresh.md)
17. [ArkTS卡片被动刷新](../../docs/zh-cn/application-dev/form/arkts-ui-widget-passive-refresh.md)
18. [卡片代理刷新（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-update-by-proxy-sys.md)
19. [刷新本地图片和网络图片](../../docs/zh-cn/application-dev/form/arkts-ui-widget-image-update.md)
20. [根据卡片状态刷新不同内容](../../docs/zh-cn/application-dev/form/arkts-ui-widget-update-by-status.md)

### ArkTS卡片页面交互
21. [ArkTS卡片页面交互概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-overview.md)
22. [卡片跳转到应用页面（router事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-router.md)
23. [卡片拉起应用UIAbility到后台（call事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-call.md)
24. [卡片传递消息给应用（message事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-formextensionability.md)
25. [通过router或call事件刷新卡片内容](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-uiability.md)

### ArkTS卡片编辑
26. [ArkTS卡片编辑概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-formeditextensionability-overview.md)
27. [卡片编辑开发指导](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-formeditextensionability.md)

### 应用内请求卡片加桌
28. [应用内拉起卡片管理加桌](../../docs/zh-cn/application-dev/form/arkts-ui-widget-open-formmanager.md)

### 互动卡片开发
29. [互动卡片概述](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-overview.md)
30. [趣味交互类型互动卡片开发指导](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-funinteraction-development.md)
31. [场景动效类型互动卡片概述](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-sceneanimation-overview.md)
32. [场景动效类型互动卡片开发指导](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-sceneanimation-development.md)
33. [场景动效类型互动卡片开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-sceneanimation-development-sys.md)

### ArkTS
34. [ArkTS卡片适配常见问题](../../docs/zh-cn/application-dev/form/arkts-ui-widget-adapt-faq.md)

### JS卡片开发
35. [JS卡片开发指导（Stage模型）](../../docs/zh-cn/application-dev/form/js-ui-widget-development.md)
36. [JS卡片开发指导（FA模型）](../../docs/zh-cn/application-dev/form/widget-development-fa.md)

### 系统应用专用
37. [ArkTS卡片使用方开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/form/widget-host-development-guide-sys.md)

## 学习路径
1. [Form Kit简介](../../docs/zh-cn/application-dev/form/formkit-overview.md) - 了解Form Kit的基本概念和架构
2. [ArkTS卡片概述](../../docs/zh-cn/application-dev/form/arkts-form-overview.md) - 了解ArkTS卡片的三种类型和特性
3. [创建ArkTS卡片](../../docs/zh-cn/application-dev/form/arkts-ui-widget-creation.md) - 学习如何创建卡片
4. [配置ArkTS卡片的配置文件](../../docs/zh-cn/application-dev/form/arkts-ui-widget-configuration.md) - 学习配置卡片
5. [管理ArkTS卡片生命周期](../../docs/zh-cn/application-dev/form/arkts-ui-widget-lifecycle.md) - 学习生命周期管理
6. [ArkTS卡片页面刷新概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-interaction-overview.md) - 学习卡片刷新机制
7. [ArkTS卡片主动刷新](../../docs/zh-cn/application-dev/form/arkts-ui-widget-active-refresh.md) - 学习主动刷新
8. [ArkTS卡片被动刷新](../../docs/zh-cn/application-dev/form/arkts-ui-widget-passive-refresh.md) - 学习被动刷新
9. [ArkTS卡片页面交互概述](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-overview.md) - 学习页面交互
10. [互动卡片概述](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-overview.md) - 学习互动卡片

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| Form Kit简介 | [Form Kit简介](../../docs/zh-cn/application-dev/form/formkit-overview.md) |
| ArkTS卡片概述 | [ArkTS卡片概述](../../docs/zh-cn/application-dev/form/arkts-form-overview.md) |
| 创建卡片 | [创建ArkTS卡片](../../docs/zh-cn/application-dev/form/arkts-ui-widget-creation.md) |
| 配置文件 | [配置ArkTS卡片的配置文件](../../docs/zh-cn/application-dev/form/arkts-ui-widget-configuration.md) |
| 生命周期 | [管理ArkTS卡片生命周期](../../docs/zh-cn/application-dev/form/arkts-ui-widget-lifecycle.md) |
| 主动刷新 | [ArkTS卡片主动刷新](../../docs/zh-cn/application-dev/form/arkts-ui-widget-active-refresh.md) |
| 被动刷新 | [ArkTS卡片被动刷新](../../docs/zh-cn/application-dev/form/arkts-ui-widget-passive-refresh.md) |
| router事件 | [卡片跳转到应用页面（router事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-router.md) |
| call事件 | [卡片拉起应用UIAbility到后台（call事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-call.md) |
| message事件 | [卡片传递消息给应用（message事件）](../../docs/zh-cn/application-dev/form/arkts-ui-widget-event-formextensionability.md) |
| 互动卡片 | [互动卡片概述](../../docs/zh-cn/application-dev/form/arkts-ui-liveform-overview.md) |
| JS卡片 | [JS卡片开发指导（Stage模型）](../../docs/zh-cn/application-dev/form/js-ui-widget-development.md) |

## 统计信息
- 文档总数：38
- 核心概念：10
