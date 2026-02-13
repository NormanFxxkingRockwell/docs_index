# Tools 领域地图

## 领域概述
Tools 领域包含 OpenHarmony 开发过程中使用的各种命令行工具和调试工具，涵盖应用安装卸载、启动测试、打包拆包、资源编译、权限管理、通知调试、媒体库操作、电源管理、网络配置等多种开发辅助功能。支持 Java、C/C++、ArkTS 等多种开发语言，部分功能仅对系统应用开放。

## 核心概念
- **应用管理工具**：aa 工具用于启动应用和测试用例，提供应用调试和测试功能
- **打包拆包工具**：packing-tool 用于打包 HAP/HSP/App 等包，unpacking-tool 用于解压和解析包
- **调试工具**：LLDB 调试器支持 C/C++ 应用调试，devicedebug 用于进程调试
- **资源编译工具**：restool 用于编译资源文件创建资源索引
- **权限管理工具**：atm 工具用于查询和管理应用进程的权限信息
- **通知调试工具**：cem 工具用于发布和打印公共事件，anm 工具用于通知管理
- **媒体库工具**：mediatool 用于操作媒体库资源，支持导入导出删除查询
- **系统参数工具**：param 工具用于操作系统参数，支持获取设置等待
- **电源管理工具**：power-shell 用于电源状态转换，支持亮屏熄屏设置模式
- **命令行工具集**：toybox 是轻量级 Linux 命令行工具集合，包含大量常用命令

## 文档索引

### 基础文档
1. [调试工具](../../docs/zh-cn/application-dev/tools/Readme-CN.md) - 调试工具目录总体介绍
2. [SDK命令行工具简介](../../docs/zh-cn/application-dev/tools/command-line-tools-overview.md) - SDK 命令行工具总体介绍

### 应用管理
3. [aa工具](../../docs/zh-cn/application-dev/tools/aa-tool.md) - Ability 助手工具，应用启动和测试
4. [bm工具](../../docs/zh-cn/application-dev/tools/bm-tool.md) - Bundle Manager 包管理工具

### 打包拆包
5. [打包工具](../../docs/zh-cn/application-dev/tools/packing-tool.md) - 打包 HAP/HSP/App 等包
6. [拆包工具](../../docs/zh-cn/application-dev/tools/unpacking-tool.md) - 解压和解析 HAP/HSP/App 包

### 调试工具
7. [LLDB工具（仅对系统应用开放）](../../docs/zh-cn/application-dev/tools/lldb-tool-sys.md) - LLDB 调试器
8. [devicedebug工具](../../docs/zh-cn/application-dev/tools/devicedebug-tool.md) - 设备调试工具

### 权限管理
9. [atm工具](../../docs/zh-cn/application-dev/tools/atm-tool.md) - Access Token Manager 权限管理
10. [edm工具](../../docs/zh-cn/application-dev/tools/edm-tool.md) - Enterprise Device Manager 企业设备管理

### 通知管理
11. [cem工具](../../docs/zh-cn/application-dev/tools/cem-tool.md) - Common Event Manager 公共事件管理
12. [anm工具](../../docs/zh-cn/application-dev/tools/anm-tool.md) - Advanced Notification Manager 通知管理

### 资源编译
13. [restool工具](../../docs/zh-cn/application-dev/tools/restool.md) - 应用工程资源编译工具

### 系统工具
14. [param工具](../../docs/zh-cn/application-dev/tools/param-tool.md) - 系统参数操作工具
15. [power-shell工具](../../docs/zh-cn/application-dev/tools/power-shell.md) - 电源状态转换工具

### 媒体工具
16. [mediatool工具](../../docs/zh-cn/application-dev/tools/mediatool.md) - 媒体库资源访问工具

