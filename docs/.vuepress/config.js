module.exports = {
  base: "/",
  title: "sisteryang",
  siteConfig: {
    title: "汪汪",
  },
  description: "Hi, it's my new blog based on vuepress.",
  head: [["link", { rel: "icon", href: "/Ymir.jpg" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "JS", link: "/js/" },
      { text: "DOM", link: "/dom/" },
      { text: "Lesson", link: "/lesson/" },
      { text: "About", link: "/about/" },
    ],
    sidebar: {
      "/js/": [
        "",
        "学习Array时的笔记"
      ],
      "/dom/": [
        "",
        "innerText的另一个兄弟，textContent",
        "监测DOM变化的一大利器——MutationObserver",
      ],
      "/lesson/": [
        "",
        "A-rough-scan-for-Vue-Router-match-route-and-components-pass-values-and-navigate",
        "从法律学校得来的一些音视频经验",
        "工作中某次接口优化暴露的一些问题和个人反思",
        "Prettier在安监的故事",
        "你这样理解过防抖和节流吗？"
      ]
    },
  },
};
