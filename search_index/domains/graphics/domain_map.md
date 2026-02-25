# Graphics 领域地图

## Graphics 领域概述

Graphics领域涵盖ArkGraphics 2D方舟2D图形服务的完整开发指南，提供2D图形绘制、文本处理、图像处理等核心能力。主要功能包括图形绘制与显示（Canvas画布操作、绘制效果、图元绘制）、文本开发（字体管理、文本测量、文本绘制）、可变帧率能力定制、离线图像处理、Native API开发指导（NativeWindow、NativeBuffer、NativeImage、NativeVsync、NativeFence）等。支持ArkTS和C/C++两种开发语言，适用于应用开发、游戏开发、自绘制UI框架对接等多种场景。

## 核心概念

- 图形绘制
- Canvas画布
- 文本开发
- 字体管理
- 绘制效果
- 可变帧率
- Native API
- 图像处理
- 图元绘制
- 文本测量

## 文档索引

### 基�与其他

- [ArkGraphics 2D简介](../../docs/zh-cn/application-dev/graphics/arkgraphics2D-introduction.md)
- [ArkGraphics 2D（方舟2D图形服务）](../../docs/zh-cn/application-dev/graphics/Readme-CN.md)
- [图形开发术语](../../docs/zh-cn/application-dev/graphics/graphic-term.md)
- [过度绘制调试使用指导](../../docs/zh-cn/application-dev/graphics/overdraw-dfx-guidelines.md)

### 图形绘制

#### 概述
- [图形绘制与显示开发概述](../../docs/zh-cn/application-dev/graphics/graphic-drawing-overview.md)
- [图元绘制概述](../../docs/zh-cn/application-dev/graphics/primitive-drawing-overview.md)

#### Canvas操作
- [画布的获取与绘制结果的显示（ArkTS）](../../docs/zh-cn/application-dev/graphics/canvas-get-result-draw-arkts.md)
- [画布的获取与绘制结果的显示（C/C++）](../../docs/zh-cn/application-dev/graphics/canvas-get-result-draw-c.md)
- [画布操作及状态处理（ArkTS）](../../docs/zh-cn/application-dev/graphics/canvas-operation-state-arkts.md)
- [画布操作及状态处理（C/C++）](../../docs/zh-cn/application-dev/graphics/canvas-operation-state-c.md)

#### 绘制效果
- [绘制效果概述](../../docs/zh-cn/application-dev/graphics/drawing-effect-overview.md)
- [基础绘制效果（ArkTS）](../../docs/zh-cn/application-dev/graphics/basic-drawing-effect-arkts.md)
- [基础绘制效果（C/C++）](../../docs/zh-cn/application-dev/graphics/basic-drawing-effect-c.md)
- [复杂绘制效果（ArkTS）](../../docs/zh-cn/application-dev/graphics/complex-drawing-effect-arkts.md)
- [复杂绘制效果（C/C++）](../../docs/zh-cn/application-dev/graphics/complex-drawing-effect-c.md)

#### 图元绘制
- [几何形状绘制（ArkTS）](../../docs/zh-cn/application-dev/graphics/geometric-shape-drawing-arkts.md)
- [几何形状绘制（C/C++）](../../docs/zh-cn/application-dev/graphics/geometric-shape-drawing-c.md)
- [图片绘制（ArkTS）](../../docs/zh-cn/application-dev/graphics/pixelmap-drawing-arkts.md)
- [图片绘制（C/C++）](../../docs/zh-cn/application-dev/graphics/pixelmap-drawing-c.md)

### 文本开发

#### 概述
- [文本开发概述](../../docs/zh-cn/application-dev/graphics/text-overview.md)

#### 简单文本绘制
- [简单文本绘制与显示（ArkTS）](../../docs/zh-cn/application-dev/graphics/simple-text-arkts.md)
- [简单文本绘制与显示（C/C++）](../../docs/zh-cn/application-dev/graphics/simple-text-c.md)

