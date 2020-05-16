---
title: 3 methods which return iterator object
date: 2019-06-12 09:29:22
tags: Array
---

3 methods which return iterator object.

#### `entries & keys & values`

`entries`  `keys`  `values`  ,they all return iterator object,  key/value pairs, keys, values for each index in the array.

<!--more-->

You can iterate the result using a `for...of`  loop, or using `next()` to get each values. 



```javascript
1. var arr = [1, 2, 3];
2. arr.entries() // Array Iterator {}
4. for (let e of arr.entries()) {
      console.info(e);
   }
6. 2 (2) [0, 1]0: 01: 1length: 2__proto__: Array(0)
   2 (2) [1, 2]
   2 (2) [2, 3]
typeof arr.entries() // "object"
```

```javascript
1. let arr = [1, 2, 3]
2. arr.keys() // Array Iterator {}
3. let iter = arr.keys()
4. [...iter] // [0, 1, 2]
5. typeof iter // "object"
```

FYI, I learned these methods from <https://developer.mozilla.org/en-US>.So I have much content similar to it, or directly quoted from it as follow.

> **TODO**: please write about why we need it, use cases.

lol