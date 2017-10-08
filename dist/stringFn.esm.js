import { head, join, last, map, split, tail, toLower, toUpper } from 'rambda';

function between(str, leftLimit, rightLimit) {
  return last(split(leftLimit, head(split(rightLimit, str)))).trim();
}

function camelCase(str) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var result = join("", map(function (val) {
    return "" + toUpper(head(val)) + toLower(tail(val));
  }, splitToWords(str, flag)));

  return "" + toLower(head(result)) + tail(result);
}

export { between, camelCase };
//# sourceMappingURL=stringFn.esm.js.map
