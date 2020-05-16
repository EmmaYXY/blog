---
title: copyWithin & fill
date: 2019-06-13 10:52:32
tags: Array
---

> The `copyWithin()` method shallow copies part of an array to another location in the same array and returns it without modifying its length.
>
> The `fill()` method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.

<!--more-->

```javascript
let arr = [1, 2, 3, 4, 5];

arr.copyWithin(0, 1, 2)
(5) [2, 2, 3, 4, 5]
arr.copyWithin(-1, 0, 1)
(5) [2, 2, 3, 4, 2]
arr.copyWithin(1, -2)
(5) [2, 4, 2, 4, 2]
arr.copyWithin(0, -2, -1)
(5) [4, 4, 2, 4, 2]
arr.copyWithin(0, -2, -3)
(5) [4, 4, 2, 4, 2]
arr.copyWithin(0, 3, 2)
(5) [4, 4, 2, 4, 2]
```

```javascript
let arrN = [1, 2, 3, 4, 5];

arrN.fill(0, 1, 2)
(5) [1, 0, 3, 4, 5]
arrN.fill(1, -1)
(5) [1, 0, 3, 4, 1]
arrN.fill(6, -1, -2)
(5) [1, 0, 3, 4, 1]
arrN.fill(7, -2, -1)
(5) [1, 0, 3, 7, 1]
arrN.fill(9)
(5) [9, 9, 9, 9, 9]
```

`copyWithin(target, [start, [end]])`

`fill(value, [start, [end]])`

The two methods take up to three arguments. 

`end`  is not included.

When the result of  `end - start`  is positive, methods will work or do nothing and return the same Object, not the modified one.

There is a difference between them when only the first argument is supplied.

`fill`  will fill all slots.But `copyWithin` will use the values from the first to some value that its length is equal to the length of the `target` index till the last index, to copyWithin.

If negative, `start & end`  will be counted from the end.

