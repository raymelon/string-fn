import * as stringFn from '../src/stringFn'

test('', () => {
  const result = stringFn.pascalCase('foo bar BAZ')
  const expected = 'FooBarBaz'

  expect(
    result
  ).toEqual(expected)
})

