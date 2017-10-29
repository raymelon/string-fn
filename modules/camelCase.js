import {
  join,
  map,
  toUpper,
  head,
  toLower,
  tail,
} from 'rambda'

import words from './words'

export default function camelCase (str, flag = false) {
  const result = join(
    '',
    map(
      val => `${ toUpper(head(val)) }${ toLower(tail(val)) }`,
      words(str)
    )
  )

  return `${ toLower(head(result)) }${ tail(result) }`
}
