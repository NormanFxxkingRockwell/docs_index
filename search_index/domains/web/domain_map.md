# Web 领域学习地图

## 领域概述

ArkWeb（方舟Web）是OpenHarmony提供的Web组件框架，基于Chromium内核开发，支持在应用中显示Web页面内容。涵盖Web页面加载、生命周期管理、JavaScript交互、渲染模式、深色模式、Cookie与存储管理、安全与隐私、文件上传下载、WebRTC、打印PDF、调试等功能。

## 学习路径

### 第1步：基础入门
了解ArkWeb的基本概念、使用场景和能力范围

- [ArkWeb简介](../../docs/zh-cn/application-dev/web/web-component-overview.md)
- [ArkWeb进程](../../docs/zh-cn/application-dev/web/web_component_process.md)
- [Web组件的生命周期](../../docs/zh-cn/application-dev/web/web-event-sequence.md)

### 第2步：页面加载与渲染
学习Web组件的页面加载方式、渲染模式和布局适配

- [使用Web组件加载页面](../../docs/zh-cn/application-dev/web/web-page-loading-with-web-components.md)
- [Web组件渲染模式](../../docs/zh-cn/application-dev/web/web-render-mode.md)
- [Web组件大小自适应页面内容布局](../../docs/zh-cn/application-dev/web/web-fit-content.md)
- [获取网页内容高度](../../docs/zh-cn/application-dev/web/web-getpage-height.md)

### 第3步：基本属性配置
掌握User-Agent、Cookie、存储、深色模式等基本属性设置

- [User-Agent开发指导](../../docs/zh-cn/application-dev/web/web-default-userAgent.md)
- [管理Cookie及数据存储](../../docs/zh-cn/application-dev/web/web-cookie-and-data-storage-mgmt.md)
- [Web深色模式适配](../../docs/zh-cn/application-dev/web/web-set-dark-mode.md)
- [管理位置权限](../../docs/zh-cn/application-dev/web/web-geolocation-permission.md)
- [使用隐私模式](../../docs/zh-cn/application-dev/web/web-incognito-mode.md)

### 第4步：JavaScript交互
学习应用侧与前端页面的双向JavaScript调用

- [应用侧调用前端页面函数](../../docs/zh-cn/application-dev/web/web-in-app-frontend-page-function-invoking.md)
- [前端页面调用应用侧函数](../../docs/zh-cn/application-dev/web/web-in-page-app-function-invoking.md)
- [建立应用侧与前端页面数据通道](../../docs/zh-cn/application-dev/web/web-app-page-data-channel.md)
- [应用侧与前端页面的相互调用(C/C++)](../../docs/zh-cn/application-dev/web/arkweb-ndk-jsbridge.md)
- [建立应用侧与前端页面数据通道(C/C++)](../../docs/zh-cn/application-dev/web/arkweb-ndk-page-data-channel.md)

### 第5步：页面交互管理
掌握Web组件的滚动、焦点、手势、缩放等交互功能和其他ArkUI组件协同滚动）

- [Web组件嵌套滚动](../../docs/zh-cn/application-dev/web/web-nested-scrolling.md)
- [Web页面显示内容滚动](../../docs/zh-cn/application-dev/web/web-content-scrolling.md)
- [Web组件焦点管理](../../docs/zh-cn/application-dev/web/web-focus.md)
- [使用Web组件的手势与应用交互](../../docs/zh-cn/application-dev/web/web-gesture.md)
- [使用Web组件管理网页缩放](../../docs/zh-cn/application-dev/web/web-scale-zoom.md)
- [Web组件对接软键盘](../../docs/zh-cn/application-dev/web/web-docking-softkeyboard.md)
- [使用Web组件显示网页弹框](../../docs/zh-cn/application-dev/web/web-dialog.md)

### 第6步：安全与隐私
了解Web组件的安全机制和隐私保护功能

- [解决Web组件本地资源跨域问题](../../docs/zh-cn/application-dev/web/web-cross-origin.md)
- [使用Web组件的广告过滤功能](../../docs/zh-cn/application-dev/web/web-adsblock.md)
- [使用智能防跟踪功能](../../docs/zh-cn/application-dev/web/web-intelligent-tracking-prevention.md)
- [坚盾守护模式](../../docs/zh-cn/application-dev/web/web-secure-shield-mode.md)

### 第7步：网络与浏览管理
学习页面跳转、浏览记录、网络请求拦截等功能

- [管理页面跳转及浏览记录导航](../../docs/zh-cn/application-dev/web/web-redirection-and-browsing-history-mgmt.md)
- [拦截Web组件发起的网络请求](../../docs/zh-cn/application-dev/web/web-scheme-handler.md)
- [自定义页面请求响应](../../docs/zh-cn/application-dev/web/web-resource-interception-request-mgmt.md)
- [加速Web页面的访问](../../docs/zh-cn/application-dev/web/web-predictor.md)
- [设置Web组件前进后退缓存](../../docs/zh-cn/application-dev/web/web-set-back-forward-cache.md)

### 第8步：文件操作
掌握文件上传和下载功能

- [使用Web组件上传文件](../../docs/zh-cn/application-dev/web/web-file-upload.md)
- [使用Web组件的下载能力](../../docs/zh-cn/application-dev/web/web-download.md)

