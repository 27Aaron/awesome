---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Knowledge Graph"
  text: "Everything I know"
  tagline: " "
  actions:
    - theme: brand
      text: YubiKey 指南
      link: /zh_CN/YubiKey-Guide/introduction
    - theme: alt
      text: GitHub
      link: https://github.com/27Aaron/knowledge
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
    alt: VitePress


features:
  - icon: 📝
    title: My Knowledge
    details: Record everything I know here.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>