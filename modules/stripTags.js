import { HTML_TAGS } from './internals/constants'
import {
  replace,
} from 'rambda'

export default function stripTags (str) {
  return replace(
    /\s+/g,
    ' ',
    replace(
      HTML_TAGS,
      ' ',
      str
    )
  ).trim()
}
