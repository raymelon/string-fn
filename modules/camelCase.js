import {
  join,
  map,
  toUpper,
  head,
  toLower,
  tail,
} from 'rambda'

import splitToWords from './splitToWords'

export default function camelCase (str, flag = false) {
  const result = join(
    '',
    map(
      val => `${ toUpper(head(val)) }${ toLower(tail(val)) }`,
      splitToWords(str)
    )
  )

  return `${ toLower(head(result)) }${ tail(result) }`
}
