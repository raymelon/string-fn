import {
  last,
  split,
  head,
} from 'rambda'

export default function between (str, leftLimit, rightLimit) {
  return last(
    split(
      leftLimit,
      head(split(rightLimit, str))
    )
  ).trim()
}