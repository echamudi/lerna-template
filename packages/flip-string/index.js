var arrayToString = require('@echamudi/array-to-string');
var stringToArray = require('@echamudi/string-to-array');
var minimath = require('@echamudi/minimath');

module.exports = function (x) {
    return arrayToString(stringToArray(x).reverse());
}
