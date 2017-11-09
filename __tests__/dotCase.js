import * as stringFn from '../src/stringFn'

test('', () => {
  const result = stringFn.dotCase('foo bar BAZ')
  const expected = 'foo.bar.baz'

  expect(
    result
  ).toEqual(expected)
})
