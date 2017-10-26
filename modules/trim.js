import {
  replace,
} from 'rambda'

export default function trim (str) {
  return replace(/\s+/g, ' ', str).trim()
}
