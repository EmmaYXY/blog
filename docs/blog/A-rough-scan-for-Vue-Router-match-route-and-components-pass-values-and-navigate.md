---
title: >-
  A rough scan for Vue Router: match route and components, pass values and
  navigate
date: 2019-10-02 22:22:02
tags: vue, vue-router
---

Vue Router (called VR in the following) is deeply integrated with Vue. And it's more and more important as Vue develops. In order to apply Vue more efficiently, I have learnt VR in recent days and write this article aiming to clear my thoughts and digest it.

<!-- more -->

One main purpose of VR is to tell Vue to render what components when navigate to some route. And finally  the navigator performs a page to the client. So how the comps and route match is defined by the view structure.

#### view with one comp matching different routes

VR uses dynamic segment in path to achieve that:

`{path: '/user/:id', component: User}`

This `:id`  part is dynamic. We replace it with various values to represent different users, but reuse the comp `User` for rendering. And the dynamic part of path can be access to `$route.params.id` in the corresponding comp.  That means, when the `params` differs,  the route lifecycle hooks of Vue won't be called because the comp is never destroyed.

#### views with multiple comps without nesting structure

Sometimes, a page contains several comps to display full information. And these comps have equal weights, they are all brothers. For this, VR provides a handy function, `named views`.

```html
<!--html-->
<router-view name="bar"></router-view>
<router-view name="header"></router-view>
<router-view></router-view>
```

```javascript
// javascript
{
  path: '/',
  // make sure that it's componentS
  components: {
  	default: Footer, // ready for the unnamed view
  	bar: Bar,
  	header: Header
  }
}
```

#### views with several nested comps 

If a view needs a father comp to wrap its children comps, it's what `nested routes` comes for.

You put a `<router-view>` tag in a comp matching route `'/user/:id'`, then you could render the children `<router-view>`  with `children` config:

```javascript
{
  path: '/user/:id',
  component: User,
  children: [
    {path: 'profile', component: Profile},
    {path: 'works', component: Works}
  ]
}		
```

 Keep that in mind: VR will treat `/` as a root path.



Ok, let's get to the second part: passing values with routes. I summarize four kinds of passing values in VR: `params`, `props`, `query`, `metas`.  

#### passing values: params

When using dynamic routes as metioned above, `:params` part could be available in `$route.params`. But there is one flaw: it makes the comp has a tight bond with the route. To fix it, we come to the next way passing values: props.

#### passing values: props

There are there modes: Boolean, Object and Function. They all end up with `props` property in comps.

In the above case, we could use Boolean mode. Dynamic part will be transformed to `props`:

```javascript
// route configuration
{path: '/user/:id', component: User, props: true}

// in User instance
props: ['id']
```

In Object mode, the props object in path will be set as `props` in comps.

```javascript
{path: '/user', component: User, props: {id: '123'}} // configuration
props: {id: {type: String}} // instance
```

 Function mode means props config in path is a function, which takes the  `route`  as argument and returns an object. This object will be passed to comps as `props`. This mode gives a change to process the route as you like.

#### passing values: query

`$route.query` represents  the part between question mark  `?`  and hash symbol `#`. For instance, `?id=124` will be passed to comp as `$route.query.id = '124'`.

#### passing values: meta field

This mode is related with a concept, route record. A route record is a route object config, including `children` config. A route may match several route records like the father and its children route record. And these matches can be access to `$route.matched` Array so that we could touch meta fields by iterating through the array.

 

In my eyes, navigation plays an unignorable part in a router module. In VR, navigation can be performed through a programmatic way or interface operation, which actually implemented by the former.

#### programmatic navigation

Basically,  it's made up with three methods: `$router.push`,  `$router.replace`,  `$router.go`.

Yes, guess you have figured it out that these three methods imitate the three methods of navigator: `window.history.push`,  `window.history.replace`, `window.history.go`. If you're familiar with them, it will be pretty simply to learn VR programmatic navigation.

There is a history stack storing  all the history navigation records. The `push` method will get a history entry pushed into this stack, otherwise `replace` won't..Though, two of them perform the same navigation from current url to another url.

`push` and `replace` methods both have two more callback functions as arguments besides location. One will be called when the navigation succeed, the other is triggered when it fail.

As for `go`, it helps when you want to jump to one record in history stack, backward or forward.

```javascript
this.$router.go(-1) // go to the last record
this.$router.go(2) // go forward by 3 steps 
```

#### redirect and alias

Redirection is also configured in  path object. 

```javascript
{path: '/root', redirect: '/shaw', component: Shoot}
```

Alias is just another name for one path.

```javascript
{path: '/shaw', component: Shaw, alias: '/hammer'}
```

What's the difference?

Redirection is real navigation. Navigator performs it as a normal navigation applied by `replace` method. But alias doesn't trigger a navigation. They both won't leave a trace in history stack.

#### navigation guards

Well, this part deserves a single article. I'll leave it for the next or the next of the next post. Just in case, the former sentence doesn't mean anything.(crying while laughing emoji)



During the learning days, I produce a very small and very simple product: [vue-router-practise](https://github.com/EmmaYXY/vue-router-practise).

Basically, it contains several paragraghs to introduce VR and some interface operations to improve the taste of it. Welcome to fork it and create issues!