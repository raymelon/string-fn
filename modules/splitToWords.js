import { match } from 'rambda'
import { WORDS } from './internals/constants'

const splitToWords = match(WORDS)

export default splitToWords
