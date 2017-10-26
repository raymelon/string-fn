import * as stringFn from '../src/stringFn'

test('', () => {
  expect(stringFn.trim('   foo  bar   baz   ')).toEqual('foo bar baz')
})
