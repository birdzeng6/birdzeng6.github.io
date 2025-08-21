import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // app level config options
  lang: 'en-US',
  title: "Bird's Eye View",
  description: "A unique perspective on technology, culture, and connection",

  // theme level config options
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products/' }
    ],

    sidebar: [
      {
        text: 'OpenCUI',
        items: [
          { text: 'Markdown Examples', link: '/products/markdown-examples' },
          { text: 'Runtime API Examples', link: '/products/api-examples' }
        ]
      },
      {
        text: 'SanHang',
        items: [
          { text: 'Markdown Examples', link: '/products/markdown-examples' },
          { text: 'Runtime API Examples', link: '/products/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zeng666666/birdlive' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/birdlive/' }
    ],

    footer: {
      copyright: 'Copyright © 2025-present Bird Zeng'
    }
  }
})
