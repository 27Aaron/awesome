# Reset Yubikey
::: tip
If you are a new Yubikey, please skip this step.
:::

## Reset FIDO U2F credentials
`ykman fido reset` This command will reset the FIDO U2F credentials, and you need to re-insert YubiKey and touch it halfway.
```
❯ ykman fido reset
WARNING! This will delete all FIDO credentials, including FIDO U2F credentials, and restore factory settings. Proceed? [y/N]: y
Remove and re-insert your YubiKey to perform the reset...
Touch your YubiKey...
```

## Reset the OATH account
`ykman oath reset` This command will reset the OATH account
```
❯ ykman oath reset
WARNING! This will delete all stored OATH accounts and restore factory settings. Proceed? [y/N]: y
Resetting OATH data...
Success! All OATH accounts have been deleted from the YubiKey.
```

## Reset OpenPGP data
`ykman openpgp reset` This command will reset the YubiKey OpenPGP data.
```
❯ ykman openpgp reset
WARNING! This will delete all stored OpenPGP keys and data and restore factory settings. Proceed? [y/N]: y
Resetting OpenPGP data, don't remove the YubiKey...
Success! All data has been cleared and default PINs are set.
PIN:         123456
Reset code:  NOT SET
Admin PIN:   12345678
```

## Reset PIV data
`ykman piv reset` This command will reset the PIV data.
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

## Delete the gpg key
Delete the `.gnupg` folder. If you already have a gpg key, please back them up somewhere.
```
rm -rf ~/.gnupg
```
