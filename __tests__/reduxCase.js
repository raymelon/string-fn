import * as stringFn from '../src/stringFn'

test('', () => {
  const result = stringFn.reduxCase('fooBarBAZ')
  const expectedResult = 'FOO_BAR_BAZ'

  expect(result).toEqual(expectedResult)
})


