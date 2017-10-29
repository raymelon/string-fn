import * as stringFn from '../src/stringFn'

test('', () => {
  const str = "in my   , time of-dying, when nobody."
  const result = stringFn.splitSentence(str)
  const expectedResult = [
    "in",
    "my",
    ",",
    "time",
    "of",
    "-",
    "dying",
    ",",
    "when",
    "nobody",
    "."
  ]
  expect(result).toEqual(expectedResult)
})

