import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const allExtension = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve({
      extensions: allExtension, // 讓 rollup 能夠 resolve TS 和 TSX 的檔案
    }),
    commonjs(),
    babel({
      rootMode: 'upward', // Find the root babel config so that we don't need to create one under every packages
      babelHelpers: 'runtime',
      extensions: allExtension, // 讓 Babel 可以編譯 TS 和 TSX
    }),
    terser(),
  ],
  external: ['styled-components', /@babel\/runtime/], // 由於 babelHelpers 選 runtime
};
