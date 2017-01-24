const Benchmark = require("benchmark")
const benchmarks = require("beautify-benchmark")

const stringFn = require("./source")
const voca = require("voca")

  const str = "foo BAR baZ"
  const fnSecond = ()=> voca.words(str)
    
  console.log(fnSecond())

