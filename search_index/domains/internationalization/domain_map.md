# Internationalization 领域学习地图

## 概述

Localization Kit 是 OpenHarmony 提供的本地化开发服务框架，涵盖国际化（I18n）和本地化（L10n）两大功能。

## 核心概念

- **国际化I18n**：系统提供的能力集，支持设置区域特性、时区和夏令时等
- **本地化L10n**：针对具体目标语言对应用进行翻译和定制
- **区域ID**：由语言、脚本、国家地区和扩展参数组成的标识
- **时区与夏令时**：全球时区管理和夏令时跳变处理
- **多语言排序**：按本地习惯排序和创建索引
- **字符处理**：字符属性判断、音译、文本标准化等
- **伪本地化测试**：模拟本地化过程发现潜在问题
- **界面镜像**：支持从右到左（RTL）语言的界面布局
- **多语言资源**：配置和匹配多语言资源
- **单复数**：支持不同语言的名词单复数格式

## 学习路径

### 1. 基础概念
1. [Localization Kit（本地化开发服务）](../../docs/zh-cn/application-dev/internationalization/Readme-CN.md)
2. [国际化和本地化概述](../../docs/zh-cn/application-dev/internationalization/i18n-l10n.md)

### 2. 国际化设计
3. [国际化界面设计](../../docs/zh-cn/application-dev/internationalization/i18n-ui-design.md)
4. [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/internationalization/i18n-locale-culture.md)

### 3. 语言与区域管理
5. [系统语言与区域](../../docs/zh-cn/application-dev/internationalization/i18n-system-language-region.md)
6. [应用偏好语言](../../docs/zh-cn/application-dev/internationalization/i18n-preferred-language.md)
7. [用户偏好](../../docs/zh-cn/application-dev/internationalization/i18n-user-preferences.md)

### 4. 数据格式化
8. [时间日期国际化](../../docs/zh-cn/application-dev/internationalization/i18n-time-date.md)
9. [数字与度量衡国际化](../../docs/zh-cn/application-dev/internationalization/i18n-numbers-weights-measures.md)
10. [电话号码格式化](../../docs/zh-cn/application-dev/internationalization/i18n-phone-numbers.md)

### 5. 日历与时区
11. [设置日历和历法](../../docs/zh-cn/application-dev/internationalization/i18n-calendar.md)
12. [时区](../../docs/zh-cn/application-dev/internationalization/i18n-time-zone.md)
13. [夏令时跳变](../../docs/zh-cn/application-dev/internationalization/i18n-dst-transition.md)

### 6. 排序与字符处理
14. [多语言排序概述](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-overview.md)
15. [本地习惯排序](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-local.md)
16. [创建索引](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-index.md)
17. [字符处理](../../docs/zh-cn/application-dev/internationalization/i18n-character-processing.md)

### 7. 本地化名称
18. [本地化名称概述](../../docs/zh-cn/application-dev/internationalization/i18n-display-overview.md)
19. [本地化语言与地区名称](../../docs/zh-cn/application-dev/internationalization/i18n-language-region-display.md)

### 8. 本地化实现
20. [提供多语言资源](../../docs/zh-cn/application-dev/internationalization/l10n-multilingual-resources.md)
21. [避免硬编码与拼接](../../docs/zh-cn/application-dev/internationalization/l10n-hard-coding-concatenate.md)
22. [提供翻译场景](../../docs/zh-cn/application-dev/internationalization/l10n-translation-scene.md)
23. [支持单复数](../../docs/zh-cn/application-dev/internationalization/l10n-singular-plural.md)

### 9. 本地化测试
24. [伪本地化测试概述](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-overview.md)
25. [翻译伪本地化测试](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-translation.md)
26. [界面镜像伪本地化测试](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-mirror.md)
27. [语言测试](../../docs/zh-cn/application-dev/internationalization/linguistic-testing.md)

## 快速参考

| 功能 | 文档 |
|------|------|
| 国际化概述 | [国际化和本地化概述](../../docs/zh-cn/application-dev/internationalization/i18n-l10n.md) |
| 界面设计 | [国际化界面设计](../../docs/zh-cn/application-dev/internationalization/i18n-ui-design.md) |
| 区域ID | [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/internationalization/i18n-locale-culture.md) |
| 系统语言与区域 | [系统语言与区域](../../docs/zh-cn/application-dev/internationalization/i18n-system-language-region.md) |
| 应用偏好语言 | [应用偏好语言](../../docs/zh-cn/application-dev/internationalization/i18n-preferred-language.md) |
| 用户偏好 | [用户偏好](../../docs/zh-cn/application-dev/internationalization/i18n-user-preferences.md) |
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
| 支持单复数 | [支持单复数](../../docs/zh-cn/application-dev/internationalization/l10n-singular-plural.md) |
| 伪本地化测试 | [伪本地化测试概述](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-overview.md) |
| 语言测试 | [语言测试](../../docs/zh-cn/application-dev/internationalization/linguistic-testing.md) |
