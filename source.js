const R = require("rambda")

function camelToSlug(str){
  return R.compose(
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

module.exports.camelToSlug = camelToSlug