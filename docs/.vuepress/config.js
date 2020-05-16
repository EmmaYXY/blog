module.exports = {
  base: "/",
  title: "sisteryang",
  siteConfig: {
    title: '汪汪'
  },
  description: "Hi, it's my new blog based on vuepress.",
  head: [
    ['link', { rel: 'icon', href: '/Ymir.jpg' }]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "JS", link: "/js/" },
      { text: "DOM", link: "/dom/" },
      { text: "Lesson", link: "/lesson/" },
      { text: "About", link: "/about/" },
    ],
    sidebar: {
      '/js/': [
        '',
        '3-methods-which-return-iterator-object',
        '4-methods-involving-finding-element',
        'A-rough-scan-for-Vue-Router-match-route-and-components-pass-values-and-navigate',
        'Array-s-4-fundamental-methods',
        'copyWithin-fill',
        'How-to-remember-so-much-methods-of-Array-in-JavaScript',
        'Js-Array-s-length-Array-s-prototype',
        'reduce-and-it-s-reducer-callback-function',
        'Some-methods-to-change-elements-order-sort-reverse'
      ],
      '/dom/': [
        '',
        'innerText的另一个兄弟，textContent',
        '监测DOM变化的一大利器——MutationObserver',
        '你这样理解过防抖和节流吗？'
      ],
      '/lesson/': [
        '',
        '从法律学校得来的一些音视频经验',
        'Prettier在安监的故事'
      ]
    }
  }
};
