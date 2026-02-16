# Device 领域地图

## 领域概述
Device 领域涵盖设备管理相关的五大服务：Driver Development Kit 提供扩展外设驱动开发能力；Input Kit 提供多模输入服务；Location Kit 提供位置服务；Sensor Service Kit 提供传感器与振动服务；Multimodal Awareness Kit 提供多模态融合感知服务。支持 ArkTS 和 C/C++ 两种开发语言，部分功能仅对系统应用开放。

## 核心概念
- **Driver Development Kit**：为外设驱动开发者提供高效、安全、丰富的扩展外设驱动开发解决方案
- **Input Kit**：为多种输入设备提供服务，如触控板、触摸屏、鼠标、键盘等
- **Location Kit**：提供位置能力，使用多种定位技术提供服务
- **Sensor Service Kit**：使应用程序能够从传感器获取原始数据，并提供振感控制能力
- **Multimodal Awareness Kit**：利用设备上的多种传感器数据识别活动、状态和姿态等信息
- **扩展外设驱动**：支持 USB、HID、SCSI、串口协议设备驱动开发
- **输入设备管理**：提供设备热插拔监听、查询指定设备的键盘类型等能力
- **定位与地理编码**：支持 GNSS 定位、基站定位、网络定位、地理编码与逆地理编码
- **传感器与振动**：支持加速度、陀螺仪、计步器、环境光、心率等多种传感器，以及振动控制
- **用户动作与状态感知**：支持获取用户动作、设备状态、用户状态感知

## 文档索引

### Driver Development Kit（驱动开发服务）
1. [Driver Development Kit（驱动开发服务）](../../docs/zh-cn/application-dev/device/driver/Readme-CN.md) - Driver Development Kit 总体介绍
2. [Driver Development Kit简介](../../docs/zh-cn/application-dev/device/driver/driverdevelopment-overview.md) - 驱动开发套件概述
3. [环境准备](../../docs/zh-cn/application-dev/device/driver/environmental-preparation.md) - 开发环境配置
4. [开发无UI界面基础驱动](../../docs/zh-cn/application-dev/device/driver/driverextensionability.md) - 无UI界面驱动开发
5. [开发带UI界面基础驱动](../../docs/zh-cn/application-dev/device/driver/externaldevice-guidelines.md) - 带UI界面驱动开发
6. [开发适用USB协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/usb-ddk-guidelines.md) - USB 驱动开发
7. [开发适用HID协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/hid-ddk-guidelines.md) - HID 驱动开发
8. [开发适用串口协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/usb-serial-ddk-guidelines.md) - 串口驱动开发
9. [开发使用SCSI协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/scsi-peripheral-ddk-guidelines.md) - SCSI 驱动开发
10. [常见问题](../../docs/zh-cn/application-dev/device/driver/externaldevice-faqs.md) - 驱动开发常见问题
11. [扩展外设驱动开发术语) - 驱动开发术语

### Input Kit（多模输入服务）
12. [Input Kit（多模输入服务）](../../docs/zh-cn/application-dev/device/input/Readme-CN.md) - Input Kit 总体介绍
13. [Input Kit简介](../../docs/zh-cn/application-dev/device/input/input-overview.md) - 多模输入服务概述
14. [输入设备开发指导](../../docs/zh-cn/application-dev/device/input/inputdevice-guidelines.md) - 输入设备管理
15. [优先响应系统功能键开发指导](../../docs/zh-cn/application-dev/device/input/keypressed-guidelines.md) - 系统功能键开发
16. [鼠标光标开发指导](../../docs/zh-cn/application-dev/device/input/pointerstyle-guidelines.md) - 鼠标光标控制
17. [输入监听开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/device/input/inputmonitor-guidelines-sys.md) - 输入监听
18. [事件注入开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/device/input/inputeventclient-guidelines-sys.md) - 事件注入
19. [全局快捷键开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/device/input/inputconsumer-guidelines-sys.md) - 全局快捷键
20. [系统预置全局快捷键开发指导（仅对系统应用开放）](../../docs/zh-cn/application-dev/device/input/shortkey-guidelines-sys.md) - 系统预置快捷键
21. [事件监听开发指导（C/C++）](../../docs/zh-cn/application-dev/device/input/monitor-guidelines.md) - C/C++ 事件监听
22. [事件拦截开发指导（C/C++）](../../docs/zh-cn/application-dev/device/input/interceptor-guidelines.md) - C/C++ 事件拦截

### Location Kit（位置服务）
23. [Location Kit（位置服务）](../../docs/zh-cn/application-dev/device/driver/Readme-CN.md) - Location Kit 总体介绍
24. [Location Kit简介](../../docs/zh-cn/application-dev/device/location/location-kit-intro.md) - 位置服务概述
25. [申请位置权限开发指导](../../docs/zh-cn/application-dev/device/location/location-permission-guidelines.md) - 位置权限申请
26. [获取设备的位置信息开发指导(ArkTS)](../../docs/zh-cn/application-dev/device/location/location-guidelines.md) - ArkTS 位置获取
27. [获取设备的位置信息开发指导(C/C++)](../../docs/zh-cn/application-dev/device/location/location-guidelines-capi.md) - C/C++ 位置获取
28. [正地理编码与逆地理编码开发指导](../../docs/zh-cn/application-dev/device/location/geocode-guidelines.md) - 地理编码
29. [基于设备自身定位的地理围栏开发指导](../../docs/zh-cn/application-dev/device/location/geofence-guidelines.md) - 地理围栏
30. [相关实例](../../docs/zh-cn/application-dev/device/location/app-samples.md) - 位置服务示例

