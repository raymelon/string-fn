import * as stringFn from '../src/stringFn'

test('with Bulgarian language', () => {
  const result = stringFn.wordsX('Имаме неясни надежди, но ясни страхове.')
  const expectedResult = [ 'Имаме', 'неясни', 'надежди', 'но', 'ясни', 'страхове' ]

  expect(result).toEqual(expectedResult)
})

test('', () => {
  const result = stringFn.wordsX('fooBarBAZ')
  const expectedResult = [ 'foo', 'Bar', 'BAZ' ]

  expect(result).toEqual(expectedResult)
})

test('doesn\'t work with German', () => {
  const result = stringFn.wordsX('fooBärBAZ')
  const expectedResult = [ 'foo', 'Bär', 'BAZ' ]

  expect(result).toEqual(expectedResult)
})

