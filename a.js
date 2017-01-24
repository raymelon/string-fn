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
`