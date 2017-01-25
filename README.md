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

- between(str, leftLimiter, rightLimiter)

Returns substring of **str** placed between **leftLimiter** and **rightLimiter**

```
stringFn.between("begin foobarbaz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo   bar   baz end", "foo", "baz")
// => "bar"

stringFn.between("begin foo bar baz end", "q", "x")
// => "begin foo bar baz end"
```

- camelCase(str, extendedLatinFlag = false)

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

- capitalize(str, lowLimit = 3)

Capitalize each word of **str** as long as word's length is higher or equal to
**lowLimit**

```
stringFn.capitalize("in my time |,of dying")
// => "In my Time of Dying"

stringFn.capitalize("i got ants in my pants")
// => "I Got Ants in my Pants"

stringFn.capitalize("i got ants in my pants", 2)
// => "I Got Ants In My Pants"
```

- clean(str)

Trims **str** and turns multiple whitespace to single whitespace

```
stringFn.clean("   foo  bar   baz   ")
// => "foo bar baz"
```
