import trim from './trim'
import maskWordHelper from './internals/maskWordHelper'

const addSpaceAroundPunctuation = sentence => sentence.replace(PUNCTUATIONS, match => ` ${ match } `)

export default function maskSentence ({ sentence, replacer = '_', charLimit = 3, words = [] }) {
  sentence = trim(addSpaceAroundPunctuation(sentence))

  const hidden = []
  const visible = []

  R.map(
    val => {
      let visiblePart

      if (
        words.length === 0 ||
        words.includes(val)
      ) {
        visiblePart = maskWordHelper(val, replacer, charLimit)
      } else {
        visiblePart = val
      }
      hidden.push(val)
      visible.push(visiblePart)
    },
    R.split(' ', sentence)
  )

  return {
    hidden,
    visible,
  }
}
