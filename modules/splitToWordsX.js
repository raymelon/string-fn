import {match} from 'rambda'
const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g

const splitToWords = match(WORDS)

export default splitToWords
