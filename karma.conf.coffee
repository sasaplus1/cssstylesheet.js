webpack = require 'webpack'

module.exports = (config) ->

  config.set

    basePath: __dirname

    client:
      mocha:
        reporter: 'html'
        ui: 'bdd'

    files: [
      'node_modules/power-assert/build/power-assert.js'
      'build/cssstylesheet.js'
      'test/**/*.js'
    ]

    preprocessors:
      'test/**/*.js': 'espower'

    frameworks: [
      'mocha'
    ]

    reporters: [
      'dots'
    ]
