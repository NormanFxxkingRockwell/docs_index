# Connectivity Kit（短距通信服务）学习地图

## 领域概述

Connectivity Kit（短距通信服务）提供蓝牙、NFC、WLAN等短距通信能力。蓝牙支持传统蓝牙和低功耗蓝牙，包含A2DP、HFP、HID、GATT等多种协议；NFC支持标签读写、HCE卡模拟和安全单元访问；WLAN支持STA、P2P、AP三种工作模式。

## 核心概念

- **蓝牙**：短距无线通信技术，支持传统蓝牙和低功耗蓝牙
- **低功耗蓝牙（BLE）**：低功耗的蓝牙通信技术，适用于穿戴设备和物联网
- **GATT协议**：BLE的核心协议，用于服务、特征值和描述符的数据传输
- **NFC**：近场通信技术，支持标签读写和卡模拟
- **HCE卡模拟**：基于主机的卡模拟，实现NFC刷卡业务
- **安全单元**：eSE和SIM卡等安全单元，用于安全数据存储
- **WLAN**：无线局域网技术，支持STA、P2P、AP三种模式
- **Wi-Fi**：基于无线电波的通信技术，用于设备间数据传输
- **P2P模式**：Wi-Fi Direct点对点连接技术
- **STA模式**：Wi-Fi站点模式，作为客户端接入无线局域网

## 学习路径

### 蓝牙开发入门

学习蓝牙基础概念和开发流程

1. [蓝牙服务开发概述](../../docs/zh-cn/application-dev/connectivity/bluetooth/bluetooth-overview.md) - 了解蓝牙技术的基本原理
2. [蓝牙设置](../../docs/zh-cn/application-dev/connectivity/bluetooth/br-development-guide.md) - 学习开启和关闭蓝牙
3. [查找设备](../../docs/zh-cn/application-dev/connectivity/bluetooth/br-discovery-development-guide.md) - 掌握设备扫描和发现
4. [配对与连接设备](../../docs/zh-cn/application-dev/connectivity/bluetooth/br-pair-device-development-guide.md) - 学习设备配对和连接
5. [连接和传输数据](../../docs/zh-cn/application-dev/connectivity/bluetooth/spp-development-guide.md) - 实现SPP数据传输

### 低功耗蓝牙（BLE）开发

掌握BLE扫描、广播和GATT通信

1. [蓝牙服务开发概述](../../docs/zh-cn/application-dev/connectivity/bluetooth/bluetooth-overview.md) - 了解BLE的特点和应用场景
2. [查找设备](../../docs/zh-cn/application-dev/connectivity/bluetooth/ble-development-guide.md) - 掌握BLE扫描和广播
3. [连接和传输数据](../../docs/zh-cn/application-dev/connectivity/bluetooth/gatt-development-guide.md) - 实现GATT客户端和服务端

### NFC开发入门

学习NFC标签读写、HCE卡模拟和安全单元访问

1. [NFC标签读写开发指南](../../docs/zh-cn/application-dev/connectivity/nfc/nfc-tag-access-guide.md) - 实现NFC标签读写
2. [HCE卡模拟开发指南](../../docs/zh-cn/application-dev/connectivity/nfc/nfc-hce-guide.md) - 实现卡模拟功能
3. [安全单元访问开发指南](../../docs/zh-cn/application-dev/connectivity/nfc/nfc-se-access-guide.md) - 访问安全单元

### WLAN开发入门

掌握Wi-Fi连接、扫描和P2P通信

1. [WLAN服务开发概述](../../docs/zh-cn/application-dev/connectivity/wlan/wlan-overview.md) - 了解WLAN的基本概念
2. [STA模式开发指南](../../docs/zh-cn/application-dev/connectivity/wlan/sta-development-guide.md) - 实现Wi-Fi连接
3. [Wi-Fi扫描开发指南](../../docs/zh-cn/application-dev/connectivity/wlan/scan-development-guide.md) - 掌握Wi-Fi扫描
4. [P2P模式开发指南](../../docs/zh-cn/application-dev/connectivity/wlan/p2p-development-guide.md) - 实现P2P通信

## 快速参考

### 蓝牙

