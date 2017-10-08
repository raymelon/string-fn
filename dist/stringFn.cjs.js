'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function between(str, leftLimit, rightLimit) {
  return R.last(R.split(leftLimit, R.head(R.split(rightLimit, str)))).trim();
}

exports.between = between;
//# sourceMappingURL=stringFn.cjs.js.map
