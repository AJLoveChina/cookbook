let path = require("path");
let assetsPath = path.resolve(__dirname, '../assets');

module.exports = {
    title: '莉雯小姐的私房食谱',
    description: '食谱菜单，西红柿炒蛋，肉末茄子，牛肉炖土豆，小鸡炖蘑菇',
    base: '/cookbook/',
    dest: path.resolve(__dirname, "../../cookbook"),
    head: [
        ['link', {rel: 'shortcut icon', type: "image/x-icon", href: '/nigeerhuox16.ico'}],
        ['script', {async : 'async', src: "/baidu-tongji.js"}],
    ],
    ga: "UA-70087663-3",
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': assetsPath
            }
        }
    },
    themeConfig: {
       displayAllHeaders: false, // 默认值：false
        repo: "https://github.com/AJLoveChina/cookbook",
        repoLabel: 'Github',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'src',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        // 默认为 "Edit this page"
        editLinkText: '在 Github 上编辑此页',
        editLinks: true,
        lastUpdated: "最近一次更新时间",
        sidebar: [
            ["/", "首页"],
            ['/xhscd/', '西红柿炒蛋'],
            ['/mpdf/', '麻婆豆腐'],
        ]
    }
};
