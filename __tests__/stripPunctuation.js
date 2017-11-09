import * as stringFn from '../src/stringFn'

test('', () => {
  const str = 'If my, wings should, fail me ...'
  stringFn.stripPunctuation(str)

  const result = stringFn.stripPunctuation(str)
  const expectedResult = 'If my wings should fail me '

  expect(result).toEqual(expectedResult)
})