#### 复杂文本绘制
- [复杂文本绘制与显示（ArkTS）](../../docs/zh-cn/application-dev/graphics/complex-text-arkts.md)
- [复杂文本绘制与显示（C/C++）](../../docs/zh-cn/application-dev/graphics/complex-text-c.md)
- [自定义文本绘制与显示（C/C++）](../../docs/zh-cn/application-dev/graphics/text-custom-c.md)

#### 字体管理
- [系统字体的信息获取和使用（ArkTS）](../../docs/zh-cn/application-dev/graphics/system-font-arkts.md)
- [系统字体的信息获取和使用（C/C++）](../../docs/zh-cn/application-dev/graphics/system-font-c.md)
- [自定义字体的注册和使用（ArkTS）](../../docs/zh-cn/application-dev/graphics/custom-font-arkts.md)
- [自定义字体的注册和使用（C/C++）](../../docs/zh-cn/application-dev/graphics/custom-font-c.md)
- [使用主题字体（ArkTS）](../../docs/zh-cn/application-dev/graphics/theme-font-arkts.md)
- [使用主题字体（C/C++）](../../docs/zh-cn/application-dev/graphics/theme-font-c.md)

#### 文本测量与字块
- [文本测量（ArkTS）](../../docs/zh-cn/application-dev/graphics/text-me-measure-arkts.md)
- [文本测量（C/C++）](../../docs/zh-cn/application-dev/graphics/text-measure-c.md)
- [字块绘制（ArkTS）](../../docs/zh-cn/application-dev/graphics/textblock-drawing-arkts.md)
- [字块绘制（C/C++）](../../docs/zh-cn/application-dev/graphics/textblock-drawing-c.md)

#### 常见问题
- [文本开发常见问题](../../docs/zh-cn/application-dev/graphics/text-faqs.md)

### 可变帧率

- [可变帧率简介](../../docs/zh-cn/application-dev/graphics/displaysync-overview.md)
- [请求UI绘制帧率](../../docs/zh-cn/application-dev/graphics/displaysync-ui.md)
- [请求动画绘制帧率](../../docs/zh-cn/application-dev/graphics/displaysync-animation.md)
- [请求自绘制内容绘制帧率](../../docs/zh-cn/application-dev/graphics/displaysync-xcomponent.md)
- [NativeDisplaySoloist开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/displaysoloist-native-guidelines.md)

### Native API

- [NativeBuffer开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-buffer-guidelines.md)
- [NativeWindow开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-window-guidelines.md)
- [NativeImage开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-image-guidelines.md)
- [NativeVSync开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-vsync-guidelines.md)
- [GPU/CPU内存访问同步操作开发指南 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-fence-guidelines.md)
- [添加图像效果（C/C++）](../../docs/zh-cn/application-dev/graphics/effectkit-filter-c.md)

## 学习路径

### 阶段一：基础入门

了解Graphics领域的基本概念和核心能力

1. [ArkGraphics 2D简介](../../docs/zh-cn/application-dev/graphics/arkgraphics2D-introduction.md)
2. [ArkGraphics 2D（方舟2D图形服务）](../../docs/zh-cn/application-dev/graphics/Readme-CN.md)
3. [图形开发术语](../../docs/zh-cn/application-dev/graphics/graphic-term.md)

### 阶段二：图形绘制基础

掌握Canvas画布操作和基础图形绘制

1. [图形绘制与显示开发概述](../../docs/zh-cn/application-dev/graphics/graphic-drawing-overview.md)
2. [画布的获取与绘制结果的显示（ArkTS）](../../docs/zh-cn/application-dev/graphics/canvas-get-result-draw-arkts.md)
3. [画布的获取与绘制结果的显示（C/C++）](../../docs/zh-cn/application-dev/graphics/canvas-get-result-draw-c.md)
4. [画布操作及状态处理（ArkTS）](../../docs/zh-cn/application-dev/graphics/canvas-operation-state-arkts.md)
5. [画布操作及状态处理（C/C++）](../../docs/zh-cn/application-dev/graphics/canvas-operation-state-c.md)
6. [图元绘制概述](../../docs/zh-cn/application-dev/graphics/primitive-drawing-overview.md)

