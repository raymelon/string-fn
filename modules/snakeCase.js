import {
  toLower,
  join,
} from 'rambda'
import splitToWords from './splitToWords'

export default function snakeCase (str, flag = false) {
  return toLower(
    join(
      '_',
      splitToWords(str, flag)
    )
  )
}