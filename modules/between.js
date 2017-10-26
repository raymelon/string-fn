import {
  last,
  split,
  head,
} from 'rambda'

export default function between (str, left, right) {
  return last(split(
    left,
    head(split(right, str))
  )).trim()
}
