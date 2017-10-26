import * as stringFn from '../src/stringFn'

test('', () => {
  expect(stringFn.indent('foo\nbar\nbaz', 4)).toEqual('    foo\n    bar\n    baz')
})
