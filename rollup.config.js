// rollup.config.js
import typescript from '@rollup/plugin-typescript';
module.exports = {
    input: 'main.ts',
    output: {
         file: 'bundle.js',
      format: 'cjs',
    },
    plugins: [typescript()]
}