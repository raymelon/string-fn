import * as stringFn from '../stringFn'

test('', () => {
  const result = stringFn.kebabCase('fooBarBaz')

  expect(result).toEqual('foo-bar-baz')
})

test('', () => {
  const result = stringFn.kebabCase('Foo Bar BAZ')

  expect(result).toEqual('foo-bar-baz')
})

test('', () => {
  const result = stringFn.kebabCase('__FOO_BAR__')

  expect(result).toEqual('foo-bar')
})

test('', () => {
  const result = stringFn.kebabCase('Foo Bar BAZ')

  expect(result).toEqual('foo-bar-baz')
})

