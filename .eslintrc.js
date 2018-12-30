module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        mocha: true
      },
      files: ['test/**/*.mjs']
    },
    {
      files: ['.runkit.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  root: true,
  rules: {
    'prettier/prettier': ['error']
  }
};
