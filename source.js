const R = require("rambda")

function isAlphanumeric(str){
  return !R.test(/[^a-zA-Z0-9]/,str)
}

function isAlpha(str){
  return !R.test(/[^a-zA-Z]/,str)
}

function isAllCaps(str){
  return !R.test(/[^A-Z]/,str)
}

function toWords(str){
  return R.match(/[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g,str)
}

function toWordsExtended(str){
  return R.match(/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g,str)
}

function toKebabCase(str){
  return R.toLower(R.join("-",toWords(str)))
}

module.exports.toKebabCase = toKebabCase
module.exports.split = split
