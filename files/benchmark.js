const Benchmark = require("benchmark")
const benchmarks = require("beautify-benchmark")

const stringFn = require("./source")
const voca = require("voca")
const S = require('string')
const _ = require('lodash')
const underscore = require('underscore.string')

const options = {}

const camelCaseSuite = new Benchmark.Suite
options.camelCase = true

if (options.camelCase) {
  const str = "foo bar Baz"
  const fnFirst = () => stringFn.camelCase(str)
  const fnSecond = () => voca.camelCase(str)

  camelCaseSuite
    .add("StringFn#camelCase", () => {
      fnFirst()
    })
    .add("Voca", () => {
      fnSecond()
    })
    .add("Lodash", () => {
      _.camelCase(str)
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
options.count = true

if (options.count) {
  const str = "foo bar Baz foo"
  const fnFirst = () => stringFn.count(str, "foo")
  const fnSecond = () => voca.countSubstrings(str, "foo")

  countSuite
    .add("StringFn#count", () => {
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

const kebabCaseSuite = new Benchmark.Suite
options.kebabCase = true

if (options.kebabCase) {
  const str = "FooBarBaz"
  const fnFirst = () => stringFn.kebabCase(str)
  const fnSecond = () => voca.kebabCase(str)

  kebabCaseSuite
    .add("StringFn#toKebabCase", () => {
      fnFirst()
    })
    .add("Voca", () => {
      fnSecond()
    })
    .add("Lodash", () => {
      _.kebabCase(str)
    })
    .on("cycle", event => {
      benchmarks.add(event.target)
    })
    .on("complete", () => {
      benchmarks.log()
    })
    .run()
}

const mapSuite = new Benchmark.Suite
options.map = true

if (options.map) {
  const str = "foo bar baz"
  const fn = val => `|${val}| `
  const fnFirst = () => stringFn.map(str,fn)
  const fnSecond = () => underscore.map(str, fn)

  mapSuite
    .add("StringFn#map", () => {
      fnFirst()
    })
    .add("Underscore.string", () => {
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

const reverseSuite = new Benchmark.Suite
options.reverse = true

if (options.reverse) {
  const str = "foo bar baz"
  const fnFirst = () => stringFn.reverse(str)
  const fnSecond = () => voca.reverse(str)

  reverseSuite
    .add("StringFn#reverse", () => {
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
options.snakeCase = true

if (options.snakeCase) {
  const str = "foo bar Baz"
  const fnFirst = () => stringFn.snakeCase(str)
  const fnSecond = () => voca.snakeCase(str)

  snakeCaseSuite
    .add("StringFn#snakeCase", () => {
      fnFirst()
    })
    .add("Voca", () => {
      fnSecond()
    })
    .add("Lodash", () => {
      _.snakeCase(str)
    })
    .on("cycle", event => {
      benchmarks.add(event.target)
    })
    .on("complete", () => {
      benchmarks.log()
    })
    .run()
}

const stripTagsSuite = new Benchmark.Suite
options.stripTags = true

if (options.stripTags) {
  const str = "<p>foo <b>bar</b>   <hr/> baz</p>"
  const fnFirst = () => stringFn.stripTags(str)
  const fnSecond = () => S(str).stripTags().s

  stripTagsSuite
    .add("StringFn#stripTags", () => {
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
