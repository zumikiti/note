module.exports = {
  title: 'Zumikiti Note',
  description: 'いろいろ書く場所',
  theme: 'yuu',
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
    },
  },
  base: '/note/',

  themeConfig: {
    sidebar: [
      '/',
      '/VueRouter/',
      '/GitHub/',
      '/Laravel/',
      '/Shell/',
      {
        title: 'その他',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/Other/UseingTools'
        ]
      },
    ],
    lastUpdated : true,
  },

  plugins: [
    '@vuepress/last-updated'
  ],
}