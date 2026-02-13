# AI 领域地图

## 领域概述

AI领域包含MindSpore Lite Kit和Neural Network Runtime Kit两个主要组件。MindSpore Lite是OpenHarmony内置的轻量化AI引擎，提供面向不同硬件设备的AI（推理和训练）能力，已在图像分类、目标识别、人脸识别、文字识别等应用中广泛使用。Neural Network Runtime（NNRt）是面向AI领域的跨芯片推理计算运行时，作为中间桥梁连通上层AI推理框架和底层加速芯片，实现AI模型的跨芯片推理计算。开发者可以使用MindSpore Lite进行端侧AI模型推理和训练，或使用Neural Network Runtime直接对接AI加速硬件进行高性能推理。

## 核心概念

- **MindSpore Lite推理引擎**：OpenHarmony内置的轻量化AI引擎，提供面向不同硬件设备的AI模型推理和训练功能
- **模型转换**：将第三方框架模型（如ONNX、CAFFE、TensorFlow）转换为MindSpore Lite支持的.ms格式
- **端侧训练**：在端侧设备上进行模型训练，让模型在实际业务场景中自适应用户的行为
- **Neural Network Runtime**：面向AI领域的跨芯片推理计算运行时，连通上层AI推理框架和底层加速芯片
- **跨芯片推理**：通过NNRt实现AI模型在不同AI加速硬件上的无感知推理
- **张量**：MindSpore Lite网络运算中的基本数据结构，与数组和矩阵非常相似
- **N-API封装接口**：用于构建ArkTS本地化组件的一套接口，可将C/C++开发的库封装成ArkTS模块
- **模型编译与缓存**：将抽象的模型图编译为硬件相关的计算图，并支持缓存以加快加载速度
- **离线模型推理**：使用硬件厂商的离线模型转换工具转换得到的模型，由硬件厂商负责解析和推理
- **算子支持列表**：MindSpore Lite Kit支持的CPU后端算子列表，用于确保模型转换成功

## 文档索引

### 基础文档

1. [MindSpore Lite Kit简介](../../docs/zh-cn/application-dev/ai/mindspore/MindSpore-Lite-Kit-Introduction.md)
2. [Neural Network Runtime Kit简介](../../docs/zh-cn/application-dev/ai/nnrt/Neural-Network-Runtime-Kit-Introduction.md)

### 核心功能

3. [使用MindSpore Lite进行模型转换](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-converter-guidelines.md)
4. [使用MindSpore Lite进行模型推理 (C/C++)](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-guidelines.md)
5. [使用MindSpore Lite进行端侧训练 (C/C++)](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-train-guidelines.md)

### 应用示例

6. [使用MindSpore Lite实现图像分类（ArkTS）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-guidelines-based-js.md)
7. [使用MindSpore Lite实现图像分类（C/C++）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-guidelines-based-native.md)
8. [使用MindSpore Lite实现语音识别（C/C++）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-asr-based-native.md)

### 高级功能

9. [Neural Network Runtime对接AI推理框架开发指导](../../docs/zh-cn/application-dev/ai/nnrt/neural-network-runtime-guidelines.md)

### 参考文档

10. [MindSpore Lite Kit算子支持列表](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-supported-operators.md)

### 文档索引

11. [MindSpore Lite Kit（昇思推理框架服务）](../../docs/zh-cn/application-dev/ai/mindspore/Readme-CN.md)
12. [Neural Network Runtime Kit（Neural Network运行时服务）](../../docs/zh-cn/application-dev/ai/nnrt/Readme-CN.md)

## 学习路径

1. [MindSpore Lite Kit简介](../../docs/zh-cn/application-dev/ai/mindspore/MindSpore-Lite-Kit-Introduction.md) - 了解MindSpore Lite的基本概念和使用场景
2. [Neural Network Runtime Kit简介](../../docs/zh-cn/application-dev/ai/nnrt/Neural-Network-Runtime-Kit-Introduction.md) - 了解NNRt的架构和功能
3. [使用MindSpore Lite进行模型转换](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-converter-guidelines.md) - 学习如何将第三方模型转换为.ms格式
4. [使用MindSpore Lite进行模型推理 (C/C++)](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-guidelines.md) - 学习模型推理的通用开发流程
5. [使用MindSpore Lite进行端侧训练 (C/C++)](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-train-guidelines.md) - 学习端侧模型训练的开发流程
6. [使用MindSpore Lite实现图像分类（ArkTS）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-guidelines-based-js.md) - 学习使用ArkTS API开发图像分类应用
7. [使用MindSpore Lite实现图像分类（C/C++）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-guidelines-based-native.md) - 学习使用Native API开发图像分类应用
8. [使用MindSpore Lite实现语音识别（C/C++）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-asr-based-native.md) - 学习开发语音识别应用
9. [Neural Network Runtime对接AI推理框架开发指导](../../docs/zh-cn/application-dev/ai/nnrt/neural-network-runtime-guidelines.md) - 学习使用NNRt进行跨芯片推理
10. [MindSpore Lite Kit算子支持列表](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-supported-operators.md) - 查看支持的算子列表

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| MindSpore Lite Kit简介 | [MindSpore Lite Kit简介](../../docs/zh-cn/application-dev/ai/mindspore/MindSpore-Lite-Kit-Introduction.md) |
| Neural Network Runtime Kit简介 | [Neural Network Runtime Kit简介](../../docs/zh-cn/application-dev/ai/nnrt/Neural-Network-Runtime-Kit-Introduction.md) |
| 模型转换 | [使用MindSpore Lite进行模型转换](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-converter-guidelines.md) |
| 模型推理 (C/C++) | [使用MindSpore Lite进行模型推理 (C/C++)](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-guidelines.md) |
| 端侧训练 (C/C++) | [使用MindSpore Lite进行端侧训练 (C/C++)](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-train-guidelines.md) |
| 图像分类 (ArkTS) | [使用MindSpore Lite实现图像分类（ArkTS）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-guidelines-based-js.md) |
| 图像分类 (C/C++) | [使用MindSpore Lite实现图像分类（C/C++）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-guidelines-based-native.md) |
| 语音识别 (C/C++) | [使用MindSpore Lite实现语音识别（C/C++）](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-asr-based-native.md) |
| 算子支持列表 | [MindSpore Lite Kit算子支持列表](../../docs/zh-cn/application-dev/ai/mindspore/mindspore-lite-supported-operators.md) |
| NNRt开发指导 | [Neural Network Runtime对接AI推理框架开发指导](../../docs/zh-cn/application-dev/ai/nnrt/neural-network-runtime-guidelines.md) |

## 统计信息

- 文档总数：12
- 核心概念：10
- 主要组件：2（MindSpore Lite Kit、Neural Network Runtime Kit）