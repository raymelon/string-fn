const R = require("rambda")

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g

function isAlphanumeric(str){
  return !R.test(/[^a-zA-Z0-9]/,str)
}

function isAlpha(str){
  return !R.test(/[^a-zA-Z]/,str)
}

function isAllCaps(str){
  return !R.test(/[^A-Z]/,str)
}

function toWords(str, flag = false){
  const regex = flag ?
    WORDS_EXTENDED :
    WORDS
  return R.match(regex,str)
}

function toKebabCase(str, flag = false){
  return R.toLower(R.join("-",toWords(str,flag)))
}

function toCamelCase(str, flag = false){
  console.log(toWords(str,flag))
  return R.compose(
    val => `${R.toLower(R.head(val))}${R.tail(val)}`,
    R.join(""),
    R.map(val=> `${R.toUpper(R.head(val))}${R.toLower(R.tail(val))}`)  
  )(toWords(str,flag))
}

module.exports.toKebabCase = toKebabCase
module.exports.toCamelCase = toCamelCase
module.exports.toWords = toWords
