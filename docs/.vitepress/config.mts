import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // app level config options
  // base: '/',
  lang: 'en-US',
  title: "Bird.Live",
  description: "A VitePress Site",

  // theme level config options
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zeng666666/birdlive' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/birdlive/' }
    ]
  }
})
