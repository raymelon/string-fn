const Benchmark = require("benchmark")
const benchmarks = require("beautify-benchmark")

const stringFn = require("./source")
const voca = require("voca")

  const str = "FooBarBaz"
  const fnFirst = ()=> stringFn.toKebab(str)
  const fnSecond = ()=> voca.kebabCase(str)
    
  console.log(fnFirst())
  console.log(fnSecond())

