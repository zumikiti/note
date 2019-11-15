module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
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