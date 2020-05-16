---
title: 4 methods involving finding element
date: 2019-06-12 09:27:33
tags: Array
---

#### `find & findIndex & indexOf & lastIndexOf`

Two pairs can be saperated from them. 

`find & findIndex`  return the first value/index in the array that pass the provided testing function.

<!--more-->

They have a optional argument `thisArg` like other iterator methods of `Array.prototype`.The description of it almost exactly same. Or let's put it this way, the arguments passed into the `callback`   function in this kind of iterator methods almost exactly same.

But we should notice that:

```javascript
var arr = ['apple', 'banana', 'pineapple', 'peach', 'apple'];

arr.find(function(val) {
  return val === 'apple';
});
// 'apple'
```

This argument contains a `return`  statement.When the  `callback`  get the first `true` returned value, `find()`  methods will return corresponding value， and for `findIndex()`  will return corresponding index.In this case, it'll be 0.

`indexOf & lastIndexOf`  also grow up together like Cersei and Jamie.

- They have an optional `fromIndex`  argument;

- They return the firstly found index at which the given element `searchElement`  is strictly equal to the indexed value; -1 if not found.

- They treat `fromIndex`  argument with the same rules.

  > If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched.
  >
  > If the provided index value is a negative number, it is taken as the offset from the end of the array.
  >
  > ```js
  > var numbers = [2, 5, 9, 2];
  > numbers.lastIndexOf(2, 2);  // 0
  > numbers.lastIndexOf(2, -2); // 0
  > numbers.lastIndexOf(2, -1); // 3
  > ```

`indexOf()`  searches an array from front to back, and `lastIndexOf`  is from back to front.(don't know if this sentence is right)