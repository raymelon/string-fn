import {match} from 'rambda'
import {WORDS_EXTENDED} from './internals/constants'

export default function words (str) {

  return match(WORDS_EXTENDED, str)
}