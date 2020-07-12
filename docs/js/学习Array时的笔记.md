---
title: 学习Array时的笔记
tags: js
---

当时学习Array时也想联系英文写作，所以有这些英文笔记。不过囿于能力，表述得不清晰甚至有些语法错误，但暂时也没心思修改，
又舍不得删，就放在这儿吧。

## 3 methods which return iterator object.

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

## 4 methods involving finding element

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

## Array's 4 fundamental methods

We can learn this four methods: `pop/push/shift/unshift`  by comparison because they have a lot resemblance.

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

## copyWithin & fill

> The `copyWithin()` method shallow copies part of an array to another location in the same array and returns it without modifying its length.
>
> The `fill()` method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.

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

## Js Array's length && Array's prototype

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

## reduce and it's reducer callback function

`reduce`  , it's a complicated function. You can't be more careful to learn it.

Its syntax in MDN is `arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])` .

`accumulator`  `currentValue`  `initialValue` , these and their relationships that you should focus on.

If `initialValue`  exists, at the first time the callback is called, `accumulator` will be equal to `initialValue`, `currentValue` will be equal to the first value in the array.

If `initialValue` not provided, `accumulator` will be equal to the first value in the array, and `currentValue` does the second.

`currentIndex` will be always equal to the `currentValue` 's corresponding  index.

## 'Some methods to change elements'' order,sort & reverse'

Let's learn how to order an array.

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
## How to remember so much methods of Array in JavaScript

I have been thinking of mastering most methods and properties of built-in `Array` .And, at the second that I finally  scanned those related pages in MDN,  It turned out that I had already forgotten everything.So write this passage to help me enhance it.

### Main branch to classify them

I figure out some categories to classify those more than 30 methods.

1. The constructor `Array` methods: `of`, `from`, `isArray`.
2. The most frequently called 4 mutating methods of `Array.prototype`, and for your information, the rest methods are attached to `Array.prototype` , too : `pop`, `push`, `shift`, `unshift`.
3. 4 tear or join items: `concat`, `join`, `slice`, `splice`.
4. 2 doing stuff within an array: `fill`, `copyWithin`.
5. 4 related to finding item in an array: `find`, `findIndex`, `indexOf`, `lastIndexOf`.
6. 2 reducers, 2 flating, 2 sorting: `reduce`, `reduceRight`, `flat`, `flatMap`, `reverse`, `sort`.
7. 3 that type of their returned value is `Boolean`: `every`, `some`, `includes`. 
8. 3 iteration methods that we remember early: `forEach`, `map`, `filter`.
9. 4 iteration methods about keys and values: `keys`, `values`, `entries`.
10. 3 whose names begin with 'to'.

Okay, it must be admitted that those categories help not so much as I imagined.But it still helps ,right? And I believe  as time passes, it will do more and more benefits.

### Side branches to reinforce it

Adding different attributes to a method can help us deepen memory. In the relevant MDN pages, dividing those methods with four kinds: `Mutator methods`, `Accessor methods`, `Iteration methods`, `Generic methods`.

`Mutator methods` indicate this kind methods can modify the array that they are called on, and `Accessor methods`  cannot.

`Iteration methods`  take argument functions that are called back while processing the array.

`Generic methods` are some methods that  you can apply to array-like objects.

`Mutator methods` : `pop`, `push`, `shift`, `unshift`, `splice`, `forEach`, `copyWithin`, `fill`, `reverse`, `sort`. 10 as far as I know.

### Special format

It's really hard to just remember all methods of array.But some demand special format for correct usage. Like `some`, `every`, `filter` , they need `return` statement. `some & every` return Boolean value and `filter` returns

> a new array with all elements that pass the test implemented by the provided function.

### Others

The above has listed 3 main approaches that I figured out.And it's sure that aren't the best and the last.Just for your reference.
