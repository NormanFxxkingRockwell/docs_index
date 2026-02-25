# Device 领域地图

## 领域概述

Device Kit 是 OpenHarmony 提供的设备访问服务框架，包含四个主要Kit：

- **Driver Development Kit（驱动开发套件）**：为外设驱动开发者提供高效、安全、丰富的扩展外设驱动开发解决方案，支持USB、HID、SCSI等协议的驱动开发
- **Input Kit（多模输入服务）**：为多种输入设备提供服务，如触控板、触摸屏、鼠标、键盘等，提供输入设备管理、鼠标光标控制、快捷键、事件监听和拦截等功能
- **Location Kit（位置服务）**：提供位置相关功能，包括GNSS定位、基站定位、WLAN/蓝牙定位、地理编码、地理围栏等
- **Sensor Service Kit（传感器服务）**：使应用程序能够从传感器获取原始数据，并提供振感控制能力，支持加速度计、陀螺仪、振动器等多种传感器
- **Multimodal Awareness Kit（多模态融合感知服务）**：提供多模态融合感知能力，包括设备静止状态、用户动作、设备状态感知、用户状态感知和记忆链接等功能

## 核心概念

- 驱动开发
- 输入设备
- 位置服务
- 传感器
- 多模态融合感知
- USB驱动
- HID驱动
- 地理编码
- 地理围栏
- 事件监听

## 文档索引

### Driver Development Kit（驱动开发服务）

| 文档标题 | 路径 | 摘要 |
|---------|------|------|
| Driver Development Kit（驱动开发服务） | docs/zh-cn/application-dev/device/driver/Readme-CN.md | Driver Development Kit的总体介绍，包含Driver Development Kit简介、环境准备、扩展外设基础驱动开发、扩展外设专项驱动开发、常见问题、扩展外设驱动开发术语等功能模块的导航 |
| Driver Development Kit简介 | zh-cn/application-dev/device/driver/driverdevelopment-overview.md | 本文档介绍Driver Development Kit（驱动开发套件），为外设驱动开发者提供高效、安全、丰富的扩展外设驱动开发解决方案ArkTs-API和C-API |
| 环境准备 | docs/zh-cn/application-dev/device/driver/environmental-preparation.md | 本文档介绍驱动开发的环境准备工作，包括开发工具DevEco Studio的安装配置、SDK版本要求、环境检验、HDC配置以及开发设备说明 |
| 开发无UI界面基础驱动 | zh-cn/application-dev/device/driver/driverextensionability.md | 本文档介绍如何使用DriverExtensionAbility开发无UI界面的基础驱动，适用于不需要通过UI界面设置驱动能力的简单设备（如鼠标、键盘等） |
| 开发带UI界面基础驱动 | docs/zh-cn/application-dev/device/driver/externaldevice-guidelines.md | 本文档介绍如何开发带UI界面的基础驱动，适用于各种复合设备，如带有侧键的鼠标、手写板、身份证读等器等设备 |
| 常见问题 | docs/zh-cn/application-dev/device/driver/externaldevice-faqs.md | 本文档提供了外设驱动开发过程中的常见问题及解决方案，包括编译或运行时无法找到头文件、安装HAP时提示版本不匹配等问题 |
| USB DDK Development | docs/en/application-dev/device/driver/usb-ddk-guidelines.md | The USB Driver Development Kit (UsbDdk) is a toolset for developing USB device drivers at the application layer based on user mode |
| 开发适用串口协议的设备驱动 | docs/zh-cn/application-dev/device/driver/usb-serial-ddk-guidelines.md | USBSerialDDK（USB Serial Driver Development Kit）是为开发者提供的USB串口驱动程序开发套件，支持开发者基于用户态，在应用层开发USB串口设备驱动 |
| 开发适用HID协议的设备驱动 | docs/zh-cn/application-dev/device/driver/hid-ddk-guidelines.md | HidDdk（HID Driver Development Kit）是为开发者提供的HID设备驱动程序开发套件，支持开发者基于用户态，在应用层开发HID设备驱动 |
| 开发使用SCSI协议的设备驱动 | docs/zh-cn/application-dev/device/driver/scsi-peripheral-ddk-guidelines.md | 本文档介绍了ScsiPeripheralDDK（SCSI Peripheral Driver Development Kit），它是用于开发SCSI设备驱动程序的套件 |
| 扩展外设驱动开发术语 | docs/zh-cn/application-dev/device/driver/terms.md | 本文档定义了扩展外设驱动开发过程中的常用术语，包括AMS、BMS、CDB、DDK、HID设备、HID协议、逻辑块、SCSI、USB串口、非标外设和标准外设等概念 |

