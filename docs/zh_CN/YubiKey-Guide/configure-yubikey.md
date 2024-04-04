# 配置 YubiKey

## 启用 KDF
::: tip
此功能可能与旧版 GnuPG 不兼容，尤其是移动客户端。这些不兼容的客户端将无法运行，因为 PIN 码将始终被拒绝。
:::

::: warning
此步骤必须在更改 PIN 或移动密钥之前完成，否则会出现错误：`gpg: error for setup KDF: Conditions of use not satisfied`
:::

密钥派生函数 (KDF) 使 YubiKey 能够存储 PIN 的哈希值，从而防止 PIN 以纯文本形式传递。

``` bash
gpg --card-edit
gpg/card> admin
Admin commands are allowed

gpg/card> kdf-setup
```

## 更改密码

```bash
gpg --card-edit
gpg/card> admin
Admin commands are allowed

gpg/card> passwd
```

|        | 默认值 | 能力 |
|:-----------:|:---------------:|:----------------------------------------:|
|用户PIN码   | `123456`      | 加密操作（解密、签名、身份验证）|
|管理员PIN码 | `12345678`    | 重置PIN码，更改重置代码，添加密钥和所有者信息 |
|重置代码    | 无          | 重置PIN码 |

*用户PIN*必须至少为6个字符，*管理员PIN*必须至少为8个字符。最多允许127个ASCII字符。看见 [GnuPG - Managing PINs](https://www.gnupg.org/howtos/card-howto/en/ch03s02.html) 了解更多信息。

## 设置信息
```
gpg --card-edit
gpg/card> admin
Admin commands are allowed

gpg/card> name
gpg/card> login (email)
gpg/card> lang
gpg/card> url
```