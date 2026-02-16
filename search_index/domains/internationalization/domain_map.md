# Internationalization（国际化与本地化）领域地图

## 概述

Localization Kit（本地化开发服务）是 OpenHarmony 提供的国际化与本地化框架，涵盖应用国际化（界面设计、区域ID与文化习惯、语言与用户偏好、时间（日期、数字与度量衡、电话号码、日历和历法、时区与夏令时、多语言排序、字符处理、本地化名称）、应用本地化（多语言资源、可翻译性、单复数支持）以及本地化测试（伪本地化测试、语言测试）等功能。

## 核心概念

- **国际化**：系统提供的一套能力集，支持设置区域特性、时区和夏令时等，满足应用多语言多文化的设计需求
- **本地化**：开发者为满足不同地区用户在语言和文化方面的需求，针对具体的目标语言对应用进行翻译和定制
- **区域ID**：对用户群体的抽象，包括用户语言、脚本、所在国家或地区以及其他一些文化习惯
- **时区**：全球各国家和地区的经度不同，地方时间也有所不同，因此划分了不同的时区
- **夏令时**：为节约能源而规定的地方时间制度，即在天亮早的夏季人为将时间调快一段时间
- **多语言资源**：创建多个不同的资源目录，放置多种资源，根据语言区域自动选择并加载
- **界面镜像**：确保UI元素布局支持从右到左（RTL）的语言，包括UI布局镜像、UI元素镜像、触控与操作
- **字符处理**：保证在不同语言规则下，以相似的逻辑处理文本，包括字符属性判断、音译、文本标准化等
- **伪本地化测试**：在正式的本地化之前，通过模拟本地化过程帮助发现潜在问题
- **语言测试**：应用国际化和本地化完成后，在正式发布和上市前，需要本地用户专家进行巡检

## 学习路径

### 基础概念

1. [Localization Kit（本地化开发服务）](../../docs/zh-cn/application-dev/internationalization/Readme-CN.md) - 总体介绍
2. [国际化和本地化概述](../../docs/zh-cn/application-dev/internationalization/i18n-l10n.md) - 了解 I18n 和 L10n 的概念

### 应用国际化

3. [国际化界面设计](../../docs/zh-cn/application-dev/internationalization/i18n-ui-design.md) - 界面空间预留与镜像
4. [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/internationalization/i18n-locale-culture.md) - 区域ID组成与扩展参数

### 语言与用户偏好

5. [系统语言与区域](../../docs/zh-cn/application-dev/internationalization/i18n-system-language-region.md) - 系统语言管理
6. [应用偏好语言](../../docs/zh-cn/application-dev/internationalization/i18n-preferred-language.md) - 应用语言设置
7. [用户偏好](../../docs/zh-cn/application-dev/internationalization/i18n-user-preferences.md) - 本地数字和时制偏好

### 数据格式化

8. [时间日期国际化](../../docs/zh-cn/application-dev/internationalization/i18n-time-date.md) - 时间日期格式化
9. [数字与度量衡国际化](../../docs/zh-cn/application-dev/internationalization/i18n-numbers-weights-measures.md) - 数字、货币和度量衡格式化
10. [电话号码格式化](../../docs/zh-cn/application-dev/internationalization/i18n-phone-numbers.md) - 电话号码格式化与验证

### 日历与时区

11. [设置日历和历法](../../docs/zh-cn/application-dev/internationalization/i18n-calendar.md) - 多种历法支持
12. [时区](../../docs/zh-cn/application-dev/internationalization/i18n-time-zone.md) - 时区管理与应用
13. [夏令时跳变](../../docs/zh-cn/application-dev/internationalization/i18n-dst-transition.md) - 夏令时处理

### 排序与字符处理

14. [多语言排序概述](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-overview.md) - 排序规则概述
15. [本地习惯排序](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-local.md) - 按本地习惯排序
16. [创建索引](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-index.md) - 快速查找索引
17. [字符处理](../../docs/zh-cn/application-dev/internationalization/i18n-character-processing.md) - 字符属性、音译、文本标准化

