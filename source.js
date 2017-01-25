const R = require("rambda")

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g
const PUNCTUATIONS = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g
const HTML_TAGS = /<[^>]*>/g

function shuffleArr(array) {
  let counter = array.length
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }

  return array
}

function shuffle(str) {
  return R.join(
    "",
    shuffleArr(
      R.split("", str)
    )
  )
}

function surround(str, leftStr, rightStr) {
  if (rightStr === undefined) {
    rightStr = leftStr
  }

  return `${leftStr}${str}${rightStr}`
}

function words(str, flag = false) {
  const regex = flag ?
    WORDS_EXTENDED :
    WORDS

  return R.match(regex, str)
}

function kebabCase(str, flag = false) {
  return R.toLower(
    R.join(
      "-",
      words(str, flag)
    )
  )
}

function snakeCase(str, flag = false) {

  return R.toLower(
    R.join(
      "_",
      words(str, flag)
    )
  )
}

function titleCase(str, flag = false) {

  return R.join(
    " ",
    R.map(
      val => `${R.toUpper(R.head(val))}${R.toLower(R.tail(val))}`,
      words(str, flag)
    )
  )
}

function capitalize(str, lowLimit = 3, flag = false) {

  const result = R.join(
    " ",
    R.map(
      val => {
        if(val.length>=lowLimit){
          return `${R.toUpper(R.head(val))}${R.toLower(R.tail(val))}`
        }
        return val
      },
      words(str, flag)
    )
  )

  return `${R.toUpper(R.head(result))}${R.tail(result)}`
}

function camelCase(str, flag = false) {
  const result = R.join(
    "",
    R.map(
      val => `${R.toUpper(R.head(val))}${R.toLower(R.tail(val))}`,
      words(str, flag)
    )
  )

  return `${R.toLower(R.head(result))}${R.tail(result)}`
}

function count(str, substr) {
  return R.length(R.split(substr, str)) - 1
}

function distance(a, b) {
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length
  let tmp, i, j, prev, val
  if (a.length > b.length) {
    tmp = a
    a = b
    b = tmp
  }

  row = Array(a.length + 1)
  for (i = 0; i <= a.length; i++) {
    row[i] = i
  }

  for (i = 1; i <= b.length; i++) {
    prev = i
    for (j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        val = row[j - 1]
      }
      else {
        val = Math.min(row[j - 1] + 1,
          Math.min(prev + 1,
            row[j] + 1))
      }
      row[j - 1] = prev
      prev = val
    }
    row[a.length] = prev
  }
  return row[a.length]
}

function replaceLast(str, replacer = "") {
  return `${R.init(str)}${replacer}`
}

function replaceFirst(str, replacer = "") {
  return `${replacer}${R.tail(str)}`
}

function stripPunctuation(str) {
  return R.replace(PUNCTUATIONS, "", str)
}

function stripTags(str) {
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


function returnEasyStyleGerman(keyIs) {
  if (keyIs === "ä") {
    return "a"
  }
  else if (keyIs === "ö") {
    return "o"
  }
  else if (keyIs === "ü") {
    return "u"
  }
  else if (keyIs === "ß") {
    return "ss"
  }

  return keyIs
}

function normalizeGermanWord(str) {
  return R.join(
    "",
    R.map(
      val => returnEasyStyleGerman(val),
      R.split("", R.toLower(str))
    )
  )
}

function distanceGerman(a, b) {
  return distance(normalizeGermanWord(a), normalizeGermanWord(b))
}

function reverse(str) {
  return str.split("").reverse().join("")
}

function between(str, leftLimit, rightLimit) {
  return R.last(
    R.split(
      leftLimit,
      R.head(R.split(rightLimit, str))
    )
  ).trim()
}

function wrap(str, wrapLimit, flag = false){
  const strAsArr = str.split("")
  const willReturn = []
  let counter = 0

  Array(str.length).fill().map((val,key)=>{
    if(key === counter){
      const nextCellKey = key+wrapLimit
      if(nextCellKey>strAsArr.length){

        willReturn.push(str.substr(key))
      }else{

        const shortString = str.substr(key, wrapLimit)

        if(strAsArr[nextCellKey]===" "){

          willReturn.push(shortString)
          counter = nextCellKey +1
        }else{

          let spaceCellKey = shortString.lastIndexOf(" ")
          if(spaceCellKey > -1){

            willReturn.push(shortString.substring(0,spaceCellKey))
            counter = spaceCellKey + key + 1
          }else{

            const longSubstring = str.substr(key)
            spaceCellKey = longSubstring.indexOf(" ")

            if(spaceCellKey > -1){

              if(flag){

                willReturn.push(longSubstring.substring(0,spaceCellKey))
              }
              counter = spaceCellKey + key +1
            }else{

              if(flag){

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

module.exports.wrap = wrap
module.exports.capitalize = capitalize
module.exports.between = between
module.exports.reverse = reverse
module.exports.stripTags = stripTags
module.exports.stripPunctuation = stripPunctuation
module.exports.replaceFirst = replaceFirst
module.exports.replaceLast = replaceLast
module.exports.distance = distance
module.exports.distanceGerman = distanceGerman
module.exports.count = count
module.exports.surround = surround
module.exports.shuffle = shuffle
module.exports.kebabCase = kebabCase
module.exports.titleCase = titleCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.words = words
