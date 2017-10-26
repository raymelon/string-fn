
function removeIndent (str) {
  return R.join(
    '\n',
    R.map(
      val => val.trimLeft(),
      R.split('\n', str)
    )
  )
}
