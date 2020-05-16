---
title: Prettier在安监的故事
date: 2020-01-13 11:44:14
tags: formatter	
---

这是一篇项目经验所得的文档。发在这里备忘吧。<!--more-->

大家好，前段时间换了很多电脑。最终锚定的是卜楠同志以前使用的。拉下美好的安监前端代码一看，卜楠同志良好的Eslint规范使自己的代码充满了各色报错的横杠杠，当然，作为一个能站着就不坐着的全站开发，睁一只眼闭一只眼是咱的一向准则。

故事的转折来自艳姐，有天清晨突然发现微信里多了一个莫名其妙的群：不要问我从哪里来。当我以为是又被拉进一个炒股群而要举报的时候，咦？艳姐熟悉的头像跳了出来，并附带着两个充满庄严知识与求知渴望的链接。我的小鼠标就不受控制地滑了上去。

由上文两个段落得知：接下来要安装Prettier了。

#### 第一步：安装Prettier。

在VSCode扩展里搜索 ‘prettier’，第一个即是。

#### 第二步：配置Prettier。

在项目根目录下新建  .prettierrc  文件。然后一项项配置即可。

```
一些基础配置
{ 
  "bracketSpacing": true, 
  "printWidth": 160,
  "semi": false,
  "singleQuote": true
}
```



#### 第三步：和已有的 linters 整合。

因为咱们项目之前已有linter，这两个格式化的配置可能存在冲突，所以需要整合一下。别急，我知道你们肯定会问：为什么有Linter了，还要有prettier？

Linters校验一些格式错误和潜在的代码错误。而Prettier仅关注代码格式，从头格式化开发者的代码，使得格式方面错误消灭殆尽。

也就是二者互补，干活会好点。

好了，那如何整合呢？主要分为两步：一是将二者可能冲突的配置在linter里失效，借助了`eslint-config-prettier`插件；二是扩展linter使得可以用 Prettier 来格式化文件，用到了`eslint-plugin-prettier`。

###### 3.1 安装`eslint-config-prettier`插件

首先执行`npm install eslint-config-prettier`，然后在项目文件`eslintrc.json`里:

```javascript
{
	"extends": ["prettier"]
}
```

###### 3.2 安装`eslint-plugin-prettier`插件

首先执行`npm install eslint-plugin-prettier`，然后在项目文件`eslintrc.json`里:

```javascript
{
	"plugins": ["prettier"]
}
```

#### 第四步：`Shift + Alt + F `

接下来使用如题的快捷键就可以 .prettierrc  文件里的配置应用到当前文件了。

谢谢艳姐！