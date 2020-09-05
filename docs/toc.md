---
id: toc
title: Table of Contents
sidebar_label: Explore
slug: /
---

- [Introduction ](/docs/introduction)
- [General](/docs/general)
  - [Introduction ](/docs/general)
  - [**CLI Commands**](/docs/general/cli-commands)
  - [Tool Configuration](/docs/general/files)
  - [Debugging](general/debugging.md)
  - [FAQ](/docs/general/faq)
  - [Gotchas](/docs/general/gotchas)
  - [Extracting components](/docs/general/ext-components)
- [Testing](testing)
  - [Unit Testing](/docs/testing/unit-testing)
  - [Component Testing](/docs/testing/component-testing)
  - [Remote Testing](/docs/testing/remote-testing)
- [JS](javascript)
  - [Redux][redux]
  - [Immer][Immer]
  - [reselect][reselect]
  - [redux-saga][saga]
  - [i18n][i18n]
  - [routing][routing]
- [Maintenance](maintenance)

## Overview

### Quickstart

1.  First, let's kick the tyres by launching the sample _Repospective_ app
    bundled with this project to demo some of its best features:

    ```Shell
    npm run setup && npm start
    ```

1.  Open [localhost:8081](http://localhost:8081) to see it in action.

    - Add a Github username to see Redux and Redux Sagas in action: effortless
      async state updates and side effects are now yours :)
    - Edit the file at `./app/components/Header/index.js` so that the text of
      the `<Button>` component reads "Features!!!"... [Hot Module Reloading](https://webpack.js.org/guides/hot-module-replacement/) gives
      you a feedback loop with your UI so smooth it's almost conversational!
    - Click your (newly emphatic) Features button to see React Router in action...
      Now you can share a direct link to that content privately over your LAN or
      globally addressable to any device, anywhere. Not bad for a locally-running
      Single Page App.

1.  Time to build your own app: run

    ```shell
    npm run clean
    ```

    ...and use the built-in generators to start your first feature.

### Development

Run `npm start` to see your app at `localhost:8081`

### Building & Deploying

1.  Run `npm run build`, which will compile all the necessary files to the
    `build` folder.

2.  Upload the contents of the `build` folder to your web server's root folder.

### Structure

The [`app/`](https://github.com/keremcubuk/react-native-boilerplate/blob/master/app/app.js) directory contains your entire application code, including JavaScript and tests.

The rest of the folders and files only exist to make your life easier, and
should not need to be touched.

_(If they do have to be changed, please [submit an issue](https://github.com/keremcubuk/react-native-boilerplate/issues)!)_


### JS

We bundle all your clientside scripts and chunk them into several files using
code splitting where possible. We then automatically optimize your code when
building for production so you don't have to worry about that.

See the [JS documentation][javascript] for more information about the
JavaScript side of things.


### Testing

For a thorough explanation of the testing procedure, see the
[testing documentation](testing)!


#### Unit testing

Unit tests live in `test/` directories right next to the components being tested
and are run with `npm run test`.

[redux]: /docs/javascript/redux
[immer]: /docs/javascript/immer
[reselect]: /docs/javascript/reselect
[saga]: /docs/javascript/redux-saga
[routing]: /docs/javascript/routing
[i18n]: /docs/javascript/i18n
[async_components]: /docs/javascript/async-components
[javascript]: /docs/javascript
[testing]: /docs/testing