### Sensor Service Kit（传感器服务）
31. [Sensor Service（传感器服务）](../../docs/zh-cn/application-dev/device/sensor/Readme-CN.md) - Sensor Service Kit 总体介绍
32. [Sensor Service Kit开发简介](../../docs/zh-cn/application-dev/device/sensor/sensorservice-kit-intro.md) - 传感器服务概述
33. [传感器开发概述](../../docs/zh-cn/application-dev/device/sensor/sensor-overview.md) - 传感器类型介绍
34. [传感器开发指导(ArkTS)](../../docs/zh-cn/application-dev/device/sensor/sensor-guidelines.md) - ArkTS 传感器开发
35. [传感器开发指导(C/C++)](../../docs/zh-cn/application-dev/device/sensor/sensor-guidelines-capi.md) - C/C++ 传感器开发
36. [振动开发概述](../../docs/zh-cn/application-dev/device/sensor/vibrator-overview.md) - 振动服务概述
37. [振动开发指导(ArkTS)](../../docs/zh-cn/application-dev/device/sensor/vibrator-guidelines.md) - ArkTS 振动开发
38. [振动开发指导(C/C++)](../../docs/zh-cn/application-dev/device/sensor/vibrator-guidelines-capi.md) - C/C++ 振动开发

### Multimodal Awareness Kit（多模态融合感知服务）
39. [Multimodal Awareness Kit（多模态融合感知服务）](../../docs/zh-cn/application-dev/device/stationary/Readme-CN.md) - Multimodal Awareness Kit 总体介绍
40. [Multimodal Awareness Kit简介](../../docs/zh-cn/application-dev/device/stationary/multimodalawareness-kit-intro.md) - 多模态融合感知概述
41. [获取用户动作开发指导](../../docs/zh-cn/application-dev/device/stationary/motion-guidelines.md) - 用户动作感知
42. [设备状态) - 设备状态感知
43. [用户状态感知开发指导](../../docs/zh-cn/application-dev/device/stationary/userStatus-guidelines.md) - 用户状态感知
44. [记忆链接开发指导](../../docs/zh-cn/application-dev/device/stationary/metadataBinding-guidelines.md) - 记忆链接

## 学习路径
推荐的学习顺序：

1. **基础了解**：先阅读各 Kit 的简介文档，了解基本概念
2. **Driver Development Kit**：学习扩展外设驱动开发，从环境准备开始
3. **Input Kit**：学习多模输入服务，了解输入设备管理和事件处理
4. **Location Kit**：学习位置服务，了解定位和地理编码
5. **Sensor Service Kit**：学习传感器和振动服务
6. **Multimodal Awareness Kit**：学习多模态融合感知服务

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| Driver Development Kit | [Driver Development Kit（驱动开发服务）](../../docs/zh-cn/application-dev/device/driver/Readme-CN.md) |
| Input Kit | [Input Kit（多模输入服务）](../../docs/zh-cn/application-dev/device/input/Readme-CN.md) |
| Location Kit | [Location Kit（位置服务）](../../docs/zh-cn/application-dev/device/location/Readme-CN.md) |
| Sensor Service Kit | [Sensor Service Kit（传感器服务）](../../docs/zh-cn/application-dev/device/sensor/Readme-CN.md) |
| Multimodal Awareness Kit | [Multimodal Awareness Kit（多模态融合感知服务）](../../docs/zh-cn/application-dev/device/stationary/Readme-CN.md) |
| 扩展外设驱动开发 | [Driver Development Kit简介](../../docs/zh-cn/application-dev/device/driver/driverdevelopment-overview.md) |
| USB驱动 | [开发适用USB协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/usb-ddk-guidelines.md) |
| HID驱动 | [开发适用HID协议的设备驱动](../../docs/zh-cn/application-dev/device/driver/hid-ddk-guidelines.md) |
| 输入设备管理 | [输入设备开发指导](../../docs/zh-cn/application-dev/device/input/inputdevice-guidelines.md) |
| 系统功能键 | [优先响应系统功能键开发指导](../../docs/zh-cn/application-dev/device/input/keypressed-guidelines.md) |
| 鼠标光标 | [鼠标光标开发指导](../../docs/zh-cn/application-dev/device/input/pointerstyle-guidelines.md) |
| 位置服务 | [Location Kit简介](../../docs/zh-cn/application-dev/device/location/location-kit-intro.md) |
| 定位 | [获取设备的位置信息开发指导(ArkTS)](../../docs/zh-cn/application-dev/device/location/location-guidelines.md) |
| 地理编码 | [正地理编码与逆地理编码开发指导](../../docs/zh-cn/application-dev/device/location/geocode-guidelines.md) |
| 地理围栏 | [基于设备自身定位的地理围栏开发指导](../../docs/zh-cn/application-dev/device/location/geofence-guidelines.md) |
| 传感器 | [传感器开发概述](../../docs/zh-cn/application-dev/device/sensor/sensor-overview.md) |
| 振动 | [振动开发概述](../../docs/zh-cn/application-dev/device/sensor/vibrator-overview.md) |
| 用户动作感知 | [获取用户动作开发指导](../../docs/zh-cn/application-dev/device/stationary/motion-guidelines.md) |
| 设备状态感知 | [设备状态感知开发指导](../../docs/zh-cn/application-dev/device/stationary/deviceStatus-guidelines.md) |
| 用户状态感知 | [用户状态感知开发指导](../../docs/zh-cn/application-dev/device/stationary/userStatus-guidelines.md) |

## 统计信息
- 文档总数：45
- 核心概念：10
- 支持语言：ArkTS、C/C++
- 系统应用专用文档：3
