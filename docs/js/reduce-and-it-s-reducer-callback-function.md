---
title: reduce and it's reducer callback function
date: 2019-06-12 09:30:42
tags: Array
---

`reduce`  , it's a complicated function. You can't be more careful to learn it.

<!--more-->

Its syntax in MDN is `arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])` .

`accumulator`  `currentValue`  `initialValue` , these and their relationships that you should focus on.

If `initialValue`  exists, at the first time the callback is called, `accumulator` will be equal to `initialValue`, `currentValue` will be equal to the first value in the array.

If `initialValue` not provided, `accumulator` will be equal to the first value in the array, and `currentValue` does the second.

`currentIndex` will be always equal to the `currentValue` 's corresponding  index.