### 本地化名称

18. [本地化名称概述](../../docs/zh-cn/application-dev/internationalization/i18n-display-overview.md) - 本地化表示概念
19. [本地化语言与地区名称](../../docs/zh-cn/application-dev/internationalization/i18n-language-region-display.md) - 语言和地区名称本地化

### 应用本地化

20. [提供多语言资源](../../docs/zh-cn/application-dev/internationalization/l10n-multilingual资源.md) - 资源配置与匹配规则
21. [避免硬编码与拼接](../../docs/zh-cn/application-dev/internationalization/l10n-hard-coding-concatenate.md) - 提升翻译可行性
22. [提供翻译场景](../../docs/zh-cn/application-dev/internationalization/l10n-translation-scene.md) - 提供完整的翻译场景信息
23. [支持单复数](../../docs/zh-cn/application-dev/internationalization/l10n-singular-plural.md) - 单复数形式支持

### 本地化测试

24. [伪本地化测试概述](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-overview.md) - 伪本地化测试概念
25. [翻译伪本地化测试](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-translation.md) - 翻译测试
26. [界面镜像伪本地化测试](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-mirror.md) - RTL 界面测试
27. [语言测试](../../docs/zh-cn/application-dev/internationalization/linguistic-testing.md) - 本地用户专家巡检

## 快速参考

| 主题 | 文档链接 |
|------|----------|
| 国际化概述 | [国际化和本地化概述](../../docs/zh-cn/application-dev/internationalization/i18n-l10n.md) |
| 界面设计 | [国际化界面设计](../../docs/zh-cn/application-dev/internationalization/i18n-ui-design.md) |
| 区域ID | [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/internationalization/i18n-locale-culture.md) |
| 系统语言 | [系统语言与区域](../../docs/zh-cn/application-dev/internationalization/i18n-system-language-region.md) |
| 应用偏好语言 | [应用偏好语言](../../docs/zh-cn/application-dev/internationalization/i18n-preferred-language.md) |
| 时间日期 | [时间日期国际化](../../docs/zh-cn/application-dev/internationalization/i18n-time-date.md) |
| 数字与度量衡 | [数字与度量衡国际化](../../docs/zh-cn/application-dev/internationalization/i18n-numbers-weights-measures.md) |
| 电话号码 | [电话号码格式化](../../docs/zh-cn/application-dev/internationalization/i18n-phone-numbers.md) |
| 日历和历法 | [设置日历和历法](../../docs/zh-cn/application-dev/internationalization/i18n-calendar.md) |
| 时区 | [时区](../../docs/zh-cn/application-dev/internationalization/i18n-time-zone.md) |
| 夏令时 | [夏令时跳变](../../docs/zh-cn/application-dev/internationalization/i18n-dst-transition.md) |
| 多语言排序 | [多语言排序概述](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-overview.md) |
| 字符处理 | [字符处理](../../docs/zh-cn/application-dev/internationalization/i18n-character-processing.md) |
| 本地化名称 | [本地化名称概述](../../docs/zh-cn/application-dev/internationalization/i18n-display-overview.md) |
| 多语言资源 | [提供多语言资源](../../docs/zh-cn/application-dev/internationalization/l10n-multilingual-resources.md) |
| 避免硬编码 | [避免硬编码与拼接](../../docs/zh-cn/application-dev/internationalization/l10n-hard-coding-concatenate.md) |
| 单复数 | [支持单复数](../../docs/zh-cn/application-dev/internationalization/l10n-singular-plural.md) |
| 伪本地化测试 | [伪本地化测试概述](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-overview.md) |
| 语言测试 | [语言测试](../../docs/zh-cn/application-dev/internationalization/linguistic-testing.md) |

## 文档统计

- **文档总数**: 27
- **核心概念**: 10
