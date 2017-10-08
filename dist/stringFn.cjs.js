'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rambda = require('rambda');

function between(str, leftLimit, rightLimit) {
  return rambda.last(rambda.split(leftLimit, rambda.head(rambda.split(rightLimit, str)))).trim();
}

function camelCase(str) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var result = rambda.join("", rambda.map(function (val) {
    return "" + rambda.toUpper(rambda.head(val)) + rambda.toLower(rambda.tail(val));
  }, splitToWords(str, flag)));

  return "" + rambda.toLower(rambda.head(result)) + rambda.tail(result);
}

exports.between = between;
exports.camelCase = camelCase;
//# sourceMappingURL=stringFn.cjs.js.map
