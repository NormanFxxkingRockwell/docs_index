# Database 领域地图

## 领域概述

ArkData（方舟数据管理）是HarmonyOS应用开发中的数据管理框架，提供全面的数据存储、管理和同步能力。该领域涵盖应用数据持久化（用户首选项、键值型数据库、关系型数据库、向量数据库）、跨设备数据同步、跨应用数据共享、标准化数据定义、数据安全与可靠性（加密、备份恢复、访问控制）以及数据向量化等核心功能。支持ArkTS和C/C++两种开发语言，适用于各种应用场景的数据管理需求。

## 核心概念

- **数据持久化**：应用将内存中的数据通过文件或数据库的形式保存到设备上，包括用户首选项、键值型数据库、关系型数据库和向量数据库
- **跨设备数据同步**：将数据库中的数据同步到组网环境中的其他设备，支持键值型数据库、关系型数据库和分布式数据对象
- **跨应用数据共享**：支持不同应用之间的数据协同，包括一对多和多对多数据共享
- **标准化数据定义**：提供OpenHarmony跨应用、跨设备的统一数据类型标准，包括UTD（统一类型描述符）和UDS（统一数据结构）
- **数据安全与可靠性**：包括数据库备份恢复、加密、数据分类分级、E类加密数据库等功能
- **数据向量化**：通过ArkData智慧数据平台（AIP）将非结构化的文本、图像等多模态数据转换成具有语义的向量
- **分布式数据对象**：提供对象型结构数据的分布式能力，适用于临时数据生命周期较短的场景
- **数据备份与恢复**：在数据库被篡改、删除或设备断电等场景下，将数据库恢复至可用状态

## 文档索引

### 基础文档

1. [ArkData（方舟数据管理）](../../docs/zh-cn/application-dev/database/Readme-CN.md) - ArkData总体介绍
2. [ArkData简介](../../docs/zh-cn/application-dev/database/data-mgmt-overview.md) - ArkData功能概览
3. [应用数据持久化概述](../../docs/zh-cn/application-dev/database/app-data-persistence-overview.md) - 数据持久化概述

### 应用数据持久化

4. [通过用户首选项实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-preferences.md) - 用户首选项功能
5. [通过用户首选项实现数据持久化 (C/C++)](../../docs/zh-cn/application-dev/database/preferences-guidelines.md) - 用户首选项C/C++接口
6. [通过键值型数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-kv-store.md) - 键值型数据库功能
7. [通过关系型数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-rdb-store.md) - 关系型数据库功能
8. [通过关系型数据库实现数据持久化 (C/C++)](../../docs/zh-cn/application-dev/database/native-relational-store-guidelines.md) - 关系型数据库C/C++接口
9. [通过向量数据库实现数据持久化 (ArkTS)](../../docs/zh-cn/application-dev/database/data-persistence-by-vector-store.md) - 向量数据库功能
10. [通过向量数据库实现数据持久化 (C/C++)](../../docs/zh-cn/application-dev/database/native-vector-store-guidelines.md) - 向量数据库C/C++接口

### 跨设备数据同步

11. [同应用跨设备数据同步概述](../../docs/zh-cn/application-dev/database/sync-app-data-across-devices-overview.md) - 跨设备数据同步概述
12. [键值型数据库跨设备数据同步 (ArkTS)](../../docs/zh-cn/application-dev/database/data-sync-of-kv-store.md) - 键值型数据库同步
13. [关系型数据库跨设备数据同步 (ArkTS)](../../docs/zh-cn/application-dev/database/data-sync-of-rdb-store.md) - 关系型数据库同步
14. [分布式数据对象跨设备数据同步 (ArkTS)](../../docs/zh-cn/application-dev/database/data-sync-of-distributed-data-object.md) - 分布式数据对象同步

### 数据可靠性与安全性

15. [数据可靠性与安全性概述](../../docs/zh-cn/application-dev/database/data-reliability-security-overview.md) - 数据可靠性与安全性
16. [数据库备份与恢复 (ArkTS)](../../docs/zh-cn/application-dev/database/data-backup-and-restore.md) - 数据库备份与恢复
17. [数据库备份与恢复 (C/C++)](../../docs/zh-cn/application-dev/database/native-backup-and-restore.md) - 数据库备份与恢复C/C++接口
18. [数据库加密 (ArkTS)](../../docs/zh-cn/application-dev/database/data-encryption.md) - 数据库加密
19. [数据库加密 (C/C++)](../../docs/zh-cn/application-dev/database/native-data-encryption.md) - 数据库加密C/C++接口
20. [基于设备分类和数据分级的访问控制 (ArkTS)](../../docs/zh-cn/application-dev/database/access-control-by-device-and-data-level.md) - 数据分类分级
21. [基于设备分类和数据分级的访问控制 (C/C++)](../../docs/zh-cn/application-dev/database/native-access-control-by-device-and-data-level.md) - 数据分类分级C/C++接口
22. [E类加密数据库的使用 (ArkTS)](../../docs/zh-cn/application-dev/database/encrypted-estore-guidelines.md) - E类加密数据库

