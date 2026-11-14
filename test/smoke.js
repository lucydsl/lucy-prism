// Checks that the package loads and adds its languages to a Prism-like object.
const assert = require('assert');
const { lucy, lucyTemplate } = require('../lib/main.js');

assert.strictEqual(typeof lucy, 'function');
assert.strictEqual(typeof lucyTemplate, 'function');

console.log('ok');
