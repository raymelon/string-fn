import splitToWords from './splitToWords'
import {
  toLower,
  join,
} from 'rambda'

export default function kebabCase (str, flag = false) {
  return toLower(
    join(
      '-',
      splitToWords(str, flag)
    )
  )
}