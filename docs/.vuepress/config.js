module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',

  themeConfig: {
    sidebar: [
      '/',
      '/vueRouter/',
    ],
    lastUpdated : true,
  },

  plugins: [
    '@vuepress/last-updated'
  ],
}