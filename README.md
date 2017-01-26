[![Build
Status](https://travis-ci.org/selfrefactor/ils.svg?branch=master)](https://travis-ci.org/selfrefactor/string-fn)
[![codecov](https://codecov.io/gh/selfrefactor/string-fn/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/string-fn)

# String-fn

String manipulation library build for speed

# Example

```
const stringFn = require("string-fn")
console.log(stringFn.camelCase("foo-bar-baz"))
// => fooBarBaz
```

## Installation

- Use **npm i string-fn** for Webpack and Node.js

- For browser usage refer to

```
https://unpkg.com/string-fn@0.2.0/webVersion.js
```

## API

## between(str, leftLimiter, rightLimiter)

Returns substring of **str** placed between **leftLimiter** and **rightLimiter**

```
stringFn.between("begin foobarbaz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo   bar   baz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo bar baz end", "q", "x")
// => "begin foo bar baz end"
```

## camelCase(str, extendedLatinFlag = false)

Returns camel case version of **str**.

Set **extendedLatinFlag** to true, to turn on support for languages such as
German and French. Default value is **false**

```
stringFn.camelCase("Foo-Bar")
// => "fooBar"

stringFn.camelCase("--foo.bar")
// => "fooBar"

stringFn.camelCase("Foo-Bar")
// => "fooBar"

stringFn.camelCase("foo bar BAZ")
// => "fooBarBaz"

stringFn.camelCase("foo-bar-baz")
// => "fooBarBaz"

stringFn.camelCase("foo bar bazö", true)
// => "fooBarBazö"
```

## clean(str)

Trims **str** and turns multiple whitespace to single whitespace

```
stringFn.clean("   foo  bar   baz   ")
// => "foo bar baz"
```

## count(str, substring)

Count number of occurances of **substring** within **str**

```
stringFn.count("fooBarfoo", "foo")
// => 2

stringFn.count("fooBarfoo", "baz")
// => 0

stringFn.count("foo1 Bar foo1 baz Foo1 foo1", "foo1")
// => 3
```

## distance(firstString, secondString)

Calculates Levenshtein distance between **firstString** and **secondString**

```
stringFn.distance("foobarbaz", "ffoobarbaz")
// => 1

stringFn.distance("foobarbaz", "foo")
// => 6

stringFn.distance("foo", "foobarbaz")
// => 6

stringFn.distance("foobarbaz", "foobarbaz")
// => 0
```

## distanceGerman(firstString, secondString)

Calculates Levenshtein distance between normalized German strings

```
stringFn.distanceGerman("foobarbaz", "ffoobarbaz")
// => 1

stringFn.distanceGerman("schön", "shön")
// => 1

stringFn.distanceGerman("Müde", "mude")
// => 0

stringFn.distanceGerman("die Männer", "die manner")
// => 0

stringFn.distanceGerman("der anlass", "der Anlaß")
// => 0
```

## filter(str, fn)

Returns string with those chars of **str** which passes **fn**

```
stringFn.filter("foo", val => val === "o")
// => "oo"
```

## glob(str, globRule)

Returns boolean of **str** following **globRule**.

Three types of valid glob rules:

1. *foo
2. foo*
3. \*foo*

```
stringFn.glob("/home/work/dev/foo.js", "*.js")
// => true

stringFn.glob("/home/work/dev/foo.js", "*.ts")
// => false

stringFn.glob("/home/work/dev/foo.js", "/home/*")
// => true

stringFn.glob("/home/work/dev/foo.js", "/usr/*")
// => false

stringFn.glob("/home/work/dev/foo.js", "*/work/dev/*")
// => true

stringFn.glob("/home/work/dev/foo.js", "*/home/*")
// => false

stringFn.glob("/home/work/dev/foo*.js", "foo*.")
// => true

stringFn.glob("/home/work/dev/foo*bar.js", "foo*baz")
// => false

stringFn.glob("/home/work/dev/foo*bar*.js", "foo*baz*")
// => false
```

## map(str, fn)

Returns joined chars of **str** after each of them is passed through **fn**

```
stringFn.map("foo", val =>`|${val}| `)
// => "|f| |o| |o| "
```

## kebabCase(str, extendedLatinFlag = false)

Return kebab case version of **str**

```
stringFn.kebabCase("fooBarBaz")
// => "foo-bar-baz"

stringFn.kebabCase("foo_bar_baz")
// => "foo-bar-baz"

stringFn.kebabCase("Foo Bar BAZ")
// => "foo-bar-baz"

stringFn.kebabCase("__FOO_BAR__")
// => "foo-bar"

stringFn.kebabCase("Foo Bar BAZ")
// => "foo-bar-baz"
```

## replaceFirst(str, replacer = "")

Replaces the first char of **str** with **replacer**

```
stringFn.replaceFirst("fooBarBaz", "F")
// => "FooBarBaz"

stringFn.replaceFirst("fooBarBaz")
// => "ooBarBaz"
```

## replaceLast(str, replacer = "")

Replaces the last char of **str** with **replacer**

```
stringFn.replaceLast("fooBarBaz", "ZZ")
// => "fooBarBaZZ"

stringFn.replaceLast("fooBarBaz")
// => "fooBarBa"
```

## reverse(str)

```
stringFn.reverse("fooBarBaz")
// => "zaBraBoof"
```

## seoTitle(str, lowLimit = 3, extendedLatinFlag = false)

Capitalize each word of **str** as long as word's length is higher or equal to
**lowLimit**. First word is always capitalized.

```
stringFn.seoTitle("in my time |,of dying")
// => "In my Time of Dying"

stringFn.seoTitle("i got ants in my pants")
// => "I Got Ants in my Pants"

stringFn.seoTitle("i got ants in my pants", 2)
// => "I Got Ants In My Pants"
```

## shuffle(str)

Randomize **str** content

```
stringFn.shuffle("fooBarBaz") === "fooBarBaz"
// => false
```

## snakeCase(str, extendedLatinFlag = false)

Returns snake case version of **str**

```
stringFn.snakeCase("foo bar BAZ")
// => "foo_bar_baz"

stringFn.snakeCase("foo bar bazö", true)
// => "foo_bar_bazö"
```

## stripPunctuation(str)

Removes all the punctiation marks from **str**

```
stringFn.stripPunctuation("If my, wings should, fail me ...")
// => "If my wings should fail me "
```

## stripTags(str)

Removes Html tags from **str**

```
stringFn.stripTags("<p>foo <b>bar</b>   <hr/> baz</p>")
// => "foo bar baz"
```

## surround(str, leftString, rightString)

Returns **str** surrounded by **leftStrring** and **rightString**

```
stringFn.surround("foo", "<br/>")
// => "<br/>foo<br/>"

stringFn.surround("foo", "<b>", "</b>")
// => "<b>foo</b>"
```

## titleCase(str, extendedLatinFlag = false)

Returns title case version of **str**

```
stringFn.titleCase("foo bar BAZ")
// => "Foo Bar Baz"

stringFn.titleCase("foo bar bazö", true)
// => "Foo Bar Bazö"
```

## truncate(str, lengthLimit, tail = "...")

Truncates **str** if its length is greater than **lengthLimit**

```
stringFn.truncate("dr strangelove or how i learned", 15)
// => "dr strangelo..."

stringFn.truncate("dr strangelove or how i learned", 15, " =>")
// => "dr strangelo =>"

stringFn.truncate("dr strangelove", 20)
// => "dr strangelove"
```

## words(str, extendedLatinFlag = false)

Returns array with the words of **str**

```
stringFn.words("fooBarBaz")
// => [ "foo", "Bar", "Baz" ]
```

## wrap(str, wrapLimit, lazyFlag = false)

This is not so easy to explain, so better see one example first


```
stringFn.wrap("dr strangelove or how i learned to love the bomb", 15)
// => [ "dr strangelove", "or how i", "learned to love", "the bomb" ]
```

Returns array of substrings with whole words of **str**. Each substring is no
longer than **wrapLimit**.

If word of **str** is longer than **wrapLimit** it will be ommited, as
**lazyFlag** is false by default.

If you set **lazyFlag** to true, those long words will be included in the
result.

```
stringFn.wrap("dr strangelove or how i learned to love the bomb", 5)
// => [ "dr", "or", "how i", "to", "love", "the", "bomb" ]

stringFn.wrap("dr strangelove or how i learned", 5, true)
// => [ "dr", "strangelove", "or", "how i", "learned" ]

stringFn.wrap("dr strangelove or how i learned", 1)
// => [ "i" ]
```
