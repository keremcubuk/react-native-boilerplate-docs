---
id: general
title: Introduction
slug: /general
---

The JavaScript ecosystem evolves at incredible speed: staying current can feel
overwhelming. So, instead of you having to stay on top of every new tool,
feature and technique to hit the headlines, this project aims to lighten the
load by providing a curated baseline of the most valuable ones.

Using React Boilerplate, you get to start your app with our community's current
ideas on what represents optimal developer experience, best practice, most
efficient tooling and cleanest project structure.

- [**CLI Commands**](/docs/general/cli-commands)
- [Setting up your editor](/docs/general/editor)
- [Tool Configuration](/docs/general/files)
- [FAQ](/docs/general/faq)
- [Gotchas](/docs/general/gotchas)

# Feature overview

## Quick scaffolding

Automate the creation of components, containers, routes, selectors and sagas -
and their tests - right from the CLI!

Run `npm run generate` in your terminal and choose one of the parts you want
to generate. They'll automatically be imported in the correct places and have
everything set up correctly.

> We use [plop] to generate new components, you can find all the logic and
> templates for the generation in `internals/generators`.

[plop]: https://github.com/amwmedia/plop

## Instant feedback

Enjoy the best DX and code your app at the speed of thought! Your saved changes
to the CSS and JS are reflected instantaneously without refreshing the page.
Preserve application state even when you update something in the underlying code!

## Predictable state management

We use Redux to manage our applications state. We have also added optional
support for the [Chrome Redux DevTools Extension] – if you have it installed,
you can see, play back and change your action history!

[chrome redux devtools extension]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Next generation JavaScript

Use ESNext template strings, object destructuring, arrow functions, JSX syntax
and more, today. This is possible thanks to Babel with the `env`, `stage-0`
and `react` presets!


## Industry-standard routing

It's natural to want to add pages (e.g. `/about`) to your application, and
routing makes this possible. Thanks to [react-navigation],
that's as easy as pie and the url is auto-synced to your application state!

[react-navigation]: https://reactnavigation.org/

## Static code analysis

Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.

Read more about linting in our [introduction](./introduction.md) and don't forget to setup your by following [our instructions](./editor.md).

# Optional extras

_Don't like any of these features? [Click here](remove.md)_

## Offline-first

The next frontier in performant web apps: availability without a network
connection from the instant your users load the app. This is done with a
ServiceWorker and a fallback to AppCache, so this feature even works on older
browsers!

> All your files are included automatically. No manual intervention needed
> thanks to Webpack's [`offline-plugin`](https://github.com/NekR/offline-plugin)
