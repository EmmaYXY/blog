---
title: 监测DOM变化的一大利器——MutationObserver
date: 2020-03-15 10:47:01
tags: DOM
---

MutationObserver（下文称MO），用来检测DOM mutaion（突变）的API，其出现是对Mutation Event（下文称ME）的替代。

<!--more-->

一旦DOM发生变化，ME即会调用事件绑定时的回调，如果DOM变化过快过多，这种同步调用会消耗较大性能，从而影响整体体验。而MO与ME最大的不同就在于，MO会将监听到的DOM变化收集起来，当变化完毕时，再一次性处理。这也是我们理解MO API的一个触点。

如果要监听下方的DOM，可以有如下几步。



```html
<p contenteditable>
  <span>Finch</span>
  <span>Reese</span>
  <span>Root</span>
  <span>Shaw</span>
  <span>Lionel</span>
</p>
```



一、新建一个MO实例

新建MO实例需要一个callback参数，处理监听到的所有DOM mutaions。而收集到的mutations会集成一个数组，作为参数，传递给callback。

每个mutation都是一个MutationRecord对象，包含如下内容：



```javascript
{
  type: "characterData", // 变化的类型，例如当文本内容改变时，值为 charaterData
  target: text, // 改变的节点
  addedNodes: NodeList [], // 添加的节点
  removedNodes: NodeList [], // 删除的节点
  previousSibling: null, // 添加或删除节点的上一个兄弟节点
  nextSibling: null, // 添加或删除节点的下一个兄弟节点
  attributeName: null, // 被改变的属性名
  attributeNamespace: null, // 被改变的属性名命名空间
  oldValue: null, // 根据type不同而有所改变
  __proto__: MutationRecord
}
```



更详细的MutationRecord内容可参考[MDN的MutaionRecord页面](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord)和[张鑫旭老师一篇DOM监测的博文](https://www.zhangxinxu.com/wordpress/2019/08/js-dom-mutation-observer/)。



```javascript
function mutationCall (mutationArr) {
  // 可以根据变化的类型不同对不同的DOM改变做出处理
  mutationArr.forEach(m => {
    if (m.type === 'attributes') {
      console.log(m)
    } else if (m.type === 'characterData') {
        console.log(m)
    } else {
      // ...
  })
}
let observer = new MutationObserver(mutationCall)
```



此时我们新建了一个带有callback的MO实例，但要真正开始监测DOM变化，还需要下面一步。



二、调用observe方法



MO实例有三个方法，observe开始监听，在MO实例与DOM之间搭建一个电话线路，使得MO可以监听到来自该DOM的变化信息。disconnect则是掐断这一线路。实际是一个注册与取消注册的关系。第三个takeRecords先不说。



observe需要两个参数，要监测的target和描述要监测什么样的变化的config。target是一个Node，config是一个MutationObserverInit对象：



```javascript
{
  attributes: false, // true以监测target节点的属性变动
  attributeFilter: [], // 要监测哪些属性的变化，空数组表示所有。必须设置attributes为true。 
  characterData: false, // true以监测节点字符数据的变化
  subtree: false, // true以监测子节点的变化
  childList: false, // true以监测target子节点的添加和删除
  // ...
}
```



其中attributes/childList/characterData必须有一个为true，且subtree不可单独为true，否则监听节点的具体什么变动无从得知。更多详细内容可以参考[MDN的MutationObserverInit页面](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit)。



```javascript
let target = document.querySelector('p')
let config = {
  characterData: true,
  attributes: true,
  subtree: true
}
observer.observe(target, config) // 至此开始监听 p 的DOM变化
```



如果有切断监听的业务需求，MO提供了disconnect方法，阻止MO实例的监听，直到再次调用observe方法。

takeRecords常在disconnect方法调用前调用，以收集还未处理的DOM变动，即所有已经检测到但还未向观察者报告的变动。

实际上，Vue2的$nextTick API就是用MO实现的，因为MO在整个EventLoop过程里归属于微任务MicroTask，这是我从[Vue.js异步更新DOM策略及nextTick](https://github.com/answershuto/learnVue/blob/master/docs/Vue.js%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0DOM%E7%AD%96%E7%95%A5%E5%8F%8AnextTick.MarkDown)这篇文章得来，也正是这篇文章使我了解到MO API，强烈推荐阅读。



PS：以上涉及的例子放在[MO Demo](https://codepen.io/emmayxy/full/rNVYqKo)。