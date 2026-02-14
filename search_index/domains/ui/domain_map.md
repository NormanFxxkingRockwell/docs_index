# UI 领域地图

## 领域概述

UI（方舟UI框架）为应用的UI开发提供了完整的基础设施，包括ArkTS声明式开发范式和兼容JS的类Web开发范式两种开发方式。涵盖ArkTS语言、布局、组件、页面路由和组件导航、图形、动画、交互事件、状态管理、渲染控制、自定义能力、弹出框、菜单、气泡提示、NDK构建UI等功能。支持 ArkTS 和 C/C++ 两种开发语言，部分功能仅对系统应用开放。

## 核心概念

- **ArkTS声明式开发范式**：基于TypeScript声明式UI语法扩展而来的ArkTS语言，从组件、动画和状态管理三个维度提供UI绘制能力。
- **状态管理**：通过功能不同的装饰器给开发者提供了清晰的页面更新渲染流程和管道，包括V1和V2两个版本，V2是V1的增强版本。
- **布局开发**：定义了组件在界面中的位置和大小，包括线性布局、层叠布局、弹性布局、相对布局、栅格布局等多种布局方式。
- **组件开发**：UI构建与显示的最小单位，包括系统组件和自定义组件，支持组合和复用。
- **动画效果**：包括属性动画、转场动画、粒子动画、组件动画、动画曲线、动画衔接、动画效果和帧动画等。
- **转场动画**：为组件在出现和消失时添加过渡动画，包括出现/消失转场、模态转场、共享元素转场、旋转屏动画、页面转场动画和导航转场。
- **交互事件**：包括触摸事件、鼠标事件、键盘按键事件、焦点事件等通用事件，以及基于通用事件进行进一步识别的手势事件。
- **页面路由**：包括组件导航（Navigation）和页面路由（@ohos.router）两种页面跳转能力。
- **自定义能力**：包括自定义组合、自定义扩展、自定义节点和自定义渲染四个层次，用于实现不同场景的应用开发。
- **弹出框**：包括自定义弹出框和固定样式弹出框，用于临时展示用户需关注的信息或待处理的操作。

## 文档索引

### 基础文档

1. [ArkUI（方舟UI框架）](../../docs/zh-cn/application-dev/ui/Readme-CN.md)
2. [ArkUI简介](../../docs/zh-cn/application-dev/ui/arkui-overview.md)

### ArkTS声明式开发范式

3. [UI开发（ArkTS声明式开发范式）概述](../../docs/zh-cn/application-dev/ui/arkts-ui-development-overview.md)
4. [状态管理概述](../../docs/zh-cn/application-dev/ui/state-management/arkts-state-management-overview.md)
5. [AppStorage：应用全局的UI状态存储](../../docs/zh-cn/application-dev/ui/state-management/arkts-appstorage.md)
6. [@Prop装饰器：父子单向同步](../../docs/zh-cn/application-dev/ui/state-management/arkts-prop.md)

### 布局开发

7. [布局概述](../../docs/zh-cn/application-dev/ui/arkts-layout-development-overview.md)

### 组件开发

8. [按钮 (Button)](../../docs/zh-cn/application-dev/ui/arkts-common-components-button.md)
9. [文本显示 (Text/Span)](../../docs/zh-cn/application-dev/ui/arkts-common-components-text-display.md)
10. [基础自定义弹出框 (CustomDialog)](../../docs/zh-cn/application-dev/ui/arkts-common-components-custom-dialog.md)
11. [进度条 (Progress)](../../docs/zh-cn/application-dev/ui/arkts-common-components-progress-indicator.md)
12. [富文本编辑（RichEditor）](../../docs/zh-cn/application-dev/ui/arkts-common-components-richeditor.md)

### 动画效果