### Input Kit（多模输入服务）

| 文档标题 | 路径 | 摘要 |
|---------|------|------|
| Input Kit（多模输入服务） | ../../docs/zh-cn/application-dev/device/input/Readme-CN.md | Input Kit的总体介绍，包含Input Kit简介、输入设备开发指导、优先响应系统功能键开发指导、鼠标光标开发指导、输入监听开发指导、事件注入开发指导、全局快捷键开发指导、事件监听开发指导、事件拦截开发指导等功能模块的导航 |
| Input Kit简介 | docs/zh-cn/application-dev/device/input/input-overview.md | Input Kit（多模输入Kit）为多种输入设备提供服务，如触控板、触摸屏、鼠标、键盘等。通过对这些输入设备上报驱动事件的归一化处理，确保不同输入设备与用户交互体验统一和流畅 |
| 输入设备开发指导 | docs/zh-cn/application-dev/device/input/inputdevice-guidelines.md | 本文档介绍输入设备管理的开发指导，包括设备热插拔监听、查询指定设备的键盘类型等能力 |
| 优先响应系统功能键开发指导 | docs/zh-cn/application-dev/device/input/keypressed-guidelines.md | 本文档介绍了如何让应用优先响应系统功能键（如音量键、多媒体控制键）的开发指导。支持音量加、音量减、多媒体播放/暂停、多媒体下一首和多媒体上一首按键 |
| 鼠标光标开发指导 | docs/zh-cn/application-dev/device/input/pointerstyle-guidelines.md | 本文档介绍鼠标光标控制功能，包括鼠标光标的显示和隐藏、光标样式的查询和设置 |
| 事件拦截开发指导（C/C++） | docs/zh-cn/application-dev/device/input/interceptor-guidelines.md | 本文档介绍了从API version 12开始，多模为应用提供的创建和删除按键、输入事件（鼠标、触摸和轴事件）拦截的能力 |
| 事件监听开发指导（C/C++） | docs/zh-cn/application-dev/device/input/monitor-guidelines.md | 本文档介绍了从API version 12开始，多模为应用提供的按键、输入事件（鼠标、触屏和轴事件）监听能力，当前仅支持录屏类应用 |
| 事件注入开发指导（仅对系统应用开放） | docs/zh-cn/application-dev/device/input/inputeventclient-guidelines-sys.md | 本文档介绍事件注入功能的开发指导，主要用于系统应用。事件注入提供注入输入事件功能，包括鼠标点击事件、键盘组合键等 |
| 输入监听开发指导（仅对系统应用开放） | docs/zh-cn/application-dev/device/input/inputmonitor-guidelines-sys.md | 本文档介绍输入监听开发指导，仅对系统应用开放。主要介绍如何监听按键、触控板特殊手势等能力 |
| 全局快捷键开发指导（仅对系统应用开放） | docs/zh-cn/application-dev/device/input/inputconsumer-guidelines-sys.md | 本文档介绍全局快捷键功能的开发指导，包括订阅全局快捷键、设置屏蔽按键拦截状态等能力。适用于系统应用开发 |
| 系统预置全局快捷键开发指导（仅对系统应用开放） | docs/zh-cn/application-dev/device/input/shortkey-guidelines-sys.md | 本文档介绍系统预置全局快捷键的开发指导，提供设置快捷键拉起Ability延迟时间的能力 |

### Location Kit（位置服务）

