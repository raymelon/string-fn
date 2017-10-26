const R = require('rambda')

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g
const PUNCTUATIONS = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g
const HTML_TAGS = /<[^>]*>/g





function removeIndent (str) {
  return R.join(
    '\n',
    R.map(
      val => val.trimLeft(),
      R.split('\n', str)
    )
  )
}



const redux = R.compose(
  R.join('_'),
  R.map(R.toUpper),
  splitToWords
)

function map (str, fn) {
  return R.join(
    '',
    R.map(
      val => fn(val),
      R.split('', str)
    )
  )
}

const addSpaceAroundPunctuation = sentence => sentence.replace(PUNCTUATIONS, match => ` ${ match } `)

const maskWordHelper = (word, replacer, charLimit) => {
  if (
    R.test(PUNCTUATIONS, word) ||
    word.length < 2
  ) {
    return word
  }

  if (word.length < charLimit) {
    return `${ R.head(word) }${ replacer.repeat(word.length - 1) }`
  }

  return `${ R.head(word) }${ replacer.repeat(word.length - 2) }${ R.last(word) }`
}

function maskSentence ({ sentence, replacer = '_', charLimit = 3, words = [] }) {
  sentence = clean(
    addSpaceAroundPunctuation(sentence)
  )

  const hidden = []
  const visible = []

  R.map(
    val => {
      let visiblePart
      if (
        words.length === 0 ||
        words.includes(val)
      ) {
        visiblePart = maskWordHelper(val, replacer, charLimit)
      } else {
        visiblePart = val
      }
      hidden.push(val)
      visible.push(visiblePart)
    },
    R.split(' ', sentence)
  )

  return {
    hidden,
    visible,
  }
}

function splitSentence (sentence) {
  return R.split(
    ' ',
    clean(
      addSpaceAroundPunctuation(sentence)
    )
  )
}

function maskWords ({ words, replacer = '_', charLimit = 3 }) {
  const result = R.map(
    val => maskWordHelper(val, replacer, charLimit),
    R.split(' ', words)
  )

  return R.join(' ', result)
}

function padLeft ({ str, padLimit, padChar }) {
  const length = str.length
  if (padLimit < length) {
    return str
  }

  return `${ padChar.repeat(padLimit - length) }${ str }`
}

function padRight ({ str, padLimit, padChar }) {
  const length = str.length
  if (padLimit < length) {
    return str
  }

  return `${ str }${ padChar.repeat(padLimit - length) }`
}

function removeLeftPadding ({ str, padChar }) {
  let index = -1
  let flag = true

  while (flag && ++index < str.length) {
    if (str[ index ] !== padChar) {
      flag = false
    }
  }

  return str.substr(index)
}

function removeRightPadding ({ str, padChar }) {
  let index = str.length
  let flag = true

  while (flag && --index > 0) {
    if (str[ index ] !== padChar) {
      flag = false
    }
  }

  return str.substring(0, index + 1)
}

function replaceLast (str, replacer = '') {
  return `${ R.init(str) }${ replacer }`
}

function replaceFirst (str, replacer = '') {
  return `${ replacer }${ R.tail(str) }`
}

function reverse (str) {
  return str
    .split('')
    .reverse()
    .join('')
}

function seoTitle (str, lowLimit = 3, flag = false) {
  const result = R.join(
    ' ',
    R.map(
      val => {
        if (val.length >= lowLimit) {
          return `${ R.toUpper(R.head(val)) }${ R.toLower(R.tail(val)) }`
        }

        return val
      },
      splitToWords(str, flag)
    )
  )

  return `${ R.toUpper(R.head(result)) }${ R.tail(result) }`
}

const shuffleArr = arr => {
  let counter = arr.length
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = arr[ counter ]
    arr[ counter ] = arr[ index ]
    arr[ index ] = temp
  }

  return arr
}

function shuffle (str) {
  return R.join(
    '',
    shuffleArr(
      R.split('', str)
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
