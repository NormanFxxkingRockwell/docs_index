# Database 领域地图

## 领域概述
ArkData（方舟数据管理）为开发者提供数据存储、数据管理和数据同步能力，包括标准化数据定义、应用数据持久化（用户首选项、键值型数据库、关系型数据库、向量数据库）、跨设备数据同步、数据可靠性与安全性（备份恢复、加密、访问控制）、跨应用数据共享、应用数据向量化等功能。支持 ArkTS 和 C/C++ 两种开发语言。

## 核心概念
- **用户首选项**：用于保存应用的配置信息，支持 XML 和 GSKV 两种存储模式
- **键值型数据库**：一种非关系型数据库，以"键值"对的形式进行组织、索引和存储
- **关系型数据库**：基于 SQLite 的关系型数据库，支持增删改查、事务、索引、视图、触发器等
- **向量数据库**：支持存储、管理和检索向量数据的数据库，支持向量相似度计算
- **跨设备数据同步**：将数据库中的数据同步到组网环境中的其他设备
- **数据库备份与恢复**：在数据库异常时将数据库恢复到之前的状态
- **数据库加密**：对数据库存储的内容实施有效保护，增强数据库安全性
- **数据分类分级**：基于数据安全标签和设备安全等级进行访问控制
- **跨应用数据共享**：支持不同应用之间的数据协同，包括一对多和多对多数据共享
- **标准化数据定义**：提供 OpenHarmony 跨应用、跨设备的统一数据类型标准
- **统一数据管理框架（UDMF）**：提供数据跨应用、跨设备交互标准，提升数据交互效率

## 文档索引

### 基础文档
1. [ArkData（方舟数据管理）](../../docs/zh-cn/application-dev/database/Readme-CN.md) - ArkData 总体介绍
2. [ArkData简介](../../docs/zh-cn/application-dev/database/data-mgmt-overview.md) - ArkData 功能概览
3. [ArkData术语](../../docs/zh-cn/application-dev/database/data-terminology.md) - ArkData 相关术语解释

### 应用数据持久化
4. [应用数据持久化概述](../../docs/zh-cn/application-dev/database/app-data-persistence-overview.md) - 数据持久化概述
5. [通过用户首选项实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-preferences.md) - 用户首选项功能
6. [通过用户首选项实现数据持久化 (C/C++)](../../docs/zh-cn/application-dev/database/preferences-guidelines.md) - 用户首选项 C/C++ 接口
7. [通过键值型数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-kv-store.md) - 键值型数据库功能
8. [通过关系型数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-rdb-store.md) - 关系型数据库功能
9. [通过关系型数据库实现数据持久化 (C/C++)](../../docs/zh-cn/application-dev/database/native-relational-store-guidelines.md) - 关系型数据库 C/C++ 接口
10. [通过向量数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-vector-store.md) - 向量数据库功能
11. [通过向量数据库实现数据持久化 (C/C++)](../../docs/zh-cn/application-dev/database/native-vector-store-guidelines.md) - 向量数据库 C/C++ 接口

### 跨设备数据同步
12. [同应用跨设备数据同步概述](../../docs/zh-cn/application-dev/database/sync-app-data-across-devices-overview.md) - 跨设备数据同步概述
13. [键值型数据库跨设备数据同步 (ArkTS)](../../docs/zh-cn/application-dev/database/data-sync-of-kv-store.md) - 键值型数据库同步
14. [关系型数据库跨设备数据同步 (ArkTS)](../../docs/zh-cn/application-dev/database/data-sync-of-rdb-store.md) - 关系型数据库同步
15. [分布式数据对象跨设备数据同步 (ArkTS)](../../docs/zh-cn/application-dev/database/data-sync-of-distributed-data-object.md) - 分布式数据对象同步

### 数据可靠性与安全性
16. [数据可靠性与安全性概述](../../docs/zh-cn/application-dev/database/data-reliability-security-overview.md) - 数据可靠性与安全性
17. [数据库备份与恢复 (ArkTS)](../../docs/zh-cn/application-dev/database/data-backup-and-restore.md) - 数据库备份与恢复
18. [数据库备份与恢复 (C/C++)](../../docs/zh-cn/application-dev/database/native-backup-and-restore.md) - 数据库备份与恢复 C/C++ 接口
19. [数据库加密 (ArkTS)](../../docs/zh-cn/application-dev/database/data-encryption.md) - 数据库加密
20. [数据库加密 (C/C++)](../../docs/zh-cn/application-dev/database/native-data-encryption.md) - 数据库加密 C/C++ 接口
21. [基于设备分类和数据分级的访问控制 (ArkTS)](../../docs/zh-cn/application-dev/database/access-control-by-device-and-data-level.md) - 数据分类分级
22. [基于设备分类和数据分级的访问控制 (C/C++)](../../docs/zh-cn/application-dev/database/native-access-control-by-device-and-data-level.md) - 数据分类分级 C/C++ 接口
23. [E类加密数据库的使用 (ArkTS)](../../docs/zh-cn/application-dev/database/encrypted-estore-guidelines.md) - E类加密数据库

