const Benchmark = require("benchmark")
const benchmarks = require("beautify-benchmark")

const stringFn = require("./source")
const voca = require("voca")

const options = {}

const kebabCaseSuite = new Benchmark.Suite
options.kebabCase = true
if (options.kebabCase) {
  const str = "FooBarBaz"
  const fnFirst = () => stringFn.toKebab(str)
  const fnSecond = () => voca.kebabCase(str)

  console.log(fnFirst())
  console.log(fnSecond())
  kebabCaseSuite.add("StringFn#toKebab", () => {
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
