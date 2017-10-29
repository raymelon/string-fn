import * as stringFn from '../src/stringFn'

test('', () => {
  const result = stringFn.redux('fooBarBAZ')
  const expectedResult = 'FOO_BAR_BAZ'

  expect(result).toEqual(expectedResult)
})


