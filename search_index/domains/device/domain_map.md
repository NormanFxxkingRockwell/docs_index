# Device 领域地图

## 概述

Device Kit 是 OpenHarmony 提供的设备管理服务框架，涵盖传感器服务、振动器、位置服务、多模态融合感知、多模输入服务、驱动开发套件等多种设备相关功能。

## 核心概念

- 传感器
- 振动器
- 位置服务
- GNSS定位
- 地理编码
- 地理围栏
- 多模态融合感知
- 多模输入服务
- 输入设备管理
- 驱动开发套件
- USB驱动
- HID驱动
- SCSI驱动
- 串口驱动

## 学习路径

1. **多模态融合感知**
   - [Multimodal Awareness Kit简介](../../docs/zh-cn/application-dev/device/stationary/multimodalawareness-kit-intro.md)
   - [Stationary开发指导](../../docs/zh-cn/application-dev/device/stationary/stationary-guidelines.md)
   - [获取用户动作开发指导](../../docs/zh-cn/application-dev/device/stationary/motion-guidelines.md)
   - [用户状态感知开发指导](../../docs/zh-cn/application-dev/device/stationary/userStatus-guidelines.md)
   - [记忆链接开发指导](../../docs/zh-cn/application-dev/device/stationary/metadataBinding-guidelines.md)

2. **传感器服务**
   - [传感器开发概述](../../docs/zh-cn/application-dev/device/sensor/sensor-overview.md)
   - [传感器开发指导(ArkTS)](../../docs/zh-cn/application-dev/device/sensor/sensor-guidelines.md)
   - [传感器开发指导(C/C++)](../../docs/zh-cn/application-dev/device/sensor/sensor-guidelines-capi.md)

3. **振动器**
   - [振动开发概述](../../docs/zh-cn/application-dev/device/sensor/vibrator-overview.md)
   - [振动开发指导(ArkTS)](../../docs/zh-cn/application-dev/device/sensor/vibrator-guidelines.md)
   - [振动开发指导(C/C++)](../../docs/zh-cn/application-dev/device/sensor/vibrator-guidelines-capi.md)

4. **位置服务**
   - [Location Kit简介](../../docs/zh-cn/application-dev/device/location/location-kit-intro.md)
   - [申请位置权限开发指导](../../docs/zh-cn/application-dev/device/location/location-permission-guidelines.md)
   - [获取设备的位置信息开发指导(ArkTS)](../../docs/zh-cn/application-dev/device/location/location-guidelines.md)
   - [正地理编码与逆地理编码开发指导](../../docs/zh-cn/application-dev/device/location/geocode-guidelines.md)
   - [基于设备自身定位的地理围栏开发指导](../../docs/zh-cn/application-dev/device/location/geofence-guidelines.md)

5. **多模输入服务**
   - [Input Kit简介](../../docs/zh-cn/application-dev/device/input/input-overview.md)
   - [输入设备开发指导](../../docs/zh-cn/application-dev/device/input/inputdevice-guidelines.md)
   - [优先响应系统功能键开发指导](../../docs/zh-cn/application-dev/device/input/keypressed-guidelines.md)
   - [鼠标光标开发指导](../../docs/zh-cn/application-dev/device/input/pointerstyle-guidelines.md)

6. **驱动开发套件**
   - [Driver Development Kit简介](../../docs/zh-cn/application-dev/device/driver/driverdevelopment-overview.md)
   - [环境准备](../../docs/zh-cn/application-dev/device/driver/environmental-preparation.md)
   - [开发无UI界面基础驱动](../../docs/zh-cn/application-dev/device/driver/driverextensionability.md)
   - [开发带UI界面基础驱动](../../docs/zh-cn/application-dev/device/driver/externaldevice-guidelines.md)
   - [开发适用USB协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/usb-ddk-guidelines.md)
   - [开发适用HID协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/hid-ddk-guidelines.md)
   - [开发适用串口协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/usb-serial-ddk-guidelines.md)
   - [开发使用SCSI协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/scsi-peripheral-ddk-guidelines.md)

## 快速参考

| 功能 | 文档 |
|------|------|
| 传感器 | [传感器开发概述](../../docs/zh-cn/application-dev/device/sensor/sensor-overview.md) |
| 振动器 | [振动开发概述](../../docs/zh-cn/application-dev/device/sensor/vibrator-overview.md) |
| 位置服务 | [Location Kit简介](../../docs/zh-cn/application-dev/device/location/location-kit-intro.md) |
| GNSS定位 | [获取设备的位置信息开发指导(ArkTS)](../../docs/zh-cn/application-dev/device/location/location-guidelines.md) |
| 地理编码 | [正地理编码与逆地理编码开发指导](../../docs/zh-cn/application-dev/device/location/geocode-guidelines.md) |
| 地理围栏 | [基于设备自身定位的地理围栏开发指导](../../docs/zh-cn/application-dev/device/location/geofence-guidelines.md) |
| 多模态融合感知 | [Multimodal Awareness Kit简介](../../docs/zh-cn/application-dev/device/stationary/multimodalawareness-kit-intro.md) |
| 多模输入服务 | [Input Kit简介](../../docs/zh-cn/application-dev/device/input/input-overview.md) |
| 输入设备管理 | [输入设备开发指导](../../docs/zh-cn/application-dev/device/input/inputdevice-guidelines.md) |
| 驱动开发套件 | [Driver Development Kit简介](../../docs/zh-cn/application-dev/device/driver/driverdevelopment-overview.md) |
| USB驱动 | [开发适用USB协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/usb-ddk-guidelines.md) |
| HID驱动 | [开发适用HID协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/hid-ddk-guidelines.md) |
| SCSI驱动 | [开发使用SCSI协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/scsi-peripheral-ddk-guidelines.md) |
| 串口驱动 | [开发适用串口协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/usb-serial-ddk-guidelines.md) |
| 设备状态感知 | [Stationary开发指导](../../docs/zh-cn/application-dev/device/stationary/stationary-guidelines.md) |
| 用户动作感知 | [获取用户动作开发指导](../../docs/zh-cn/application-dev/device/stationary/motion-guidelines.md) |
| 用户状态感知 | [用户状态感知开发指导](../../docs/zh-cn/application-dev/device/stationary/userStatus-guidelines.md) |
| 记忆链接 | [记忆链接开发指导](../../docs/zh-cn/application-dev/device/stationary/metadataBinding-guidelines.md) |
| 位置权限 | [申请位置权限开发指导](../../docs/zh-cn/application-dev/device/location/location-permission-guidelines.md) |
| 系统功能键 | [优先响应系统功能键开发指导](../../docs/zh-cn/application-dev/device/input/keypressed-guidelines.md) |
| 鼠标光标 | [鼠标光标开发指导](../../docs/zh-cn/application-dev/device/input/pointerstyle-guidelines.md) |

## 文档统计

- 总文档数：45
