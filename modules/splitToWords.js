import { match } from 'rambda'
import { WORDS } from './constants'

const splitToWords = match(WORDS)

export default splitToWords
