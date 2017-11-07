export function camelCase(str: string): string
export function kebabCase(str: string): string
export function constantCase(str: string): string
export function removeIndent(str: string): string
export function reverse(str: string): string
export function shuffle(str: string): string
export function snakeCase(str: string): string
export function stripPunctuation(str: string): string
export function stripTags(str: string): string
export function titleCase(str: string): string
export function trim(str: string): string

export function between(str: string, left: string, right: string): string
export function count(str: string, substr: string): number
export function distance(x: string, y: string): number
export function distanceGerman(x: string, y: string): number
export function glob(str: string, globRule: string): boolean
export function indent(str:string, indentCount:number): string
export function seoTitle(str: string, limit?: number): string
export function splitSentence(sentence: string): string[]
export function words(str: string): string[]
export function wordsX(str: string): string[]

export interface MaskSentence{
  sentence: string
  replacer?: string
  charLimit?: number
  words: string[]
}

export interface OutputMaskSentence{
  visible: string[]
  hidden: string[]
}

export function maskSentence(input: MaskSentence): OutputMaskSentence

export interface MaskWords {
  words:string
  replacer?:string
  charLimit?: number
}

export function maskWords(input: MaskWords): string