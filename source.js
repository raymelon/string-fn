const R = require("rambda")

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g
const PUNCTUATIONS = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g
const HTML_TAGS = /<[^>]*>/g

function between (str, leftLimit, rightLimit) {
  return R.last(
    R.split(
      leftLimit,
      R.head(R.split(rightLimit, str))
    )
  ).trim()
}

function camelCase (str, flag = false) {
  const result = R.join(
    "",
    R.map(
      val => `${ R.toUpper(R.head(val)) }${ R.toLower(R.tail(val)) }`,
      splitToWords(str, flag)
    )
  )

  return `${ R.toLower(R.head(result)) }${ R.tail(result) }`
}

function clean (str) {
  return R.replace(/\s+/g, " ", str).trim()
}

function count (str, substr) {
  return R.length(R.split(substr, str)) - 1
}

function distance (a, b) {
  if (a.length === 0) { return b.length }
  if (b.length === 0) { return a.length }
  let i, j, prev, val, tmp
  if (a.length > b.length) {
    tmp = a
    a = b
    b = tmp
  }

  row = Array(a.length + 1)
  for (i = 0; i <= a.length; i++) {
    row[ i ] = i
  }

  for (i = 1; i <= b.length; i++) {
    prev = i
    for (j = 1; j <= a.length; j++) {
      if (b[ i - 1 ] === a[ j - 1 ]) {
        val = row[ j - 1 ]
      } else {
        val = Math.min(row[ j - 1 ] + 1,
          Math.min(prev + 1,
            row[ j ] + 1))
      }
      row[ j - 1 ] = prev
      prev = val
    }
    row[ a.length ] = prev
  }

  return row[ a.length ]
}

const normalizeGermanChar = char => {
  const arr = [ "ä", "ö", "ü", "ß" ]
  const normalizedArr = [ "a", "o", "u", "ss" ]
  const foundIndex = arr.indexOf(char)
  if (foundIndex === -1) {
    return char
  }

  return normalizedArr[ foundIndex ]
}

const normalizeGermanWord = str => R.join(
    "",
    R.map(
      val => normalizeGermanChar(val),
      R.split("", R.toLower(str))
    )
  )

function distanceGerman (a, b) {
  return distance(normalizeGermanWord(a), normalizeGermanWord(b))
}

function filter (str, fn) {
  return R.join(
    "",
    R.filter(
      val => fn(val),
      R.split("", str)
    )
  )
}

function glob (str, globStr) {
  const numGlobs = count(globStr, "*")
  if (numGlobs === 1) {
    if (R.head(globStr) === "*") {
      return str.endsWith(R.tail(globStr))
    } else if (R.last(globStr) === "*") {
      return str.startsWith(R.init(globStr))
    }
  } else if (
    numGlobs === 2 &&
    R.head(globStr) === "*" &&
    R.last(globStr) === "*"
  ) {
    globStr = R.init(R.tail(globStr))
    const foundIndex = str.indexOf(globStr)

    return foundIndex > 0 && foundIndex + globStr.length < str.length
  }

  return str.includes(globStr)
}

function indent(str, indentCount){
  return R.join(
    "\n",
    R.map(
      val => `${" ".repeat(indentCount)}${val}`,
      R.split("\n", str)
    )
  )
}

function removeIndent(str){
  return R.join(
    "\n",
    R.map(
      val => val.trimLeft(),
      R.split("\n", str)
    )
  )
}

function kebabCase (str, flag = false) {
  return R.toLower(
    R.join(
      "-",
      splitToWords(str, flag)
    )
  )
}

