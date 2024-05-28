import { defineConfig } from 'themekit-js'
 
 
const ThemeConfigCn={
  nav: [
    { text: '关于我', link: '/README' },
    { text: '开始探索', link: '/简体中文/探索/README' },
    { text: 'eFACILITY', link: '/简体中文/eFACILITY/README' },
  ], 
  sidebar: { 
    '/简体中文/开发人员/': [
      {
        text: 'Guide',
        items: [
          { text: 'Index', link: '/guide/' },
          { text: 'One', link: '/guide/one' },
          { text: 'Two', link: '/guide/two' }
        ]
      }
    ]
  } 
};
 
const ThemeConfigEn ={ 
  nav: [
    { text: 'ABOUT ME', link: '/English/README' },
    { text: 'HELLO', link: '/Global/HelloWorld/' }, 
    { text: 'eFACILITY', link: '/Global/eFACILITY' } 
  ]
};
 
export default defineConfig({
  title: "Seedunk",  
  base:"/themekit-test/",
  themeName: "default theme + customization",
  description: "A VitePress Site",
  lang:"root",
  locales: {  
    "English": {
      label: 'English',
      lang: 'English',  
      link: '/English/',
      themeConfig: ThemeConfigEn 
    }, 
    root: {
      label: '简体中文',
      lang: '简体中文',   
      themeConfig:  ThemeConfigCn
    }
  },   
  themeConfig: { 
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
