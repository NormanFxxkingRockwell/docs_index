# IDL 领域地图

## 领域概述
IDL（Interface Definition Language）是 OpenHarmony 的接口定义语言，用于定义客户端和服务器进行 IPC 或 RPC 通信时的接口。支持声明系统服务和 Ability 对外提供的服务接口，根据接口声明在编译时生成跨进程调用或跨设备调用的代理和桩代码。仅对系统应用开放。

## 核心概念
- **基础数据类型**：void、boolean、byte、short、int、long、float、double、String
- **sequenceable数据类型**：可被序列化进行跨进程或跨设备传递的数据类型
- **接口类型**：IDL文件中定义的接口，可作为方法参数类型或返回值类型
- **数组类型**：使用 T[] 表示
- **容器类型**：List 和 Map 两种容器类型
- **IDL文件编写规范**：BNF 范式描述，支持 oneway 属性
- **TS开发**：使用 TypeScript 编写 .idl 文件和实现接口
- **C++开发**：使用 C++ 编写 .idl 文件和实现接口
- **IPC通信**：跨进程调用
- **RPC通信**：跨设备调用

## 文档索引

### IDL 工具和开发指南
1. [OpenHarmony IDL工具规格及使用说明书（仅对系统应用开放）](../../docs/zh-cn/application-dev/IDL/idl-guidelines.md) - IDL 工具的完整使用说明，包括接口定义语言构成、TS 和 C++ 开发步骤、获取 IDL 工具方法等

## 学习路径
1. [OpenHarmony IDL工具规格及使用说明书（仅对系统应用开放）](../../docs/zh-cn/application-dev/IDL/idl-guidelines.md) - 从基础概念到实际开发的完整流程

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| IDL工具 | [OpenHarmony IDL工具规格及使用说明书](../../docs/zh-cn/application-dev/IDL/idl-guidelines.md) |
| TS开发 | [OpenHarmony IDL工具规格及使用说明书（仅对系统应用开放）](../../docs/zh-cn/application-dev/IDL/idl-guidelines.md) |
| C++开发 | [OpenHarmony IDL工具规格及使用说明书（仅对系统应用开放）](../../docs/zh-cn/application-dev/IDL/idl-guidelines.md) |

## 统计信息
- 文档总数：1
- 核心概念：10
- 支持语言：TypeScript、C++
- 适用场景：系统应用、IPC 通信、RPC 通信