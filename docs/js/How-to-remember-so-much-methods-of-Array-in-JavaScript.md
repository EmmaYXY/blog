---
title: How to remember so much methods of Array in JavaScript
date: 2019-07-05 20:33:11
tags: Array
---

I have been thinking of mastering most methods and properties of built-in `Array` .And, at the second that I finally  scanned those related pages in MDN,  It turned out that I had already forgotten everything.So write this passage to help me enhance it.

<!--more-->

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