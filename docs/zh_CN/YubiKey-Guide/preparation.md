# 准备工作
可以直接在 Yubikey 上生成，也可以在外面生成后导入到 Yubikey 中。有条件的话建议使用 liveCD 或者干净的虚拟机中进行操作。

## 安装软件

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
需要搭配 [HomeBrew](https://brew.sh/) 使用。
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