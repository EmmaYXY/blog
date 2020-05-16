---
title: Array's 4 fundamental methods
date: 2019-06-12 09:23:36
tags: Array
---

We can learn this four methods: `pop/push/shift/unshift`  by comparison because they have a lot resemblance.

<!--more-->

#### `pop && shift`

They remove element from an array or an object which contains `length`  property.The former removes the last and the latter does the first.That's why they need `length` . It helps locate where they do the deeds.

Their return value is the poor removed element, undefined if the array is empty.

Another point is they can use apply() or call() on array-like object.See this:

```javascript
1.var object = { 0: 'angel', 1: 'dog', 3: 'cat', 4: 'elephant', length: 4}
2.Array.prototype.pop.call(object)
3."cat" // 返回值
4. object // 修改后的object
{0: "angel", 1: "dog", 4: "elephant", length: 3}
```

It implies `length`  property  functionality: location.

#### `push && unshift`

On the contrary, they twins add elements to an array.Or array-like object which had better contains `length`  property.Or these will get to some bizarre results, like this:

```javascript
1. var object = { 0: 'angel', 1: 'dog', 2: 'cat', 3: 'elephant'}
2. Array.prototype.push.call(object, 'doudou', 'xiaoying')
3. {0: "doudou", 1: "xiaoying", 2: "cat", 3: "elephant", length: 2}
```

They will still define a `length`  but assign it with 0, then according to it, start to work.

Their return value is the new `length`  property of the object upon which methods was called.

`push`  method can do merging things as long as you mind the way you use it.

```
var arr1 = [1, 2]
undefined
var arr2 = [3, 4]
undefined
Array.prototype.push.call(arr1, arr2)
3
Array.prototype.push.apply(arr1, arr2)
5
```