| 文档标题 | 路径 | 摘要 |
|---------|------|------|
| Location Kit（位置服务） | ../../docs/zh-cn/application-dev/device/location/Readme-CN.md | Location Kit的总体介绍，包含Location Kit简介、申请位置权限开发指导、获取设备的位置信息开发指导(ArkTS)、获取设备的位置信息开发指导(C/C++)、正地理编码与逆地理编码开发指导、基于设备自身定位的地理围栏开发指导、相关实例等功能模块的导航 |
| Location Kit简介 | docs/zh-cn/application-dev/device/location/location-kit-intro.md | Location Kit是位置子系统提供的定位服务，支持GNSS定位、基站定位、WLAN/蓝牙定位等多种定位技术。系统使用1984年世界大地坐标系统，通过经度、纬度度描述地球位置 |
| 申请位置权限开发指导 | docs/zh-cn/application-dev/device/location/location-permission-guidelines.md | 本文档介绍申请位置权限的开发指导，包括场景概述、定位权限类型（精准位置、模糊位置、后台位置权限）以及开发步骤 |
| 获取设备的位置信息开发指导(ArkTS) | docs/zh-cn/application-dev/device/location/location-guidelines.md | 本文档介绍了如何使用OpenHarmony位置相关接口获取设备实时位置、历史位置以及监听位置变化。文档涵盖了位置权限申请、位置开关状态检查、单次定位（获取缓存位置或当前位置）和持续定位等开发步骤 |
| 获取设备的位置信息开发指导(C/C++) | docs/zh-cn/application-dev/device/location/location-guidelines-capi.md | 本文档介绍了如何在OpenHarmony中使用C/C++接口获取设备位置信息。主要内容包括：查询位置开关状态、启动和停止定位、设置定位参数、接收位置回调等 |
| 正地理编码与逆地理编码开发指导 | docs/zh-cn/application-dev/device/location/geocode-guidelines.md | 本文档介绍了正地理编码与逆地理编码的开发指导。正地理编码将地理编码转化为具体经纬度坐标，逆地理编码将具体的经纬度坐标转化为地理编码 |
| 基于设备自身定位的地理围栏开发指导 | docs/zh-cn/application-dev/device/location/geofence-guidelines.md | 本文档介绍基于设备自身定位的地理围栏开发指导。地理围栏是虚拟地理边界，当设备进入、离开特定地理区域时可接收自动通知和警告 |
| 相关实例 | docs/zh-cn/application-dev/device/location/app-samples.md | 针对位置开发，提供了相关实例参考链接，包括位置服务（ArkTS）示例代码 |

### Sensor Service Kit（传感器服务）

| 文档标题 | 路径 | 摘要 |
|---------|------|------|
| Sensor Service Kit（传感器服务） | ../../docs/zh-cn/application-dev/device/sensor/Readme-CN.md | Sensor Service Kit（传感器服务）的总体介绍，包含传感器开发概述、传感器开发指导(ArkTS)、传感器开发指导(C/C++)、振动开发概述、振动开发指导(ArkTS)、振动开发指导(C/C++)等功能模块的导航 |
| Sensor Service Kit开发简介 | docs/zh-cn/application-dev/device/sensor/sensorservice-kit-intro.md | Sensor Service Kit（传感器服务）使应用程序能够从传感器获取原始数据，并提供振感控制能力。包含Sensor（传感器）模块和Vibrator（振动）模块，支持本地和动态设备管理 |
| 传感器开发概述 | docs/zh-cn/application-dev/device/sensor/sensor-overview.md | 本文档介绍了传感器开发概述，包括传感器类型、运作机制和约束与限制。开发者可以根据传感器提供的API查询设备上的传感器，订阅传感器数据，并根据传感器数据定制相应的算法开发各类应用 |
| 传感器开发指导 | docs/zh-cn/application-dev/device/sensor/sensor-guidelines.md | 本文档介绍如何使用sensor模块获取传感器数据，包括订阅方向传感器数据感知设备朝向、订阅计步传感器数据统计步数等功能 |
| 传感器开发指导(C/C++) | docs/zh-cn/application-dev/device/sensor/sensor-guidelines-capi.md | 本文档介绍如何使用sensor模块获取传感器数据，包括订阅方向传感器、计步传感器等。文档提供了完整的C/C++开发步骤 |
| 振动开发概述 | docs/zh-cn/application-dev/device/sensor/vibrator-overview.md | 振动器模块服务通过最大化开放马达器件能力，拓展了马达服务，实现了振动与交互融合设计，提供细腻精致的一体化振动体验和差异化体验 |
| 振动开发指导 | docs/zh-cn/application-dev/device/sensor/vibrator-guidelines.md | 本文档介绍振动开发指导，包括场景介绍、接口说明、振动效果说明、开发步骤和相关实例。文档详细介绍了Vibrator模块的各种接口 |
| 振动开发指导(C/C++) | docs/zh-cn/application-dev/device/sensor/vibrator-guidelines-capi.md | 本文档介绍了如何使用Vibrator模块在C/C++中设置不同的振动效果，包括固定时长振动和自定义振动 |

### Multimodal Awareness Kit（多模态融合感知服务）

