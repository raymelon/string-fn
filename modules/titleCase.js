import{
  join,
  map,
  head,
  toUpper,
  toLower,
  tail
} from 'rambda'
import splitToWords from './splitToWords'

export default function titleCase (str) {
  return join(
    ' ',
    map(
      val => `${ toUpper(head(val)) }${ toLower(tail(val)) }`,
      splitToWords(str)
    )
  )
}