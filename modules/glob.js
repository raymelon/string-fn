import {
  head,
  init,
  last,
  tail,
} from 'rambda'
export default function glob (str, globStr) {
  const numGlobs = count(globStr, '*')
  if (numGlobs === 1) {
    if (R.head(globStr) === '*') {
      return str.endsWith(R.tail(globStr))
    } else if (R.last(globStr) === '*') {
      return str.startsWith(R.init(globStr))
    }
  } else if (
    numGlobs === 2 &&
    head(globStr) === '*' &&
    last(globStr) === '*'
  ) {
    globStr = init(tail(globStr))
    const foundIndex = str.indexOf(globStr)

    return foundIndex > 0 && foundIndex + globStr.length < str.length
  }

  return str.includes(globStr)
}
