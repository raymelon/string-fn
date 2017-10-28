import * as stringFn from '../src/stringFn'

test('', () => {
  const str = "fooBarBazIammorethantag"
  const result = stringFn.shuffle(str)

  expect(result).not.toEqual(str)
  expect(str.length).toEqual(result.length)
})


