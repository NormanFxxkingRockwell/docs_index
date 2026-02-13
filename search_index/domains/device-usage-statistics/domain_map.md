# DeviceUsageStatistics 领域地图

## 领域概述
设备使用信息统计，包括app usage、notification usage、system usage等使用统计。目前只支持app usage使用统计。应用使用信息统计，用于保存和查询应用使用详情（app usage）、事件日志数据（event log）、应用分组（bundle group）情况。部件缓存的应用记录（使用历史统计）会在事件上报后30分钟内刷新到数据库持久化保存。

## 核心概念
- **应用使用统计**：保存和查询应用使用详情
- **事件日志数据**：记录应用的事件日志
- **应用分组**：bundle group 情况
- **bundle group**：应用分组管理
- **使用历史统计**：应用使用历史记录
- **事件上报**：事件上报后30分钟内刷新到数据库
- **数据库持久化**：数据持久化保存
- **查询接口**：提供多种查询接口
- **权限管理**：BUNDLE_ACTIVE_INFO 权限
- **BUNDLE_ACTIVE_INFO**：系统级权限

## 文档索引

### 概览文档
1. [设备使用信息统计（仅对系统应用开放）](../../docs/zh-cn/application-dev/device-usage-statistics/Readme-CN.md) - 领域导航

### 功能文档
2. [设备使用信息统计概述（仅对系统应用开放）](../../docs/zh-cn/application-dev/device-usage-statistics/device-usage-statistics-overview-sys.md) - 功能概述和说明
3. [设备使用信息统计开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/device-usage-statistics/device-usage-statistics-use-guide-sys.md) - 开发步骤和接口说明

## 学习路径
1. [设备使用信息统计概述（仅对系统应用开放）](../../docs/zh-cn/application-dev/device-usage-statistics/device-usage-statistics-overview-sys.md) - 了解功能概述
2. [设备使用信息统计开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/device-usage-statistics/device-usage-statistics-use-guide-sys.md) - 学习开发步骤

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| 设备使用信息统计概述 | [设备使用信息统计概述（仅对系统应用开放）](../../docs/zh-cn/application-dev/device-usage-statistics/device-usage-statistics-overview-sys.md) |
| 设备使用信息统计开发指导 | [设备使用信息统计开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/device-usage-statistics/device-usage-statistics-use-guide-sys.md) |

## 统计信息
- 文档总数：3
- 核心概念：8
- 主要功能：应用使用统计、事件日志、应用分组
- 权限要求：BUNDLE_ACTIVE_INFO（系统级）
- 适用范围：仅对系统应用开放