### 跨应用数据共享
24. [跨应用数据共享概述](../../docs/zh-cn/application-dev/database/data-share-overview.md) - 跨应用数据共享概述
25. [通过DataShareExtensionAbility实现数据共享 (ArkTS)(仅对系统应用开放)](../../docs/zh-cn/application-dev/database/share-data-by-datashareextensionability-sys.md) - DataShareExtensionAbility 数据共享
26. [通过数据管理服务实现数据共享静默访问 (ArkTS)(仅对系统应用开放)](../../docs/zh-cn/application-dev/database/share-data-by-silent-access-sys.md) - 静默访问数据共享
27. [应用间配置共享 (ArkTS)](../../docs/zh-cn/application-dev/database/share-config.md) - 应用间配置共享

### 标准化数据定义
28. [标准化数据定义概述](../../docs/zh-cn/application-dev/database/unified-data-definition-overview.md) - 标准化数据定义概述
29. [标准化数据类型 (ArkTS)](../../docs/zh-cn/application-dev/database/uniform-data-type-descriptors.md) - 标准化数据类型
30. [标准化数据类型 (C/C++)](../../docs/zh-cn/application-dev/database/uniform-data-type-descriptors-c.md) - 标准化数据类型 C/C++ 接口
31. [标准化数据结构 (ArkTS)](../../docs/zh-cn/application-dev/database/uniform-data-structure.md) - 标准化数据结构
32. [标准化数据结构 (C/C++)](../../docs/zh-cn/application-dev/database/uniform-data-structure-c.md) - 标准化数据结构 C/C++ 接口
33. [基于标准化数据结构的控件（ArkTS）](../../docs/zh-cn/application-dev/database/components-based-on-uniform-data-structure.md) - 基于标准化数据结构的控件
34. [Uniform Type Descriptor(UTD)预置类型列表](../../docs/zh-cn/application-dev/database/uniform-data-type-list.md) - UTD 预置类型列表
35. [通过标准化数据通路实现数据共享 (ArkTS)](../../docs/zh-cn/application-dev/database/unified-data-channels.md) - 标准化数据通路
36. [通过标准化数据通路实现数据共享 (C/C++)](../../docs/zh-cn/application-dev/database/unified-data-channels-c.md) - 标准化数据通路 C/C++ 接口
37. [统一数据管理框架 (C/C++)](../../docs/zh-cn/application-dev/database/native-unified-data-management-framework-guidelines.md) - UDMF C/C++ 接口

### 其他功能
38. [应用数据向量化 (ArkTS)](../../docs/zh-cn/application-dev/database/aip-data-intelligence-embedding.md) - 应用数据向量化
39. [SQLite调试工具指导](../../docs/zh-cn/application-dev/database/sqlite-database-debug-tool.md) - SQLite 调试工具
40. [ArkData常见问题](../../docs/zh-cn/application-dev/database/data-faq.md) - ArkData 常见问题

## 学习路径
推荐的学习顺序：

1. **基础了解**：先阅读 ArkData 简介、术语，了解基本概念
2. **数据持久化**：学习用户首选项、键值型数据库、关系型数据库、向量数据库
3. **跨设备数据同步**：学习跨设备数据同步概述和具体实现方式
4. **数据可靠性与安全性**：学习数据库备份恢复、加密、数据分类分级
5. **跨应用数据共享**：学习跨应用数据共享的各种实现方式
6. **标准化数据定义**：学习 UDMF 标准化数据定义和数据通路
7. **高级功能**：根据需要学习应用数据向量化、SQLite 调试工具等

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| 用户首选项 | [通过用户首选项实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-preferences.md) |
| 键值型数据库 | [通过键值型数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-kv-store.md) |
| 关系型数据库 | [通过关系型数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-rdb-store.md) |
| 向量数据库 | [通过向量数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-vector-store.md) |
| 跨设备数据同步 | [同应用跨设备数据同步概述](../../docs/zh-cn/application-dev/database/sync-app-data-across-devices-overview.md) |
| 数据库备份与恢复 | [数据库备份与恢复 (ArkTS)](../../docs/zh-cn/application-dev/database/data-backup-and-restore.md) |
| 数据库加密 | [数据库加密 (ArkTS)](../../docs/zh-cn/application-dev/database/data-encryption.md) |
| 数据分类分级 | [基于设备分类和数据分级的访问控制 (ArkTS)](../../docs/zh-cn/application-dev/database/access-control-by-device-and-data-level.md) |
| 跨应用数据共享 | [跨应用数据共享概述](../../docs/zh-cn/application-dev/database/data-share-overview.md) |
| 标准化数据定义 | [标准化数据定义概述](../../docs/zh-cn/application-dev/database/unified-data-definition-overview.md) |
| 术语 | [ArkData术语](../../docs/zh-cn/application-dev/database/data-terminology.md) |
| 常见问题 | [ArkData常见问题](../../docs/zh-cn/application-dev/database/data-faq.md) |

## 统计信息
- 文档总数：40
- 核心概念：11
- 支持语言：ArkTS、C/C++
- 系统应用专用文档：2
