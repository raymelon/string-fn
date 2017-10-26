import * as stringFn from '../stringFn'

test('', () => {
  expect(stringFn.trim('   foo  bar   baz   ')).toEqual('foo bar baz')
})
