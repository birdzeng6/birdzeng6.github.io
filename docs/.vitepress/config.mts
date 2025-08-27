import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // app level config options
  lang: 'en-US',
  title: "Bird's Eye View",
  description: "A unique perspective on technology, culture, and connection",
  lastUpdated: true,

  // theme level config options
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products/' },
      { text: 'Photos', link: '/photos/' }
    ],

    sidebar: {
      // This sidebar gets displayed when a user is on `products` directory.
      '/products/': [
        {
          text: 'OpenCUI',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: '/products/markdown-examples' },
            { text: 'Runtime API Examples', link: '/products/api-examples' }
          ]
        },
        {
          text: 'SanHang',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: '/products/markdown-examples' },
            { text: 'Runtime API Examples', link: '/products/api-examples' }
          ]
        }
      ],

      // This sidebar gets displayed when a user is on `photos` directory.
      '/photos/': [
        { text: 'Overview', link: '/photos/index' },
        {
          text: 'J',
          collapsed: false,
          items: [
            { text: 'Justin Bieber', link: '/photos/justinbieber' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zeng666666/birdlive' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/birdlive/' }
    ],

    footer: {
      copyright: 'Copyright © 2025-present Bird Zeng'
    },

    search: {
      provider: 'local'
    }
  }
})
