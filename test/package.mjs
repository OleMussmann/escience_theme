// Checks that the package resolves by name the way consumers (NEBULA) use
// it: the plugin via the package root, the stylesheet via its export, and
// nothing else. Relies on Node resolving a package's own name through
// its "exports" map.

import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const { default: Escience } = await import('escience_theme');
// A plugin factory: reveal.js calls it once per deck.
assert.equal(typeof Escience, 'function');
const plugin = Escience();
assert.equal(plugin.id, 'Escience');
assert.equal(typeof plugin.init, 'function');
assert.equal(typeof plugin.destroy, 'function');

const css = fileURLToPath(import.meta.resolve('escience_theme/escience.css'));
assert.ok(existsSync(css), `missing ${css}`);

assert.throws(() => import.meta.resolve('escience_theme/escience.js'),
  { code: 'ERR_PACKAGE_PATH_NOT_EXPORTED' });

console.log('package exports: ok');
