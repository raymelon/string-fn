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

function toKebab(str){
  if(isAlpha(str)){
    
    return R.compose(
      val => {
        if(R.head(val)==="-"){
    
          return R.tail(val)
        }
        
        return val
      },
      R.join(""),
      R.map(val=>{
        if(R.toUpper(val)===val){
    
          return `-${R.toLower(val)}`
        }
        
        return val
      }),
      R.split("")
    )(str)
  }
  
    return R.compose(
    R.tail,
    R.join(""),
    R.map(val =>{
      if (
        val === ""
        ) {
       
        return val
      }else{
       return `-${R.toLower(val)}`
      }
    }),
    R.split(/[^a-zA-Z]{1,3}/g)
  )(str)
  
}

module.exports.toKebab = toKebab
