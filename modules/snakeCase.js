import {
  toLower,
  join,
} from 'rambda'
import words from './words'

export default function snakeCase (str) {
  return toLower(
    join(
      '_',
      words(str)
    )
  )
}
