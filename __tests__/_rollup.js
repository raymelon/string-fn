import * as stringFn from '../src/stringFn'
import {exec} from 'child_process'

const execCommand = command =>
  new Promise((resolve, reject) => {
    const proc = exec(command, { cwd : process.cwd() })

    proc.stdout.on('data', chunk => {
      console.log(chunk.toString())
    })
    proc.stdout.on('end', () => resolve())
    proc.stdout.on('error', err => reject(err))
  })

test('', async () => {
  try{
    await execCommand('yarn build')
  }catch(err){
    expect(true).toBeFalsy()
  }
})
