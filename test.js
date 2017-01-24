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