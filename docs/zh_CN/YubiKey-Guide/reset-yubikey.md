# 重置 Yubikey
::: tip
如果你是新的 Yubikey 请跳过这步
:::

## 重置 FIDO U2F 凭据
`ykman fido reset` 此命令将重置 FIDO U2F 凭据，中途需要重新插入 YubiKey 并触摸。
```
❯ ykman fido reset
WARNING! This will delete all FIDO credentials, including FIDO U2F credentials, and restore factory settings. Proceed? [y/N]: y
Remove and re-insert your YubiKey to perform the reset...
Touch your YubiKey...
```

## 重置 OATH 账户
`ykman oath reset` 此命令将重置 OATH 账户
```
❯ ykman oath reset
WARNING! This will delete all stored OATH accounts and restore factory settings. Proceed? [y/N]: y
Resetting OATH data...
Success! All OATH accounts have been deleted from the YubiKey.
```

## 重置 OpenPGP 数据
`ykman openpgp reset` 此命令将重置 YubiKey OpenPGP 数据
```
❯ ykman openpgp reset
WARNING! This will delete all stored OpenPGP keys and data and restore factory settings. Proceed? [y/N]: y
Resetting OpenPGP data, don't remove the YubiKey...
Success! All data has been cleared and default PINs are set.
PIN:         123456
Reset code:  NOT SET
Admin PIN:   12345678
```

## 重置 PIV 数据
`ykman piv reset` 此命令将重置 PIV 数据
```
❯ ykman piv reset
WARNING! This will delete all stored PIV data and restore factory settings. Proceed? [y/N]: y
Resetting PIV data...
Success! All PIV data have been cleared from the YubiKey.
Your YubiKey now has the default PIN, PUK and Management Key:
	PIN:	123456
	PUK:	12345678
	Management Key:	010203040506070801020304050607080102030405060708
```

## 删除 gpg密钥
删除 `.gnupg` 文件夹，如果您已经有gpg密钥，请将它们备份到某个地方。
```
rm -rf ~/.gnupg
```
