const R = require('rambda')

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g
const PUNCTUATIONS = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g
const HTML_TAGS = /<[^>]*>/g

function splitSentence (sentence) {
  return R.split(
    ' ',
    trim(
      addSpaceAroundPunctuation(sentence)
    )
  )
}

function splitToWords (str, flag = false) {
  const regex = flag ?
    WORDS_EXTENDED :
    WORDS

  return R.match(regex, str)
}
