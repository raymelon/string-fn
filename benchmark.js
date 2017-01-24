const Benchmark = require("benchmark")
const benchmarks = require("beautify-benchmark")

const stringFn = require("./source")
const voca = require("voca")

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
options.camelCase = true

if (options.camelCase) {
  const str = "Foo bar Baz"
  const fnFirst = () => stringFn.toCamelCase(str)
  const fnSecond = () => voca.kebabCase(str)

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
