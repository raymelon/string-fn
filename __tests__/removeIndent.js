import * as stringFn from '../src/stringFn'

test('', () => {
  const result = stringFn.removeIndent('    foo\n    bar\n    baz')
  const expectedResult = 'foo\nbar\nbaz'

  expect(result).toEqual(expectedResult)
})

