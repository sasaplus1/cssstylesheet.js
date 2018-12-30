const path = require('path');

const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

const meta = require('./package.json');

module.exports = function(config) {
  config.set({
    basePath: __dirname,
    browsers: ['ChromeHeadlessNoSandbox'],
    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    },
    customLaunchers: {
      // NOTE: https://docs.travis-ci.com/user/chrome#Sandboxing
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        chromeDataDir: path.resolve(__dirname, '.chrome'),
        flags: ['--no-sandbox']
      }
    },
    files: [
      {
        pattern: require.resolve('power-assert/build/power-assert'),
        type: 'js',
        watched: false
      },
      {
        pattern: 'test/**/*.mjs',
        type: 'js',
        watched: true
      }
    ],
    frameworks: ['mocha'],
    preprocessors: {
      'test/**/*.mjs': ['rollup']
    },
    reporters: ['dots'],
    rollupPreprocessor: {
      plugins: [
        babel(),
        nodeResolve({
          browser: true,
          extensions: ['.mjs', '.js'],
          main: true,
          module: true
        }),
        commonjs()
      ],
      output: {
        format: 'umd',
        name: meta.name,
        sourcemap: 'inline'
      }
    }
  });
};
