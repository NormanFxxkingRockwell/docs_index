# Media 领域学习地图

## 领域概述

Media Kit 是 OpenHarmony 提供的媒体服务框架，涵盖音频播放录制、音视频编解码、音视频播控、相机拍照录像、数字版权保护、图片处理、媒体播放录制、媒体文件管理等多种媒体相关功能。支持 ArkTS 和 C/C++ 两种开发语言，部分功能仅对系统应用开放。

## 核心概念

- **音频播放录制**：提供场景化的音频播放和录制接口，支持低时延、低功耗、空间音频等特性
- **音视频编解码**：提供音视频的编解码、媒体文件的解析、封装等原子能力
- **音视频播控**：提供音视频统一管控能力，实现音视频统一展示和控制
- **相机拍照录像**：提供相机应用开发能力，实现预览、拍照、录像等功能
- **数字版权保护**：提供DRM加密节目授权解密的功能
- **图片处理**：提供图片的解码、编码、编辑、元数据处理和图片接收等功能
- **媒体播放录制**：提供音视频播放或录制的各类功能
- **媒体文件管理**：提供管理相册和媒体文件的能力
- **屏幕录制**：提供屏幕录制功能
- **媒体转码**：提供视频转码功能

## 学习路径

### 1. Audio Kit（音频服务）

- [Audio Kit简介](../../docs/zh-cn/application-dev/media/audio/audio-kit-intro.md)
- [使用合适的音频类型](../../docs/zh-cn/application-dev/media/audio/using-right-streamusage-and-sourcetype.md)
- [音频焦点和音频会话介绍](../../docs/zh-cn/application-dev/media/audio/audio-playback-concurrency.md)
- [音频播放开发概述](../../docs/zh-cn/application-dev/media/audio/audio-playback-overview.md)
- [推荐使用OHAudio开发音频播放功能(C/C++)](../../docs/zh-cn/application-dev/media/audio/using-ohaudio-for-playback.md)
- [使用AudioRenderer开发音频播放功能(ArkTS)](../../docs/zh-cn/application-dev/media/audio/using-audiorenderer-for-playback.md)
- [音频录制开发概述](../../docs/zh-cn/application-dev/media/audio/audio-recording-overview.md)
- [推荐使用OHAudio开发音频录制功能(C/C++)](../../docs/zh-cn/application-dev/media/audio/using-ohaudio-for-recording.md)
- [使用AudioCapturer开发音频录制功能(ArkTS)](../../docs/zh-cn/application-dev/media/audio/using-audiocapturer-for-recording.md)

### 2. AVCodec Kit（音视频编解码服务）

- [AVCodec Kit简介](../../docs/zh-cn/application-dev/media/avcodec/avcodec-kit-intro.md)
- [AVCodec支持的格式](../../docs/zh-cn/application-dev/media/avcodec/avcodec-support-formats.md)
- [音频编码](../../docs/zh-cn/application-dev/media/avcodec/audio-encoding.md)
- [音频解码](../../docs/zh-cn/application-dev/media/avcodec/audio-decoding.md)
- [视频编码](../../docs/zh-cn/application-dev/media/avcodec/video-encoding.md)
- [视频解码](../../docs/zh-cn/application-dev/media/avcodec/video-decoding.md)
- [媒体数据封装](../../docs/zh-cn/application-dev/media/avcodec/audio-video-muxer.md)
- [媒体数据解析](../../docs/zh-cn/application-dev/media/avcodec/audio-video-demuxer.md)

### 3. AVSession Kit（音视频播控服务）

- [AVSession Kit简介](../../docs/zh-cn/application-dev/media/avsession/avsession-overview.md)
- [本地媒体会话概述](../../docs/zh-cn/application-dev/media/avsession/local-avsession-overview.md)
- [媒体会话提供方](../../docs/zh-cn/application-dev/media/avsession/using-avsession-developer.md)
- [后台播放](../../docs/zh-cn/application-dev/media/avsession/avsession-background-scene.md)

### 4. Camera Kit（相机服务）

- [Camera Kit简介](../../docs/zh-cn/application-dev/media/camera/camera-overview.md)
- [申请相机开发的权限](../../docs/zh-cn/application-dev/media/camera/camera-preparation.md)
- [相机管理(ArkTS)](../../docs/zh-cn/application-dev/media/camera/camera-device-management.md)
- [会话管理(ArkTS)](../../docs/zh-cn/application-dev/media/camera/camera-session-management.md)
- [预览(ArkTS)](../../docs/zh-cn/application-dev/media/camera/camera-preview.md)
- [拍照(ArkTS)](../../docs/zh-cn/application-dev/media/camera/camera-shooting.md)
- [录像(ArkTS)](../../docs/zh-cn/application-dev/media/camera/camera-recording.md)

### 5. DRM Kit（数字版权保护服务）

