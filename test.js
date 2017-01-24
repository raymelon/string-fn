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

describe("toKebabCase", () => {
  it("should work with camel case", () => {
    expect(
      stringFn.toKebabCase("fooBarBaz")
    ).toEqual("foo-bar-baz")
  })

  it("should work with snake case", () => {
    expect(
      stringFn.toKebabCase("foo_bar_baz")
    ).toEqual("foo-bar-baz")
  })

  it("should work as lodash", () => {
    expect(
      stringFn.toKebabCase("Foo Bar BAZ")
    ).toEqual("foo-bar-baz")

    expect(
      stringFn.toKebabCase("__FOO_BAR__")
    ).toEqual("foo-bar")

    expect(
      stringFn.toKebabCase("Foo Bar BAZ")
    ).toEqual("foo-bar-baz")


  })
})
