# Contacts 领域地图

## 领域概述
Contacts Kit（联系人服务）可以帮助开发者轻松实现联系人的增删改查等功能。该 Kit 提供了一系列 API，可以让开发者在应用中快速集成联系人管理功能。支持通过 Picker 方式选择联系人，无需申请权限。

## 核心概念
- **联系人管理**：对联系人进行增加、删除、修改、查询等操作
- **Picker选择联系人**：通过 Picker 方式拉起联系人列表，无需申请权限
- **权限管理**：读取联系人需要 READ_CONTACTS 权限，添加/删除/更新联系人需要 WRITE_CONTACTS 权限
- **addContactViaUI**：调用新建联系人接口，打开新建联系人 UI 界面
- **saveToExistingContactViaUI**：调用保存至已有联系人接口，选择联系人 UI 界面并完成编辑
- **selectContacts**：调用联系人接口，拉起联系人列表

## 文档索引

### 基础文档
1. [Contacts Kit（联系人服务）](../../docs/zh-cn/application-dev/contacts/Readme-CN.md) - Contacts Kit 总体介绍
2. [Contacts Kit简介](../../docs/zh-cn/application-dev/contacts/contacts-intro.md) - Contacts Kit 功能概述和权限说明

### 联系人管理
3. [使用picker管理联系人](../../docs/zh-cn/application/application-dev/contacts/contacts-addcontactviaui.md) - 使用 Picker 方式管理联系人

## 学习路径
1. [Contacts Kit简介](../../docs/zh-cn/application-dev/contacts/contacts-intro.md) - 了解 Contacts Kit 的基本概念和权限
2. [使用picker管理联系人](../../docs/zh-cn/application-dev/contacts/contacts-addcontactviaui.md) - 学习如何使用 Picker 管理联系人

## 快速参考
| 功能 | 文档路径 |
|------|----------|
| Contacts Kit简介 | [Contacts Kit简介](../../docs/zh-cn/application-dev/contacts/contacts-intro.md) |
| 使用picker管理联系人 | [使用picker管理联系人](../../docs/zh-cn/application-dev/contacts/contacts-addcontactviaui.md) |

## 统计信息
- 文档总数：3
- 核心概念：6
- 主要功能：联系人管理、Picker 选择联系人
- 权限要求：READ_CONTACTS、WRITE_CONTACTS