- [DRM Kit 简介](../../docs/zh-cn/application-dev/media/drm/drm-overview.md)
- [数字版权保护(ArkTS)](../../docs/zh-cn/application-dev/media/drm/drm-arkts-dev-guide.md)

### 6. Image Kit（图片处理服务）

- [Image Kit简介](../../docs/zh-cn/application-dev/media/image/image-overview.md)
- [使用ImageSource完成图片解码](../../docs/zh-cn/application-dev/media/image/image-decoding.md)
- [使用ImagePacker完成图片编码](../../docs/zh-cn/application-dev/media/image/image-encoding.md)
- [使用PixelMap完成图像变换](../../docs/zh-cn/application-dev/media/image/image-transformation.md)

### 7. Media Kit（媒体服务）

- [Media Kit简介](../../docs/zh-cn/application-dev/media/media/media-kit-intro.md)
- [使用AVPlayer播放音频(ArkTS)](../../docs/zh-cn/application-dev/media/media/using-avplayer-for-playback.md)
- [使用AVPlayer播放视频(ArkTS)](../../docs/zh-cn/application-dev/media/media/video-playback.md)
- [使用AVRecorder录制音频(ArkTS)](../../docs/zh-cn/application-dev/media/media/using-avrecorder-for-recording.md)
- [使用AVRecorder录制视频(ArkTS)](../../docs/zh-cn/application-dev/media/media/video-recording.md)
- [使用AVScreenCaptureRecorder录屏写文件(ArkTS)](../../docs/zh-cn/application-dev/media/media/using-avscreencapture-ArkTs.md)
- [使用AVTranscoder实现视频转码(ArkTS)](../../docs/zh-cn/application-dev/media/media/using-avtranscoder-for-transcodering.md)

### 8. Media Library Kit（媒体文件管理服务）

- [Media Library Kit 简介](../../docs/zh-cn/application-dev/media/medialibrary/photoAccessHelper-overview.md)
- [使用Picker选择媒体库资源](../../docs/zh-cn/application-dev/media/medialibrary/photoAccessHelper-photoviewpicker.md)

## 快速参考

| 功能 | 文档链接 |
|------|----------|
| 音频播放 | [推荐使用OHAudio开发音频播放功能(C/C++)](../../docs/zh-cn/application-dev/media/audio/using-ohaudio-for-playback.md) |
| 音频录制 | [推荐使用OHAudio开发音频录制功能(C/C++)](../../docs/zh-cn/application-dev/media/audio/using-ohaudio-for-recording.md) |
| 音频会话 | [使用AudioSession管理应用音频焦点(ArkTS)](../../docs/zh-cn/application-dev/media/audio/audio-session-management.md) |
| 音视频编解码 | [AVCodec Kit简介](../../docs/zh-cn/application-dev/media/avcodec/avcodec-kit-intro.md) |
| 媒体会话 | [AVSession Kit简介](../../docs/zh-cn/application-dev/media/avsession/avsession-overview.md) |
| 相机预览 | [预览(ArkTS)](../../docs/zh-cn/application-dev/media/camera/camera-preview.md) |
| 相机拍照 | [拍照(ArkTS)](../../docs/zh-cn/application-dev/media/camera/camera-shooting.md) |
| 相机录像 | [录像(ArkTS)](../../docs/zh-cn/application-dev/media/camera/camera-recording.md) |
| 数字版权保护 | [DRM Kit 简介](../../docs/zh-cn/application-dev/media/drm/drm-overview.md) |
| 图片解码 | [使用ImageSource完成图片解码](../../docs/zh-cn/application-dev/media/image/image-decoding.md) |
| 图片编码 | [使用ImagePacker完成图片编码](../../docs/zh-cn/application-dev/media/image/image-encoding.md) |
| 图片编辑 | [使用PixelMap完成图像变换](../../docs/zh-cn/application-dev/media/image/image-transformation.md) |
| 视频播放 | [使用AVPlayer播放视频(ArkTS)](../../docs/zh-cn/application-dev/media/media/video-playback.md) |
| 视频录制 | [使用AVRecorder录制视频(ArkTS)](../../docs/zh-cn/application-dev/media/media/video-recording.md) |
| 屏幕录制 | [使用AVScreenCaptureRecorder录屏写文件(ArkTS)](../../docs/zh-cn/application-dev/media/media/using-avscreencapture-ArkTs.md) |
| 视频转码 | [使用AVTranscoder实现视频转码(ArkTS)](../../docs/zh-cn/application-dev/media/media/using-avtranscoder-for-transcodering.md) |
| 媒体库 | [Media Library Kit 简介](../../docs/zh-cn/application-dev/media/medialibrary/photoAccessHelper-overview.md) |

## 文档统计

- 文档总数：200
- 核心概念：10个
- 子模块：8个（Audio Kit、AVCodec Kit、AVSession Kit、Camera Kit、DRM Kit、Image Kit、Media Kit、Media Library Kit）
