import * as stringFn from '../src/stringFn'

test('English with apostrophe(\')', () => {
  const sentence = 'You didn\'t, do much'
  const expectedVisible = [ 'Y_u', 'd____t', ',', 'do', 'm__h' ]
  const expectedHidden = [ 'You', 'didn\'t', ',', 'do', 'much' ]

  const { hidden, visible } = stringFn.maskSentence({ sentence })

  expect(hidden).toEqual(expectedHidden)
  expect(visible).toEqual(expectedVisible)
})

test('Bulgarian with dash(-)', () => {
  const sentence = 'Някога е имало по-добри времена'
  const expectedVisible = [ 'Н____а', 'е', 'и___о', 'п______и', 'в_____а' ]
  const expectedHidden = [ 'Някога', 'е', 'имало', 'по-добри', 'времена' ]

  const { hidden, visible } = stringFn.maskSentence({ sentence })

  expect(hidden).toEqual(expectedHidden)
  expect(visible).toEqual(expectedVisible)
})

test('', () => {
  const sentence = 'it was, for what i need, good.'
  const expectedHidden = [ 'it', 'was', ',', 'for', 'what', 'i', 'need', ',', 'good', '.' ]

  const expectedVisible = [ 'it', 'w_s', ',', 'f_r', 'w__t', 'i', 'n__d', ',', 'g__d', '.' ]

  const { hidden, visible } = stringFn.maskSentence({ sentence })

  expect(hidden).toEqual(expectedHidden)
  expect(visible).toEqual(expectedVisible)
})