### 其他工具
17. [扫描工具](../../docs/zh-cn/application-dev/tools/app-check-tool.md) - 应用安装包扫描分析工具
18. [toybox工具](../../docs/zh-cn/application-dev/tools/toybox.md) - Linux 命令行工具集合
19. [二进制签名工具](../../docs/zh-cn/application-dev/tools/binary-sign-tool.md) - Binary Sign Tool 二进制签名工具
20. [network-cfg工具](../../docs/zh-cn/application-dev/tools/network-cfg.md) - 网络配置工具
21. [OpenHarmony SDK升级助手](../../docs/zh-cn/application-dev/tools/openharmony_sdk_upgrade_assistant.md) - SDK 升级助手
22. [acm工具](../../docs/zh-cn/application-dev/tools/acm-tool.md) - Account Manager 账号管理工具

## 学习路径
推荐的学习顺序：

1. **基础了解**：先阅读 SDK 命令行工具简介，了解工具获取方式和常用工具列表
2. **应用管理**：学习 aa 和 bm 工具，掌握应用安装卸载和启动测试
3. **打包拆包**：学习打包工具和拆包工具，了解包的构建和解析
4. **调试工具**：根据需要学习 LLDB 调试器或 devicedebug 工具
5. **权限管理**：学习 atm 工具，了解权限查询和管理
6. **通知管理**：学习 cem 和 anm 工具，掌握公共事件和通知调试
7. **资源编译**：学习 restool 工具，了解资源编译流程
8. **系统工具**：学习 param 和 power-shell 工具，了解系统参数和电源管理
9. **其他工具**：根据需要学习其他专用工具

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| 应用管理 | [aa工具](../../docs/zh-cn/application-dev/tools/aa-tool.md) |
| 包管理 | [bm工具](../../docs/zh-cn/application-dev/tools/bm-tool.md) |
| 打包工具 | [打包工具](../../docs/zh-cn/application-dev/tools/packing-tool.md) |
| 拆包工具 | [拆包工具](../../docs/zh-cn/application-dev/tools/unpacking-tool.md) |
| 扫描工具 | [扫描工具](../../docs/zh-cn/application-dev/tools/app-check-tool.md) |
| 资源编译 | [restool工具](../../docs/zh-cn/application-dev/tools/restool.md) |
| 权限管理 | [atm工具](../../docs/zh-cn/application-dev/tools/atm-tool.md) |
| 通知管理 | [cem工具](../../docs/zh-cn/application-dev/tools/cem-tool.md) |
| 账号管理 | [acm工具](../../docs/zh-cn/application-dev/tools/acm-tool.md) |
| 系统参数 | [param工具](../../docs/zh-cn/application-dev/tools/param-tool.md) |
| 电源管理 | [power-shell工具](../../docs/zh-cn/application-dev/tools/power-shell.md) |
| 媒体库 | [mediatool工具](../../docs/zh-cn/application-dev/tools/mediatool.md) |
| 命令行工具 | [toybox工具](../../docs/zh-cn/application-dev/tools/toybox.md) |
| SDK升级助手 | [OpenHarmony SDK升级助手](../../docs/zh-cn/application-dev/tools/openharmony_sdk_upgrade_assistant.md) |
| 二进制签名 | [二进制签名工具](../../docs/zh-cn/application-dev/tools/binary-sign-tool.md) |
| 网络配置 | [network-cfg工具](../../docs/zh-cn/application-dev/tools/network-cfg.md) |
| 企业设备管理 | [edm工具](../../docs/zh-cn/application-dev/tools/edm-tool.md) |
| LLDB调试 | [LLDB工具（仅对系统应用开放）](../../docs/zh-cn/application-dev/tools/lldb-tool-sys.md) |
| 设备调试 | [devicedebug工具](../../docs/zh-cn/application-dev/tools/devicedebug-tool.md) |

## 统计信息
- 文档总数：23
- 核心概念：10
- 支持语言：Java、C/C++、ArkTS
- 系统应用专用文档：1（LLDB工具）
