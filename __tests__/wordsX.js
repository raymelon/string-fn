import * as stringFn from '../src/stringFn'

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

