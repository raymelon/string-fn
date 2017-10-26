import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import packageJson from './package.json'

export default {
  input: 'src/stringFn.js',
  output: [
    {
      file   : packageJson.main,
      format : 'cjs',
    },
    {
      file   : packageJson.module,
      format : 'es',
    },
    {
      file   : 'webVersion.js',
      format : 'umd',
      name   : 'StringFn',
    }
  ],
  legacy: false,
  treeshake: true,
  externalHelpers: false,
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
