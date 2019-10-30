module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/',

  themeConfig: {
    sidebar: [
      '/',
      '/VueRouter/',
      '/GitHub/',
    ],
    lastUpdated : true,
  },

  plugins: [
    '@vuepress/last-updated'
  ],
}