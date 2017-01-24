var R = require('rambda')
var esprima = require('esprima')
var program = `
const stringFn = require("./source")

describe("camelToSlug",()=>{
  it("should work",()=>{
    expect(
      stringFn.camelToSlug("fooBarBaz")
    ).toEqual("foo-bar-baz")
  })  
})

describe("camelToSlug",()=>{
  it("should work",()=>{
    expect(1).toEqual(1)
  })  
})
`

const result = esprima.tokenize(program)
let arrs = []
let counter = -1
result.map(
	val => {
		if (counter > -1) {
			arrs[counter].push(val)
		}
		if (val.value === "describe") {
			++counter
			arrs[counter] = []
		}
	}
)

console.log(arrs)