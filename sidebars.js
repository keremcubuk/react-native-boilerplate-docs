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
      type: 'category',
      label: 'Getting Started',
      items: [
        'general/general',
        'general/cli-commands',
        'general/editor',
        'general/files',
        'general/faq',
        'general/gotchas',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'JavaScript',
      items: [
        'js/javascript',
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
  ],
};