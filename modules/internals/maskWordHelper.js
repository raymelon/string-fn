const maskWordHelper = (word, replacer, charLimit) => {
  if (
    R.test(PUNCTUATIONS, word) ||
    word.length < 2
  ) {
    return word
  }

  if (word.length < charLimit) {
    return `${ R.head(word) }${ replacer.repeat(word.length - 1) }`
  }

  return `${ R.head(word) }${ replacer.repeat(word.length - 2) }${ R.last(word) }`
}
