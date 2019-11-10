import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import clean from 'rollup-plugin-cleaner';

const { DEV_MODE } = process.env;

const config = {
  input: path.join(__dirname, 'src/scripts/index.js'),
  output: {
    file: path.join(__dirname, 'build/bundle.js'),
    format: 'iife',
    sourcemap: DEV_MODE ? 'inline' : false
  },
  plugins: [
    resolve(),
    commonjs(),
    scss({
      output: path.join(__dirname, 'build/styles.css'),
      outputStyle: DEV_MODE ? 'nested' : 'compressed',
      sourceMapEmbed: DEV_MODE
    }),
    clean({
      targets: [path.join(__dirname, 'build')]
    }),
    copy({
      targets: [
        {
          src: path.join(__dirname, 'src/images/**/*'),
          dest: path.join(__dirname, 'build/images')
        }
      ]
    })
  ]
};

if (!DEV_MODE) {
  config.plugins.push(
    babel({
      runtimeHelpers: true
    }),
    terser()
  );
}

export default config;
