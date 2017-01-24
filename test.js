const stringFn = require("./source")

describe("toKebabCase",()=>{
  it("should work with camel case",()=>{
    expect(
      stringFn.toKebabCase("fooBarBaz")
    ).toEqual("foo-bar-baz")
  })
})
