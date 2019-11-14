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
      '/Shell/'
    ],
    lastUpdated : true,
  },

  plugins: [
    '@vuepress/last-updated'
  ],
}