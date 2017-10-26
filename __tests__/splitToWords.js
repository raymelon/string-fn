import * as stringFn from '../stringFn'

test('', () => {
  expect(stringFn.between('begin foobarbaz end', 'foo', 'baz')).toEqual('bar')

  expect(stringFn.between('begin foo   bar   baz end', 'foo', 'baz')).toEqual('bar')

  expect(stringFn.between('begin foo bar baz end', 'q', 'x')).toEqual('begin foo bar baz end')
})
