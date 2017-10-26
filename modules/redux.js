const redux = R.compose(
  R.join('_'),
  R.map(R.toUpper),
  splitToWords
)
