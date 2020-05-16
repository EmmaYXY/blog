---
title: Js Array's length && Array's prototype
date: 2019-06-12 09:25:32
tags: Array
---

#### Array’length

You can set the value of some array’s length directly.

<!--more-->

Shorten it: 

```
let arr = [1, 2, 3];
arr.length = 2;
console.info(arr); // [1, 2]
```

Lengthen it:

```
let arr = [1, 2, 3];
arr.length = 4;
arr => [1, 2, 3, <empty slot>]
```

The empty slot doesn’t mean it’s undefined or null.It’s just a slot which is empty.So you can see, `Array.length` doesn’s always stand for the numbers of valued items.

#### Array’prototype

As for `Array.prototype`, obviously, Array instances inherit from it.So the built-in methods will be most important for us to learn Array.

It contains four kinds of methods,Mutator Methods,Accessor Methods, Iteration Methods,Generic Methods.

The first kind, Mutator Methods, will modify the array.But Accessor  Methods do the otherwise.Iterator Methods have some noteworthy facts,  like do not recommend changing array inside the callback function.And it  will not iterate over the items that never be assigned values.

> When these methods are called, the `length` of the array is sampled, and any element added beyond this length from within the callback is not visited.