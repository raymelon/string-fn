import {
  join, 
  map,
  toUpper,
  toLower,
  head, 
  tail 
} from 'rambda'

import splitToWords from './splitToWords'

export default function seoTitle (str, limit = 3) {
  const result = join(
    ' ',
    map(
      val => {
        if (val.length >= limit) {
          return `${ toUpper(head(val)) }${ toLower(tail(val)) }`
        }

        return val
      },
      splitToWords(str)
    )
  )

  return `${ toUpper(head(result)) }${ tail(result) }`
}