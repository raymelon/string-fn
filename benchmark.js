const Benchmark = require("benchmark")
const benchmarks = require("beautify-benchmark")

const stringFn = require("./source")
const voca = require("voca")
var S = require('string')

const options = {}

const kebabCaseSuite = new Benchmark.Suite
options.kebabCase = false

if (options.kebabCase) {
  const str = "FooBarBaz"
  const fnFirst = () => stringFn.toKebabCase(str)
  const fnSecond = () => voca.kebabCase(str)

  console.log(fnFirst())
  console.log(fnSecond())
  kebabCaseSuite
    .add("StringFn#toKebabCase", () => {
      fnFirst()
    })
    .add("Voca", () => {
      fnSecond()
    })
    .on("cycle", event => {
      benchmarks.add(event.target)
    })
    .on("complete", () => {
      benchmarks.log()
    })
    .run()
}

const camelCaseSuite = new Benchmark.Suite
options.camelCase = false

if (options.camelCase) {
  const str = "foo bar Baz"
  const fnFirst = () => stringFn.toCamelCase(str)
  const fnSecond = () => voca.camelCase(str)

  console.log(fnFirst())
  console.log(fnSecond())
  kebabCaseSuite
    .add("StringFn#toCamelCase", () => {
      fnFirst()
    })
    .add("Voca", () => {
      fnSecond()
    })
    .on("cycle", event => {
      benchmarks.add(event.target)
    })
    .on("complete", () => {
      benchmarks.log()
    })
    .run()
}

const snakeCaseSuite = new Benchmark.Suite
options.snakeCase = 0

if (options.snakeCase) {
  const str = "foo bar Baz"
  const fnFirst = () => stringFn.toSnakeCase(str)
  const fnSecond = () => voca.snakeCase(str)

  console.log(fnFirst())
  console.log(fnSecond())
  kebabCaseSuite
    .add("StringFn#toCamelCase", () => {
      fnFirst()
    })
    .add("Voca", () => {
      fnSecond()
    })
    .on("cycle", event => {
      benchmarks.add(event.target)
    })
    .on("complete", () => {
      benchmarks.log()
    })
    .run()
}

const countSuite = new Benchmark.Suite
options.count = false

if (options.count) {
  const str = "foo bar Baz foo"
  const fnFirst = () => stringFn.count(str, "foo")
  const fnSecond = () => voca.countSubstrings(str, "foo")

  console.log(fnFirst())
  console.log(fnSecond())
  countSuite
    .add("StringFn#toCamelCase", () => {
      fnFirst()
    })
    .add("Voca", () => {
      fnSecond()
    })
    .on("cycle", event => {
      benchmarks.add(event.target)
    })
    .on("complete", () => {
      benchmarks.log()
    })
    .run()
}

const cleanHtmlSuite = new Benchmark.Suite
options.cleanHtml = true

if (options.cleanHtml) {
  const str = "<p>foo <b>bar</b>   <hr/> baz</p>"
  const fnFirst = () => stringFn.cleanHtml(str)
  const fnSecond = () => S(str).stripTags().s

  console.log(fnFirst())
  console.log(fnSecond())
  cleanHtmlSuite
    .add("StringFn#cleanHtml", () => {
      fnFirst()
    })
    .add("Strman", () => {
      fnSecond()
    })
    .on("cycle", event => {
      benchmarks.add(event.target)
    })
    .on("complete", () => {
      benchmarks.log()
    })
    .run()
}