| 模块 | 关键API | 说明 |
|------|----------|------|
| 传统蓝牙 | `access.enableBluetooth` | 开启蓝牙 |
| 传统蓝牙 | `connection.startBluetoothDiscovery` | 扫描设备 |
| 传统蓝牙 | `connection.pairDevice` | 配对设备 |
| 传统蓝牙 | `socket.sppConnect` | SPP连接 |
| 低功耗蓝牙 | `ble.startBLEScan` | BLE扫描 |
| 低功耗蓝牙 | `ble.startAdvertising` | BLE广播 |
| 低功耗蓝牙 | `ble.createGattClientDevice` | 创建GATT客户端 |
| GATT协议 | `getServices` | 服务发现 |
| GATT协议 | `readCharacteristicValue` | 读取特征值 |
| GATT协议 | `writeCharacteristicValue` | 写入特征值 |
| GATT协议 | `notifyCharacteristicChanged` | 发送通知 |

### NFC

| 模块 | 关键API | 说明 |
|------|----------|------|
| NFC标签读写 | `tag.on` | 订阅标签事件 |
| NFC标签读写 | `tag.getTagInfo` | 获取标签信息 |
| NFC标签读写 | `tag.getNfcA` | 获取NfcA标签 |
| NFC标签读写 | `tag.getIsoDep` | 获取IsoDep标签 |
| HCE卡模拟 | `cardEmulation.start` | 启动HCE |
| HCE卡模拟 | `cardEmulation.on` | 订阅APDU数据 |
| HCE卡模拟 | `cardEmulation.transmit` | 发送响应数据 |
| 安全单元访问 | `omapi.createService` | 创建服务 |
| 安全单元访问 | `openSession` | 打开会话 |
| 安全单元访问 | `openLogicalChannel` | 打开逻辑通道 |
| 安全单元访问 | `transmit` | 发送APDU数据 |

### WLAN

| 模块 | 关键API | 说明 |
|------|----------|------|
| STA模式 | `wifiManager.isWifiActive` | 查询Wi-Fi状态 |
| STA模式 | `wifiManager.addCandidateConfig` | 添加候选网络 |
| STA模式 | `wifiManager.connectToCandidateConfig` | 连接网络 |
| P2P模式 | `wifiManager.createGroup` | 创建P2P群组 |
| P2P模式 | `wifiManager.startDiscoverDevices` | 发现P2P设备 |
| P2P模式 | `wifiManager.p2pConnect` | P2P连接 |
| Wi-Fi扫描 | `wifiManager.getScanInfoList` | 获取扫描结果 |
| Wi-Fi扫描 | `wifiManager.on` | 订阅扫描事件 |

## 常见用例

### 蓝牙耳机连接

连接蓝牙耳机并传输音频

相关文档：
- [蓝牙设置](../../docs/zh-cn/application-dev/connectivity/bluetooth/br-development-guide.md)
- [查找设备](../../docs/zh-cn/application-dev/connectivity/bluetooth/br-discovery-development-guide.md)
- [配对与连接设备](../../docs/zh-cn/application-dev/connectivity/bluetooth/br-pair-device-development-guide.md)

### BLE设备数据采集

扫描BLE设备并采集传感器数据

相关文档：
- [查找设备](../../docs/zh-cn/application-dev/connectivity/bluetooth/ble-development-guide.md)
- [连接和传输数据](../../docs/zh-cn/application-dev/connectivity/bluetooth/gatt-development-guide.md)

### NFC一碰传

通过NFC标签实现数据传输

相关文档：
- [NFC标签读写开发指南](../../docs/zh-cn/application-dev/connectivity/nfc/nfc-tag-access-guide.md)

### Wi-Fi连接管理

管理Wi-Fi连接和扫描

相关文档：
- [STA模式开发指南](../../docs/zh-cn/application-dev/connectivity/wlan/sta-development-guide.md)
- [Wi-Fi扫描开发指南](../../docs/zh-cn/application-dev/connectivity/wlan/scan-development-guide.md)

### P2P文件传输

通过Wi-Fi Direct实现点对点文件传输

相关文档：
- [P2P模式开发指南](../../docs/zh-cn/application-dev/connectivity/wlan/p2p-development-guide.md)