import * as stringFn from '../src/stringFn'

test('', () => {
  const result = stringFn.maskWords({ words : 'James Brown' })
  const expectedResult = 'J___s B___n'

  expect(result).toEqual(expectedResult)
})