### 跨应用数据共享

23. [跨应用数据共享概述](../../docs/zh-cn/application-dev/database/data-share-overview.md) - 跨应用数据共享概述
24. [通过DataShareExtensionAbility实现数据共享 (ArkTS)(仅对系统应用开放)](../../docs/zh-cn/application-dev/database/share-data-by-datashareextensionability-sys.md) - DataShareExtensionAbility数据共享
25. [通过数据管理服务实现数据共享静默访问 (ArkTS)(仅对系统应用开放)](../../docs/zh-cn/application-dev/database/share-data-by-silent-access-sys.md) - 静默访问数据共享
26. [应用间配置共享 (ArkTS)](../../docs/zh-cn/application-dev/database/share-config.md) - 应用间配置共享

### 标准化数据定义

27. [标准化数据定义概述](../../docs/zh-cn/application-dev/database/unified-data-definition-overview.md) - 标准化数据定义概述
28. [标准化数据类型 (ArkTS)](../../docs/zh-cn/application-dev/database/uniform-data-type-descriptors.md) - 标准化数据类型
29. [标准化数据类型 (C/C++)](../../docs/zh-cn/application-dev/database/uniform-data-type-descriptors-c.md) - 标准化数据类型C/C++接口
30. [标准化数据结构 (ArkTS)](../../docs/zh-cn/application-dev/database/uniform-data-structure.md) - 标准化数据结构
31. [标准化数据结构 (C/C++)](../../docs/zh-cn/application-dev/database/uniform-data-structure-c.md) - 标准化数据结构C/C++接口
32. [基于标准化数据结构的控件 (ArkTS)](../../docs/zh-cn/application-dev/database/components-based-on-uniform-data-structure.md) - 基于标准化数据结构的控件
33. [UTD预置列表](../../docs/zh-cn/application-dev/database/uniform-data-type-list.md) - UTD预置类型列表
34. [通过标准化数据通路实现数据共享 (ArkTS)](../../docs/zh-cn/application-dev/database/unified-data-channels.md) - 标准化数据通路
35. [通过标准化数据通路实现数据共享 (C/C++)](../../docs/zh-cn/application-dev/database/unified-data-channels-c.md) - 标准化数据通路C/C++接口
36. [UDMF开发指导 (C/C++)](../../docs/zh-cn/application-dev/database/native-unified-data-management-framework-guidelines.md) - UDMF C/C++接口

### 其他功能

37. [应用数据向量化 (ArkTS)](../../docs/zh-cn/application-dev/database/aip-data-intelligence-embedding.md) - 应用数据向量化
38. [SQLite调试工具指导](../../docs/zh-cn/application-dev/database/sqlite-database-debug-tool.md) - SQLite调试工具
39. [ArkData常见问题](../../docs/zh-cn/application-dev/database/data-faq.md) - ArkData常见问题

## 学习路径

推荐的学习顺序：

1. **基础了解**：先阅读ArkData简介、应用数据持久化概述，了解基本概念
2. **数据持久化**：学习用户首选项、键值型数据库、关系型数据库、向量数据库
3. **跨设备数据同步**：学习跨设备数据同步概述和具体实现方式
4. **数据可靠性与安全性**：学习数据库备份恢复、加密、数据分类分级
5. **跨应用数据共享**：学习跨应用数据共享的各种实现方式
6. **标准化数据定义**：学习UDMF标准化数据定义和数据通路
7. **高级功能**：根据需要学习应用数据向量化、SQLite调试工具等

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
| 应用数据向量化 | [应用数据向量化 (ArkTS)](../../docs/zh-cn/application-dev/database/aip-data-intelligence-embedding.md) |
| SQLite调试工具 | [SQLite调试工具指导](../../docs/zh-cn/application-dev/database/sqlite-database-debug-tool.md) |
| 常见问题 | [ArkData常见问题](../../docs/zh-cn/application-dev/database/data-faq.md) |

## 统计信息

- 文档总数：40
- 核心概念：8
- 支持语言：ArkTS、C/C++
- 系统应用专用文档：2
