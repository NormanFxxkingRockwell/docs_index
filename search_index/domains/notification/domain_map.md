# Notification 领域地图

## 领域概述
Notification Kit（用户通知服务）为开发者提供本地通知发布通道，支持文本、进度条、实况窗等多种通知类型，提供通知授权、通知角标管理、通知渠道管理、通知更新与取消、跨设备协同通知、通知订阅扩展能力等功能。支持ArkTS开发，部分功能仅对系统应用开放。

## 核心概念
- **通知授权**：应用需要获取用户授权才能发送通知
- **文本通知**：支持普通文本和多行文本类型
- **进度条通知**：用于文件下载、事务处理进度显示
- **通知角标**：在桌面图标右上角显示未读通知个数
- **通知渠道**：不同渠道对应不同的通知提醒方式
- **通知更新**：更新已发布的通知内容
- **取消通知**：取消指定的通知或所有通知
- **WantAgent行为意图**：点击通知拉起应用或发布公共事件
- **跨设备协同通知**：实现手机与手表、平板等设备的通知同步
- **通知订阅扩展能力**：三方应用接收系统通知并同步到穿戴设备

## 文档索引

### 基础文档
1. [Notification Kit（用户通知服务）](../../docs/zh-cn/application-dev/notification/Readme-CN.md) - Notification Kit 总体介绍
2. [Notification Kit简介](../../docs/zh-cn/application-dev/notification/notification-overview.md) - Notification Kit 功能概览
3. [请求通知授权](../../docs/zh-cn/application-dev/notification/notification-enable.md) - 通知授权管理

### 通知管理
4. [管理通知渠道](../../docs/zh-cn/application-dev/notification/notification-slot.md) - 通知渠道管理
5. [管理通知角标](../../docs/zh-cn/application-dev/notification/notification-badge.md) - 通知角标管理

### 发布通知
6. [发布文本类型通知](../../docs/zh-cn/application-dev/notification/text-notification.md) - 文本通知功能
7. [发布进度条类型通知](../../docs/zh-cn/application-dev/notification/progress-bar-notification.md) - 进度条通知功能
8. [为通知添加行为意图](../../docs/zh-cn/application-dev/notification/notification-with-wantagent.md) - WantAgent 行为意图

### 通知操作
9. [更新通知](../../docs/zh-cn/application-dev/notification/notification-update.md) - 通知更新功能
10. [取消通知](../../docs/zh-cn/application-dev/notification/notification-cancel.md) - 取消通知功能

### 跨设备协同
11. [跨设备协同通知概述](../../docs/zh-cn/application-dev/notification/notification-distributed-overview.md) - 跨设备协同通知概览
12. [清除跨设备场景下的重复通知](../../docs/zh-cn/application-dev/notification/notification-distributed-messageid.md) - 通知去重功能

### 通知订阅扩展能力
13. [NotificationSubscriberExtensionAbility (开发概述)](../../docs/zh-cn/application-dev/notification/notification-subscriber-extension-ability.md) - 通知订阅扩展能力概览
14. [通知订阅扩展能力开发步骤](../../docs/zh-cn/application-dev/notification/notification-subscriber-extension-ability-development-steps.md) - 开发步骤详解

### 系统应用专用（仅对系统应用开放）
15. [订阅通知（仅对系统应用开放）](../../docs/zh-cn/application-dev/notification/notification-subscription-sys.md) - 通知订阅功能
16. [通知消息跨设备协同管理（仅对系统应用开放）](../../docs/zh-cn/application-dev/notification/notification-distributed-notdistributed-sys.md) - 跨设备协同管理
17. [发布实况窗类型通知（仅对系统应用开放）](../../docs/zh-cn/application-dev/notification/live-view-notification-sys.md) - 实况窗通知功能

## 学习路径
推荐的学习顺序：

1. **基础了解**：先阅读 Notification Kit 简介，了解基本概念和功能
2. **通知授权**：学习如何请求用户授权发送通知
3. **通知渠道**：学习如何管理通知渠道
4. **文本通知**：学习最常用的文本通知功能
5. **进度条通知**：学习进度条通知功能
6. **WantAgent**：学习如何为通知添加行为意图
7. **通知更新与取消**：学习通知的更新和取消操作
8. **通知角标**：学习通知角标管理
9. **跨设备协同**：根据需要学习跨设备协同通知功能
10. **通知订阅扩展**：根据需要学习通知订阅扩展能力

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| 通知授权 | [请求通知授权](../../docs/zh-cn/application-dev/notification/notification-enable.md) |
| 文本通知 | [发布文本类型通知](../../docs/zh-cn/application-dev/notification/text-notification.md) |
| 进度条通知 | [发布进度条类型通知](../../docs/zh-cn/application-dev/notification/progress-bar-notification.md) |
| 通知渠道 | [管理通知渠道](../../docs/zh-cn/application-dev/notification/notification-slot.md) |
| 通知角标 | [管理通知角标](../../docs/zh-cn/application-dev/notification/notification-badge.md) |
| WantAgent行为意图 | [为通知添加行为意图](../../docs/zh-cn/application-dev/notification/notification-with-wantagent.md) |
| 通知更新 | [更新通知](../../docs/zh-cn/application-dev/notification/notification-update.md) |
| 取消通知 | [取消通知](../../docs/zh-cn/application-dev/notification/notification-cancel.md) |
| 跨设备协同 | [跨设备协同通知概述](../../docs/zh-cn/application-dev/notification/notification-distributed-overview.md) |
| 通知去重 | [清除跨设备场景下的重复通知](../../docs/zh-cn/application-dev/notification/notification-distributed-messageid.md) |
| 通知订阅扩展 | [NotificationSubscriberExtensionAbility (开发概述)](../../docs/zh-cn/application-dev/notification/notification-subscriber-extension-ability.md) |

## 统计信息
- 文档总数：17
- 核心概念：10
- 支持语言：ArkTS
- 系统应用专用文档：3
