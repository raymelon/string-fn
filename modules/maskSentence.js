import trim from './trim'
import maskWordHelper from './internals/maskWordHelper'
import { PUNCTUATIONSX } from './internals/constants'

import {
  map,
  split,
} from 'rambda'

const addSpaceAroundPunctuation = sentence =>
  sentence.replace(PUNCTUATIONSX, x => ` ${ x } `)

/**
 * Use shorter version of PUNCTUATIONS so_
 * cases `didn't` and `по-добри` be handled
 */
export default function maskSentence ({ sentence, replacer = '_', charLimit = 3, words = [] }) {
  sentence = trim(addSpaceAroundPunctuation(sentence))

  const hidden = []
  const visible = []

  map(
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
    split(' ', sentence)
  )

  return {
    hidden,
    visible,
  }
}
