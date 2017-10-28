import {
  join, 
  map,
  split
} from 'rambda'

export default function removeIndent (str) {
  return join(
    '\n',
    map(
      val => val.trimLeft(),
      split('\n', str)
    )
  )
}