### 阶段三：基础图元绘制

学习绘制各种几何形状和图片

1. [几何形状绘制（ArkTS）](../../docs/zh-cn/application-dev/graphics/geometric-shape-drawing-arkts.md)
2. [几何形状绘制（C/C++）](../../docs/zh-cn/application-dev/graphics/geometric-shape-drawing-c.md)
3. [图片绘制（ArkTS）](../../docs/zh-cn/application-dev/graphics/pixelmap-drawing-arkts.md)
4. [图片绘制（C/C++）](../../docs/zh-cn/application-dev/graphics/pixelmap-drawing-c.md)

### 阶段四：绘制效果

掌握基础和复杂的绘制效果

1. [绘制效果概述](../../docs/zh-cn/application-dev/graphics/drawing-effect-overview.md)
2. [基础绘制效果（ArkTS）](../../docs/zh-cn/application-dev/graphics/basic-drawing-effect-arkts.md)
3. [基础绘制效果（C/C++）](../../docs/zh-cn/application-dev/graphics/basic-drawing-effect-c.md)
4. [复杂绘制效果（ArkTS）](../../docs/zh-cn/application-dev/graphics/complex-drawing-effect-arkts.md)
5. [复杂绘制效果（C/C++）](../../docs/zh-cn/application-dev/graphics/complex-drawing-effect-c.md)

### 阶段五：文本开发基础

了解文本开发能力并进行简单文本绘制

1. [文本开发概述](../../docs/zh-cn/application-dev/graphics/text-overview.md)
2. [简单文本绘制与显示（ArkTS）](../../docs/zh-cn/application-dev/graphics/simple-text-arkts.md)
3. [简单文本绘制与显示（C/C++）](../../docs/zh-cn/application-dev/graphics/simple-text-c.md)

### 阶段六：字体管理

学习系统字体、自定义字体和主题字体的使用

1. [系统字体的信息获取和使用（ArkTS）](../../docs/zh-cn/application-dev/graphics/system-font-arkts.md)
2. [系统字体的信息获取和使用（C/C++）](../../docs/zh-cn/application-dev/graphics/system-font-c.md)
3. [自定义字体的注册和使用（ArkTS）](../../docs/zh-cn/application-dev/graphics/custom-font-arkts.md)
4. [自定义字体的注册和使用（C/C++）](../../docs/zh-cn/application-dev/graphics/custom-font-c.md)
5. [使用主题字体（ArkTS）](../../docs/zh-cn/application-dev/graphics/theme-font-arkts.md)
6. [使用主题字体（C/C++）](../../docs/zh-cn/application-dev/graphics/theme-font-c.md)

### 阶段七：文本测量与字块

掌握文本测量和字块绘制技术

1. [文本测量（ArkTS）](../../docs/zh-cn/application-dev/graphics/text-measure-arkts.md)
2. [文本测量（C/C++）](../../docs/zh-cn/application-dev/graphics/text-measure-c.md)
3. [字块绘制（ArkTS）](../../docs/zh-cn/application-dev/graphics/textblock-drawing-arkts.md)
4. [字块绘制（C/C++）](../../docs/zh-cn/application-dev/graphics/textblock-drawing-c.md)

### 阶段八：复杂文本绘制

学习多语言、多行、多样式等复杂文本绘制

1. [复杂文本绘制与显示（ArkTS）](../../docs/zh-cn/application-dev/graphics/complex-text-arkts.md)
2. [复杂文本绘制与显示（C/C++）](../../docs/zh-cn/application-dev/graphics/complex-text-c.md)
3. [自定义文本绘制与显示（C/C++）](../../docs/zh-cn/application-dev/graphics/text-custom-c.md)

