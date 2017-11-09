import {
  split,
} from 'rambda'
import trim from './trim'
import { PUNCTUATIONS } from './internals/constants'

const addSpaceAroundPunctuation = sentence =>
  sentence.replace(
    PUNCTUATIONS,
    match => ` ${ match } `
  )

export default function splitSentence (sentence) {
  return split(
    ' ',
    trim(
      addSpaceAroundPunctuation(sentence)
    )
  )
}
