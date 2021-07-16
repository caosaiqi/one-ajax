// rollup.config.js
import path from 'path'
import typescript from '@rollup/plugin-typescript';
module.exports = {
  input: path.resolve(__dirname, 'mian.ts'),
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    typescript({
      //baseUrl: path.resolve(__dirname, 'main.ts'),
      paths: {
        'types/*': ['./types/*'],
        'src/*': ['./src/*']
      }
    })
  ]
}