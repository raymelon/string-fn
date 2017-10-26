import * as stringFn from '../stringFn'

test('', () => {
  expect(stringFn.camelCase('foo bar BAZ')).toEqual('fooBarBaz')

  expect(stringFn.camelCase('foo-bar-baz')).toEqual('fooBarBaz')
})

test('should work as camelcase library', () => {
  expect(stringFn.camelCase('Foo-Bar')).toEqual('fooBar')

  expect(stringFn.camelCase('--foo.bar')).toEqual('fooBar')

  expect(stringFn.camelCase('Foo-Bar')).toEqual('fooBar')
})
