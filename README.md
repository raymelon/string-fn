[![Build
Status](https://travis-ci.org/selfrefactor/string-fn.svg?branch=master)](https://travis-ci.org/selfrefactor/string-fn)
[![codecov](https://codecov.io/gh/selfrefactor/string-fn/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/string-fn)

# String-fn

String manipulation library build on top of `Rambda`

# Example

```
const stringFn = require("string-fn")
console.log(stringFn.camelCase("foo-bar-baz"))
// => fooBarBaz
```

## Benchmark

![Screen](/screen.png)

## Installation

- Use **npm i string-fn** for Webpack and Node.js

- For browser usage refer to

```
https://unpkg.com/string-fn@0.3.1/webVersion.js
```

## API

#### between
> between(str:String, leftLimiter:String, rightLimiter:String)

Returns substring of **str** placed between **leftLimiter** and **rightLimiter**

```
stringFn.between("begin foobarbaz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo   bar   baz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo bar baz end", "q", "x")
// => "begin foo bar baz end"
```
#### camelCase
> camelCase(str:String, extendedLatinFlag = false)

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
#### clean
> clean(str:String)

Trims **str** and turns multiple whitespace to single whitespace

```
stringFn.clean("   foo  bar   baz   ")
// => "foo bar baz"
```
#### count
> count(str:String, substring:String)

Count number of occurances of **substring** within **str**

```
stringFn.count("fooBarfoo", "foo")
// => 2

stringFn.count("fooBarfoo", "baz")
// => 0

stringFn.count("foo1 Bar foo1 baz Foo1 foo1", "foo1")
// => 3
```
#### distance
> distance(firstString:String, secondString:String)

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
#### distanceGerman
> distanceGerman(firstString:String, secondString:String)

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
#### filter
> filter(str:String, fn:Function)

Returns string with those chars of **str** which passes **fn**

```
stringFn.filter("foo", val => val === "o")
// => "oo"
```
#### glob
> glob(str:String, globRule:String)

Returns boolean of **str** following **globRule**.

Three types of valid glob rules:

1. *foo
2. foo*
3. \*foo*

```
stringFn.glob("/home/dev/foo.js", "*.js")
// => true

stringFn.glob("/home/dev/foo.js", "*.ts")
// => false

stringFn.glob("/home/dev/foo.js", "/home/*")
// => true

stringFn.glob("/home/dev/foo.js", "*/dev/foo*")
// => true
```
#### intent
> intent(str:String, indentCount:Number)

Intent each line in **str** with **intentCount** spaces

```
stringFn.indent("foo\nbar\nbaz",4)
// => "    foo\n    bar\n    baz"
```
#### kebabCase
> kebabCase(str:String, extendedLatinFlag:Boolean = false)

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
#### map
> map(str:String, fn:Function)

Returns joined chars of **str** after each of them is passed through **fn**

```
stringFn.map("foo", val =>`|${val}| `)
// => "|f| |o| |o| "
```
#### maskSentence
> maskSentence( { sentence:String, replacer = "_", charLimit = 3, words = [] } )

```
const sentence = "it was, for what i need, good."
const {hidden , visible} = stringFn.maskSentence({ sentence })
// hidden => ["it", "was", ",", "for", "what", "i", "need", ",", "good", "."]
// visible => ["i_", "w_s", ",", "f_r", "w__t", "i", "n__d", ",", "g__d", "."]
```
Returns object with notation **{visible: Array<string>, hidden: Array<string>}**

**visible** is array of masked words following the rules:

1. Each punctuation is treated as a word
2. If word is longer than **charLimit**, then each char from the middle part is replaced with **replacer**
3. If word is shorter than **charLimit**, then each char from the tail is replaced with **replacer**

**hidden** is the unmasked version of **visible**

You can pass **words** array so the masking rule is applied only to members of
**words**.
```
const sentence = "it was good."
const words = ["good"]
const {hidden, visible} = stringFn.maskSentence({ sentence, words })
// hidden => ["it", "was", "good", "."]
// visible => ["it", "was", "g__d", "."]
```
#### maskWords
> maskWords({words:String, replacer = "_", charLimit = 3})

```
stringFn.maskWords({words:"James Brown"})
// => "J___s B___n"

stringFn.maskWords({words:"James"})
// => "J___s"
```

Returns string that is masked version of **words**

Each word of **words** is masked following the rules:

- If word is longer than **charLimit**, then each char from the middle part is replaced with **replacer**

- If word is shorter than **charLimit**, then each char from the tail is replaced with **replacer**

#### padLeft 
> padLeft({str:String, padLimit:Number, padChar:String})

```
stringFn.padLeft({str:"13",padChar:"0",padLimit:7})
// => "0000013"

stringFn.padLeft({str:"1313",padChar:"0",padLimit:3})
// => "1313"
```
#### padRight
> padRight({str:String, padLimit:Number, padChar:String})

```
stringFn.padRight({str:"13",padChar:"0",padLimit:7})
// => "1300000"

stringFn.padRight({str:"1313",padChar:"0",padLimit:3})
// => "1313"
```
#### removeIndent
> removeIndent(str:String)

```
stringFn.removeIndent("    foo\n    bar\n    baz")
// => "foo\nbar\nbaz"
```
#### removeLeftPadding
> removeLeftPadding({str:String, padChar:String})
```
stringFn.removeLeftPadding({str:"0000130",padChar:"0"})
// => "130"

stringFn.removeLeftPadding({str:"888",padChar:"0"})
// => "888"
```
#### removeRightPadding
> removeRightPadding({str:String, padChar:String})
```
stringFn.removeRightPadding({str:"0130000",padChar:"0"})
// => "013"

stringFn.removeRightPadding({str:"888",padChar:"0"})
// => "888"
```

#### replaceFirst
> replaceFirst(str:String, replacer = "")

Replaces the first char of **str** with **replacer**

```
stringFn.replaceFirst("fooBarBaz", "F")
// => "FooBarBaz"

stringFn.replaceFirst("fooBarBaz")
// => "ooBarBaz"
```

#### replaceLast
> replaceLast(str:String, replacer = "")

Replaces the last char of **str** with **replacer**

```
stringFn.replaceLast("fooBarBaz", "ZZ")
// => "fooBarBaZZ"

stringFn.replaceLast("fooBarBaz")
// => "fooBarBa"
```

#### reverse
> reverse(str:String)

```
stringFn.reverse("fooBarBaz")
// => "zaBraBoof"
```

#### seoTitle
> seoTitle(str:String, lowLimit = 3, extendedLatinFlag = false)

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

#### shuffle
> shuffle(str:String)

Randomize **str** content

```
stringFn.shuffle("fooBarBaz") === "fooBarBaz"
// => false
```

#### snakeCase
> snakeCase(str:String, extendedLatinFlag = false)

Returns snake case version of **str**

```
stringFn.snakeCase("foo bar BAZ")
// => "foo_bar_baz"

stringFn.snakeCase("foo bar bazö", true)
// => "foo_bar_bazö"
```

#### stripPunctuation
> stripPunctuation(str:String)

Removes all the punctiation marks from **str**

```
stringFn.stripPunctuation("If my, wings should, fail me ...")
// => "If my wings should fail me "
```

#### stripTags
> stripTags(str:String)

Removes Html tags from **str**

```
stringFn.stripTags("<p>foo <b>bar</b>   <hr/> baz</p>")
// => "foo bar baz"
```

#### surround
> surround(str:String, leftString:String, rightString:String)

Returns **str** surrounded by **leftStrring** and **rightString**

```
stringFn.surround("foo", "<br/>")
// => "<br/>foo<br/>"

stringFn.surround("foo", "<b>", "</b>")
// => "<b>foo</b>"
```

#### titleCase
> titleCase(str:String, extendedLatinFlag = false)

Returns title case version of **str**

```
stringFn.titleCase("foo bar BAZ")
// => "Foo Bar Baz"

stringFn.titleCase("foo bar bazö", true)
// => "Foo Bar Bazö"
```

#### truncate
> truncate(str, lengthLimit, tail = "...")

Truncates **str** if its length is greater than **lengthLimit**

```
stringFn.truncate("dr strangelove or how i learned", 15)
// => "dr strangelo..."

stringFn.truncate("dr strangelove or how i learned", 15, " =>")
// => "dr strangelo =>"

stringFn.truncate("dr strangelove", 20)
// => "dr strangelove"
```

#### words
> words(str:String, extendedLatinFlag = false)

Returns array with the words of **str**

```
stringFn.words("fooBarBaz")
// => [ "foo", "Bar", "Baz" ]
```

#### wrap
> wrap(str:String, wrapLimit:Number, lazyFlag = false)

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
