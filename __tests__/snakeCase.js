import * as stringFn from '../src/stringFn'

test('', () => {
  const str = 'foo bar BAZ'
  const result = stringFn.snakeCase(str)
  const expectedResult = 'foo_bar_baz'

  expect(result).toEqual(expectedResult)
})

