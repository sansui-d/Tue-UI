module.exports = {
  base:'/Tue-UI/',
  title: '一个基于VUE的UI组件库',
  description: '一个简约、易用的 UI 框架',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/get-started/'},
      {text: 'Github', link: 'https://github.com/sansui-d/Tue-UI'},
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title: '入门',
        children: [
          '/introduce/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/collapse',
          '/components/popover',
        ]
      },

    ]
  }
}