---
title: innerText的另一个兄弟，textContent
date: 2020-03-06 21:01:48
tags: html, dom
---

今天看Node对象时瞥了一眼textContent，没想到有很多需要注意的地方，并且有不少可替代innerText和innerHTML的情境。

<!-- more -->

```html
<div id="text">
  <span>You</span>
  <span>are</span>
  <span>being</span>
  <span>watched</span>
</div>
<script>
  let text = document.getElementById('text')
  console.log('innerText', text.innerText)
  console.log('innerHTML', text.innerHTML)
  console.log('textContent', text.textContent)
</script>
```

以上一段代码块，在工作台会分别打印出怎样的结果？先自己想想哦。

```
innerText You are being watched

innerHTML 
  <span>You</span>
  <span>are</span>
  <span>being</span>
  <span>watched</span>

textContent 
  You
  are
  being
  watched
```

能看出除了innerHTML打印出了 .text 的html之外，innerText 和 textContent 均打印出了其包含的文字。区别在于 innerText 打印的是一行，正如此元素在页面展示的一样，而 textContent 分行打印。这就与我们要说的二者差别有关了。

首先我们要了解，textContent 的值依据节点的不同而不同，例如文本节点与元素节点的表现。文本节点的 textContent 会返回这个元素包含的text文本，而元素节点返回的是此节点所有子节点的 textContent 的连接（concatenation）。

在这个例子里，div.text 这个节点的子节点除了我们一般认为的 span 之外，还有换行的 text 节点。没错，即使是 html 文档中的换行，在DOM中都会把它看做一个 text 节点。而 textContent 既然要打印所有子节点，自然会打印出 ‘换行’节点了。

我们把 html 文档中的换行去掉再打印一下：

```
<div id="text">
  <span>You</span><span>are</span><span>being</span><span>watched</span>
</div>

innerText Youarebeingwatched

innerHTML 
  <span>You</span><span>are</span><span>being</span><span>watched</span>
  
textContent 
  Youarebeingwatched
```

innerText 与 textContent 还有一处在性能上的差异。innerText 并不像 textContent 返回所有节点内容，而是会考虑 style 的影响，它不会返回 hidden 掉的元素。而这重考虑，又会导致页面的回流，回流很吃内存，一般来说应尽量避免回流。

在MDN里提到的 innerHTML 和 textContent 的区别之一也是性能上的，innerHTML 有一步将内容解析为 html，而textContent 不需要这步，所以某种情境下，textContent 也比 innerHTML 在性能表现上更优越。

综上，以后遇到 innerHTML 或者 innerText 的使用场景，可以多考虑一下角落里的 textContent。PS: 此属性的兼容性也很漂亮。