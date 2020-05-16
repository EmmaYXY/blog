---
title: 'Some methods to change elements'' order,sort & reverse'
date: 2019-06-14 15:39:02
tags: Array
---

Let's learn how to order an array.

<!--more-->

In the adult life, it's hard to do things much orderly, but it's far more easier to let an array display orderly according our thoughts.

`reverse`  is a simple method to reverses an array in place.

```javascript
let arr = [1, 2, 3, 4, 5]

arr.reverse()
(5) [5, 4, 3, 2, 1]
```

`sort`  needs an callback `compareFn` to define which value locates where.

`compareFn(firstEl, secondEl)`  : It returns a value, if the value is less than 0, sort `firstEl`  to an index lower than `secondEl` . Otherwise, `secondEl` comes first.

If the returned value is 0, they stay unchanged.

```javascript
let arr = [1, 4, 8, 2, 9, 10, 5]

arr.sort((a, b) => a - b)
(7) [1, 2, 4, 5, 8, 9, 10]
```

