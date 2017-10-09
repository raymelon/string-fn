[![Build
Status](https://travis-ci.org/selfrefactor/string-fn.svg?branch=master)](https://travis-ci.org/selfrefactor/string-fn)
[![codecov](https://codecov.io/gh/selfrefactor/string-fn/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/string-fn)
[![CDNJS](https://img.shields.io/cdnjs/v/string-fn.svg)](https://cdnjs.com/libraries/string-fn)

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
> between(str, left, right)

Returns substring of **str** placed between **left** and **right**

```
stringFn.between("begin foobarbaz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo   bar   baz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo bar baz end", "q", "x")
// => "begin foo bar baz end"

```
#### camelCase
> camelCase(str)

Returns camel case version of **str**.

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
```

#### clean
> clean(str:String)

It trims **str** and turns multiple whitespace to single whitespace

```
stringFn.clean("   foo  bar   baz   ")
// => "foo bar baz"
```

#### count
> count(str, substring)

Count number of occurances of **substring** within **str**

```
stringFn.count("fooBarfoo", "foo")
// => 2

stringFn.count("fooBarfoo", "baz")
// => 0

stringFn.count("foo1 Bar foo1 baz Foo1 foo1", "foo1")
// => 3
```

#### countX
> countX(str, substring)

It is same as `count`, but for extended Latin languages(German, French, Finnish, etc.).

#### distance
> distance(firstString, secondString)

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
> distanceGerman(firstString, secondString)

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

#### glob
> glob(str, globRule)

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
> intent(str:string, indentCount:number)

Intent each line in **str** with **intentCount** spaces

```
stringFn.indent("foo\nbar\nbaz",4)
// => "    foo\n    bar\n    baz"
```

#### kebabCase
> kebabCase(str)

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

#### maskSentence

```
maskSentence( {
  sentence: string,
  replacer: string = "_",
  charLimit: number = 3,
  words: string[] = []
} )
```

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

```
maskWords({
  words:string,
  replacer:string = "_",
  charLimit: number = 3
})
```

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
> padLeft({str: string, limit: number, char: string})

```
stringFn.padLeft({str:"13",char:"0",limit:7})
// => "0000013"

stringFn.padLeft({str:"1313",char:"0",limit:3})
// => "1313"
```

#### padRight
> padRight({str: string, limit: number, char: string})

```
stringFn.padRight({str:"13",char:"0",limit:7})
// => "1300000"

stringFn.padRight({str:"1313",char:"0",limit:3})
// => "1313"
```

#### removeIndent
> removeIndent(str)

```
stringFn.removeIndent("    foo\n    bar\n    baz")
// => "foo\nbar\nbaz"
```

#### removeLeftPadding
> removeLeftPadding(str, padChar)

```
stringFn.removeLeftPadding("0000130", "0")
// => "130"

stringFn.removeLeftPadding("888", "0")
// => "888"
```

#### removeRightPadding
> removeRightPadding(str, padChar)

```
stringFn.removeRightPadding({str:"0130000",padChar:"0"})
// => "013"

stringFn.removeRightPadding({str:"888",padChar:"0"})
// => "888"
```

#### replaceFirst
> replaceFirst(str, replacer)

Replaces the first char of **str** with **replacer**

```
stringFn.replaceFirst("fooBarBaz", "F")
// => "FooBarBaz"
```

#### replaceLast
> replaceLast(str, replacer)

Replaces the last char of **str** with **replacer**

```
stringFn.replaceLast("fooBarBaz", "ZZ")
// => "fooBarBaZZ"
```

#### reverse
> reverse(str)

```
stringFn.reverse("fooBarBaz")
// => "zaBraBoof"
```

#### seoTitle
> seoTitle(str:String, limit = 3)

Capitalize each word of **str** as long as word's length is higher or equal to
**limit**. First word is always capitalized.

```
stringFn.seoTitle("in my time |,of dying")
// => "In my Time of Dying"

stringFn.seoTitle("i got ants in my pants")
// => "I Got Ants in my Pants"

stringFn.seoTitle("i got ants in my pants", 2)
// => "I Got Ants In My Pants"
```

#### shuffle
> shuffle(str)

Randomize **str** content

```
stringFn.shuffle("fooBar") // => aforBo
```

#### snakeCase
> snakeCase(str)

Returns snake case version of **str**

```
stringFn.snakeCase("foo bar BAZ")
// => "foo_bar_baz"
```

#### stripPunctuation
> stripPunctuation(str)

Removes all the punctiation marks from **str**

```
stringFn.stripPunctuation("If my, wings should, fail me ...")
// => "If my wings should fail me "
```

#### stripPunctuationX
> stripPunctuationX(str)

It is same as `stripPunctuation`, but for extended Latin languages(German, French, Finnish, etc.).

#### stripTags
> stripTags(str)

It removes Html tags from **str**.

```
stringFn.stripTags("<p>foo <b>bar</b>   <hr/> baz</p>")
// => "foo bar baz"
```

#### surround
> surround(str, left, right)

It returns **str** surrounded by **left** and **right**.

If `right` is ommitted, then it is equal to `left`.

```
stringFn.surround("foo", "<br/>")
// => "<br/>foo<br/>"

stringFn.surround("foo", "<b>", "</b>")
// => "<b>foo</b>"
```

#### titleCase
> titleCase(str)

It returns title case version of **str**.

```
stringFn.titleCase("foo bar BAZ")
// => "Foo Bar Baz"
```

#### truncate
> truncate({str: string, limit: number, tail: string = "..."})

Truncates **str** if its length is greater than **lengthLimit** by using **tail** if necessary.

```
const str = "dr strangelove or how i learned"
stringFn.truncate({str:str, limit: 15})
// => "dr strangelo..."

stringFn.truncate({str: str, limit: 15, tail: " =>"})
// => "dr strangelo =>"

stringFn.truncate({str:str, limit: 20})
// => "dr strangelove"
```

#### words
> words(str)

It returns array with the words of **str**.

```
stringFn.words("fooBarBaz")
// => [ "foo", "Bar", "Baz" ]
```

#### wordsX
> wordsX(str)

It is same as `stripPunctuation`, but for extended Latin languages(German, French, Finnish, etc.).

#### wrap
> wrap(str: string, limit: number)

```
stringFn.wrap("dr strangelove or how i learned to love the bomb", 15)
// => [ "dr strangelove", "or how i", "learned to love", "the bomb" ]
```

Returns array of substrings with whole words of **str**. Each substring is no
longer than **wrapLimit**.

Those words of **str** that are longer than **wrapLimit** will be ommited.

```
stringFn.wrap("dr strangelove or how i learned to love the bomb", 5)
// => [ "dr", "or", "how i", "to", "love", "the", "bomb" ]

stringFn.wrap("dr strangelove or how i learned", 1)
// => [ "i" ]
```
