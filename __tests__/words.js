import * as stringFn from '../src/stringFn'

test('', () => {
  const result = stringFn.words('fooBarBAZ')
  const expectedResult = [ 'foo', 'Bar', 'BAZ' ]

  expect(result).toEqual(expectedResult)
})

test('doesn\'t work with German', () => {
  const result = stringFn.words('fooBärBAZ')
  const expectedResult = [ 'foo', 'B', 'r', 'BAZ' ]

  expect(result).toEqual(expectedResult)
})
