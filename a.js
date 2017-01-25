const R = require("rambda")

const str = `
const stringFn = require("./source")

describe("toWords", () => {
  it("should work", () => {
    expect(
      stringFn.toWords("fooBarBaz")
    ).toEqual(["foo", "Bar", "Baz"])
  })
})

describe("toCamelCase", () => {
  it("should work", () => {
    expect(
      stringFn.toCamelCase("foo bar BAZ")
    ).toEqual("fooBarBaz")
  })
  
  it("should work with ö", () => {
    expect(
      stringFn.toCamelCase("foo bar bazö",true)
    ).toEqual("fooBarBazö")
  })
})

`

let a = R.split("expect(\n")(str)
a = R.tail(a)

let willReturn = ""
a.map(val=>{
    if(val.includes("toEqual")){
        let b = R.split(").toEqual(")(val)
        let c = R.init(b[1].split("\n")[0])

        willReturn +=`
${b[0].trim()} 
// => ${c}

`        
    }
})

console.log(willReturn)