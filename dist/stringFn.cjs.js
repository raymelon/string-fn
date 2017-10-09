'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rambda = require('rambda');

function between(str, left, right) {
  return rambda.last(rambda.split(left, rambda.head(rambda.split(right, str)))).trim();
}

var WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g;

var splitToWords = rambda.match(WORDS);

function camelCase(str) {
  var result = rambda.join("", rambda.map(function (val) {
    return '' + rambda.toUpper(rambda.head(val)) + rambda.toLower(rambda.tail(val));
  }, splitToWords(str)));

  return '' + rambda.toLower(rambda.head(result)) + rambda.tail(result);
}

exports.between = between;
exports.camelCase = camelCase;
//# sourceMappingURL=stringFn.cjs.js.map