### 阶段九：可变帧率

掌握可变帧率能力的使用

1. [可变帧率简介](../../docs/zh-cn/application-dev/graphics/displaysync-overview.md)
2. [请求UI绘制帧率](../../docs/zh-cn/application-dev/graphics/displaysync-ui.md)
3. [请求动画绘制帧率](../../docs/zh-cn/application-dev/graphics/displaysync-animation.md)
4. [请求自绘制内容绘制帧率](../../docs/zh-cn/application-dev/graphics/displaysync-xcomponent.md)
5. [NativeDisplaySoloist开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/displaysoloist-native-guidelines.md)

### 阶段十：Native API开发

学习Native API进行底层图形开发

1. [NativeBuffer开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-buffer-guidelines.md)
2. [NativeWindow开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-window-guidelines.md)
3. [NativeImage开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-image-guidelines.md)
4. [NativeVSync开发指导 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-vsync-guidelines.md)
5. [GPU/CPU内存访问同步操作开发指南 (C/C++)](../../docs/zh-cn/application-dev/graphics/native-fence-guid-guidelines.md)

### 阶段十一：图像处理与优化

掌握离线图像处理和性能优化

1. [添加图像效果（C/C++）](../../docs/zh-cn/application-dev/graphics/effectkit-filter-c.md)
2. [过度绘制调试使用指导](../../docs/zh-cn/application-dev/graphics/overdraw-dfx-guidelines.md)

### 阶段十二：问题排查

了解常见问题和解决方案

1. [文本开发常见问题](../../docs/zh-cn/application-dev/graphics/text-faqs.md)

## 快速参考

