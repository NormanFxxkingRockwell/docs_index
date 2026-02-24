# onlyfortest 领域地图

## 概述

- **领域名称**: onlyfortest
- **文档数量**: 22
- **章节总数**: 109
- **代码块总数**: 58
- **核心概念数**: 59

## 核心概念

- C++代码段
- ID无嵌套，代码不一致
- ID无嵌套，存在空行
- JavaScript代码段
- Not-相关实例
- Promise
- Samples
- Section
- TaskPool和Worker
- TaskPool注意事项
- TaskPool运作机制
- Test0-Section<sup>7</sup>
- Test1-H2
- Test1-Section
- Test10
- Test11-Section
- Test12-Section<sup>(deprecated)</sup>
- Test2-H2
- Test2-Section<sup>(deprecated)</sup>
- Test3
- Test6
- Test8-H2
- Test8-Section<sup>abc</sup>
- TypeScript代码段
- \@Concurrent装饰器
- async/await
- docs代码和sample中不一致（单行缩进不一致），验证扫描结果
- docs代码和sample中不一致（整段代码缩进不一致），验证扫描结果
- docs代码和sample中不一致（空行），验证扫描结果
- docs文档中的ID在Sample中不存在(不匹配)
- html代码段
- javascript代码段
- java代码段
- json代码段
- js代码段
- shell代码段
- text代码段
- ts代码段
- typescript代码段
- 中文下测试
- 代码段nocheck-fa
- 代码段标注 nocheck
- 多线程并发模型
- 尖括号内容为html中的标签，验证门禁检查功能
- 尖括号内容包含在code块中
- 尖括号内容包含在行内code中
- 尖括号存在转义字符
- 嵌套的ID，docs中不含嵌套部分
- 嵌套的ID，docs中不含嵌套部分(修改4的部分，是否因为空行导致的报错，此文档中，已经取消了空行)
- 废弃接口<sup>(deprecated)</sup>
- 引用全量代码
- 引用部分代码（Exclude字段）
- 文档代码块中，id重复（但是引用的内容一致),验证扫描结果
- 无标注代码段
- 注释不一致（docs：行上 vs Sample:行），代码内容一致
- 相关实例
- 验证代码嵌套
- 验证代码拼接
- 验证注释格式不同

## 文档列表

### 尖括号转义正常场景-系统

- **路径**: 8Release\angle-brackets-sys.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/8Release\angle-brackets-sys.md](../../docs/zh-cn/application-dev/onlyfortest/8Release\angle-brackets-sys.md)
- **章节**: 4
- **代码块**: 1
- **概念**: 尖括号存在转义字符, 尖括号内容包含在行内code中, 尖括号内容包含在code块中, 尖括号内容为html中的标签，验证门禁检查功能

### 尖括号转义正常场景

- **路径**: 8Release\angle-brackets.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/8Release\angle-brackets.md](../../docs/zh-cn/application-dev/onlyfortest/8Release\angle-brackets.md)
- **章节**: 4
- **代码块**: 1
- **概念**: 尖括号存在转义字符, 尖括号内容包含在行内code中, 尖括号内容包含在code块中, 尖括号内容为html中的标签，验证门禁检查功能

### 验证废弃文档中的代码段检测

- **路径**: 9Release\check-deprecated-doc.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/9Release\check-deprecated-doc.md](../../docs/zh-cn/application-dev/onlyfortest/9Release\check-deprecated-doc.md)
- **章节**: 9
- **代码块**: 9
- **概念**: js代码段, ts代码段, JavaScript代码段, javascript代码段, TypeScript代码段...

### 验证代码段检测---不检测

- **路径**: 9Release\check-illegal-code.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/9Release\check-illegal-code.md](../../docs/zh-cn/application-dev/onlyfortest/9Release\check-illegal-code.md)
- **章节**: 7
- **代码块**: 6
- **概念**: C++代码段, json代码段, java代码段, html代码段, text代码段...

### 验证代码段检测---需检测

- **路径**: 9Release\check-legal-code.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/9Release\check-legal-code.md](../../docs/zh-cn/application-dev/onlyfortest/9Release\check-legal-code.md)
- **章节**: 9
- **代码块**: 9
- **概念**: js代码段, ts代码段, JavaScript代码段, javascript代码段, TypeScript代码段...

### 验证示例代码同源--异常场景1

- **路径**: arkts-utils\ason-parsing-generation-Abnormal-1.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-1.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-1.md)
- **章节**: 4
- **代码块**: 4
- **概念**: ID无嵌套，存在空行, docs文档中的ID在Sample中不存在(不匹配), 引用部分代码（Exclude字段）, 嵌套的ID，docs中不含嵌套部分(修改4的部分，是否因为空行导致的报错，此文档中，已经取消了空行)

### 验证示例代码同源--异常场景2

- **路径**: arkts-utils\ason-parsing-generation-Abnormal-2.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-2.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-2.md)
- **章节**: 3
- **代码块**: 4
- **概念**: ID无嵌套，代码不一致, 引用部分代码（Exclude字段）, 文档代码块中，id重复（但是引用的内容一致),验证扫描结果

### 验证示例代码同源--异常场景3

- **路径**: arkts-utils\ason-parsing-generation-Abnormal-3.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-3.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-3.md)
- **章节**: 1
- **代码块**: 1
- **概念**: ID无嵌套，代码不一致

### 验证示例代码同源--异常场景4

