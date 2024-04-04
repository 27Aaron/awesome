import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  lang: 'en-US',
  locales: {
    root:{
      label: 'English',
      lang: 'en-US',
      title: 'Knowledge Graph',
      description: "Everything I know",
      link: '/',
      themeConfig: {
        lastUpdatedText: 'Last Updated',
        editLink: {
          pattern: 'https://github.com/27Aaron/knowledge/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'YubiKey', link: '/YubiKey-Guide/introduction'}
        ],
        sidebar: {
          '/YubiKey-Guide/': YubiKeyGuideEnUS(),
        },
      }
    },
    zh_CN: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Knowledge Graph',
      description: "Everything I know",
      link: '/zh_CN/',
      themeConfig: {
        lastUpdatedText: '最近更新',
        editLink: {
          pattern: 'https://github.com/27Aaron/knowledge/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        nav: [
          { text: '首页', link: '/' },
          { text: 'YubiKey', link: '/zh_CN/YubiKey-Guide/introduction'}
        ],
        sidebar: {
          '/zh_CN/YubiKey-Guide/': YubiKeyGuideZhCN(),
        },
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/27Aaron/knowledge' }
    ],
    footer: {
      message: 'This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) License',
      copyright: 'Copyright © 2022-present Aaron'
    }
  }
})

function YubiKeyGuideEnUS() {
  return [
    {
      text: 'YubiKey Guide',
      items: [
        { text: 'Introduction', link: '/zh_CN/YubiKey-Guide/introduction' },
        { text: 'Preparation', link: '/zh_CN/YubiKey-Guide/preparation' },
        { text: 'Reset Yubikey', link: '/zh_CN/YubiKey-Guide/reset-yubikey' },
        { text: 'Configure YubiKey', link: '/zh_CN/YubiKey-Guide/configure-yubikey' },
        { text: 'YubiKey & OpenPGP Combined use', link: '/zh_CN/YubiKey-Guide/yubiKey-with-openpgp' },
        { text: 'Reference', link: '/zh_CN/YubiKey-Guide/references' }
      ]
   }
  ]
}
function YubiKeyGuideZhCN() {
  return [
    {
      text: 'YubiKey 指南',
      items: [
        { text: '简介', link: '/zh_CN/YubiKey-Guide/introduction' },
        { text: '准备工作', link: '/zh_CN/YubiKey-Guide/preparation' },
        { text: '重置 Yubikey', link: '/zh_CN/YubiKey-Guide/reset-yubikey' },
        { text: '配置 YubiKey', link: '/zh_CN/YubiKey-Guide/configure-yubikey' },
        { text: 'YubiKey 与 OpenPGP 结合使用', link: '/zh_CN/YubiKey-Guide/yubiKey-with-openpgp' },
        { text: '参考资料', link: '/zh_CN/YubiKey-Guide/references' }
      ]
   }
  ]
}