| 文档标题 | 文档路径 |
|---------|---------|
| ArkGraphics 2D简介 | docs/zh-cn/application-dev/graphics/arkgraphics2D-introduction.md |
| 文本开发概述 | docs/zh-cn/application-dev/graphics/text-overview.md |
| 字块绘制（C/C++） | docs/zh-cn/application-dev/graphics/textblock-drawing-c.md |
| 使用主题字体（ArkTS） | docs/zh-cn/application-dev/graphics/theme-font-arkts.md |
| 字块绘制（ArkTS） | docs/zh-cn/application-dev/graphics/textblock-drawing-arkts.md |
| 使用主题字体（C/C++） | docs/zh-cn/application-dev/graphics/theme-font-c.md |
| 文本测量（C/C++） | docs/zh-cn/application-dev/graphics/text-measure-c.md |
| 系统字体的信息获取和使用（C/C++） | docs/zh-cn/application-dev/graphics/system-font-c.md |
| 文本测量（ArkTS） | docs/zh-cn/application-dev/graphics/text-measure-arkts.md |
| 文本开发常见问题 | docs/zh-cn/application-dev/graphics/text-faqs.md |
| 自定义文本绘制与显示（C/C++） | docs/zh-cn/application-dev/graphics/text-custom-c.md |
| ArkGraphics 2D（方舟2D图形服务） | docs/zh-cn/application-dev/graphics/Readme-CN.md |
| 简单文本绘制与显示（C/C++） | docs/zh-cn/application-dev/graphics/simple-text-c.md |
| 简单文本绘制与显示（ArkTS） | docs/zh-cn/application-dev/graphics/simple-text-arkts.md |
| 图片绘制（C/C++） | docs/zh-cn/application-dev/graphics/pixelmap-drawing-c.md |
| 图元绘制概述 | docs/zh-cn/application-dev/graphics/primitive-drawing-overview.md |
| 图片绘制（ArkTS） | docs/zh-cn/application-dev/graphics/pixelmap-drawing-arkts.md |
| NativeWindow开发指导 (C/C++) | docs/zh-cn/application-dev/graphics/native-window-guidelines.md |
| NativeImage开发指导 (C/C++) | docs/zh-cn/application-dev/graphics/native-image-guidelines.md |
| 过度绘制调试使用指导 | docs/zh-cn/application-dev/graphics/overdraw-dfx-guidelines.md |
| NativeVSync开发指导 (C/C++) | docs/zh-cn/application-dev/graphics/native-vsync-guidelines.md |
| GPU/CPU内存访问同步操作开发指南 (C/C++) | docs/zh-cn/application-dev/graphics/native-fence-guidelines.md |
| 几何形状绘制（ArkTS） | docs/zh-cn/application-dev/graphics/geometric-shape-drawing-arkts.md |
| 几何形状绘制（C/C++） | docs/zh-cn/application-dev/graphics/geometric-shape-drawing-c.md |
| 图形开发术语 | docs/zh-cn/application-dev/graphics/graphic-term.md |
| 图形绘制与显示开发概述 | docs/zh-cn/application-dev/graphics/graphic-drawing-overview.md |
| NativeBuffer开发指导 (C/C++) | docs/zh-cn/application-dev/graphics/native-buffer-guidelines.md |
| 添加图像效果（C/C++） | docs/zh-cn/application-dev/graphics/effectkit-filter-c.md |
| 请求自绘制内容绘制帧率 | docs/zh-cn/application-dev/graphics/displaysync-xcomponent.md |
| 可变帧率简介 | docs/zh-cn/application-dev/graphics/displaysync-overview.md |
| 请求UI绘制帧率 | docs/zh-cn/application-dev/graphics/displaysync-ui.md |
| 复杂文本绘制与显示（C/C++） | docs/zh-cn/application-dev/graphics/complex-text-c.md |
| 自定义字体的注册和使用（ArkTS） | docs/zh-cn/application-dev/graphics/custom-font-arkts.md |
| NativeDisplaySoloist开发指导 (C/C++) | docs/zh-cn/application-dev/graphics/displaysoloist-native-guidelines.md |
| 自定义字体的注册和使用（C/C++） | docs/zh-cn/application-dev/graphics/custom-font-c.md |
| 请求动画绘制帧率 | docs/zh-cn/application-dev/graphics/displaysync-animation.md |
| 复杂绘制效果（C/C++） | docs/zh-cn/application-dev/graphics/complex-drawing-effect-c.md |
| 复杂文本绘制与显示（ArkTS） | docs/zh-cn/application-dev/graphics/complex-text-arkts.md |
| 复杂绘制效果（ArkTS） | docs/zh-cn/application-dev/graphics/complex-drawing-effect-arkts.md |
| 画布操作及状态处理（C/C++） | docs/zh-cn/application-dev/graphics/canvas-operation-state-c.md |
| 画布操作及状态处理（ArkTS） | docs/zh-cn/application-dev/graphics/canvas-operation-state-arkts.md |
| 画布的获取与绘制结果的显示（C/C++） | docs/zh-cn/application-dev/graphics/canvas-get-result-draw-c.md |
| 基础绘制效果（C/C++） | docs/zh-cn/application-dev/graphics/basic-drawing-effect-c.md |
| 画布的获取与绘制结果的显示（ArkTS） | docs/zh-cn/application-dev/graphics/canvas-get-result-draw-arkts.md |
| 基础绘制效果（ArkTS） | docs/zh-cn/application-dev/graphics/basic-drawing-effect-arkts.md |
| 绘制效果概述 | docs/zh-cn/application-dev/graphics/drawing-effect-overview.md |
| 系统字体的信息获取和使用（ArkTS） | docs/zh-cn/application-dev/graphics/system-font-arkts.md |

## 统计信息

- **领域名称**: graphics
- **文档总数**: 48
- **核心概念**: 10个
- **学习阶段**: 12个阶段
- **分类数量**: 6个（基础与其他、图形绘制、文本开发、可变帧率、Native API）
