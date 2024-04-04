# Configure YubiKey

## Enable KDF
::: tip
This feature may not be compatible with older versions of GnuPG, especially mobile clients. These incompatible clients will not work as the PIN will always be rejected.
:::

::: warning
This step must be completed before changing the PIN or moving the key, otherwise an error will occur:`gpg: error for setup KDF: Conditions of use not satisfied`
:::

The key derivation function (KDF) enables YubiKey to store the hash value of the PIN, thus preventing the PIN from passing in plain text.

``` bash
gpg --card-edit
gpg/card> admin
Admin commands are allowed

gpg/card> kdf-setup
```

## Change the password

```bash
gpg --card-edit
gpg/card> admin
Admin commands are allowed

gpg/card> passwd
```

|   Name | Default value | Capability |
|:-----------:|:---------------:|:----------------------------------------:|
| User PIN   | `123456`      | cryptographic operations (decrypt, sign, authenticate）|
| Admin PIN	 | `12345678`    | reset PIN, change Reset Code, add keys and owner information |
| Reset Code |  None         | reset PIN |

The *User PIN* must be at least 6 characters and the *Admin PIN* must be at least 8 characters. A maximum of 127 ASCII characters are allowed. See [GnuPG - Managing PINs](https://www.gnupg.org/howtos/card-howto/en/ch03s02.html) for more information.


## Setting information
```
gpg --card-edit
gpg/card> admin
Admin commands are allowed

gpg/card> name
gpg/card> login (email)
gpg/card> lang
gpg/card> url
```