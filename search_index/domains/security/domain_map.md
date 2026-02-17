# Security 领域地图

**总文档数**: 265

## 子模块

### AccessToken

**描述**: 程序访问控制（AccessToken）提供应用沙箱隔离、应用权限管理和安全访问机制，包括权限声明、权限申请、权限授权等功能。

**文档数**: 22

**文档列表**:

- [不可通过ACL申请的系统应用可用权限（系统授权）](../../docs/zh-cn/application-dev/security/AccessToken/permissions-for-system-apps-no-acl.md) - `security_AccessToken_permissions-for-system-apps-no-acl`
- [仅MDM应用可用权限](../../docs/zh-cn/application-dev/security/AccessToken/permissions-for-mdm-apps.md) - `security_AccessToken_permissions-for-mdm-apps`
- [企业类应用可用权限](../../docs/zh-cn/application-dev/security/AccessToken/permissions-for-enterprise-apps.md) - `security_AccessToken_permissions-for-enterprise-apps`
- [使用保存控件](../../docs/zh-cn/application-dev/security/AccessToken/savebutton.md) - `security_AccessToken_savebutton`
- [使用粘贴控件](../../docs/zh-cn/application-dev/security/AccessToken/pastebutton.md) - `security_AccessToken_pastebutton`
- [再次向用户申请授权](../../docs/zh-cn/application-dev/security/AccessToken/request-user-authorization-second.md) - `security_AccessToken_request-user-authorization-second`
- [受限开放权限](../../docs/zh-cn/application-dev/security/AccessToken/restricted-permissions.md) - `security_AccessToken_restricted-permissions`
- [可使用ACL申请的系统应用可用权限（系统授权）](../../docs/zh-cn/application-dev/security/AccessToken/permissions-for-system-apps.md) - `security_AccessToken_permissions-for-system-apps`
- [向用户申请单次授权](../../docs/zh-cn/application-dev/security/AccessToken/one-time-authorization.md) - `security_AccessToken_one-time-authorization`
- [向用户申请授权](../../docs/zh-cn/application-dev/security/AccessToken/request-user-authorization.md) - `security_AccessToken_request-user-authorization`
- [声明权限](../../docs/zh-cn/application-dev/security/AccessToken/declare-permissions.md) - `security_AccessToken_declare-permissions`
- [安全控件概述](../../docs/zh-cn/application-dev/security/AccessToken/security-component-overview.md) - `security_AccessToken_security-component-overview`
- [应用权限列表](../../docs/zh-cn/application-dev/security/AccessToken/app-permissions.md) - `security_AccessToken_app-permissions`
- [应用权限管控概述](../../docs/zh-cn/application-dev/security/AccessToken/app-permission-mgmt-overview.md) - `security_AccessToken_app-permission-mgmt-overview`
- [应用权限组列表](../../docs/zh-cn/application-dev/security/AccessToken/app-permission-group-list.md) - `security_AccessToken_app-permission-group-list`
- [开放权限（用户授权）](../../docs/zh-cn/application-dev/security/AccessToken/permissions-for-all-user.md) - `security_AccessToken_permissions-for-all-user`
- [开放权限（系统授权）](../../docs/zh-cn/application-dev/security/AccessToken/permissions-for-all.md) - `security_AccessToken_permissions-for-all`
- [申请受限权限](../../docs/zh-cn/application-dev/security/AccessToken/declare-permissions-in-acl.md) - `security_AccessToken_declare-permissions-in-acl`
- [程序访问控制](../../docs/zh-cn/application-dev/security/AccessToken/Readme-CN.md) - `security_AccessToken_Readme-CN`
- [系统应用可用权限（用户授权）](../../docs/zh-cn/application-dev/security/AccessToken/permissions-for-system-apps-user.md) - `security_AccessToken_permissions-for-system-apps-user`
- [访问控制概述](../../docs/zh-cn/application-dev/security/AccessToken/access-token-overview.md) - `security_AccessToken_access-token-overview`
- [选择申请权限的方式](../../docs/zh-cn/application-dev/security/AccessToken/determine-application-mode.md) - `security_AccessToken_determine-application-mode`

### AssetStoreKit

**描述**: Asset Store Kit（关键资产存储服务）提供安全的关键资产存储和管理功能，支持密码类数据的保护和备份恢复。

**文档数**: 18

**文档列表**:

- [Asset Store Kit简介](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-store-kit-overview.md) - `security_AssetStoreKit_asset-store-kit-overview`
- [Asset Store Kit（关键资产存储服务）](../../docs/zh-cn/application-dev/security/AssetStoreKit/Readme-CN.md) - `security_AssetStoreKit_Readme-CN`
- [保护密码类数据](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-scenario1.md) - `security_AssetStoreKit_asset-scenario1`
- [保护需要用户认证的密码类数据](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-scenario2.md) - `security_AssetStoreKit_asset-scenario2`
- [删除关键资产(ArkTS)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-js-remove.md) - `security_AssetStoreKit_asset-js-remove`
- [删除关键资产(C/C++)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-native-remove.md) - `security_AssetStoreKit_asset-native-remove`
- [同步（备份恢复）关键资产(ArkTS)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-js-sync.md) - `security_AssetStoreKit_asset-js-sync`
- [同步（备份恢复）关键资产(C/C++)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-native-sync.md) - `security_AssetStoreKit_asset-native-sync`
- [操作指定用户空间下的关键资产(仅对系统应用开放)(ArkTS)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-as-user-sys.md) - `security_AssetStoreKit_asset-as-user-sys`
- [新增关键资产(ArkTS)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-js-add.md) - `security_AssetStoreKit_asset-js-add`
- [新增关键资产(C/C++)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-native-add.md) - `security_AssetStoreKit_asset-native-add`
- [更新关键资产(ArkTS)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-js-update.md) - `security_AssetStoreKit_asset-js-update`
- [更新关键资产(C/C++)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-native-update.md) - `security_AssetStoreKit_asset-native-update`
- [查询关键资产(ArkTS)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-js-query.md) - `security_AssetStoreKit_asset-js-query`
- [查询关键资产(C/C++)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-native-query.md) - `security_AssetStoreKit_asset-native-query`
- [查询需要用户认证的关键资产(ArkTS)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-js-query-auth.md) - `security_AssetStoreKit_asset-js-query-auth`
- [管理群组关键资产(ArkTS)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-js-group-access-control.md) - `security_AssetStoreKit_asset-js-group-access-control`
- [管理群组关键资产(C/C++)](../../docs/zh-cn/application-dev/security/AssetStoreKit/asset-native-group-access-control.md) - `security_AssetStoreKit_asset-native-group-access-control`

