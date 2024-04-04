# YubiKey & OpenPGP Combined use

## Generated outside of Yubikey

::: tip
There are four types of keys: S, C, E and A. S is used for signing, C for authentication, E for encryption and A for authentication.

Note: The email address must be set to the same email address as your GitHub account. Otherwise, you won't be able to sign commits with GPG.
:::

### Generate master key
- 1. Plug the Yubikey into your computer's USB port.
- 2. Enter the GPG command `gpg --expert ---full-gen-key`.
- 3. Select `(8) RSA (customized usage)`.
- 4. Enter S to unsign (Sign).
- 5. Enter E to cancel the encryption (Encrypt).
- 6. Enter Q to select (Q) Completed.
- 7. The key length is 4096 bits.
- 8. enter 0 for Expiration, 0 = key never expires.
- 9. enter your name and e-mail address.
- 10. enter o , OK (O).

### Add signing key
- 1. Type `addkey` to add the key.
- 2. Type E to cancel the encryption (Encrypt).
- 3. Type Q, (Q) Completed.
- 4. The key length is 4096 bits.
- 5. Enter `1y` to create a 1-year signature key.
- 6. Enter `y` to confirm creation.
### Add encryption key
- 1. Type `addkey` to add a key.
- 2. Type S to unsign (Sign).
- 3. Type Q, (Q) Completed.
- 4. The key length is 4096 bits.
- 5. Enter `1y` to create a 1-year encryption key.
- 6. Enter `y` to confirm creation.
### Add authentication key
- 1. Type `addkey` to add the key.
- 2. Type S to unsign (Sign).
- 3. Type E to cancel Encrypt.
- 4. Enter A to add Authenticate.
- 5. Enter Q, (Q) Completed.
- 6. The key length is 4096 bits.
- 7. Enter `1y` to create a 1-year authentication key.
- 8. Enter `y` to confirm creation.

## Import keys into YubiKey
- 1. Enter the GPG command: gpg --edit-key 1234ABC (where 1234ABC is the key ID of your key, which can be queried by `gpg -K`).
- 2. Enter the command: keytocard .
- 3. When prompted if you really want to move your master key, enter y (yes).
- 4. When prompted for the location to store the key, select 1. This will move the signing subkey to the PGP signature slot on the YubiKey.
- 5. Enter the command: key 1.
- 6. Enter the command: keytocard.
- 7. When prompted for a location to store the key, select 2. This will move the encryption subkey to YubiKey.
- 8. Enter the command: key 1 .
- 9. Enter the command: key 2.
- 10. Enter the command: keytocard .
- 11. When prompted for a location to store the key, select 3. This will move the authentication subkey to YubiKey.
- 12. Enter the command: quit .
- 13. When prompted to save your changes, enter n (no). Otherwise, GPG will delete your key from the hard disk and you will not be able to copy it to another YubiKey to keep it as a backup.

## Generate PGP keys directly on YubiKey
::: warning
Generating PGP on YubiKey ensures that malware can never steal your PGP private key, but this means that the key cannot be backed up, so if your YubiKey is lost or damaged, the PGP key cannot be recovered.
:::
- 1. Enter the command: gpg --card-edit .
- 2. At the gpg/card> prompt, enter the command: admin
- 3. If you want to use a key larger than 2048 bits, run: key-attr .
- 4. Enter the command: generate.
- 5. When prompted, specify whether you want to make an off-card backup of the encryption key.
- Note: This is a padded backup of the private key, not a full backup, and cannot be used to restore to a new YubiKey.
- 6. Specify the expiration date of the key (specify a number in days, weeks, months, or years).
- 7. Enter your name and e-mail address.
- 8. Enter the default administrator PIN code.
- 9. Enter the password, because without it, the key will not allow you to pass. If you do not enter a password, the generation will fail.

## Verify
```bash
echo test | gpg --encrypt --recipient <your login email> | gpg --decrypt

```