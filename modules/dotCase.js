import {
  join,
  map,
  toLower,
} from 'rambda'

import words from './words'

export default function camelCase (str) {
  return join(
    '.',
    map(
      toLower,
      words(str)
    )
  )
}
