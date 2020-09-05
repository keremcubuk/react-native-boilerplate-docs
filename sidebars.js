/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'toc'
    },
    {
      type: 'doc',
      id: 'general/introduction'
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'general/general',
        'general/cli-commands',
        'general/editor',
        'general/files',
        'general/debugging',
        'general/faq',
        'general/gotchas',
        'general/ext-components',
        'general/remove-plugin',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'JavaScript',
      items: [
        'javascript/javascript',
        'javascript/redux',
        'javascript/immer',
        'javascript/redux_saga',
        'javascript/reselect',
        'javascript/routing',
        'javascript/i18n',
        'javascript/async_components',
        'javascript/remove',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'testing/testing',
        'testing/unit_testing',
        'testing/component_testing',
        'testing/remote_testing'
      ],
      collapsed: true,
    },
    {
      type: 'doc',
      id: 'maintenance'
    },
  ],
};