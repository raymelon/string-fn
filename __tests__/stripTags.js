import * as stringFn from '../src/stringFn'

test('', () => {
  const str = "<p>foo <b>bar</b>   <hr/> baz</p>"
  
  const result = stringFn.stripTags(str)
  const expectedResult = "foo bar baz"

  expect(result).toEqual(expectedResult)
})


