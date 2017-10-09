import { head, join, last, map, match, split, tail, toLower, toUpper } from 'rambda';

function between(str, left, right) {
  return last(split(left, head(split(right, str)))).trim();
}

var WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g;

var splitToWords = match(WORDS);

function camelCase(str) {
  var result = join("", map(function (val) {
    return '' + toUpper(head(val)) + toLower(tail(val));
  }, splitToWords(str)));

  return '' + toLower(head(result)) + tail(result);
}

export { between, camelCase };
//# sourceMappingURL=stringFn.esm.js.map
