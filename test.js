const stringFn = require("./source")

describe("toWords", () => {
  it("should work", () => {
    expect(
      stringFn.toWords("fooBarBaz")
    ).toEqual(["foo", "Bar", "Baz"])
  })
})

describe("count", () => {
  it("should work", () => {
    expect(
      stringFn.count("fooBarfoo","foo")
    ).toEqual(2)
    
    expect(
      stringFn.count("fooBarfoo","baz")
    ).toEqual(0)
    
    expect(
      stringFn.count("foo1 Bar foo1 baz Foo1 foo1","foo1")
    ).toEqual(3)
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

describe("toSnakeCase", () => {
  it("should work", () => {
    expect(
      stringFn.toSnakeCase("foo bar BAZ")
    ).toEqual("foo_bar_baz")
  })
  
  it("should work with ö", () => {
    expect(
      stringFn.toSnakeCase("foo bar bazö",true)
    ).toEqual("foo_bar_bazö")
  })
})

describe("toTitleCase", () => {
  it("should work", () => {
    expect(
      stringFn.toTitleCase("foo bar BAZ")
    ).toEqual("Foo Bar Baz")
  })
  
  it("should work with ö", () => {
    expect(
      stringFn.toTitleCase("foo bar bazö",true)
    ).toEqual("Foo Bar Bazö")
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
