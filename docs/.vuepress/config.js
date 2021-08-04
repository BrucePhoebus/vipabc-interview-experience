/* 
  全局配置文件
*/
const moment = require('moment');

module.exports = {
  title: '面经笔记', // 设置网站标题
  description: '面经工作学习笔记',
  base: '/', // 设置站点根路径
  dest: './vipabc-interview-experience', // 设置输出目录
  port: 8888,
  head: [],
  plugins: [],
  themeConfig: {
    // 添加导航栏
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '前端规范',
        link: '/front/'
      },
      {
        text: 'git规范',
        link: '/git/'
      },
      {
        text: '相关帮助',
        link: '/help/'
      },
      {
        text: 'gitLab',
        link: 'https://gitee.com/s_phoebus/vipabc-interview-experience',
      },
    ],
    // 为以下路由添加左侧边栏 
    sidebar: {
      '/front/': [
        '',
        '编码规范',
        '注释规范',
        'eslint规范',
      ],
      '/git/': [
        '',
        'git入门',
        'git冲突合并规范',
      ],
      '/help/': [
        '',
        'markdown语法',
        'vuepress使用经验指南',
      ]
    },
    sidebarDepth: 2, // 左侧导航显示的层级
    lastUpdated: '更新时间'
  },
  plugins: {
    '@vuepress/back-to-top': true,
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
  },
  markdown: {
    // 显示代码行号
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  chainWebpack: {
    resolve: {
      alias: {
        '@alias': './public'
      }
    }
  },
}