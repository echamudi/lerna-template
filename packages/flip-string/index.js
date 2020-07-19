var arrayToString = require('@echamudi/array-to-string');
var stringToArray = require('@echamudi/string-to-array');

module.exports = function (x) {
    return arrayToString(stringToArray(x).reverse());
}
