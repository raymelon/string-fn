import words from './words'
import {
  toLower,
  join,
} from 'rambda'

export default function kebabCase (str) {
  return toLower(join(
    '-',
    words(str)
  ))
}
