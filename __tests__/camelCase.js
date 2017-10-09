import {camelCase} from '../stringFn'

test('',()=>{
  expect(camelCase('FooBar')).toEqual('fooBar')
})
