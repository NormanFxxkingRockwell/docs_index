# Internationalization 领域地图

## 概述

Localization Kit（本地化开发服务）是 OpenHarmony 提供的国际化与本地化开发框架，帮助开发者构建支持多语言、多文化的全球化应用。涵盖区域ID与文化习惯、系统语言与区域、应用偏好语言、时间日期国际化、数字与度量衡国际化、电话号码格式化、日历和历法设置、时区与夏令时、多语言排序、字符处理、本地化名称、多语言资源配置、伪本地化测试、语言测试等功能。

## 核心概念

- **国际化(I18n)**：系统提供的能力集，支持设置区域特性、时区和夏令时等
- **本地化(L10n)**：针对具体目标语言对应用进行翻译和定制
- **区域ID**：对用户群体的抽象，包括语言、脚本、国家地区和文化习惯
- **多语言资源**：为不同语言和地区准备相应的资源文件
- **时间日期格式化**：将时间和日期转换为指定格式的字符串
- **数字度量衡格式化**：数字、货币和度量衡的格式化与转换
- **时区与夏令时**：处理全球时区差异和夏令时跳变
- **多语言排序**：提供符合不同语言习惯的排序规则
- **字符处理**：字符属性判断、音译、文本标准化等
- **伪本地化测试**：在正式本地化前模拟测试，发现潜在问题

## 学习路径

1. [Localization Kit 概述](../../docs/zh-cn/application-dev/int/internationalization/Readme-CN.md) - 了解整体架构和功能模块
2. [国际化和本地化概述](../../docs/zh-cn/application-dev/int/internationalization/i18n-l10n.md) - 理解 I18n 和 L10n 的概念
3. [国际化界面设计](../../docs/zh-cn/application-dev/int/internationalization/i18n-ui-design.md) - 学习界面空间预留和镜像设计
4. [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/int/internationalization/i18n-locale-culture.md) - 掌握区域ID的组成和扩展参数
5. [系统语言与区域](../../docs/zh-cn/application-dev/int/internationalization/i18n-system-language-region.md) - 学习系统语言和区域的获取与设置
6. [应用偏好语言](../../docs/zh-cn/application-dev/int/internationalization/i18n-preferred-language.md) - 设置应用独立的语言偏好
7. [时间日期国际化](../../docs/zh-cn/application-dev/int/internationalization/i18n-time-date.md) - 时间日期格式化
8. [数字与度量衡国际化](../../docs/zh-cn/application-dev/int/internationalization/i18n-numbers-weights-measures.md) - 数字、货币和度量衡格式化
9. [电话号码格式化](../../docs/zh-cn/application-dev/int/internationalization/i18n-phone-numbers.md) - 电话号码格式化
10. [设置日历和历法](../../docs/zh-cn/application-dev/int/internationalization/i18n-calendar.md) - 支持多种历法
11. [时区](../../docs/zh-cn/application-dev/int/internationalization/i18n-time-zone.md) - 时区处理
12. [夏令时跳变](../../docs/zh-cn/application-dev/int/internationalization/i18n-dst-transition.md) - 夏令时处理
13. [多语言排序概述](../../docs/zh-cn/application-dev/int/internationalization/i18n-sorting-overview.md) - 多语言排序
14. [字符处理](../../docs/zh-cn/application-dev/int/internationalization/i18n-character-processing.md) - 字符处理功能
15. [提供多语言资源](../../docs/zh-cn/application-dev/int/internationalization/l10n-multilingual-resources.md) - 多语言资源配置
16. [伪本地化测试概述](../../docs/zh-cn/application-dev/int/internationalization/pseudo-i18n-testing-overview.md) - 伪本地化测试

## 快速参考

| 功能 | 文档 |
|------|------|
| 国际化概述 | [国际化和本地化概述](../../docs/zh-cn/application-dev/int/internationalization/i18n-l10n.md) |
| 界面设计 | [国际化界面设计](../../docs/zh-cn/application-dev/int/internationalization/i18n-ui-design.md) |
| 区域ID | [区域ID与文化习惯划分](../../docs/zh-cn/application-dev/int/internationalization/i18n-locale-culture.md) |
| 系统语言区域 | [系统语言与区域](../../docs/zh-cn/application-dev/int/internationalization/i18n-system-language-region.md) |
| 应用偏好语言 | [应用偏好语言](../../docs/zh-cn/application-dev/int/internationalization/i18n-preferred-language.md) |
| 时间日期 | [时间日期国际化](../../docs/zh-cn/application-dev/int/internationalization/i18n-time-date.md) |
| 数字度量衡 | [数字与度量衡国际化](../../docs/zh-cn/application-dev/int/internationalization/i18n-numbers-weights-measures.md) |
| 电话号码 | [电话号码格式化](../../docs/zh-cn/application-dev/int/internationalization/i18n-phone-numbers.md) |
| 日历历法 | [设置日历和历法](../../docs/zh-cn/application-dev/int/internationalization/i18n-calendar.md) |
| 时区 | [时区](../../docs/zh-cn/application-dev/int/internationalization/i18n-time-zone.md) |
| 夏令时 | [夏令时跳变](../../docs/zh-cn/application-dev/int/internationalization/i18n-dst-transition.md) |
| 多语言排序 | [多语言排序概述](../../docs/zh-cn/application-dev/int/internationalization/i18n-sorting-overview.md) |
| 字符处理 | [字符处理](../../docs/zh-cn/application-dev/int/internationalization/i18n-character-processing.md) |
| 多语言资源 | [提供多语言资源](../../docs/zh-cn/application-dev/int/internationalization/l10n-multilingual-resources.md) |
| 伪本地化测试 | [伪本地化测试概述](../../docs/zh-cn/application-dev/int/internationalization/pseudo-i18n-testing-overview.md) |
| 语言测试 | [语言测试](../../docs/zh-cn/application-dev/int/internationalization/linguistic-testing.md) |

## 文档统计

- 文档总数：27
- 核心概念：10 个
