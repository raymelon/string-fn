import {
  join,
  map,
  toUpper,
  head,
  toLower,
  tail,
} from 'rambda'

import words from './words'

export default function pascalCase (str) {
  return join(
    '',
    map(
      val => `${ toUpper(head(val)) }${ toLower(tail(val)) }`,
      words(str)
    )
  )
}
