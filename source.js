const R = require("rambda")

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g

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

function toWords(str, flag = false) {
  const regex = flag ?
    WORDS_EXTENDED :
    WORDS

  return R.match(regex, str)
}

function toKebabCase(str, flag = false) {
  return R.toLower(
    R.join(
      "-",
      toWords(str, flag)
    )
  )
}

function toSnakeCase(str, flag = false) {

  return R.toLower(
    R.join(
      "_",
      toWords(str, flag)
    )
  )
}

function toTitleCase(str, flag = false) {

  return R.join(
    " ",
    R.map(
      val => `${R.toUpper(R.head(val))}${R.toLower(R.tail(val))}`,
      toWords(str, flag)
    )
  )
}

function toCamelCase(str, flag = false) {
  const result = R.join(
    "",
    R.map(
      val => `${R.toUpper(R.head(val))}${R.toLower(R.tail(val))}`,
      toWords(str, flag)
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

module.exports.distance = distance
module.exports.count = count
module.exports.surround = surround
module.exports.shuffle = shuffle
module.exports.toKebabCase = toKebabCase
module.exports.toTitleCase = toTitleCase
module.exports.toSnakeCase = toSnakeCase
module.exports.toCamelCase = toCamelCase
module.exports.toWords = toWords
