import * as stringFn from '../src/stringFn'

test('', () => {
  const str = "foo bar BAZ"
  const result = stringFn.titleCase(str)
  const expectedResult = "Foo Bar Baz"

  expect(result).toEqual(expectedResult)
})

test('', () => {
  const str = "fooBar_BAZ"
  const result = stringFn.titleCase(str)
  const expectedResult = "Foo Bar Baz"

  expect(result).toEqual(expectedResult)
})


