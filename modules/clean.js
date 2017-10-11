import {
  replace
} from 'rambda'

export default function clean (str) {
  return replace(/\s+/g, ' ', str).trim()
}
