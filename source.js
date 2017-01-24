const R = require("rambda")

function camelToKebab(str){

}

function isAlphanumeric(str){
  return !R.test(/[^a-zA-Z0-9]/,str)
}

function isAlpha(str){
  return !R.test(/[^a-zA-Z]/,str)
}

function isAllCaps(str){
  return !R.test(/[^A-Z]/,str)
}

function split(str){
  return R.match(/[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g,str)
}

function splitExtended(str){
  return R.match(/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g,str)
}

function toKebab(str){
  return R.toLower(R.join("-",split(str)))
}

module.exports.toKebab = toKebab
module.exports.split = split
