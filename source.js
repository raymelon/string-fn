const R = require("rambda")

function toKebabCase(str){
  return R.compose(
    val => R.replace(/[^a-zA-Z]{1,3}/g,"-",val),
    R.join(""),
    R.map(val =>{
      if (R.toUpper(val) === val) {
        return `-${ R.toLower(val) }`
      }

      return val
    }),
    R.split("")
  )(str)
}

module.exports.toKebabCase = toKebabCase
