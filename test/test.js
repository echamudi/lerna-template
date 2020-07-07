const flip = require('../packages/flip-string');
const assert = require('assert');

assert.deepStrictEqual(flip('hello'), 'olleh');
