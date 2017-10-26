import {
  length,
  split,
} from 'rambda'

export default function count (str, substr) {
  return length(split(substr, str)) - 1
}
