import {
  join,
  map,
  split,
} from 'rambda'

export default function indent (str, indentCount) {
  return join(
    '\n',
    map(
      val => `${ ' '.repeat(indentCount) }${ val }`,
      split('\n', str)
    )
  )
}
