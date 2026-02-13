# Windowmanager 领域地图

## 领域概述

窗口管理模块是 OpenHarmony 提供的窗口管理服务，用于在同一块物理屏幕上提供多个应用界面显示、交互的机制。该模块支持应用窗口和系统窗口两种基本类型，包括主窗口、子窗口、全局悬浮窗等多种窗口类型，支持全屏、分屏、自由窗口等多种窗口模式，以及沉浸式布局、窗口旋转、启动页配置等丰富功能。

## 核心概念

- **窗口管理**：窗口模块用于在同一块物理屏幕上提供多个应用界面显示、交互的机制
- **WindowStage**：窗口阶段管理器，用于管理应用主窗口的生命周期
- **应用窗口**：应用显示相关的窗口，包括主窗口和子窗口
- **系统窗口**：系统特定功能的窗口，如音量条、壁纸、通知栏、状态栏、导航栏等
- **主窗口**：应用主窗口，用于显示应用主界面
- **子窗口**：应用的辅助窗口，如弹窗、悬浮窗等
- **全局悬浮窗**：特殊的辅助窗口，可在应用退至后台后仍然在前台显示
- **沉浸式布局**：让应用界面聚焦内容，减少无关元素干扰的窗口状态
- **窗口模式**：应用主窗口启动时的显示方式，包括全屏、分屏、自由窗口
- **自由窗口**：允许用户在同一屏幕上以自由大小、位置显示的窗口状态
- **启动页**：应用冷启动时显示的首个页面，承载应用展示品牌特性
- **窗口旋转**：窗口方向和屏幕方向的配置与切换

## 文档索引

### 基础文档

1. [窗口开发概述](../../docs/zh-cn/application-dev/windowmanager/window-overview.md)

### 核心功能

2. [管理应用窗口（Stage模型）](../../docs/zh-cn/application-dev/windowmanager/application-window-stage.md)
3. [管理应用窗口（FA模型）](../../docs/zh-cn/application-dev/windowmanager/application-window-fa.md)
4. [管理应用窗口（原子化服务）](../../docs/zh-cn/application-dev/windowmanager/application-window-as.md)
5. [窗口旋转](../../docs/zh-cn/application-dev/windowmanager/window-rotation.md)

### 配置功能

6. [窗口元数据配置](../../docs/zh-cn/application-dev/windowmanager/window-config-m.md)
7. [配置应用启动页](../../docs/zh-cn/application-dev/windowmanager/launch-page-config.md)
8. [应用启动页简介](../../docs/zh-cn/application-dev/windowmanager/launch-page-overview.md)
9. [启动页资源分类配置](../../docs/zh-cn/application-dev/windowmanager/launch-page-resource-config.md)

### 高级功能

10. [窗口开发常见问题](../../docs/zh-cn/application-dev/windowmanager/window-faqs.md)
11. [使用WindowManager管理多模输入事件（C/C++）](../../docs/zh-cn/application-dev/windowmanager/native-window-event-filter.md)
12. [管理系统窗口 (仅Stage模型支持) (仅对系统应用开放)](../../docs/zh-cn/application-dev/windowmanager/system-window-stage-sys.md)

## 学习路径

1. [窗口开发概述](../../docs/zh-cn/application-dev/windowmanager/window-overview.md) - 了解窗口模块的整体架构和基本概念
2. [管理应用窗口（Stage模型）](../../docs/zh-cn/application-dev/windowmanager/application-window-stage.md) - 学习如何在Stage模型下管理应用窗口
3. [管理应用窗口（FA模型）](../../docs/zh-cn/application-dev/windowmanager/application-window-fa.md) - 学习如何在FA模型下管理应用窗口
4. [管理应用窗口（原子化服务）](../../docs/zh-cn/application-dev/windowmanager/application-window-as.md) - 学习如何在原子化服务下管理应用窗口
5. [窗口旋转](../../docs/zh-cn/application-dev/windowmanager/window-rotation.md) - 学习窗口旋转的相关概念和实现方式
6. [窗口元数据配置](../../docs/zh-cn/application-dev/windowmanager/window-config-m.md) - 学习如何配置窗口元数据
7. [配置应用启动页](../../docs/zh-cn/application-dev/windowmanager/launch-page-config.md) - 学习如何配置应用启动页
8. [应用启动页简介](../../docs/zh-cn/application-dev/windowmanager/launch-page-overview.md) - 了解启动页的概念和展示场景
9. [启动页资源分类配置](../../docs/zh-cn/application-dev/windowmanager/launch-page-resource-config.md) - 学习如何配置启动页资源分类
10. [窗口开发常见问题](../../docs/zh-cn/application-dev/windowmanager/window-faqs.md) - 学习窗口开发的常见问题和解决方案
11. [使用WindowManager管理多模输入事件（C/C++）](../../docs/zh-cn/application-dev/windowmanager/native-window-event-filter.md) - 学习如何使用WindowManager管理多模输入事件
12. [管理系统窗口 (仅Stage模型支持) (仅对系统应用开放)](../../docs/zh-cn/application-dev/windowmanager/system-window-stage-sys.md) - 学习如何管理系统窗口

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| 窗口开发概述 | [窗口开发概述](../../docs/zh-cn/application-dev/windowmanager/window-overview.md) |
| 管理应用窗口（Stage模型） | [管理应用窗口（Stage模型）](../../docs/zh-cn/application-dev/windowmanager/application-window-stage.md) |
| 管理应用窗口（FA模型） | [管理应用窗口（FA模型）](../../docs/zh-cn/application-dev/windowmanager/application-window-fa.md) |
| 管理应用窗口（原子化服务） | [管理应用窗口（原子化服务）](../../docs/zh-cn/application-dev/windowmanager/application-window-as.md) |
| 窗口旋转 | [窗口旋转](../../docs/zh-cn/application-dev/windowmanager/window-rotation.md) |
| 窗口元数据配置 | [窗口元数据配置](../../docs/zh-cn/application-dev/windowmanager/window-config-m.md) |
| 配置应用启动页 | [配置应用启动页](../../docs/zh-cn/application-dev/windowmanager/launch-page-config.md) |
| 应用启动页简介 | [应用启动页简介](../../docs/zh-cn/application-dev/windowmanager/launch-page-overview.md) |
| 启动页资源分类配置 | [启动页资源分类配置](../../docs/zh-cn/application-dev/windowmanager/launch-page-resource-config.md) |
| 窗口开发常见问题 | [窗口开发常见问题](../../docs/zh-cn/application-dev/windowmanager/window-faqs.md) |
| 使用WindowManager管理多模输入事件（C/C++） | [使用WindowManager管理多模输入事件（C/C++）](../../docs/zh-cn/application-dev/windowmanager/native-window-event-filter.md) |
| 管理系统窗口 (仅Stage模型支持) | [管理系统窗口 (仅Stage模型支持) (仅对系统应用开放)](../../docs/zh-cn/application-dev/windowmanager/system-window-stage-sys.md) |

## 统计信息

- 文档总数：14
- 核心概念：8