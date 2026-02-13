# Inputmethod 领域地图

## 领域概述

IME Kit 是 OpenHarmony 提供的输入法开发服务，负责建立编辑框所在应用与输入法应用之间的通信通道，确保两者可以共同协作提供文本输入功能。该Kit提供了输入法框架和输入法服务两类API，用于实现输入法应用，也可以用于实现自绘编辑框以及实现对输入法应用的控制。

## 核心概念

- **输入法应用**：实现文本输入功能的应用，通过InputMethodExtensionAbility提供输入法服务
- **InputMethodExtensionAbility**：输入法扩展能力，提供输入法服务的生命周期回调
- **输入法子类型**：允许输入法展现不同的输入模式或语言，如中文键盘、英文键盘等
- **自绘编辑框**：开发者自定义的编辑框，可以绑定输入法应用实现文本输入
- **输入法管理**：系统应用管理输入法应用的能力，包括显示/隐藏输入法软键盘、切换输入法等
- **沉浸模式**：前台应用和输入法应用之间的通信机制，用于提供一致的沉浸式体验
- **Ime工具**：通过hdc命令管理输入法的工具

## 文档索引

### 基础文档

1. [IME Kit简介](../../docs/zh-cn/application-dev/inputmethod/ime-kit-intro.md)

### 核心功能

2. [实现一个输入法应用](../../docs/zh-cn/application-dev/inputmethod/inputmethod-application-guide.md)
3. [在自绘编辑框中使用输入法](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-custom-edit-box.md)
4. [切换输入法应用](../../docs/zh-cn/application-dev/inputmethod/switch-inputmethod-guide.md)
5. [输入法子类型开发指南](../../docs/zh-cn/application-dev/inputmethod/input-method-subtype-guide.md)

### 高级功能

6. [在自绘编辑框中使用输入法开发指导 (C/C++)](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-custom-edit-box-ndk.md)
7. [输入法应用沉浸模式](../../docs/zh-cn/application-dev/inputmethod/inputmethod-immersive-mode-guide.md)
8. [不可获焦窗口中输入框与输入法交互指南](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-not-focusable-window.md)

### 工具

9. [Ime工具](../../docs/zh-cn/application-dev/inputmethod/inputmethod-hdc-commands-guide.md)

## 学习路径

1. [IME Kit简介](../../docs/zh-cn/application-dev/inputmethod/ime-kit-intro.md) - 了解IME Kit的整体功能和框架原理
2. [实现一个输入法应用](../../docs/zh-cn/application-dev/inputmethod/inputmethod-application-guide.md) - 学习如何实现一个完整的输入法应用
3. [在自绘编辑框中使用输入法](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-custom-edit-box.md) - 学习如何在自绘编辑框中使用输入法
4. [切换输入法应用](../../docs/zh-cn/application-dev/inputmethod/switch-inputmethod-guide.md) - 学习如何切换输入法应用和子类型
5. [输入法子类型开发指南](../../docs/zh-cn/application-dev/inputmethod/input-method-subtype-guide.md) - 学习如何开发输入法子类型
6. [在自绘编辑框中使用输入法开发指导 (C/C++)](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-custom-edit-box-ndk.md) - 学习如何使用C/C++在自绘编辑框中使用输入法
7. [输入法应用沉浸模式](../../docs/zh-cn/application-dev/inputmethod/inputmethod-immersive-mode-guide.md) - 学习如何实现输入法应用沉浸模式
8. [Ime工具](../../docs/zh-cn/application-dev/inputmethod/inputmethod-hdc-commands-guide.md) - 学习如何使用hdc命令管理输入法
9. [不可获焦窗口中输入框与输入法交互指南](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-not-focusable-window.md) - 学习如何在不可获焦窗口中实现输入框与输入法交互

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| IME Kit简介 | [IME Kit简介](../../docs/zh-cn/application-dev/inputmethod/ime-kit-intro.md) |
| 实现一个输入法应用 | [实现一个输入法应用](../../docs/zh-cn/application-dev/inputmethod/inputmethod-application-guide.md) |
| 在自绘编辑框中使用输入法 | [在自绘编辑框中使用输入法](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-custom-edit-box.md) |
| 切换输入法应用 | [切换输入法应用](../../docs/zh-cn/application-dev/inputmethod/switch-inputmethod-guide.md) |
| 输入法子类型开发指南 | [输入法子类型开发指南](../../docs/zh-cn/application-dev/inputmethod/input-method-subtype-guide.md) |
| 在自绘编辑框中使用输入(C/C++) | [在自绘编辑框中使用输入法开发指导 (C/C++)](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-custom-edit-box-ndk.md) |
| 输入法应用沉浸模式 | [输入法应用沉浸模式](../../docs/zh-cn/application-dev/inputmethod/inputmethod-immersive-mode-guide.md) |
| Ime工具 | [Ime工具](../../docs/zh-cn/application-dev/inputmethod/inputmethod-hdc-commands-guide.md) |
| 不可获焦窗口中输入框与输入法交互指南 | [不可获焦窗口中输入框与输入法交互指南](../../docs/zh-cn/application-dev/inputmethod/use-inputmethod-in-not-focusable-window.md) |

## 统计信息

- 文档总数：10
- 核心概念：7