### CryptoArchitectureKit

**描述**: Crypto Architecture Kit（加密架构框架）提供全面的加密算法支持，包括对称加密、非对称加密、消息摘要、消息认证码、密钥协商、密钥派生等功能。

**文档数**: 114

**文档列表**:

- [AES解密失败返回17630001](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-decryption-error-faq.md) - `security_CryptoArchitectureKit_crypto-aes-decryption-error-faq`
- [Crypto Architecture Kit简介](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-architecture-kit-intro.md) - `security_CryptoArchitectureKit_crypto-architecture-kit-intro`
- [Crypto Architecture Kit（加解密算法框架服务）](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/Readme-CN.md) - `security_CryptoArchitectureKit_Readme-CN`
- [SM2签名数据格式转换 (C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm2-sign-data-format-conversion-ndk.md) - `security_CryptoArchitectureKit_crypto-sm2-sign-data-format-conversion-ndk`
- [SM2签名数据格式转换(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm2-sign-data-format-conversion.md) - `security_CryptoArchitectureKit_crypto-sm2-sign-data-format-conversion`
- [使用3DES对称密钥加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-3des-sym-encrypt-decrypt-ecb.md) - `security_CryptoArchitectureKit_crypto-3des-sym-encrypt-decrypt-ecb`
- [使用3DES对称密钥加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-3des-sym-encrypt-decrypt-ecb-ndk.md) - `security_CryptoArchitectureKit_crypto-3des-sym-encrypt-decrypt-ecb-ndk`
- [使用AES-WRAP算法对对称密钥加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-wrap-encrypt-decrypt.md) - `security_CryptoArchitectureKit_crypto-aes-wrap-encrypt-decrypt`
- [使用AES-WRAP算法对对称密钥加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-wrap-encrypt-decrypt-ndk.md) - `security_CryptoArchitectureKit_crypto-aes-wrap-encrypt-decrypt-ndk`
- [使用AES对称密钥（CBC模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-cbc.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-cbc`
- [使用AES对称密钥（CBC模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-cbc-ndk.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-cbc-ndk`
- [使用AES对称密钥（CCM模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-ccm.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-ccm`
- [使用AES对称密钥（CCM模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-ccm-ndk.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-ccm-ndk`
- [使用AES对称密钥（ECB模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-ecb.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-ecb`
- [使用AES对称密钥（ECB模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-ecb-ndk.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-ecb-ndk`
- [使用AES对称密钥（GCM模式）分段加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-gcm-by-segment`
- [使用AES对称密钥（GCM模式）分段加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment-ndk.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-gcm-by-segment-ndk`
- [使用AES对称密钥（GCM模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-gcm`
- [使用AES对称密钥（GCM模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-ndk.md) - `security_CryptoArchitectureKit_crypto-aes-sym-encrypt-decrypt-gcm-ndk`
- [使用ChaCha20对称密钥加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-chacha20-encrypt-decrypt.md) - `security_CryptoArchitectureKit_crypto-chacha20-encrypt-decrypt`
- [使用ChaCha20对称密钥加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-chacha20-encrypt-decrypt-ndk.md) - `security_CryptoArchitectureKit_crypto-chacha20-encrypt-decrypt-ndk`
- [使用ChaCha20对称密钥（Poly1305模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-chacha20-encrypt-decrypt-poly1305.md) - `security_CryptoArchitectureKit_crypto-chacha20-encrypt-decrypt-poly1305`
- [使用ChaCha20对称密钥（Poly1305模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-chacha20-encrypt-decrypt-poly1305-ndk.md) - `security_CryptoArchitectureKit_crypto-chacha20-encrypt-decrypt-poly1305-ndk`
- [使用DES对称密钥（ECB模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-des-sym-encrypt-decrypt-ecb.md) - `security_CryptoArchitectureKit_crypto-des-sym-encrypt-decrypt-ecb`
- [使用DES对称密钥（ECB模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-des-sym-encrypt-decrypt-ecb-ndk.md) - `security_CryptoArchitectureKit_crypto-des-sym-encrypt-decrypt-ecb-ndk`
- [使用DH进行密钥协商(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-agreement-using-dh.md) - `security_CryptoArchitectureKit_crypto-key-agreement-using-dh`
- [使用DH进行密钥协商(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-agreement-using-dh-ndk.md) - `security_CryptoArchitectureKit_crypto-key-agreement-using-dh-ndk`
- [使用ECC压缩/非压缩公钥格式转换(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-compressed-or-uncompressed-ECC-pubkey.md) - `security_CryptoArchitectureKit_crypto-convert-compressed-or-uncompressed-ECC-pubkey`
- [使用ECC压缩/非压缩公钥格式转换(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-compressed-or-uncompressed-ECC-pubkey-ndk.md) - `security_CryptoArchitectureKit_crypto-convert-compressed-or-uncompressed-ECC-pubkey-ndk`
- [使用ECC压缩/非压缩点格式转换(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-compressed-or-uncompressed-ECC-point.md) - `security_CryptoArchitectureKit_crypto-convert-compressed-or-uncompressed-ECC-point`
- [使用ECC压缩/非压缩点格式转换(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-compressed-or-uncompressed-ECC-point-ndk.md) - `security_CryptoArchitectureKit_crypto-convert-compressed-or-uncompressed-ECC-point-ndk`
- [使用ECDH进行密钥协商(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-agreement-using-ecdh.md) - `security_CryptoArchitectureKit_crypto-key-agreement-using-ecdh`
- [使用ECDH进行密钥协商(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-agreement-using-ecdh-ndk.md) - `security_CryptoArchitectureKit_crypto-key-agreement-using-ecdh-ndk`
- [使用ECDSA密钥对签名验签 (C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-ecdsa-sign-sig-verify-ndk.md) - `security_CryptoArchitectureKit_crypto-ecdsa-sign-sig-verify-ndk`
- [使用ECDSA密钥对签名验签(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-ecdsa-sign-sig-verify.md) - `security_CryptoArchitectureKit_crypto-ecdsa-sign-sig-verify`
- [使用HKDF进行密钥派生(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-using-hkdf.md) - `security_CryptoArchitectureKit_crypto-key-derivation-using-hkdf`
- [使用HKDF进行密钥派生(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-using-hkdf-ndk.md) - `security_CryptoArchitectureKit_crypto-key-derivation-using-hkdf-ndk`
- [使用PBKDF2进行密钥派生(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-using-pbkdf2.md) - `security_CryptoArchitectureKit_crypto-key-derivation-using-pbkdf2`
- [使用PBKDF2进行密钥派生(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-using-pbkdf2-ndk.md) - `security_CryptoArchitectureKit_crypto-key-derivation-using-pbkdf2-ndk`
- [使用RSA密钥对分段签名验签 (PKCS1模式)(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk.md) - `security_CryptoArchitectureKit_crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk`
- [使用RSA密钥对分段签名验签（PKCS1模式）(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md) - `security_CryptoArchitectureKit_crypto-rsa-sign-sig-verify-pkcs1-by-segment`
- [使用RSA密钥对签名验签 (PKCS1模式)(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-ndk.md) - `security_CryptoArchitectureKit_crypto-rsa-sign-sig-verify-pkcs1-ndk`
- [使用RSA密钥对签名验签 (PSS模式)(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pss-ndk.md) - `security_CryptoArchitectureKit_crypto-rsa-sign-sig-verify-pss-ndk`
- [使用RSA密钥对签名验签（PSS模式）(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pss.md) - `security_CryptoArchitectureKit_crypto-rsa-sign-sig-verify-pss`
- [使用RSA密钥对（PKCS1模式）签名及签名恢复(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-recover-pkcs1.md) - `security_CryptoArchitectureKit_crypto-rsa-sign-sig-verify-recover-pkcs1`
- [使用RSA密钥对（PKCS1模式）签名恢复(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-recover-pkcs1-ndk.md) - `security_CryptoArchitectureKit_crypto-rsa-sign-sig-verify-recover-pkcs1-ndk`
- [使用RSA密钥对（PKCS1模式）签名验签(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1.md) - `security_CryptoArchitectureKit_crypto-rsa-sign-sig-verify-pkcs1`
- [使用RSA私钥进行编码解码(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-encoded-decoded.md) - `security_CryptoArchitectureKit_crypto-rsa-encoded-decoded`
- [使用RSA私钥进行编码解码(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-encoded-decoded-ndk.md) - `security_CryptoArchitectureKit_crypto-rsa-encoded-decoded-ndk`
- [使用RSA非对称密钥分段加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md) - `security_CryptoArchitectureKit_crypto-rsa-asym-encrypt-decrypt-by-segment`
- [使用RSA非对称密钥分段加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk.md) - `security_CryptoArchitectureKit_crypto-rsa-asym-encrypt-decrypt-by-segment-ndk`
- [使用RSA非对称密钥（PKCS1_OAEP模式）加解密](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep.md) - `security_CryptoArchitectureKit_crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep`
- [使用RSA非对称密钥（PKCS1模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-pkcs1.md) - `security_CryptoArchitectureKit_crypto-rsa-asym-encrypt-decrypt-pkcs1`
- [使用RSA非对称密钥（PKCS1模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-pkcs1-ndk.md) - `security_CryptoArchitectureKit_crypto-rsa-asym-encrypt-decrypt-pkcs1-ndk`
- [使用SCRYPT进行密钥派生(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-using-scrypt.md) - `security_CryptoArchitectureKit_crypto-key-derivation-using-scrypt`
- [使用SCRYPT进行密钥派生(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-using-scrypt-ndk.md) - `security_CryptoArchitectureKit_crypto-key-derivation-using-scrypt-ndk`
- [使用SM2密文格式转换(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm2-ciphertext-conversion.md) - `security_CryptoArchitectureKit_crypto-sm2-ciphertext-conversion`
- [使用SM2密文格式转换(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm2-ciphertext-conversion-ndk.md) - `security_CryptoArchitectureKit_crypto-sm2-ciphertext-conversion-ndk`
- [使用SM2密钥对签名验签 (C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm2-sign-sig-verify-pkcs1-ndk.md) - `security_CryptoArchitectureKit_crypto-sm2-sign-sig-verify-pkcs1-ndk`
- [使用SM2密钥对签名验签(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm2-sign-sig-verify-pkcs1.md) - `security_CryptoArchitectureKit_crypto-sm2-sign-sig-verify-pkcs1`
- [使用SM2非对称密钥加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm2-asym-encrypt-decrypt.md) - `security_CryptoArchitectureKit_crypto-sm2-asym-encrypt-decrypt`
- [使用SM2非对称密钥加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm2-asym-encrypt-decrypt-ndk.md) - `security_CryptoArchitectureKit_crypto-sm2-asym-encrypt-decrypt-ndk`
- [使用SM4对称密钥（CBC模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm4-sym-encrypt-decrypt-cbc.md) - `security_CryptoArchitectureKit_crypto-sm4-sym-encrypt-decrypt-cbc`
- [使用SM4对称密钥（CBC模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm4-sym-encrypt-decrypt-cbc-ndk.md) - `security_CryptoArchitectureKit_crypto-sm4-sym-encrypt-decrypt-cbc-ndk`
- [使用SM4对称密钥（ECB模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm4-sym-encrypt-decrypt-ecb.md) - `security_CryptoArchitectureKit_crypto-sm4-sym-encrypt-decrypt-ecb`
- [使用SM4对称密钥（ECB模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm4-sym-encrypt-decrypt-ecb-ndk.md) - `security_CryptoArchitectureKit_crypto-sm4-sym-encrypt-decrypt-ecb-ndk`
- [使用SM4对称密钥（GCM模式）分段加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment.md) - `security_CryptoArchitectureKit_crypto-sm4-sym-encrypt-decrypt-gcm-by-segment`
- [使用SM4对称密钥（GCM模式）分段加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk.md) - `security_CryptoArchitectureKit_crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk`
- [使用SM4对称密钥（GCM模式）加解密(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm4-sym-encrypt-decrypt-gcm.md) - `security_CryptoArchitectureKit_crypto-sm4-sym-encrypt-decrypt-gcm`
- [使用SM4对称密钥（GCM模式）加解密(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sm4-sym-encrypt-decrypt-gcm-ndk.md) - `security_CryptoArchitectureKit_crypto-sm4-sym-encrypt-decrypt-gcm-ndk`
- [使用X25519进行密钥协商(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-agreement-using-x25519.md) - `security_CryptoArchitectureKit_crypto-key-agreement-using-x25519`
- [使用X25519进行密钥协商(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-agreement-using-x25519-ndk.md) - `security_CryptoArchitectureKit_crypto-key-agreement-using-x25519-ndk`
- [使用X963KDF进行密钥派生(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-using-x963kdf.md) - `security_CryptoArchitectureKit_crypto-key-derivation-using-x963kdf`
- [使用X963KDF进行密钥派生(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-using-x963kdf-ndk.md) - `security_CryptoArchitectureKit_crypto-key-derivation-using-x963kdf-ndk`
- [使用硬件熵源生成安全随机数(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-random-number-hardware.md) - `security_CryptoArchitectureKit_crypto-generate-random-number-hardware`
- [使用硬件熵源生成安全随机数(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-random-number-hardware-ndk.md) - `security_CryptoArchitectureKit_crypto-generate-random-number-hardware-ndk`
- [使用私钥对象获取公钥对象(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-prikey-to-get-pubkey.md) - `security_CryptoArchitectureKit_crypto-prikey-to-get-pubkey`
- [使用私钥对象获取公钥对象(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-prikey-to-get-pubkey-ndk.md) - `security_CryptoArchitectureKit_crypto-prikey-to-get-pubkey-ndk`
- [分段加解密说明](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-encrypt-decrypt-by-segment.md) - `security_CryptoArchitectureKit_crypto-encrypt-decrypt-by-segment`
- [加解密介绍](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-encryption-decryption-overview.md) - `security_CryptoArchitectureKit_crypto-encryption-decryption-overview`
- [安全随机数生成(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-random-number.md) - `security_CryptoArchitectureKit_crypto-generate-random-number`
- [安全随机数生成(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-random-number-ndk.md) - `security_CryptoArchitectureKit_crypto-generate-random-number-ndk`
- [密钥协商介绍及算法规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-agreement-overview.md) - `security_CryptoArchitectureKit_crypto-key-agreement-overview`
- [密钥派生介绍及算法规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-derivation-overview.md) - `security_CryptoArchitectureKit_crypto-key-derivation-overview`
- [密钥生成与转换介绍](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-key-generation-conversion-overview.md) - `security_CryptoArchitectureKit_crypto-key-generation-conversion-overview`
- [对称密钥加解密算法规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md) - `security_CryptoArchitectureKit_crypto-sym-encrypt-decrypt-spec`
- [对称密钥生成和转换规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md) - `security_CryptoArchitectureKit_crypto-sym-key-generation-conversion-spec`
- [指定PEM格式字符串数据转换非对称密钥对(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-string-data-to-asym-key-pair.md) - `security_CryptoArchitectureKit_crypto-convert-string-data-to-asym-key-pair`
- [指定PEM格式字符串数据转换非对称密钥对(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-string-data-to-asym-key-pair-ndk.md) - `security_CryptoArchitectureKit_crypto-convert-string-data-to-asym-key-pair-ndk`
- [指定二进制数据转换对称密钥(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-binary-data-to-sym-key.md) - `security_CryptoArchitectureKit_crypto-convert-binary-data-to-sym-key`
- [指定二进制数据转换对称密钥(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-binary-data-to-sym-key-ndk.md) - `security_CryptoArchitectureKit_crypto-convert-binary-data-to-sym-key-ndk`
- [指定二进制数据转换非对称密钥对(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-binary-data-to-asym-key-pair.md) - `security_CryptoArchitectureKit_crypto-convert-binary-data-to-asym-key-pair`
- [指定二进制数据转换非对称密钥对(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-convert-binary-data-to-asym-key-pair-ndk.md) - `security_CryptoArchitectureKit_crypto-convert-binary-data-to-asym-key-pair-ndk`
- [指定密钥参数生成非对称密钥对(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-asym-key-pair-from-key-spec.md) - `security_CryptoArchitectureKit_crypto-generate-asym-key-pair-from-key-spec`
- [指定密钥参数生成非对称密钥对(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-asym-key-pair-from-key-spec-ndk.md) - `security_CryptoArchitectureKit_crypto-generate-asym-key-pair-from-key-spec-ndk`
- [消息摘要计算MD5(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-message-digest-md5.md) - `security_CryptoArchitectureKit_crypto-generate-message-digest-md5`
- [消息摘要计算MD5(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-message-digest-md5-ndk.md) - `security_CryptoArchitectureKit_crypto-generate-message-digest-md5-ndk`
- [消息摘要计算SHA256(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-message-digest.md) - `security_CryptoArchitectureKit_crypto-generate-message-digest`
- [消息摘要计算SHA256(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-message-digest-ndk.md) - `security_CryptoArchitectureKit_crypto-generate-message-digest-ndk`
- [消息摘要计算SHA3(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-message-digest-sha3.md) - `security_CryptoArchitectureKit_crypto-generate-message-digest-sha3`
- [消息摘要计算SHA3-256(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-message-digest-sha3-ndk.md) - `security_CryptoArchitectureKit_crypto-generate-message-digest-sha3-ndk`
- [消息摘要计算介绍及算法规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-message-digest-overview.md) - `security_CryptoArchitectureKit_crypto-generate-message-digest-overview`
- [消息认证码计算CMAC(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-compute-cmac.md) - `security_CryptoArchitectureKit_crypto-compute-cmac`
- [消息认证码计算CMAC(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-compute-cmac-ndk.md) - `security_CryptoArchitectureKit_crypto-compute-cmac-ndk`
- [消息认证码计算HMAC(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-compute-hmac.md) - `security_CryptoArchitectureKit_crypto-compute-hmac`
- [消息认证码计算HMAC(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-compute-hmac-ndk.md) - `security_CryptoArchitectureKit_crypto-compute-hmac-ndk`
- [消息认证码计算介绍及算法规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-compute-mac-overview.md) - `security_CryptoArchitectureKit_crypto-compute-mac-overview`
- [签名验签介绍及算法规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md) - `security_CryptoArchitectureKit_crypto-sign-sig-verify-overview`
- [随机生成对称密钥(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-sym-key-randomly.md) - `security_CryptoArchitectureKit_crypto-generate-sym-key-randomly`
- [随机生成对称密钥(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-sym-key-randomly-ndk.md) - `security_CryptoArchitectureKit_crypto-generate-sym-key-randomly-ndk`
- [随机生成非对称密钥对(ArkTS)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-asym-key-pair-randomly.md) - `security_CryptoArchitectureKit_crypto-generate-asym-key-pair-randomly`
- [随机生成非对称密钥对(C/C++)](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-generate-asym-key-pair-randomly-ndk.md) - `security_CryptoArchitectureKit_crypto-generate-asym-key-pair-randomly-ndk`
- [非对称密钥加解密算法规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-asym-encrypt-decrypt-spec.md) - `security_CryptoArchitectureKit_crypto-asym-encrypt-decrypt-spec`
- [非对称密钥生成和转换规格](../../docs/zh-cn/application-dev/security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md) - `security_CryptoArchitectureKit_crypto-asym-key-generation-conversion-spec`

### DataProtectionKit

**描述**: Data Protection Kit（数据保护框架）提供数据防泄露（DLP）功能，保护敏感数据不被非法访问和传输。

**文档数**: 3

**文档列表**:

- [Data Protection Kit（数据保护服务）](../../docs/zh-cn/application-dev/security/DataProtectionKit/Readme-CN.md) - `security_DataProtectionKit_Readme-CN`
- [数据防泄漏服务开发指导](../../docs/zh-cn/application-dev/security/DataProtectionKit/dlp-guidelines.md) - `security_DataProtectionKit_dlp-guidelines`
- [数据防泄漏服务简介](../../docs/zh-cn/application-dev/security/DataProtectionKit/dlp-overview.md) - `security_DataProtectionKit_dlp-overview`

### DeviceCertificateKit

**描述**: Device Certificate Kit（设备证书框架）提供证书管理、证书链验证、证书解析等功能。

**文档数**: 22

**文档列表**:

- [CA证书开发指导](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/certManager-ca-certs-guidelines.md) - `security_DeviceCertificateKit_certManager-ca-certs-guidelines`
- [Device Certificate Kit简介](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/device-certificate-kit-intro.md) - `security_DeviceCertificateKit_device-certificate-kit-intro`
- [Device Certificate Kit（设备证书服务）](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/Readme-CN.md) - `security_DeviceCertificateKit_Readme-CN`
- [使用系统预置CA证书校验证书链](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/verify-certchain-by-systemca.md) - `security_DeviceCertificateKit_verify-certchain-by-systemca`
- [应用证书凭据开发指导](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/certManager-private-credential-guidelines.md) - `security_DeviceCertificateKit_certManager-private-credential-guidelines`
- [证书CMS封装](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-cms-enveloped-object.md) - `security_DeviceCertificateKit_create-cms-enveloped-object`
- [证书CMS签名](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-cms-sign-object.md) - `security_DeviceCertificateKit_create-cms-sign-object`
- [证书CMS解封装](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-cms-decapsulation-object.md) - `security_DeviceCertificateKit_create-cms-decapsulation-object`
- [证书CMS验签](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-cms-verify-object.md) - `security_DeviceCertificateKit_create-cms-verify-object`
- [证书PKCS12的创建和解析](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-parse-pkcs12.md) - `security_DeviceCertificateKit_create-parse-pkcs12`
- [证书吊销列表对象的创建、解析和校验](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-parse-verify-crl-object.md) - `security_DeviceCertificateKit_create-parse-verify-crl-object`
- [证书对象的创建、解析和校验](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-parse-verify-cert-object.md) - `security_DeviceCertificateKit_create-parse-verify-cert-object`
- [证书扩展信息对象的创建、解析和校验](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-parse-verify-certextension-object.md) - `security_DeviceCertificateKit_create-parse-verify-certextension-object`
- [证书算法库框架概述](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/certificate-framework-overview.md) - `security_DeviceCertificateKit_certificate-framework-overview`
- [证书管理对话框开发指导](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/certManagerDialog-guidelines.md) - `security_DeviceCertificateKit_certManagerDialog-guidelines`
- [证书管理概述](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/certManager-overview.md) - `security_DeviceCertificateKit_certManager-overview`
- [证书链在线校验证书吊销状态](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-verify-cerchainvalidator-revocation-object.md) - `security_DeviceCertificateKit_create-verify-cerchainvalidator-revocation-object`
- [证书链对象的创建和校验](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-verify-certchain-object.md) - `security_DeviceCertificateKit_create-verify-certchain-object`
- [证书链校验器对象的创建和校验](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-verify-cerchainvalidator-object.md) - `security_DeviceCertificateKit_create-verify-cerchainvalidator-object`
- [证书链校验时下载缺失的中间CA证书](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/allow-download-Intermediate-Cert.md) - `security_DeviceCertificateKit_allow-download-Intermediate-Cert`
- [证书链校验时从p12文件构造TrustAnchor对象数组](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-trustanchor-from-p12.md) - `security_DeviceCertificateKit_create-trustanchor-from-p12`
- [证书集合及证书吊销列表集合对象的创建和获取](../../docs/zh-cn/application-dev/security/DeviceCertificateKit/create-get-cert-crl-object.md) - `security_DeviceCertificateKit_create-get-cert-crl-object`

### Readme-CN.md

**描述**: 

**文档数**: 1

**文档列表**:

- [安全](../../docs/zh-cn/application-dev/security/Readme-CN.md) - `security_Readme-CN`

### SecurityPrivacyCenter

**描述**: Security Privacy Center（安全隐私中心）提供安全隐私相关的管理功能。

**文档数**: 1

**文档列表**:

- [接入安全隐私框架](../../docs/zh-cn/application-dev/security/SecurityPrivacyCenter/auto-menu-guidelines.md) - `security_SecurityPrivacyCenter_auto-menu-guidelines`

### UniversalKeystoreKit

**描述**: Universal Keystore Kit（通用密钥库）提供密钥的安全存储和管理，支持密钥生成、加解密、签名验签、密钥协商等操作。

**文档数**: 69

**文档列表**:

- [CryptoExtensionAbility扩展能力介绍](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-extension-ability-support-overview.md) - `security_UniversalKeystoreKit_huks-extension-ability-support-overview`
- [CryptoExtensionAbility适配开发指导](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-extension-ability-support-dev.md) - `security_UniversalKeystoreKit_huks-extension-ability-support-dev`
- [HMAC(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-hmac-arkts.md) - `security_UniversalKeystoreKit_huks-hmac-arkts`
- [HMAC(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-hmac-ndk.md) - `security_UniversalKeystoreKit_huks-hmac-ndk`
- [HMAC介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-hmac-overview.md) - `security_UniversalKeystoreKit_huks-hmac-overview`
- [Provider管理介绍及规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-provider-management-overview.md) - `security_UniversalKeystoreKit_huks-provider-management-overview`
- [Ukey PIN码认证(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-ukey-pin-authentication-arkts-sys.md) - `security_UniversalKeystoreKit_huks-ukey-pin-authentication-arkts-sys`
- [Ukey PIN码认证介绍及规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-ukey-pin-authentication-management-overview.md) - `security_UniversalKeystoreKit_huks-ukey-pin-authentication-management-overview`
- [Universal Keystore Kit简介](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-overview.md) - `security_UniversalKeystoreKit_huks-overview`
- [Universal Keystore Kit（密钥管理服务）](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/Readme-CN.md) - `security_UniversalKeystoreKit_Readme-CN`
- [加密/解密介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-encryption-decryption-overview.md) - `security_UniversalKeystoreKit_huks-encryption-decryption-overview`
- [加密导入密钥(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-import-wrapped-key-arkts.md) - `security_UniversalKeystoreKit_huks-import-wrapped-key-arkts`
- [加密导入密钥(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-import-wrapped-key-ndk.md) - `security_UniversalKeystoreKit_huks-import-wrapped-key-ndk`
- [加解密(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-encryption-decryption-arkts.md) - `security_UniversalKeystoreKit_huks-encryption-decryption-arkts`
- [加解密(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-encryption-decryption-ndk.md) - `security_UniversalKeystoreKit_huks-encryption-decryption-ndk`
- [匿名密钥证明(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-anon-attestation-arkts.md) - `security_UniversalKeystoreKit_huks-key-anon-attestation-arkts`
- [匿名密钥证明(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-anon-attestation-ndk.md) - `security_UniversalKeystoreKit_huks-key-anon-attestation-ndk`
- [外部密钥管理扩展简介](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-external-hardware-key-management-overview.md) - `security_UniversalKeystoreKit_huks-external-hardware-key-management-overview`
- [密钥使用介绍及通用流程](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-use-overview.md) - `security_UniversalKeystoreKit_huks-key-use-overview`
- [密钥删除(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-delete-key-arkts.md) - `security_UniversalKeystoreKit_huks-delete-key-arkts`
- [密钥删除(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-delete-key-ndk.md) - `security_UniversalKeystoreKit_huks-delete-key-ndk`
- [密钥协商(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-agreement-arkts.md) - `security_UniversalKeystoreKit_huks-key-agreement-arkts`
- [密钥协商(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-agreement-ndk.md) - `security_UniversalKeystoreKit_huks-key-agreement-ndk`
- [密钥协商介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-agreement-overview.md) - `security_UniversalKeystoreKit_huks-key-agreement-overview`
- [密钥导入介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-import-overview.md) - `security_UniversalKeystoreKit_huks-key-import-overview`
- [密钥导出(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-export-key-arkts.md) - `security_UniversalKeystoreKit_huks-export-key-arkts`
- [密钥导出(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-export-key-ndk.md) - `security_UniversalKeystoreKit_huks-export-key-ndk`
- [密钥派生(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-derivation-arkts.md) - `security_UniversalKeystoreKit_huks-key-derivation-arkts`
- [密钥派生(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-derivation-ndk.md) - `security_UniversalKeystoreKit_huks-key-derivation-ndk`
- [密钥派生介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-derivation-overview.md) - `security_UniversalKeystoreKit_huks-key-derivation-overview`
- [密钥生成介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-generation-overview.md) - `security_UniversalKeystoreKit_huks-key-generation-overview`
- [密钥证明介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-attestation-overview.md) - `security_UniversalKeystoreKit_huks-key-attestation-overview`
- [打开资源/关闭资源(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-open-close-resource-ndk.md) - `security_UniversalKeystoreKit_huks-open-close-resource-ndk`
- [指定用户身份操作(仅对系统应用开放)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-as-user-sys.md) - `security_UniversalKeystoreKit_huks-as-user-sys`
- [数字信封密钥(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-import-envelop-key-ndk.md) - `security_UniversalKeystoreKit_huks-import-envelop-key-ndk`
- [数字信封导入密钥(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-import-envelop-key-arkts.md) - `security_UniversalKeystoreKit_huks-import-envelop-key-arkts`
- [明文导入密钥(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-import-key-in-plaintext-arkts.md) - `security_UniversalKeystoreKit_huks-import-key-in-plaintext-arkts`
- [明文导入密钥(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-import-key-in-plaintext-ndk.md) - `security_UniversalKeystoreKit_huks-import-key-in-plaintext-ndk`
- [本地密钥管理基础概念](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-concepts.md) - `security_UniversalKeystoreKit_huks-concepts`
- [查询密钥别名集(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-list-aliases-arkts.md) - `security_UniversalKeystoreKit_huks-list-aliases-arkts`
- [查询密钥别名集(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-list-aliases-ndk.md) - `security_UniversalKeystoreKit_huks-list-aliases-ndk`
- [查询密钥是否存在(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-check-key-arkts.md) - `security_UniversalKeystoreKit_huks-check-key-arkts`
- [查询密钥是否存在(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-check-key-ndk.md) - `security_UniversalKeystoreKit_huks-check-key-ndk`
- [查询认证状态(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-query-authentication-status-arkts.md) - `security_UniversalKeystoreKit_huks-query-authentication-status-arkts`
- [查询认证状态(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-query-authentication-status-ndk.md) - `security_UniversalKeystoreKit_huks-query-authentication-status-ndk`
- [注册/注销Provider(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-extension-registration-and-unregistration-arkts.md) - `security_UniversalKeystoreKit_huks-extension-registration-and-unregistration-arkts`
- [注册/注销Provider(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-extension-registration-and-unregistration-ndk.md) - `security_UniversalKeystoreKit_huks-extension-registration-and-unregistration-ndk`
- [生成密钥(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-generation-arkts.md) - `security_UniversalKeystoreKit_huks-key-generation-arkts`
- [生成密钥(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-generation-ndk.md) - `security_UniversalKeystoreKit_huks-key-generation-ndk`
- [用户身份认证访问控制开发指导](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-user-identity-authentication.md) - `security_UniversalKeystoreKit_huks-user-identity-authentication`
- [用户身份认证访问控制简介](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-identity-authentication-overview.md) - `security_UniversalKeystoreKit_huks-identity-authentication-overview`
- [签名/验签(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-signing-signature-verification-arkts.md) - `security_UniversalKeystoreKit_huks-signing-signature-verification-arkts`
- [签名/验签(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-ukey-signing-signature-verification-arkts.md) - `security_UniversalKeystoreKit_huks-ukey-signing-signature-verification-arkts`
- [签名/验签(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-signing-signature-verification-ndk.md) - `security_UniversalKeystoreKit_huks-signing-signature-verification-ndk`
- [签名/验签(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-ukey-signing-signature-verification-ndk.md) - `security_UniversalKeystoreKit_huks-ukey-signing-signature-verification-ndk`
- [签名/验签介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-signing-signature-verification-overview.md) - `security_UniversalKeystoreKit_huks-signing-signature-verification-overview`
- [签名/验签介绍及算法规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-ukey-signing-signature-verification-overview.md) - `security_UniversalKeystoreKit_huks-ukey-signing-signature-verification-overview`
- [细粒度用户身份认证访问控制开发指导](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-refined-user-identity-authentication.md) - `security_UniversalKeystoreKit_huks-refined-user-identity-authentication`
- [群组密钥(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-group-key-arkts.md) - `security_UniversalKeystoreKit_huks-group-key-arkts`
- [群组密钥(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-group-key-ndk.md) - `security_UniversalKeystoreKit_huks-group-key-ndk`
- [群组密钥介绍](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-group-key-overview.md) - `security_UniversalKeystoreKit_huks-group-key-overview`
- [获取密钥属性(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-obtain-key-properties-arkts.md) - `security_UniversalKeystoreKit_huks-obtain-key-properties-arkts`
- [获取密钥属性(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-obtain-key-properties-ndk.md) - `security_UniversalKeystoreKit_huks-obtain-key-properties-ndk`
- [资源管理介绍及规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-resource-management-overview.md) - `security_UniversalKeystoreKit_huks-resource-management-overview`
- [通用查询(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-ukey-general-query-arkts.md) - `security_UniversalKeystoreKit_huks-ukey-general-query-arkts`
- [通用查询(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-ukey-general-query-ndk.md) - `security_UniversalKeystoreKit_huks-ukey-general-query-ndk`
- [通用查询介绍及规格](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-ukey-general-query-overview.md) - `security_UniversalKeystoreKit_huks-ukey-general-query-overview`
- [非匿名密钥证明(仅对系统应用开放)(ArkTS)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-attestation-arkts-sys.md) - `security_UniversalKeystoreKit_huks-key-attestation-arkts-sys`
- [非匿名密钥证明(仅对系统应用开放)(C/C++)](../../docs/zh-cn/application-dev/security/UniversalKeystoreKit/huks-key-attestation-ndk-sys.md) - `security_UniversalKeystoreKit_huks-key-attestation-ndk-sys`

### UserAuthenticationKit

**描述**: User Authentication Kit（用户认证框架）提供用户身份认证功能，支持指纹、人脸等多种认证方式。

**文档数**: 11

**文档列表**:

- [User Authentication Kit简介](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/user-authentication-overview.md) - `security_UserAuthenticationKit_user-authentication-overview`
- [User Authentication Kit（用户认证服务）](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/Readme-CN.md) - `security_UserAuthenticationKit_Readme-CN`
- [使用嵌入式用户身份认证控件](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/user-auth-icon.md) - `security_UserAuthenticationKit_user-auth-icon`
- [切换自定义认证](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/apply-custom-authentication.md) - `security_UserAuthenticationKit_apply-custom-authentication`
- [发起认证](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/start-authentication.md) - `security_UserAuthenticationKit_start-authentication`
- [开发准备](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/prerequisites.md) - `security_UserAuthenticationKit_prerequisites`
- [感知和调整认证过程](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/perceive-adjust-authentication-process.md) - `security_UserAuthenticationKit_perceive-adjust-authentication-process`
- [查询指定认证类型的认证冻结状态](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/obtain-auth-lock-state-capabilities.md) - `security_UserAuthenticationKit_obtain-auth-lock-state-capabilities`
- [查询支持的认证能力](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/obtain-supported-authentication-capabilities.md) - `security_UserAuthenticationKit_obtain-supported-authentication-capabilities`
- [查询用户注册凭据的状态](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/obtain-enrolled-state-capabilities.md) - `security_UserAuthenticationKit_obtain-enrolled-state-capabilities`
- [认证过程中取消认证](../../docs/zh-cn/application-dev/security/UserAuthenticationKit/cancel-authentication.md) - `security_UserAuthenticationKit_cancel-authentication`

### app-provision-structure.md

**描述**: 

**文档数**: 1

**文档列表**:

- [HarmonyAppProvision配置文件说明](../../docs/zh-cn/application-dev/security/app-provision-structure.md) - `security_app-provision-structure`

### hapsigntool-errorcode.md

**描述**: 

**文档数**: 1

**文档列表**:

- [签名工具错误码](../../docs/zh-cn/application-dev/security/hapsigntool-errorcode.md) - `security_hapsigntool-errorcode`

### hapsigntool-guidelines.md

**描述**: 

**文档数**: 1

**文档列表**:

- [应用包签名工具指导](../../docs/zh-cn/application-dev/security/hapsigntool-guidelines.md) - `security_hapsigntool-guidelines`

### hapsigntool-overview.md

**描述**: 

**文档数**: 1

**文档列表**:

- [应用包签名工具概述](../../docs/zh-cn/application-dev/security/hapsigntool-overview.md) - `security_hapsigntool-overview`
