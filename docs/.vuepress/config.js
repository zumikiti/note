module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',

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