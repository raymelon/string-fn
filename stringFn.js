export { default as between } from './modules/between'
export { default as camelCase } from './modules/camelCase'

const fun = arr => {
  let willReturn
  const raw = arr.map(element => {
    if(element.attributes.href === undefined){
      return
    }
    if(element.attributes.href.value.endsWith('releases/new')){
      willReturn = element.innerText.trim()==='Draft a new release'
    }
  })
}
