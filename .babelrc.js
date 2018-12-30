module.exports = function(api) {
  const config = {};

  if (api.env('umd')) {
    config.compact = false;
    config.minified = false;
  }

  if (api.env('test')) {
    config.compact = false;
    // NOTE: fix circular dependencies in core-js
    // https://github.com/rollup/rollup-plugin-commonjs/issues/284#issuecomment-361085666
    config.exclude = ['node_modules/core-js/**/*.js'];
    config.minified = false;
    config.presets = [
      [
        '@babel/preset-env',
        {
          debug: true,
          modules: false,
          targets: {
            browsers: ['IE >= 8', 'Android >= 4.4.4']
          },
          useBuiltIns: 'usage'
        }
      ]
    ];
    config.plugins = [
      [
        'transform-rename-import',
        {
          replacements: [
            {
              original: '^assert$',
              replacement: require.resolve('power-assert/build/power-assert.js')
            }
          ]
        }
      ],
      // NOTE: this plugin is include in babel-preset-power-assert.
      'babel-plugin-espower'
    ];
  }

  return config;
};
