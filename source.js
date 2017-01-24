const R = require("rambda")

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g

function toWords(str, flag = false) {
  const regex = flag ?
    WORDS_EXTENDED :
    WORDS
  return R.match(regex, str)
}

function toKebabCase(str, flag = false) {
  return R.toLower(R.join("-", toWords(str, flag)))
}

function toSnakeCase(str, flag = false) {
  return R.toLower(R.join("_", toWords(str, flag)))
}

function toTitleCase(str, flag = false) {
  return R.join(" ", R.map(val => `${R.toUpper(R.head(val))}${R.toLower(R.tail(val))}`, toWords(str, flag)))
}

function toCamelCase(str, flag = false) {
  const result = R.join("", R.map(val => `${R.toUpper(R.head(val))}${R.toLower(R.tail(val))}`, toWords(str, flag)))
 
  return `${R.toLower(R.head(result))}${R.tail(result)}`
}

function count(str,substr){
  return R.length(R.split(substr,str))-1
}

module.exports.count = count
module.exports.toKebabCase = toKebabCase
module.exports.toTitleCase = toTitleCase
module.exports.toSnakeCase = toSnakeCase
module.exports.toCamelCase = toCamelCase
module.exports.toWords = toWords