| 文档标题 | 路径 | 摘要 |
|---------|------|------|
| Multimodal Awareness Kit（多模态融合感知服务） | docs/zh-cn/application-dev/device/stationary/Readme-CN.md | Multimodal Awareness Kit（多模态融合感知服务）是一个提供多模态感知能力的开发套件，包含Stationary开发、用户动作获取、设备状态感知、用户状态感知和记忆链接等开发指导 |
| Multimodal Awareness Kit简介 | docs/zh-cn/application-dev/device/stationary/multimodalawareness-kit-intro.md | 多模态融合感知是利用设备上的多种传感器数据（如加速度计和陀螺仪等）来识别活动、状态和姿态等信息，例如判断设备是否处于静止状态 |
| Stationary开发指导 | docs/zh-cn/application-dev/device/stationary/stationary-guidelines.md | Stationary开发指导文档，介绍了如何使用Stationary模块获取设备状态（绝对静止或相对静止状态）。文档包含场景介绍、参数说明、接口说明、约束与限制以及开发步骤示例 |
| 获取用户动作开发指导 | docs/zh-cn/application-dev/device/stationary/motion-guidelines.md | 本文档介绍如何使用motion模块获取用户动作状态，包括获取操作手状态和握持手状态的开发指导 |
| 设备状态感知开发指导 | docs/zh-cn/application-dev/device/stationary/deviceStatus-guidelines.md | DeviceStatus（设备状态感知）模块提供设备状态感知能力，可以获取到设备的信息，例如：获取设备静止姿态感知状态（支架态） |
| 用户状态感知开发指导 | docs/zh-cn/application-dev/device/stationary/userStatus-guidelines.md | UserStatus（用户状态感知）模块提供用户感知能力，可以感知到操作者特定状态，例如：检测用户年龄组 |
| 记忆链接开发指导 | docs/zh-cn/application-dev/device/stationary/metadataBinding-guidelines.md | MetadataBinding（记忆链接）指由第三方应用提供鸿蒙App Linking链接，系统将当前用户浏览的内容与鸿蒙App Linking链接进行关联并保存的功能 |

## 学习路径

1. **了解Device Kit整体架构** - 首先了解Device Kit包含的四个主要Kit及其功能
2. **Driver Development Kit基础** - 学习驱动开发套件的基本概念和使用场景
3. **环境准备** - 配置开发环境、SDK版本和HDC工具
4. **开发基础驱动** - 学习开发无UI界面的基础驱动
5. **Input Kit基础** - 了解多模输入服务的功能和运作机制
6. **输入设备管理** - 学习输入设备热插拔监听和键盘类型查询
7. **Location Kit基础** - 了解位置服务的定位技术和坐标系统
8. **位置权限申请** - 学习如何申请位置相关权限
9. **获取位置信息** - 学习实时定位、历史位置和位置变化监听
10. **Sensor Service Kit基础** - 了解传感器服务和振动模块的功能
11. **传感器数据获取** - 学习如何订阅和获取传感器数据
12. **振动控制** - 学习如何设置不同的振动效果
13. **Multimodal Awareness Kit基础** - 了解多模态融合感知的基本概念
14. **设备状态感知** - 学习如何获取设备静止状态
15. **用户动作感知** - 学习如何获取用户操作手和握持手状态

## 快速参考

