# Internationalization 领域地图

## 领域概述

Localization Kit（本地化开发服务）是 OpenHarmony 提供的国际化与本地化框架，涵盖应用国际化（界面设计、区域ID与文化习惯、语言与用户偏好、时间日期、数字与度量衡、电话号码、日历和历法、时区与夏令时、多语言排序、字符处理、本地化名称）、应用本地化（多语言资源、可翻译性、单复数支持）以及本地化测试（伪本地化测试、语言测试）等功能。

## 核心概念

- **国际化**：系统提供的一套能力集，支持设置区域特性、时区和夏令时等
- **本地化**：针对具体的目标语言对应用进行翻译和定制
- **区域ID**：对用户群体的抽象，包括语言、脚本、国家地区和文化习惯
- **时间日期格式化**：将时间和日期转换为指定格式的字符串
- **数字与度量衡格式化**：根据用户的语言和地区设置显示数字、货币和度量衡
- **时区与夏令时**：处理全球不同时区的时间和夏令时跳变
- **多语言排序**：按照当地用户习惯进行排序
- **多语言资源**：配置和管理多语言资源文件
- **伪本地化测试**：模拟本地化过程帮助发现潜在问题
- **语言测试**：本地用户专家进行巡检，查看界面显示是否符合当地应用习惯

## 文档索引

### 基础文档

1. [国际化和本地化概述](../../docs/zh-cn/application-dev/internationalization/i18n-l10n.md)
2. [国际化界面设计](../../docs/zh-cn/application-dev/internationalization/i18n-ui-design.md)
3. [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/internationalization/i18n-locale-culture.md)

### 语言与用户偏好

4. [系统语言与区域](../../docs/zh-cn/application-dev/internationalization/i18n-system-language-region.md)
5. [应用偏好语言](../../docs/zh-cn/application-dev/internationalization/i18n-preferred-language.md)
6. [用户偏好](../../docs/zh-cn/application-dev/internationalization/i18n-user-preferences.md)

### 格式化

7. [时间日期国际化](../../docs/zh-cn/application-dev/internationalization/i18n-time-date.md)
8. [数字与度量衡国际化](../../docs/zh-cn/application-dev/internationalization/i18n-numbers-weights-measures.md)
9. [电话号码格式化](../../docs/zh-cn/application-dev/internationalization/i18n-phone-numbers.md)

### 日历与时区

10. [设置日历和历法](../../docs/zh-cn/application-dev/internationalization/i18n-calendar.md)
11. [时区](../../docs/zh-cn/application-dev/internationalization/i18n-time-zone.md)
12. [夏令时跳变](../../docs/zh-cn/application-dev/internationalization/i18n-dst-transition.md)

### 多语言排序

13. [多语言排序概述](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-overview.md)
14. [本地习惯排序](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-local.md)
15. [创建索引](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-index.md)

### 字符处理

16. [字符处理](../../docs/zh-cn/application-dev/internationalization/i18n-character-processing.md)

### 本地化名称

17. [本地化名称概述](../../docs/zh-cn/application-dev/internationalization/i18n-display-overview.md)
18. [本地化语言与地区名称](../../docs/zh-cn/application-dev/internationalization/i18n-language-region-display.md)

### 应用本地化

19. [提供多语言资源](../../docs/zh-cn/application-dev/internationalization/l10n-multilingual-resources.md)
20. [避免硬编码与拼接](../../docs/zh-cn/application-dev/internationalization/l10n-hard-coding-concatenate.md)
21. [提供翻译场景](../../docs/zh-cn/application-dev/internationalization/l10n-translation-scene.md)
22. [支持单复数](../../docs/zh-cn/application-dev/internationalization/l10n-singular-plural.md)

### 本地化测试

23. [伪本地化测试概述](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-overview.md)
24. [翻译伪本地化测试](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-translation.md)
25. [界面镜像伪本地化测试](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-mirror.md)
26. [语言测试](../../docs/zh-cn/application-dev/internationalization/linguistic-testing.md)

## 学习路径