function map (str, fn) {
  return R.join(
    "",
    R.map(
      val => fn(val),
      R.split("", str)
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

function maskSentence ({ sentence, replacer = "_", charLimit = 3, words = [] }) {
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
    R.split(" ", sentence)
  )

  return {
    hidden,
    visible,
  }
}

function splitSentence(sentence){
  return R.split(
    " ",
    clean(
      addSpaceAroundPunctuation(sentence)
    )
  )
}

function maskWords ({ words, replacer = "_", charLimit = 3 }) {
  const result = R.map(
    val => maskWordHelper(val, replacer, charLimit),
    R.split(" ", words)
  )

  return R.join(" ", result)
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

function replaceLast (str, replacer = "") {
  return `${ R.init(str) }${ replacer }`
}

function replaceFirst (str, replacer = "") {
  return `${ replacer }${ R.tail(str) }`
}

function reverse (str) {
  return str
  .split("")
  .reverse()
  .join("")
}

function seoTitle (str, lowLimit = 3, flag = false) {
  const result = R.join(
    " ",
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
    "",
    shuffleArr(
      R.split("", str)
    )
  )
}

function snakeCase (str, flag = false) {
  return R.toLower(
    R.join(
      "_",
      splitToWords(str, flag)
    )
  )
}
///

function stripPunctuation (str) {
  return R.replace(PUNCTUATIONS, "", str)
}

function stripTags (str) {
  return R.replace(
    /\s+/g,
    " ",
    R.replace(
      HTML_TAGS,
      " ",
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
    " ",
    R.map(
      val => `${ R.toUpper(R.head(val)) }${ R.toLower(R.tail(val)) }`,
      splitToWords(str, flag)
    )
  )
}

function truncate (str, lengthLimit, tail = "...") {
  if (str.length > lengthLimit) {
    lengthLimit = lengthLimit - tail.length

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

function wrap (str, wrapLimit, flag = false) {
  wrapLimit = wrapLimit <= 0 ?
    1 :
    wrapLimit

  const strAsArr = str.split("")
  const willReturn = []
  let counter = 0

  Array(str.length).fill()
  .map((val, key) => {
    if (key === counter) {
      const nextCellKey = key + wrapLimit
      if (nextCellKey > strAsArr.length) {
        willReturn.push(str.substr(key))
      } else {
        const shortString = str.substr(key, wrapLimit)

        if (strAsArr[ nextCellKey ] === " ") {
          willReturn.push(shortString)
          counter = nextCellKey + 1
        } else {
          let spaceCellKey = shortString.lastIndexOf(" ")
          if (spaceCellKey > -1) {
            willReturn.push(shortString.substring(0, spaceCellKey))
            counter = spaceCellKey + key + 1
          } else {
            const longSubstring = str.substr(key)
            spaceCellKey = longSubstring.indexOf(" ")

            if (spaceCellKey > -1) {
              if (flag) {
                willReturn.push(longSubstring.substring(0, spaceCellKey))
              }
              counter = spaceCellKey + key + 1
            } else {
              if (flag) {
                willReturn.push(longSubstring)
              }
              counter = str.length
            }
          }
        }
      }
    }
  })

  return willReturn
}

module.exports.between = between
module.exports.camelCase = camelCase
module.exports.clean = clean
module.exports.count = count
module.exports.distance = distance
module.exports.distanceGerman = distanceGerman
module.exports.filter = filter
module.exports.glob = glob
module.exports.indent = indent
module.exports.kebabCase = kebabCase
module.exports.map = map
module.exports.maskSentence = maskSentence
module.exports.maskWords = maskWords
module.exports.padLeft = padLeft
module.exports.padRight = padRight
module.exports.removeIndent = removeIndent
module.exports.removeLeftPadding = removeLeftPadding
module.exports.removeRightPadding = removeRightPadding
module.exports.replaceFirst = replaceFirst
module.exports.replaceLast = replaceLast
module.exports.reverse = reverse
module.exports.seoTitle = seoTitle
module.exports.shuffle = shuffle
module.exports.snakeCase = snakeCase
module.exports.splitSentence = splitSentence
module.exports.stripPunctuation = stripPunctuation
module.exports.stripTags = stripTags
module.exports.surround = surround
module.exports.titleCase = titleCase
module.exports.truncate = truncate
module.exports.words = splitToWords
module.exports.wrap = wrap
