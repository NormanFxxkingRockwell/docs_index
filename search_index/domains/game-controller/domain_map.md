# GameController 领域地图

## 领域概述
Game Controller Kit（游戏控制器服务）支持游戏适配控制器外设（当前仅支持手柄），解决玩家操控性问题，保障用户体验。游戏开发者可通过接入该服务轻松实现游戏外设的上下线和按键及轴事件监听等功能。

## 核心概念
- **设备上下线监听**：注册监听事件后，设备拔插时可获取实时回调通知
- **查询在线设备信息**：支持查询当前所有在线设备的具体信息
- **游戏手柄轴事件监听**：支持 LeftThumbstick、RightThumbstick、LeftTrigger、RightTrigger 等多种轴事件
- **游戏手柄按键事件监听**：支持 LeftShoulder、RightShoulder、LeftTrigger、RightTrigger、Menu、Home、A、B、C、Dpad 等多种按键事件
- **C/C++开发**：使用 C/C++ 语言开发

## 文档索引

### 概览文档
1. [Game Controller Kit简介](../../docs/zh-cn/application-dev/game-controller/game-controller-introduction.md) - Game Controller Kit 功能概述

### 设备管理
2. [监听设备上下线（C/C++）](../../docs/zh-cn/application-dev/game-controller/game-controller-monitor-device.md) - 设备上下线事件监听和查询在线设备信息

### 游戏手柄控制
3. [监听游戏手柄的轴和按键事件（C/C++）](../../docs/zh-cn/application-dev/game-controller/game-controller-monitor-pad.md) - 游戏手柄轴事件和按键事件监听

### 开发指南
4. [Game Controller Kit开发指南](../../docs/zh-cn/application-dev/game-controller/Readme-CN.md) - 开发指南和导航

## 学习路径
1. [Game Controller Kit简介](../../docs/zh-cn/application-dev/game-controller/game-controller-introduction.md) - 了解功能概述
2. [监听设备上下线（C/C++）](../../docs/zh-cn/application-dev/game-controller/game-controller-monitor-device.md) - 学习设备上下线监听
3. [监听游戏手柄的轴和按键事件（C/C++）](../../docs/zh-cn/application-dev/game-controller/game-controller-monitor-pad.md) - 学习轴和按键事件监听

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| Game Controller Kit简介 | [Game Controller Kit简介](../../docs/zh-cn/application-dev/game-controller/game-controller-introduction.md) |
| 设备上下线监听 | [监听设备上下线（C/C++）](../../docs/zh-cn/application-dev/game-controller/game-controller-monitor-device.md) |
| 游戏手柄轴事件监听 | [监听游戏手柄的轴和按键事件（C/C++）](../../docs/zh-cn/application-dev/game-controller/game-controller-monitor-pad.md) |
| 开发指南 | [Game Controller Kit开发指南](../../docs/zh-cn/application-dev/game-controller/Readme-CN.md) |

## 统计信息
- 文档总数：4
- 核心概念：5
- 主要功能：设备上下线监听、游戏手柄轴事件监听、游戏手柄按键事件监听
- 开发语言：C/C++
- 适用场景：游戏开发