1. [国际化和本地化概述](../../docs/zh-cn/application-dev/internationalization/i18n-l10n.md) - 了解国际化和本地化的基本概念
2. [国际化界面设计](../../docs/zh-cn/application-dev/internationalization/i18n-ui-design.md) - 学习国际化界面设计规则
3. [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/internationalization/i18n-locale-culture.md) - 掌握区域ID的组成和使用
4. [系统语言与区域](../../docs/zh-cn/application-dev/internationalization/i18n-system-language-region.md) - 学习系统语言与区域的管理
5. [应用偏好语言](../../docs/zh-cn/application-dev/internationalization/i18n-preferred-language.md) - 设置应用偏好语言
6. [用户偏好](../../docs/zh-cn/application-dev/internationalization/i18n-user-preferences.md) - 管理用户偏好设置
7. [时间日期国际化](../../docs/zh-cn/application-dev/internationalization/i18n-time-date.md) - 实现时间日期格式化
8. [数字与度量衡国际化](../../docs/zh-cn/application-dev/internationalization/i18n-numbers-weights-measures.md) - 实现数字与度量衡格式化
9. [电话号码格式化](../../docs/zh-cn/application-dev/internationalization/i18n-phone-numbers.md) - 实现电话号码格式化
10. [设置日历和历法](../../docs/zh-cn/application-dev/internationalization/i18n-calendar.md) - 使用日历和历法功能
11. [时区](../../docs/zh-cn/application-dev/internationalization/i18n-time-zone.md) - 处理时区相关功能
12. [夏令时跳变](../../docs/zh-cn/application-dev/internationalization/i18n-dst-transition.md) - 处理夏令时跳变
13. [多语言排序概述](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-overview.md) - 了解多语言排序
14. [本地习惯排序](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-local.md) - 实现本地习惯排序
15. [创建索引](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-index.md) - 创建索引提高查找效率
16. [字符处理](../../docs/zh-cn/application-dev/internationalization/i18n-character-processing.md) - 实现字符处理功能
17. [本地化名称概述](../../docs/zh-cn/application-dev/internationalization/i18n-display-overview.md) - 了解本地化名称
18. [本地化语言与地区名称](../../docs/zh-cn/application-dev/internationalization/i18n-language-region-display.md) - 实现本地化语言与地区名称
19. [提供多语言资源](../../docs/zh-cn/application-dev/internationalization/l10n-multilingual-resources.md) - 配置多语言资源
20. [避免硬编码与拼接](../../docs/zh-cn/application-dev/internationalization/l10n-hard-coding-concatenate.md) - 避免硬编码与拼接
21. [提供翻译场景](../../docs/zh-cn/application-dev/internationalization/l10n-translation-scene.md) - 提供翻译场景信息
22. [支持单复数](../../docs/zh-cn/application-dev/internationalization/l10n-singular-plural.md) - 支持单复数
23. [伪本地化测试概述](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-overview.md) - 了解伪本地化测试
24. [翻译伪本地化测试](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-translation.md) - 进行翻译伪本地化测试
25. [界面镜像伪本地化测试](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-mirror.md) - 进行界面镜像伪本地化测试
26. [语言测试](../../docs/zh-cn/application-dev/internationalization/linguistic-testing.md) - 进行语言测试

## 快速参考

| 功能 | 文档路径 |
|------|----------|
| 国际化概述 | [国际化和本地化概述](../../docs/zh-cn/application-dev/internationalization/i18n-l10n.md) |
| 界面设计 | [国际化界面设计](../../docs/zh-cn/application-dev/internationalization/i18n-ui-design.md) |
| 区域ID | [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/internationalization/i18n-locale-culture.md) |
| 系统语言与区域 | [系统语言与区域](../../docs/zh-cn/application-dev/internationalization/i18n-system-language-region.md) |
| 应用偏好语言 | [应用偏好语言](../../docs/zh-cn/application-dev/internationalization/i18n-preferred-language.md) |
| 用户偏好 | [用户偏好](../../docs/zh-cn/application-dev/internationalization/i18n-user-preferences.md) |
| 时间日期格式化 | [时间日期国际化](../../docs/zh-cn/application-dev/internationalization/i18n-time-date.md) |
| 数字与度量衡格式化 | [数字与度量衡国际化](../../docs/zh-cn/application-dev/internationalization/i18n-numbers-weights-measures.md) |
| 电话号码格式化 | [电话号码格式化](../../docs/zh-cn/application-dev/internationalization/i18n-phone-numbers.md) |
| 日历和历法 | [设置日历和历法](../../docs/zh-cn/application-dev/internationalization/i18n-calendar.md) |
| 时区 | [时区](../../docs/zh-cn/application-dev/internationalization/i18n-time-zone.md) |
| 夏令时跳变 | [夏令时跳变](../../docs/zh-cn/application-dev/internationalization/i18n-dst-transition.md) |
| 多多语言排序 | [多语言排序概述](../../docs/zh-cn/application-dev/internationalization/i18n-sorting-overview.md) |
| 字符处理 | [字符处理](../../docs/zh-cn/application-dev/internationalization/i18n-character-processing.md) |
| 本地化名称 | [本地化名称概述](../../docs/zh-cn/application-dev/internationalization/i18n-display-overview.md) |
| 多语言资源 | [提供多语言资源](../../docs/zh-cn/application-dev/internationalization/l10n-multilingual-resources.md) |
| 避免硬编码与拼接 | [避免硬编码与拼接](../../docs/zh-cn/application-dev/internationalization/l10n-hard-coding-concatenate.md) |
| 支持单复数 | [支持单复数](../../docs/zh-cn/application-dev/internationalization/l10n-singular-plural.md) |
| 伪本地化测试 | [伪本地化测试概述](../../docs/zh-cn/application-dev/internationalization/pseudo-i18n-testing-overview.md) |
| 语言测试 | [语言测试](../../docs/zh-cn/application-dev/internationalization/linguistic-testing.md) |

## 统计信息

- 文档总数：27
- 核心概念：10