| 标题 | 路径 |
|------|------|
| Driver Development Kit（驱动开发服务） | docs/zh-cn/application-dev/device/driver/Readme-CN.md |
| Driver Development Kit简介 | zh-cn/application-dev/device/driver/driverdevelopment-overview.md |
| 环境准备 | docs/zh-cn/application-dev/device/driver/environmental-preparation.md |
| 开发无UI界面基础驱动 | zh-cn/application-dev/device/driver/driverextensionability.md |
| 开发带UI界面基础驱动 | docs/zh-cn/application-dev/device/driver/externaldevice-guidelines.md |
| 常见问题 | docs/zh-cn/application-dev/device/driver/externaldevice-faqs.md |
| USB DDK Development | docs/en/application-dev/device/driver/usb-ddk-guidelines.md |
| 开发适用串口协议的设备驱动 | docs/zh-cn/application-dev/device/driver/usb-serial-ddk-guidelines.md |
| 开发适用HID协议的设备驱动 | docs/zh-cn/application-dev/device/driver/hid-ddk-guidelines.md |
| 开发使用SCSI协议的设备驱动 | docs/zh-cn/application-dev/device/driver/scsi-peripheral-ddk-guidelines.md |
| 扩展外设驱动开发术语 | docs/zh-cn/application-dev/device/driver/terms.md |
| Input Kit（多模输入服务） | ../../docs/zh-cn/application-dev/device/input/Readme-CN.md |
| Input Kit简介 | docs/zh-cn/application-dev/device/input/input-overview.md |
| 输入设备开发指导 | docs/zh-cn/application-dev/device/input/inputdevice-guidelines.md |
| 优先响应系统功能键开发指导 | docs/zh-cn/application-dev/device/input/keypressed-guidelines.md |
| 鼠标光标开发指导 | docs/zh-cn/application-dev/device/input/pointerstyle-guidelines.md |
| 事件拦截开发指导（C/C++） | docs/zh-cn/application-dev/device/input/interceptor-guidelines.md |
| 事件监听开发指导（C/C++） | docs/zh-cn/application-dev/device/input/monitor-guidelines.md |
| 事件注入开发指导（仅对系统应用开放） | docs/zh-cn/application-dev/device/input/inputeventclient-guidelines-sys.md |
| 输入监听开发指导（仅对系统应用开放） | docs/zh-cn/application-dev/device/input/inputmonitor-guidelines-sys.md |
| 全局快捷键开发指导（仅对系统应用开放） | docs/zh-cn/application-dev/device/input/inputconsumer-guidelines-sys.md |
| 系统预置全局快捷键开发指导（仅对系统应用开放） | docs/zh-cn/application-dev/device/input/shortkey-guidelines-sys.md |
| Location Kit（位置服务） | ../../docs/zh-cn/application-dev/device/location/Readme-CN.md |
| Location Kit简介 | docs/zh-cn/application-dev/device/location/location-kit-intro.md |
| 申请位置权限开发指导 | docs/zh-cn/application-dev/device/location/location-permission-guidelines.md |
| 获取设备的位置信息开发指导(ArkTS) | docs/zh-cn/application-dev/device/location/location-guidelines.md |
| 获取设备的位置信息开发指导(C/C++) | docs/zh-cn/application-dev/device/location/location-guidelines-capi.md |
| 正地理编码与逆地理编码开发指导 | docs/zh-cn/application-dev/device/location/geocode-guidelines.md |
| 基于设备自身定位的地理围栏开发指导 | docs/zh-cn/application-dev/device/location/geofence-guidelines.md |
| 相关实例 | docs/zh-cn/application-dev/device/location/app-samples.md |
| Sensor Service Kit（传感器服务） | ../../docs/zh-cn/application-dev/device/sensor/Readme-CN.md |
|| Sensor Service Kit开发简介 | docs/zh-cn/application-dev/device/sensor/sensorservice-kit-intro.md |
| 传感器开发概述 | docs/zh-cn/application-dev/device/sensor/sensor-overview.md |
| 传感器开发指导 | docs/zh-cn/application-dev/device/sensor/sensor-guidelines.md |
| 传感器开发指导(C/C++) | docs/zh-cn/application-dev/device/sensor/sensor-guidelines-capi.md |
| 振动开发概述 | docs/zh-cn/application-dev/device/sensor/vibrator-overview.md |
| 振动开发指导 | docs/zh-cn/application-dev/device/sensor/vibrator-guidelines.md |
| 振动开发指导(C/C++) | docs/zh-cn/application-dev/device/sensor/vibrator-guidelines-capi.md |
| Multimodal Awareness Kit（多模态融合感知服务） | docs/zh-cn/application-dev/device/stationary/Readme-CN.md |
| Multimodal Awareness Kit简介 | docs/zh-cn/application-dev/device/stationary/multimodalawareness-kit-intro.md |
| Stationary开发指导 | docs/zh-cn/application-dev/device/stationary/stationary-guidelines.md |
| 获取用户动作开发指导 | docs/zh-cn/application-dev/device/stationary/motion-guidelines.md |
| 设备状态感知开发指导 | docs/zh-cn/application-dev/device/stationary/deviceStatus-guidelines.md |
| 用户状态感知开发指导 | docs/zh-cn/application-dev/device/stationary/userStatus-guidelines.md |
| 记忆链接开发指导 | docs/zh-cn/application-dev/device/stationary/metadataBinding-guidelines.md |

## 统计信息

- **文档总数**: 39
- **核心概念数**: 9
- **子领域数**: 5
  - Driver Development Kit: 10个文档
  - Input Kit: 9个文档
  - Location Kit: 7个文档
  - Sensor Service Kit: 7个文档
  - Multimodal Awareness Kit: 6个文档
