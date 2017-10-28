import {
  replace
} from 'rambda'

import {
  PUNCTUATIONS
} from './internals/constants'

export default function stripPunctuation (str) {
  return replace(PUNCTUATIONS, '', str)
}
