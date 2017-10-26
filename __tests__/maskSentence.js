import * as stringFn from '../stringFn'

test('', () => {

  const sentence = "it was, for what i need, good."
  const {hidden , visible} = stringFn.maskSentence({ sentence })

  expect(hidden).toEqual('foo-bar-baz')
})


