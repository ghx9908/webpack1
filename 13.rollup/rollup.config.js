//import build from './plugins/rollup-plugin-build.js';
//import polyfill from './plugins/rollup-plugin-polyfill2';
//import babel from './plugins/rollup-plugin-babel.js';
import output from './plugins/rollup-plugin-output.js';
export default {
  input: './src/index.js',
  output: {
    dir: 'dist'
  },
  plugins: [
    //build({ name: 'build-plugin' }),
    //polyfill()
    /* babel({
      include: "./src",
      extensions: ['.js', '.jsx'],
      babel: {
        presets: [
          "@babel/preset-env"
        ]
      }
    }) */
    output()
  ]
}