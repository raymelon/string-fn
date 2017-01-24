const stringFn = require("./source")

describe("toKebab", () => {
  it("should work with camel case", () => {
    expect(
      stringFn.toKebab("fooBarBaz")
    ).toEqual("foo-bar-baz")
  })

  it("should work with snake case", () => {
    expect(
      stringFn.toKebab("foo_bar_baz")
    ).toEqual("foo-bar-baz")
  })

  it("should work as lodash", () => {
    expect(
      stringFn.toKebab("Foo Bar BAZ")
    ).toEqual("foo-bar-baz")    
    
    expect(
      stringFn.toKebab("__FOO_BAR__")
    ).toEqual("foo-bar")
    
    expect(
      stringFn.toKebab("Foo Bar BAZ")
    ).toEqual("foo-bar-baz")
    
    
  })
})
