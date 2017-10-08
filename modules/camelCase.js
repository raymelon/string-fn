import {
  join,
  map,
  toUpper,
  head,
  toLower,
  tail
} from 'rambda'

export default function camelCase (str, flag = false) {
  const result = join(
    "",
    map(
      val => `${ toUpper(head(val)) }${ toLower(tail(val)) }`,
      splitToWords(str, flag)
    )
  )

  return `${ toLower(head(result)) }${ tail(result) }`
}