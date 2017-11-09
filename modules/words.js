import { match } from 'rambda'
import { WORDS } from './internals/constants'

export default function words (str) {
  return match(WORDS, str)
}