13. [动画概述](../../docs/zh-cn/application-dev/ui/arkts-animation.md)
14. [实现属性动画](../../docs/zh-cn/application-dev/ui/arkts-attribute-animation-apis.md)
15. [帧动画（ohos.animator）](../../docs/zh-cn/application-dev/ui/arkts-animator.md)
16. [动画衔接](../../docs/zh-cn/application-dev/ui/arkts-animation-smoothing.md)
17. [动画曲线概述](../../docs/zh-cn/application-dev/ui/arkts-curve-overview.md)
18. [模糊](../../docs/zh-cn/application-dev/ui/arkts-blur-effect.md)
19. [色彩](../../docs/zh-cn/application-dev/ui/arkts-color-effect.md)
20. [阴影](../../docs/zh-cn/application-dev/ui/arkts-shadow-effect.md)
21. [形状裁剪（clipShape）](../../docs/zh-cn/application-dev/ui/arkts-clip-shape.md)

### 转场动画

22. [转场动画概述](../../docs/zh-cn/application-dev/ui/arkts-transition-overview.md)
23. [Navigation转场动画](../../docs/zh-cn/application-dev/ui/arkts-navigation-animation.md)
24. [模态转场](../../docs/zh-cn/application-dev/ui/arkts-modal-transition.md)

### 交互事件

25. [绑定手势方法](../../docs/zh-cn/application-dev/ui/arkts-gesture-events-binding.md)

### 页面路由

26. [组件导航和页面路由概述](../../docs/zh-cn/application-dev/ui/arkts-navigation-introduction.md)

### 自定义能力

27. [自定义能力概述](../../docs/zh-cn/application-dev/ui/arkts-user-defined.md)

### 弹出框

28. [弹出框概述](../../docs/zh-cn/application-dev/ui/arkts-base-dialog-overview.md)
29. [即时反馈（Toast）](../../docs/zh-cn/application-dev/ui/arkts-create-toast.md)
30. [菜单概述](../../docs/zh-cn/application-dev/ui/arkts-menu-overview.md)
31. [气泡提示概述](../../docs/zh-cn/application-dev/ui/arkts-popup-overview.md)

### 渲染控制

32. [渲染控制概述](../../docs/zh-cn/application-dev/ui/rendering-control/arkts-rendering-control-overview.md)

### NDK构建UI

33. [基于NDK构建UI概述](../../docs/zh-cn/application-dev/ui/ndk-build-ui-overview.md)

### 类Web开发范式

34. [UI开发 (兼容JS的类Web开发范式)概述](../../docs/zh-cn/application-dev/ui/ui-js-overview.md)
35. [text开发指导](../../docs/zh-cn/application-dev/ui/ui-js-components-text.md)
36. [toolbar开发指导](../../docs/zh-cn/application-dev/ui/ui-js-components-toolbar.md)
37. [swiper开发指导](../../docs/zh-cn/application-dev/ui/ui-js-components-swiper.md)
38. [switch开发指导](../../docs/zh-cn/application-dev/ui/ui-js-components-switch.md)

### UI性能优化

39. [UI高性能开发](../../docs/zh-cn/application-dev/ui/ui-performance-overview.md)

### 稳定性分析

40. [UI稳定性故障分析概述](../../docs/zh-cn/application-dev/ui/arkts-stability-guide.md)

## 学习路径