### 第9步：多媒体功能
学习WebRTC、画中画、全屏播放、媒体托管等多媒体功能

- [在Web中打开摄像头和麦克风](../../docs/zh-cn/application-dev/web/web-rtc.md)
- [使用Web组件支持画中画](../../docs/zh-cn/application-dev/web/web-picture-in-picture.md)
- [Web组件支持视频沉浸式全屏播放](../../docs/zh-cn/application-dev/web/web_full_screen.md)
- [托管网页中的媒体播放](../../docs/zh-cn/application-dev/web/app-takeovers-web-media.md)

### 第10步：内容处理
掌握打印、PDF、剪贴板、菜单、智能分词等内容处理功能

- [使用Web组件打印前端页面](../../docs/zh-cn/application-dev/web/web-print.md)
- [使用Web组件保存前端页面为PDF](../../docs/zh-cn/application-dev/web/web-createpdf.md)
- [使用Web组件的PDF文档预览能力](../../docs/zh-cn/application-dev/web/web-pdf-preview.md)
- [使用Web组件与系统剪贴板交互处理网页内容](../../docs/zh-cn/application-dev/web/web-clipboard.md)
- [使用Web组件菜单处理网页内容](../../docs/zh-cn/application-dev/web/web-menu.md)
- [使用Web组件的智能分词能力](../../docs/zh-cn/application-dev/web/web-data-detector.md)

### 第11步：高级功能
学习离线Web组件、同层渲染、原生消息、组件迁移等高级功能

- [使用离线Web组件](../../docs/zh-cn/application-dev/web/web-offline-mode.md)
- [同层渲染](../../docs/zh-cn/application-dev/web/web-same-layer.md)
- [使用WebNativeMessagingExtensionAbility组件实现浏览器扩展和原生应用通信场景](../../docs/zh-cn/application-dev/web/web-native-messaging.md)
- [Web组件在不同窗口间迁移](../../docs/zh-cn/application-dev/web/web-component-migrate.md)
- [网页中安全区域计算和避让适配](../../docs/zh-cn/application-dev/web/web-safe-area-insets.md)

### 第12步：调试与问题排查
掌握DevTools调试、崩溃信息收集、白屏问题定位

- [使用DevTools工具调试前端页面](../../docs/zh-cn/application-dev/web/web-debugging-with-devtools.md)
- [使用crashpad收集Web组件崩溃信息](../../docs/zh-cn/application-dev/web/web-crashpad.md)
- [定位与解决Web白屏问题](../../docs/zh-cn/application-dev/web/web-white-screen.md)
- [优化跳转至新Web组件过程中的页面闪烁现象](../../docs/zh-cn/application-dev/web/web-router-flash-optimization.md)

## 快速参考

### 核心 API

| API | 描述 | 使用示例 |
|-----|------|----------|
| Web组件 | 用于在应用中显示Web页面内容的核心组件 | `Web({ src: 'www.example.com', controller: this.controller })` |
| WebviewController | Web组件的控制器，提供页面操作接口 | `controller: webview.WebviewController = new webview.WebviewController()` |
| javaScriptProxy | 将应用侧对象注册到前端页面 | `.javaScriptProxy({ object: this.testObj, name: 'testObjName', methodList: ['test'], controller: this.controller })` |
| runJavaScript | 应用侧调用前端页面JavaScript函数 | `this.controller.runJavaScript('htmlTest()')` |
| loadUrl | 加载指定URL的页面 | `this.controller.loadUrl('www.example.com')` |

### 常用事件

| 事件 | 描述 |
|-----|------|
| onPageBegin | 网页开始加载时触发 |
| onPageEnd | 网页加载完成时触发 |
| onControllerAttached | Controller成功绑定到Web组件时触发 |
| onLoadIntercept | Web组件加载url之前触发，用于判断是否阻止此次访问 |
| onInterceptRequest | Web组件加载url之前触发，用于拦截url并返回响应数据 |

### 常用权限

| 权限 | 描述 |
|-----|------|
| ohos.permission.INTERNET | 网络访问权限，访问在线网页必需 |
| ohos.permission.CAMERA | 摄像头权限，使用WebRTC访问摄像头必需 |
| ohos.permission.MICROPHONE | 麦克风权限，使用WebRTC访问麦克风必需 |
| ohos.permission.LOCATION | 精准定位权限 |
| ohos.permission.APPROXIMATELY_LOCATION | 模糊定位权限 |
| ohos.permission.READ_PASTEBOARD | 访问剪贴板权限 |
| ohos.permission.PRINT | 打印权限 |

### 最佳实践

1. **User-Agent设置**：建议在onControllerAttached回调中设置User-Agent，避免设置失败

2. **JavaScript执行**：建议在onPageEnd回调中执行JavaScript脚本，确保页面加载完成
3. **内存管理**：离线Web组件会占用内存（约200MB），避免一次性创建大量离线Web组件
4. **渲染模式选择**：仅由Web组件构成的应用页面使用异步渲染模式，需要与ArkUI组件协同滚动使用同步渲染模式
5. **跨域资源访问**：使用http/https协议替代file/resource协议，通过onInterceptRequest拦截替换资源