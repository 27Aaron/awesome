# Preparation
It can be generated directly on Yubikey, or generated outside and imported into Yubikey. It is recommended to use liveCD or a clean virtual machine if you have the means to do so.

## Install the software

## Debian/Ubuntu
```bash
sudo apt update

sudo apt -y upgrade

sudo apt -y install \
  wget gnupg2 gnupg-agent dirmngr \
  cryptsetup scdaemon pcscd \
  yubikey-personalization yubikey-manager
```

## OpenBSD
```bash
doas pkg_add gnupg pcsc-tools
```

## macOS
It needs to be used with [HomeBrew](https://brew.sh/) .
```bash
brew install \
  gnupg yubikey-personalization ykman pinentry-mac wget
```

## Arch
```bash
sudo pacman -Syu gnupg pcsclite ccid yubikey-personalization
```

## RHEL7
```bash
sudo yum install -y gnupg2 pinentry-curses pcsc-lite pcsc-lite-libs gnupg2-smime
```

## Fedora
```bash
sudo dnf install wget

wget https://github.com/rpmsphere/noarch/raw/master/r/rpmsphere-release-38-1.noarch.rpm

sudo rpm -Uvh rpmsphere-release*rpm

sudo dnf install \
  gnupg2 dirmngr cryptsetup gnupg2-smime \
  pcsc-tools opensc pcsc-lite secure-delete \
  pgp-tools yubikey-personalization-gui
```