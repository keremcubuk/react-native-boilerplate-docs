---
id: maintenance
title: Maintenance
sidebar_label: Update Project Dependencies
slug: /maintenance
---

Updating the dependencies is a tedious job. This doc is intended to help streamline the process and make it painless.

## Maintain Update Log

There's a sample `Update Log` at the end of this document. Create a new file where you can dump the Version Diff, Test results, Chrome/Node/npm versions. Mention the dependencies that you had to roll back along with the reason. Optionally you can mention the errors/warnings that you encountered while updating dependencies.

## Managing Node Versions

It is recommended that you use [Node Version Manager](https://github.com/creationix/nvm) or [Node Version Control](https://github.com/tj/n) to switch node versions quickly in order to run and test this project on multiple node versions.

## Update Tooling

**Update npm:**

1.  Run `npm install -g npm`
2.  Run `npm -v` and record npm version in `Update Log`.

**Update Xcode**

1.  Download the [latest version](https://apps.apple.com/tr/app/xcode/id497799835?mt=12)

2.  Go to `Xcode -> About` and record version number in `Update Log`

**Update Android Studio**

1. Download the [latest version](https://developer.android.com/studio)

2.  Go to `Android Studio -> About` and record version number in `Update Log`

## Update Dependencies

[npm-check-updates](https://github.com/tjunnone/npm-check-updates) is a great tool to update your dependencies. It will only update your `package.json`. Run `npm install` if you want to install updated package versions. There are 3 useful commands.

1.  `ncu -u --semverLevel minor`
2.  `ncu -u --semverLevel major`
3.  `ncu -u`

Confirm/adjust eslint-config-airbnb compatible [dependency versions](https://www.npmjs.com/package/eslint-config-airbnb)

`npm info "eslint-config-airbnb@latest" peerDependencies`

### Pinned Version Numbers

`react-boilerplate` does not use "^", "~", etc., and these should be removed from `package.json`, if present. See [#598](https://github.com/react-boilerplate/react-boilerplate/issues/598) for more details.

At this point, you should copy and paste the version diff from the terminal into your `Update Log`.

## Correct Errors and Rollback Dependencies

Run `npm install` to install updated versions and then start the example app by running `npm start`. Make sure that the project is running smoothly. If not, track down the dependencies that are causing problems and try to roll them back one by one and check if the example application is running.

Note down the rolled back dependencies and state the reason in your `Update Log`.

## Full Regression Testing

Most of the errors/warnings would go away once you roll back the problemetic dependencies. But we need to make sure that the internal commands, tools, scaffolding etc. are functional too.

**Example App:**

- `rm -rf node_modules && rm package-lock.json`
- `npm install && npm start`

- Browse example app on development server
  - Browse Features page, change language to `de`
  - Browse NotFound page
- Browse example app on dev tunnel
- Browse example app on Production server
- Browse example app offline

Identify problems that occur and try to resolve them by rolling back the respective dependencies. Update the `Update Log`.

**Internal Commands:**

- `npm run clean` (Be careful, this will commit all your changes.)
- `npm run generate component` TestComp /w defaults
- `npm run generate container` TestPage /w defaults
- Add a new route in the App container:

```js
import TestPage from 'containers/TestPage/Loadable';

<Route path="/test" component={TestPage} />
```

- Use TestComp on TestPage -> bypass all tests in TestComp and TestPage (set true = true)
- `npm start` > `localhost:3000/test`
- `npm test` (expect test failure due to incomplete test coverage)
- `npm run build`
- `npm run start:prod` > `localhost:3000/test`

# Sample Update Log

## Tooling Versions

- Node 8.11.4
- npm 6.4.0
- Mac OS 10.13.6
- Chrome 68.0.3440.106 (64-bit)

## :spiral_notepad: Notes

1.  `react-test-renderer` was added as a dev-dependency because enzyme was showing warnings-
    > A few deprecation warnings were added in React 15.5. This supports the new APIs that React recommends. Ref. [#876](https://github.com/airbnb/enzyme/pull/876)
1.  If you see a package-name being repeated, note that the version number of the last occurrence will get precedence.

## :package: Version Diff

**[0] PATCH UPDATES**

```
 fontfaceobserver                        2.0.8  →    2.0.9
 ip                                      1.1.4  →    1.1.5
 react-redux                             5.0.2  →    5.0.5
 react-router                            3.0.2  →    3.0.5
 react-router-redux                      4.0.7  →    4.0.8
 react-router-scroll                     0.4.1  →    0.4.2
 redux-saga                             0.14.3  →   0.14.8
 whatwg-fetch                            2.0.2  →    2.0.3
 babel-plugin-dynamic-import-node        1.0.0  →    1.0.2
 coveralls                             2.11.15  →  2.11.16
 imports-loader                          0.7.0  →    0.7.1
 lint-staged                             3.3.0  →    3.3.2
 ngrok                                   2.2.6  →    2.2.9
 offline-plugin                          4.6.1  →    4.6.2
 shelljs                                 0.7.6  →    0.7.7
 sinon                             2.0.0-pre.5  →    2.0.0
 style-loader                           0.13.1  →   0.13.2
 url-loader                              0.5.7  →    0.5.8
```

**[1] MINOR UPDATES**

```
 react                                            15.4.2  →                 15.5.4
 react-intl                                        2.2.3  →                  2.3.0
 redux-immutable                                  3.0.11  →                  3.1.0
 redux-saga                                       0.14.8  →                 0.15.3
 babel-cli                                        6.22.2  →                 6.24.1
 babel-core                                       6.22.1  →                 6.24.1
 babel-eslint                                      7.1.1  →                  7.2.3
 babel-loader                                     6.2.10  →                  6.4.1
 babel-plugin-transform-es2015-modules-commonjs   6.22.0  →                 6.24.1
 babel-plugin-transform-react-constant-elements   6.22.0  →                 6.23.0
 babel-plugin-transform-react-remove-prop-types   0.2.12  →                  0.4.5
 babel-preset-env                                  1.4.0  →                  1.5.1
 babel-preset-react                               6.22.0  →                 6.24.1
 babel-preset-stage-0                             6.22.0  →                 6.24.1
 coveralls                                       2.11.16  →                 2.13.1
 enzyme                                            2.7.1  →                  2.8.2
 eslint                                           3.13.1  →                 3.19.0
 eslint-config-airbnb                             14.0.0  →                 14.1.0
 eslint-config-airbnb-base                        11.0.1  →                 11.2.0
 eslint-plugin-import                              2.2.0  →                  2.3.0
 eslint-plugin-react                               6.9.0  →                 6.10.3
 jest-cli                                         18.1.0  →  18.5.0-alpha.7da3df39
 lint-staged                                       3.3.2  →                  3.5.1
 node-plop                                         0.5.5  →                  0.7.0
 offline-plugin                                    4.6.2  →                  4.8.1
 plop                                              1.7.4  →                  1.8.0
 react-addons-test-utils                          15.4.2  →                 15.5.1
 sinon                                             2.0.0  →                  2.3.2
 style-loader                                     0.13.2  →                 0.18.1
```

**[3] MAJOR UPDATES**

```
 reselect                                    2.5.4  →       3.0.1
 babel-loader                                6.4.1  →       7.0.0
 circular-dependency-plugin                  2.0.0  →       3.0.0
 eslint-config-airbnb                       14.1.0  →      15.0.1
 eslint-plugin-jsx-a11y                      3.0.2  →       5.0.3
 eslint-plugin-react                        6.10.3  →       7.0.1
 image-webpack-loader                        2.0.0  →       3.3.1
 jest-cli                    18.5.0-alpha.7da3df39  →      20.0.4
```

**[4] ROLLBACKS**

```
 history                                     3.3.0  →       4.6.1 <--- rolled back
 react-router                                3.0.5  →       4.1.1 <--- rolled back
 image-webpack-loader                        2.0.0  →       3.0.0 <--- rolled back
```

**[5] NEW DEPENDENCIES**

```
react-test-renderer                                     15.5.4
```

## Errors Encountered

- Incompatible per `npm info "eslint-config-airbnb@latest" peerDependencies` adjust eslint-config-airbnb compatible dependency versions. see: https://www.npmjs.com/package/eslint-config-airbnb

  **_eslint 3.13.1 → 3.15.0 <--- rolled back_**
