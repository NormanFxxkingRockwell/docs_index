# Network 领域地图

## 领域概述
Network Kit 是 OpenHarmony 提供的网络通信服务框架，涵盖 HTTP、WebSocket、Socket、网络连接管理、DNS 解析、VPN、网络防火墙、流量统计、MDNS、网络共享、以太网连接、扩展认证等多种网络相关功能。支持 ArkTS 和 C/C++ 两种开发语言，部分功能仅对系统应用开放。

## 核心概念
- **HTTP请求**：支持 GET、POST、PUT、DELETE 等多种 HTTP 方法
- **WebSocket双向通信**：支持客户端和服务端的双向实时通信
- **Socket连接**：支持 TCP/UDP/Multicast/TLS 协议
- **网络连接管理**：管理 WiFi/蜂窝/Ethernet 等多网络连接
- **DNS解析**：支持中文域名解析和指定网络环境解析
- **VPN虚拟专用网络**：提供创建虚拟网卡和配置路由的能力
- **网络防火墙**：提供网络访问控制和 DNS 策略配置
- **流量统计**：支持基于网卡/UID 的流量统计
- **MDNS多播DNS**：提供局域网内服务发现和解析
- **网络共享**：支持 WiFi 热点、蓝牙、USB 共享
- **以太网连接**：支持有线网络连接管理
- **扩展认证EAP**：支持定制化 802.1X 认证流程

## 文档索引

### 基础文档
1. [Network Kit（网络服务）](../../docs/zh-cn/application-dev/network/Readme-CN.md) - Network Kit 总体介绍
2. [Network Kit术语](../../docs/zh-cn/application-dev/network/network-terminology.md) - 网络相关术语解释
3. [Network Kit简介](../../docs/zh-cn/application-dev/network/net-mgmt-overview.md) - Network Kit 功能概览

### 访问网络
4. [使用HTTP访问网络](../../docs/zh-cn/application-dev/network/http-request.md) - HTTP 请求功能
5. [使用WebSocket访问网络](../../docs/zh-cn/application-dev/network/websocket-connection.md) - WebSocket 双向通信
6. [使用WebSocket访问网络(C/C++))](../../docs/zh-cn/application-dev/network/native-websocket-guidelines.md) - WebSocket C/C++ 接口
7. [使用Socket访问网络](../../docs/zh-cn/application-dev/network/socket-connection.md) - Socket 连接功能
8. [使用MDNS访问局域网服务](../../docs/zh-cn/application-dev/network/net-mdns.md) - MDNS 服务发现
9. [使用DNS解析域名](../../docs/zh-cn/application-dev/network/net-dns.md) - DNS 域名解析

### 连接网络
10. [管理网络连接](../../docs/zh-cn/application-dev/network/net-connection-manager.md) - 网络连接管理
11. [管理网络连接(C/C++)](../../docs/zh-cn/application-dev/network/native-netmanager-guidelines.md) - 网络连接 C/C++ 接口
12. [连接VPN](../../docs/zh-cn/application-dev/network/net-vpnExtension.md) - VPN 连接功能

### 管理网络
13. [统计网络流量消耗](../../docs/zh-cn/application-dev/network/net-statistics.md) - 流量统计功能
14. [使用网络防火墙](../../docs/zh-cn/application-dev/network/net-netfirewall.md) - 网络防火墙功能
15. [扩展认证](../../docs/zh-cn/application-dev/network/net-eap.md) - EAP 扩展认证

### 系统应用专用（仅对系统应用开放）
16. [网络共享（仅对系统应用开放）](../../docs/zh-cn/application-dev/network/net-sharing-sys.md) - 网络共享功能
17. [以太网连接管理（仅对系统应用开放）](../../docs/zh-cn/application-dev/network/net-ethernet-sys.md) - 以太网连接管理
18. [VPN管理（仅对系统应用开放）](../../docs/zh-cn/application-dev/network/net-vpn-sys.md) - VPN 管理功能

## 学习路径
推荐的学习顺序：

1. **基础了解**：先阅读 Network Kit 术语和简介，了解基本概念
2. **HTTP 请求**：学习最常用的 HTTP 请求功能
3. **WebSocket**：学习 WebSocket 双向通信
4. **Socket**：学习 Socket 连接（TCP/UDP）
5. **网络连接管理**：学习如何管理网络连接状态
6. **DNS 解析**：学习域名解析功能
7. **高级功能**：根据需要学习 VPN、防火墙、流量统计等

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| HTTP请求 | [使用HTTP访问网络](../../docs/zh-cn/application-dev/network/http-request.md) |
| WebSocket | [使用WebSocket访问网络](../../docs/zh-cn/application-dev/network/websocket-connection.md) |
| Socket | [使用Socket访问网络](../../docs/zh-cn/application-dev/network/socket-connection.md) |
| 网络连接管理 | [管理网络连接](../../docs/zh-cn/application-dev/network/net-connection-manager.md) |
| DNS解析 | [使用DNS解析域名](../../docs/zh-cn/application-dev/network/net-dns.md) |
| MDNS | [使用MDNS访问局域网服务](../../docs/zh-cn/application-dev/network/net-mdns.md) |
| VPN | [连接VPN](../../docs/zh-cn/application-dev/network/net-vpnExtension.md) |
| 流量统计 | [统计网络流量消耗](../../docs/zh-cn/application-dev/network/net-statistics.md) |
| 网络防火墙 | [使用网络防火墙](../../docs/zh-cn/application-dev/network/net-netfirewall.md) |
| 扩展认证 | [扩展认证](../../docs/zh-cn/application-dev/network/net-eap.md) |
| 网络共享 | [网络共享（仅对系统应用开放）](../../docs/zh-cn/application-dev/network/net-sharing-sys.md) |
| 以太网 | [以太网连接管理（仅对系统应用开放）](../../docs/zh-cn/application-dev/network/net-ethernet-sys.md) |
| 术语 | [Network Kit术语](../../docs/zh-cn/application-dev/network/network-terminology.md) |

## 统计信息
- 文档总数：18
- 核心概念：12
- 支持语言：ArkTS、C/C++
- 系统应用专用文档：3