import * as stringFn from '../src/stringFn'

test('', () => {

  const sentence = "it was, for what i need, good."
  const expectedHidden = ["it", "was", ",", "for", "what", "i", "need", ",", "good", "."]

  const expectedVisible = ["i_", "w_s", ",", "f_r", "w__t", "i", "n__d", ",", "g__d", "."]
  
  const {hidden , visible} = stringFn.maskSentence({ sentence })

  expect(hidden).toEqual(expectedHidden)
  expect(visible).toEqual(expectedVisible)
})


