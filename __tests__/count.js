import * as stringFn from '../src/stringFn'

test('', () => {
  expect(stringFn.count('fooBarfoo', 'foo')).toEqual(2)
  expect(stringFn.count('fooBarfoo', 'bar')).toEqual(0)
  expect(stringFn.count('fooBarfoo', 'Bar')).toEqual(1)
})

test('X', () => {
  expect(stringFn.count('schönefeld', 'schön')).toEqual(1)
})

