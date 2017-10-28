const R = require('rambda')

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g
const PUNCTUATIONS = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g
const HTML_TAGS = /<[^>]*>/g

function splitSentence (sentence) {
  return R.split(
    ' ',
    clean(
      addSpaceAroundPunctuation(sentence)
    )
  )
}

function snakeCase (str, flag = false) {
  return R.toLower(
    R.join(
      '_',
      splitToWords(str, flag)
    )
  )
}
///

function stripPunctuation (str) {
  return R.replace(PUNCTUATIONS, '', str)
}

function stripTags (str) {
  return R.replace(
    /\s+/g,
    ' ',
    R.replace(
      HTML_TAGS,
      ' ',
      str
    )
  ).trim()
}

function surround (str, leftStr, rightStr) {
  if (rightStr === undefined) {
    rightStr = leftStr
  }

  return `${ leftStr }${ str }${ rightStr }`
}

function titleCase (str, flag = false) {
  return R.join(
    ' ',
    R.map(
      val => `${ R.toUpper(R.head(val)) }${ R.toLower(R.tail(val)) }`,
      splitToWords(str, flag)
    )
  )
}

function truncate (str, lengthLimit, tail = '...') {
  if (str.length > lengthLimit) {
    lengthLimit -= tail.length

    return `${ str.substr(0, lengthLimit) }${ tail }`
  }

  return str
}

function splitToWords (str, flag = false) {
  const regex = flag ?
    WORDS_EXTENDED :
    WORDS

  return R.match(regex, str)
}
