const R = require("rambda")

const a = `
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
    expect(stringFn.toCamelCase("foo bar bazö",true)).toEqual("fooBarBazö")
  })
})
`

function main(str) {
  const strAsArr = R.tail(R.split("expect(")(str))

  let willReturn = ""
  strAsArr.map(val => {
    if (val.includes("toEqual")) {
      const expectationAsArr = R.split(").toEqual(")(val)
      const result = R.init(expectationAsArr[1].split("\n")[0])

      willReturn += `
${expectationAsArr[0].trim()} 
// => ${result}

`
    }
  })
  return willReturn
}

console.log(main(a))