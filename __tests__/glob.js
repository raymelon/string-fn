import * as stringFn from '../stringFn'

test('', () => {
  expect(stringFn.glob('/home/dev/foo.js', '*.js')).toEqual(true)
  expect(stringFn.glob('/home/dev/foo.js', '*.ts')).toEqual(false)
  expect(stringFn.glob('/home/dev/foo.js', '/home/*')).toEqual(true)
  expect(stringFn.glob('/home/dev/foo.js', '*/dev/foo*')).toEqual(true)
})
