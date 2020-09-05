---
id: remove-plugin
title: Remove
slug: /general/remove-plugin
---


### Removing offline access

**Careful** about removing this, as there is no real downside to having your
application available when the users network connection isn't perfect.

To remove offline capability, delete the `offline-plugin` from the
`package.json`, remove the import of the plugin in `app.js` and remove the plugin from the