1. [ArkUI简介](../../docs/zh-cn/application-dev/ui/arkui-overview.md) - 了解ArkUI框架的基本概念和两种开发范式
2. [UI开发（ArkTS声明式开发范式）概述](../../docs/zh-cn/application-dev/ui/arkts-ui-development-overview.md) - 掌握ArkTS声明式开发范式的核心概念
3. [状态管理概述](../../docs/zh-cn/application-dev/ui/state-management/arkts-state-management-overview.md) - 学习状态管理机制，理解V1和V2版本差异
4. [布局概述](../../docs/zh-cn/application-dev/ui/arkts-layout-development-overview.md) - 掌握布局开发的基本流程和布局容器
5. [动画概述](../../docs/zh-cn/application-dev/ui/arkts-animation.md) - 学习动画的基本概念和分类
6. [组件导航和页面路由概述](../../docs/zh-cn/application-dev/ui/arkts-navigation-introduction.md) - 学习页面跳转能力
7. [自定义能力概述](../../docs/zh-cn/application-dev/ui/arkts-user-defined.md) - 了解自定义能力的四个层次
8. [UI高性能开发](../../docs/zh-cn/application-dev/ui/ui-performance-overview.md) - 学习UI性能优化的核心思路

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| ArkTS声明式开发范式 | [UI开发（ArkTS声明式开发范式）概述](../../docs/zh-cn/application-dev/ui/arkts-ui-development-overview.md) |
| 状态管理 | [状态管理概述](../../docs/zh-cn/application-dev/ui/state-management/arkts-state-management-overview.md) |
| AppStorage | [AppStorage：应用全局的UI状态存储](../../docs/zh-cn/application-dev/ui/state-management/arkts-appstorage.md) |
| @Prop装饰器 | [@Prop装饰器：父子单向同步](../../docs/zh-cn/application-dev/ui/state-management/arkts-prop.md) |
| 布局开发 | [布局概述](../../docs/zh-cn/application-dev/ui/arkts-layout-development-overview.md) |
| 按钮组件 | [按钮 (Button)](../../docs/zh-cn/application-dev/ui/arkts-common-components-button.md) |
| 文本组件 | [文本显示 (Text/Span)](../../docs/zh-cn/application-dev/ui/arkts-common-components-text-display.md) |
| 自定义弹出框 | [基础自定义弹出框 (CustomDialog)](../../docs/zh-cn/application-dev/ui/arkts-common-components-custom-dialog.md) |
| 属性动画 | [实现属性动画](../../docs/zh-cn/application-dev/ui/arkts-attribute-animation-apis.md) |
| 帧动画 | [动画概述](../../docs/zh-cn/application-dev/ui/arkts-animation.md) |
| 帧动画 | [帧动画（ohos.animator）](../../docs/zh-cn/application-dev/ui/arkts-animator.md) |
| 转场动画 | [转场动画概述](../../docs/zh-cn/application-dev/ui/arkts-transition-overview.md) |
| Navigation转场 | [Navigation转场动画](../../docs/zh-cn/application-dev/ui/arkts-navigation-animation.md) |
| 模态转场 | [模态转场](../../docs/zh-cn/application-dev/ui/arkts-modal-transition.md) |
| 手势事件 | [绑定手势方法](../../docs/zh-cn/application-dev/ui/arkts-gesture-events-binding.md) |
| 页面路由 | [组件导航和页面路由概述](../../docs/zh-cn/application-dev/ui/arkts-navigation-introduction.md) |
| 自定义能力 | [自定义能力概述](../../docs/zh-cn/application-dev/ui/arkts-user-defined.md) |
| 弹出框 | [弹出框概述](../../docs/zh-cn/application-dev/ui/arkts-base-dialog-overview.md) |
| 即时反馈 | [即时反馈（Toast）](../../docs/zh-cn/application-dev/ui/arkts-create-toast.md) |
| 菜单 | [菜单概述](../../docs/zh-cn/application-dev/ui/arkts-menu-overview.md) |
| 气泡提示 | [气泡提示概述](../../docs/zh-cn/application-dev/ui/arkts-popup-overview.md) |
| 渲染控制 | [渲染控制概述](../../docs/zh-cn/application-dev/ui/rendering-control/arkts-rendering-control-overview.md) |
| NDK构建UI | [基于NDK构建UI概述](../../docs/zh-cn/application-dev/ui/ndk-build-ui-overview.md) |
| 类Web开发范式 | [UI开发 (兼容JS的类Web开发范式)概述](../../docs/zh-cn/application-dev/ui/ui-js-overview.md) |
| UI性能优化 | [UI高性能开发](../../docs/zh-cn/application-dev/ui/ui-performance-overview.md) |

## 统计信息

- 文档总数：311
- 核心概念：7
