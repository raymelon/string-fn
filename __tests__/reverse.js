import * as stringFn from '../src/stringFn'

test('', () => {
  const str = 'fooBarBaz'
  const result = stringFn.reverse(str)
  const expectedResult = 'zaBraBoof'

  expect(result).toEqual(expectedResult)
  expect(str).toEqual('fooBarBaz')
})

