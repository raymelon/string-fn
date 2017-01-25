const R = require("rambda")
const stringFn = require("./source")

describe("between", () => {
  it("should work", () => {
    expect(
      stringFn.between("begin foobarbaz end", "foo", "baz")
    ).toEqual("bar")

    expect(
      stringFn.between("begin foo   bar   baz end", "foo", "baz")
    ).toEqual("bar")

    expect(
      stringFn.between("begin foo bar baz end", "q", "x")
    ).toEqual("begin foo bar baz end")
  })
})

describe("camelCase", () => {
  it("should work as npm/camelcase", () => {
    expect(
      stringFn.camelCase("Foo-Bar")
    ).toEqual("fooBar")

    expect(
      stringFn.camelCase("--foo.bar")
    ).toEqual("fooBar")

    expect(
      stringFn.camelCase("Foo-Bar")
    ).toEqual("fooBar")
  })

  it("should work", () => {
    expect(
      stringFn.camelCase("foo bar BAZ")
    ).toEqual("fooBarBaz")

    expect(
      stringFn.camelCase("foo-bar-baz")
    ).toEqual("fooBarBaz")
  })

  it("should work with ö", () => {
    expect(
      stringFn.camelCase("foo bar bazö", true)
    ).toEqual("fooBarBazö")
  })
})

describe("clean", () => {
  it("default", () => {
    expect(
      stringFn.clean("   foo  bar   baz   ")
    ).toEqual("foo bar baz")
  })
})

describe("count", () => {
  it("should work", () => {
    expect(
      stringFn.count("fooBarfoo", "foo")
    ).toEqual(2)

    expect(
      stringFn.count("fooBarfoo", "baz")
    ).toEqual(0)

    expect(
      stringFn.count("foo1 Bar foo1 baz Foo1 foo1", "foo1")
    ).toEqual(3)
  })
})

describe("distance", () => {
  it("should work", () => {
    expect(
      stringFn.distance("foobarbaz", "ffoobarbaz")
    ).toEqual(1)

    expect(
      stringFn.distance("foobarbaz", "foo")
    ).toEqual(6)

    expect(
      stringFn.distance("foo", "foobarbaz")
    ).toEqual(6)

    expect(
      stringFn.distance("foobarbaz", "foobarbaz")
    ).toEqual(0)
  })
})

describe("distanceGerman", () => {
  it("should work", () => {
    expect(
      stringFn.distanceGerman("foobarbaz", "ffoobarbaz")
    ).toEqual(1)

    expect(
      stringFn.distanceGerman("schön", "shön")
    ).toEqual(1)

    expect(
      stringFn.distanceGerman("Müde", "mude")
    ).toEqual(0)

    expect(
      stringFn.distanceGerman("die Männer", "die manner")
    ).toEqual(0)

    expect(
      stringFn.distanceGerman("der anlass", "der Anlaß")
    ).toEqual(0)
  })
})

describe("filter",()=>{
  it("default",()=>{
    expect(
      stringFn.filter("foo",val => val==="o")
    ).toEqual("oo")
  })
})

describe("glob", () => {
  it("when star is on the left", () => {
    expect(
      stringFn.glob("/home/work/dev/foo.js", "*.js")
    ).toBeTruthy()

    expect(
      stringFn.glob("/home/work/dev/foo.js", "*.ts")
    ).toBeFalsy()
  })

  it("when star is on the right", () => {
    expect(
      stringFn.glob("/home/work/dev/foo.js", "/home/*")
    ).toBeTruthy()

    expect(
      stringFn.glob("/home/work/dev/foo.js", "/usr/*")
    ).toBeFalsy()
  })

  it("when two stars", () => {
    expect(
      stringFn.glob("/home/work/dev/foo.js", "*/work/dev/*")
    ).toBeTruthy()

    expect(
      stringFn.glob("/home/work/dev/foo.js", "*/home/*")
    ).toBeFalsy()
  })

  it("when incorrect glob", () => {
    expect(
      stringFn.glob("/home/work/dev/foo*.js", "foo*.")
    ).toBeTruthy()

    expect(
      stringFn.glob("/home/work/dev/foo*bar.js", "foo*baz")
    ).toBeFalsy()

    expect(
      stringFn.glob("/home/work/dev/foo*bar*.js", "foo*baz*")
    ).toBeFalsy()
  })
})

describe("map",()=>{
  it("default",()=>{
    expect(
      stringFn.map("foo",val =>`|${val}| `)
    ).toEqual("|f| |o| |o| ")
  })
})

describe("kebabCase", () => {
  it("should work with camel case", () => {
    expect(
      stringFn.kebabCase("fooBarBaz")
    ).toEqual("foo-bar-baz")
  })

  it("should work with snake case", () => {
    expect(
      stringFn.kebabCase("foo_bar_baz")
    ).toEqual("foo-bar-baz")
  })

  it("should work as lodash", () => {
    expect(
      stringFn.kebabCase("Foo Bar BAZ")
    ).toEqual("foo-bar-baz")

    expect(
      stringFn.kebabCase("__FOO_BAR__")
    ).toEqual("foo-bar")

    expect(
      stringFn.kebabCase("Foo Bar BAZ")
    ).toEqual("foo-bar-baz")
  })
})

