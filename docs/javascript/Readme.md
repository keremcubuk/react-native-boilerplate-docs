---
id: javascript
title: Javascript
sidebar_label: Summary
slug: /javascript
---

## State management

This boilerplate manages application state using [Redux][redux], makes it
immutable with [`Immer`][immer] and keeps access performant
via [`reselect`][reselect].

For managing asynchronous flows (e.g. logging in) we use [`redux-saga`][saga].

For routing, we use [`react-navigation`][routing].

We include a generator for components, containers, sagas, routes and selectors.
Run `npm run generate` to choose from the available generators, and automatically
add new parts of your application!

> Note: If you want to skip the generator selection process,
> `npm run generate <generator>` also works. (e.g. `npm run generate container`)

### Learn more

- [Redux][redux]
- [Immer][immer]
- [reselect][reselect]
- [redux-saga][saga]
- [react-intl][i18n]
- [routing][routing]
- [Asynchronously loaded components][async_components]

## Architecture: `components` and `containers`

We adopted a split between stateless, reusable components called (wait for it...)
`components` and stateful parent components called `containers`.

### Learn more

See [this article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
by Dan Abramov for a great introduction to this approach.

[redux]: /docs/javascript/redux
[immer]: /docs/javascript/immer
[reselect]: /docs/javascript/reselect
[saga]: /docs/javascript/redux-saga
[routing]: /docs/javascript/routing
[i18n]: /docs/javascript/i18n
[async_components]: /docs/javascript/async-components