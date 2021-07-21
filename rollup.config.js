import path from 'path'
import typescript from '@rollup/plugin-typescript';
import buble from 'rollup-plugin-buble';

module.exports = {
  input: path.resolve(__dirname, 'mian.ts'),
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    buble(),
    typescript({
      paths: {
        'types/*': ['./types/*'],
        'src/*': ['./src/*']
      }
    })
  ]
}