describe("replaceFirst", () => {
  it("should work", () => {
    expect(
      stringFn.replaceFirst("fooBarBaz", "F")
    ).toEqual("FooBarBaz")
  })

  it("should work", () => {
    expect(
      stringFn.replaceFirst("fooBarBaz")
    ).toEqual("ooBarBaz")
  })
})

describe("replaceLast", () => {
  it("should work", () => {
    expect(
      stringFn.replaceLast("fooBarBaz", "ZZ")
    ).toEqual("fooBarBaZZ")
  })

  it("should work", () => {
    expect(
      stringFn.replaceLast("fooBarBaz")
    ).toEqual("fooBarBa")
  })
})

describe("reverse", () => {
  it("should work", () => {
    expect(
      stringFn.reverse("fooBarBaz")
    ).toEqual("zaBraBoof")
  })
})

describe("seoTitle", () => {
  it("should work", () => {
    expect(
      stringFn.seoTitle("in my time |,of dying")
    ).toEqual("In my Time of Dying")

    expect(
      stringFn.seoTitle("i got ants in my pants")
    ).toEqual("I Got Ants in my Pants")

    expect(
      stringFn.seoTitle("i got ants in my pants", 2)
    ).toEqual("I Got Ants In My Pants")
  })
})

describe("shuffle", () => {
  it("should work", () => {
    expect(
      R.equals(
        stringFn.shuffle("fooBarBaz"),
        "fooBarBaz"
      )
    ).toBeFalsy()
  })
})

describe("snakeCase", () => {
  it("should work", () => {
    expect(
      stringFn.snakeCase("foo bar BAZ")
    ).toEqual("foo_bar_baz")
  })

  it("should work with ö", () => {
    expect(
      stringFn.snakeCase("foo bar bazö", true)
    ).toEqual("foo_bar_bazö")
  })
})

describe("stripPunctuation", () => {
  it("should work", () => {
    expect(
      stringFn.stripPunctuation("If my wings should fail me, Lord, please meet me ...")
    ).toEqual("If my wings should fail me Lord please meet me ")
  })
})

describe("stripTags", () => {
  it("should work", () => {
    expect(
      stringFn.stripTags("<p>foo <b>bar</b>   <hr/> baz</p>")
    ).toEqual("foo bar baz")
  })
})

describe("surround", () => {
  it("should work", () => {
    expect(
      stringFn.surround("foo", "<br/>")
    ).toEqual("<br/>foo<br/>")
  })

  it("should work", () => {
    expect(
      stringFn.surround("foo", "<b>", "</b>")
    ).toEqual("<b>foo</b>")
  })
})

describe("titleCase", () => {
  it("should work", () => {
    expect(
      stringFn.titleCase("foo bar BAZ")
    ).toEqual("Foo Bar Baz")
  })

  it("should work with ö", () => {
    expect(
      stringFn.titleCase("foo bar bazö", true)
    ).toEqual("Foo Bar Bazö")
  })
})

describe("truncate", () => {
  it("default", () => {
    expect(
      stringFn.truncate("dr strangelove or how i learned", 15)
    ).toEqual("dr strangelo...")
  })

  it("with custom tail", () => {
    expect(
      stringFn.truncate("dr strangelove or how i learned", 15, " =>")
    ).toEqual("dr strangelo =>")
  })

  it("when string is not that long", () => {
    expect(
      stringFn.truncate("dr strangelove", 20)
    ).toEqual("dr strangelove")
  })
})

describe("words", () => {
  it("should work", () => {
    expect(
      stringFn.words("fooBarBaz")
    ).toEqual([ "foo", "Bar", "Baz" ])
  })
})

describe("wrap", () => {
  it("default", () => {
    expect(
      stringFn.wrap("dr strangelove or how i learned to love the bomb", 5)
    ).toEqual([ "dr", "or", "how i", "to", "love", "the", "bomb" ])

    expect(
      stringFn.wrap("dr strangelove or how i learned to love the bomb", 15)
    ).toEqual([ "dr strangelove", "or how i", "learned to love", "the bomb" ])
  })

  it("when string flag is true", () => {
    expect(
      stringFn.wrap("dr strangelove or how i learned", 5, true)
    ).toEqual([ "dr", "strangelove", "or", "how i", "learned" ])
  })

  it("when string wrapLimit is short", () => {
    expect(
      stringFn.wrap("dr strangelove or how i learned", 1)
    ).toEqual([ "i" ])
  })

  it("when string wrapLimit is 0", () => {
    expect(
      stringFn.wrap("dr strangelove or how i learned", 0)
    ).toEqual([ "i" ])
  })
})