- **路径**: arkts-utils\ason-parsing-generation-Abnormal-4.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-4.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-4.md)
- **章节**: 3
- **代码块**: 2
- **概念**: ID无嵌套，代码不一致, 嵌套的ID，docs中不含嵌套部分, 注释不一致（docs：行上 vs Sample:行），代码内容一致

### 验证示例代码同源--异常场景5

- **路径**: arkts-utils\ason-parsing-generation-Abnormal-5.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-5.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-Abnormal-5.md)
- **章节**: 2
- **代码块**: 3
- **概念**: 文档代码块中，id重复（但是引用的内容一致),验证扫描结果, 嵌套的ID，docs中不含嵌套部分

### 验证示例代码同源--正常场景

- **路径**: arkts-utils\ason-parsing-generation-normal.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-normal.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\ason-parsing-generation-normal.md)
- **章节**: 2
- **代码块**: 4
- **概念**: 引用全量代码, 引用部分代码（Exclude字段）

### 异步并发 (Promise和async/await)

- **路径**: arkts-utils\async-concurrency-overview.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\async-concurrency-overview.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\async-concurrency-overview.md)
- **章节**: 8
- **代码块**: 8
- **概念**: 验证代码拼接, 验证代码嵌套, docs代码和sample中不一致（空行），验证扫描结果, docs代码和sample中不一致（单行缩进不一致），验证扫描结果, docs代码和sample中不一致（整段代码缩进不一致），验证扫描结果...

### 多线程并发概述

- **路径**: arkts-utils\multi-thread-concurrency-overview.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\multi-thread-concurrency-overview.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\multi-thread-concurrency-overview.md)
- **章节**: 2
- **代码块**: 1
- **概念**: 多线程并发模型, TaskPool和Worker

### TaskPool简介

- **路径**: arkts-utils\taskpool-introduction.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\taskpool-introduction.md](../../docs/zh-cn/application-dev/onlyfortest/arkts-utils\taskpool-introduction.md)
- **章节**: 3
- **代码块**: 5
- **概念**: TaskPool运作机制, TaskPool注意事项, \@Concurrent装饰器

### API Info 测试场景1

- **路径**: media\api-info-TC-one-dev.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/media\api-info-TC-one-dev.md](../../docs/zh-cn/application-dev/onlyfortest/media\api-info-TC-one-dev.md)
- **章节**: 5
- **代码块**: 0
- **概念**: Test0-Section<sup>7</sup>, Test1-Section, Test2-Section<sup>(deprecated)</sup>, Test8-Section<sup>abc</sup>, 中文下测试

### API Info 测试场景2

- **路径**: media\api-info-TC-two-dev.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/media\api-info-TC-two-dev.md](../../docs/zh-cn/application-dev/onlyfortest/media\api-info-TC-two-dev.md)
- **章节**: 6
- **代码块**: 0
- **概念**: Test11-Section, Test12-Section<sup>(deprecated)</sup>, Test0-Section<sup>7</sup>, Test1-Section, Test2-Section<sup>(deprecated)</sup>...

### 原子化服务添加属性测试

- **路径**: media\auto-service-test-dev.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/media\auto-service-test-dev.md](../../docs/zh-cn/application-dev/onlyfortest/media\auto-service-test-dev.md)
- **章节**: 6
- **代码块**: 0
- **概念**: Test1-H2, Test2-H2, Test3, Test6, Test8-H2...

### 相关实例测试

- **路径**: media\sample-test-dev.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/media\sample-test-dev.md](../../docs/zh-cn/application-dev/onlyfortest/media\sample-test-dev.md)
- **章节**: 7
- **代码块**: 0
- **概念**: 相关实例, Not-相关实例, 相关实例, 相关实例, Section...

### 原子化服务添加属性测试（reference文件夹下）

- **路径**: reference\auto-service-test.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/reference\auto-service-test.md](../../docs/zh-cn/application-dev/onlyfortest/reference\auto-service-test.md)
- **章节**: 6
- **代码块**: 0
- **概念**: Test1-H2, Test2-H2, Test3, Test6, Test8-H2...

### reference文件夹下相关实例

- **路径**: reference\sample-test.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/reference\sample-test.md](../../docs/zh-cn/application-dev/onlyfortest/reference\sample-test.md)
- **章节**: 7
- **代码块**: 0
- **概念**: 相关实例, Not-相关实例, 相关实例, 相关实例, Section...

### API Info 测试场景1（reference文件夹下）

- **路径**: reference\api-info-test-kit\api-info-TC-one.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/reference\api-info-test-kit\api-info-TC-one.md](../../docs/zh-cn/application-dev/onlyfortest/reference\api-info-test-kit\api-info-TC-one.md)
- **章节**: 5
- **代码块**: 0
- **概念**: Test0-Section<sup>7</sup>, Test1-Section, Test2-Section<sup>(deprecated)</sup>, Test8-Section<sup>abc</sup>, 中文下测试

### API Info 测试场景2（reference文件夹下）

- **路径**: reference\api-info-test-kit\api-info-TC-two.md
- **引用**: [../../docs/zh-cn/application-dev/onlyfortest/reference\api-info-test-kit\api-info-TC-two.md](../../docs/zh-cn/application-dev/onlyfortest/reference\api-info-test-kit\api-info-TC-two.md)
- **章节**: 6
- **代码块**: 0
- **概念**: Test11-Section, Test12-Section<sup>(deprecated)</sup>, Test0-Section<sup>7</sup>, Test1-Section, Test2-Section<sup>(deprecated)</sup>...

