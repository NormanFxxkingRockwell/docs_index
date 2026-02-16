# Tools 领域学习路径

## 学习路径

### 阶段 1：基础工具使用
1. **SDK命令行工具简介** - 了解工具概览和常用命令
   - 文档：[command-line-tools-overview.md](../../docs/zh-cn/application-dev/tools/command-line-tools-overview.md)
   
2. **aa工具** - 学习应用启动和测试
   - 文档：[aa-tool.md](../../docs/zh-cn/application-dev/tools/aa-tool.md)
   - 关键命令：`aa start`, `aa test`, `aa force-stop`
   
3. **bm工具** - 学习应用安装和管理
   - 文档：[bm-tool.md](../../docs/zh-cn/application-dev/tools/bm-tool.md)
   - 关键命令：`bm install`, `bm uninstall`, `bm dump`

### 阶段 2：打包与签名
4. **打包工具** - 学习应用打包流程
   - 文档：[packing-tool.md](../../docs/zh-cn/application-dev/tools/packing-tool.md)
   - 关键命令：`java -jar app_packing_tool.jar --mode hap`
   
5. **拆包工具** - 学习包解析和解压
   - 文档：[unpacking-tool.md](../../docs/zh-cn/application-dev/tools/unpacking-tool.md)
   - 关键命令：`java -jar app_unpacking_tool.jar --mode hap`
   
6. **二进制签名工具** - 学习代码签名
   - 文档：[binary-sign-tool.md](../../docs/zh-cn/application-dev/tools/binary-sign-tool.md)
   - 关键命令：`binary-sign-tool sign`

### 阶段 3：系统管理工具
7. **param工具** - 学习系统参数管理
   - 文档：[param-tool.md](../../docs/zh-cn/application-dev/tools/param-tool.md)
   - 关键命令：`param get`, `param set`, `param ls`
   
8. **acm工具** - 学习账号管理
   - 文档：[acm-tool.md](../../docs/zh-cn/application-dev/tools/acm-tool.md)
   - 关键命令：`acm create`, `acm delete`, `acm switch`
   
9. **power-shell工具** - 学习电源管理
   - 文档：[power-shell.md](../../docs/zh-cn/application-dev/tools/power-shell.md)
   - 关键命令：`power-shell setmode`, `power-shell wakeup`, `power-shell suspend`
   
10. **network-cfg工具** - 学习网络配置
    - 文档：[network-cfg.md](../../docs/zh-cn/application-dev/tools/network-cfg.md)
    - 关键命令：`network-cfg set http_proxy`

### 阶段 4：调试与分析工具
11. **cem工具** - 学习公共事件管理
    - 文档：[cem-tool.md](../../docs/zh-cn/application-dev/tools/cem-tool.md)
    - 关键命令：`cem publish`, `cem dump`
    
12. **anm工具** - 学习通知管理
    - 文档：[anm-tool.md](../../docs/zh-cn/application-dev/tools/anm-tool.md)
    - 关键命令：`anm dump`, `anm setting`
    
13. **atm工具** - 学习访问控制管理
    - 文档：[atm-tool.md](../../docs/zh-cn/application-dev/tools/atm-tool.md)
    - 关键命令：`atm dump`
    
14. **LLDB工具** - 学习C/C++调试
    - 文档：[lldb-tool-sys.md](../../docs/zh-cn/application-dev/tools/lldb-tool-sys.md)
    - 关键命令：`(lldb) breakpoint`, `(lldb) frame variable`
    
15. **rawheap-translator工具** - 学习内存分析
    - 文档：[rawheap-translator.md](../../docs/zh-cn/application-dev/tools/rawheap-translator.md)
    - 关键命令：`rawheap_translator [rawheap_file] [heapsnapshot_file]`

### 阶段 5：高级工具
16. **mediatool工具** - 学习媒体库资源管理
    - 文档：[mediatool.md](../../docs/zh-cn/application-dev/tools/mediatool.md)
    - 关键命令：`mediatool send`, `mediatool list`, `mediatool recv`
    
17. **toybox工具** - 学习Linux命令集合
    - 文档：[toybox.md](../../docs/zh-cn/application-dev/tools/toybox.md)
    - 包含：ls, cat, grep, ps, top等常用命令
    
18. **edm工具** - 学习企业设备管理
    - 文档：[edm-tool.md](../../docs/zh-cn/application-dev/tools/edm-tool.md)
    - 关键命令：`edm enable-admin`, `edm disable-admin`
    
19. **devicedebug工具**** - 学习进程调试
    - 文档：[devicedebug-tool.md](../../docs/zh-cn/application-dev/tools/devicedebug-tool.md)
    - 关键命令：`devicedebug kill`
    
20. **restool工具** - 学习资源编译
    - 文档：[restool.md](../../docs/zh-cn/application-dev/tools/restool.md)
    - 关键命令：`restool -i entry/src/main -j entry/src/main/module.json`

### 阶段 6：辅助工具
21. **扫描工具** - 学习包分析
    - 文档：[app-check-tool.md](../../docs/zh-cn/application-dev/tools/app-check-tool.md)
    - 关键命令：`java -jar app_check_tool.jar --input ./test.app --out-path ./test --stat-duplicate true`
    
22. **OpenHarmony SDK升级助手** - 学习SDK升级适配
    - 文档：[openharmony_sdk_upgrade_assistant.md](../../docs/zh-cn/application-dev/tools/openharmony_sdk_upgrade_assistant.md)
    - 功能：快速解决SDK升级导致的API不兼容问题

## 快速参考

### 应用调试
- 启动应用：`aa start -a EntryAbility -b com.example.myapplication`
- 安装应用：`bm install -p /data/local/tmp/ohos.app.hap`
- 查看日志：`hilog`

### 打包相关
- 打包HAP：`java -jar app_packing_tool.jar --mode hap --json-path module.json --out-path out.hap`
- 解压HAP：`java -jar app_unpacking_tool.jar --mode hap --hap-path in.hap --out-path out`
- 签名文件：`binary-sign-tool sign -keyAlias "A`  -inFile "unsigned-elf" -outFile "signed-elf"`

### 系统管理
- 查看系统参数：`param get const.ohos.apiversion`
- 创建账号：`acm create -n testAccount -t normal`
- 设置电源模式：`power-shell setmode 600`
- 设置网络代理：`network-cfg set http_proxy 127.0.0.1:8080`

### 调试工具
- 发布公共事件：`cem publish --event "testevent"`
- 查看通知：`anm dump -A`
- 查看权限：`atm dump -t`
- 解析内存Dump：`rawheap_translator memleak.rawheap myapp.heapsnapshot`
