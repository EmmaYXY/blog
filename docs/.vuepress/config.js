module.exports = {
    base: '/yang/',
    title: "sisteryang",
    description: "Hi, it's my new blog based on vuepress.",
    themeConfig: {
        nav: [
            {text: 'Home', link: "/"},
            {text: 'Guide', link: "/guide/"},
            {text: 'External', link: "https://vuepress.vuejs.org/"}
        ],
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/blog/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/'
                ]
              },
              {
                title: 'Group 2',
                children: [ /* ... */ ]
              }
          ]
    }
}