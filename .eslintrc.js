module.exports = {
  env: {
    browser: true
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
      env: {
        node: true,
        es6: true
      },
      files: ['*.js', '.*.js']
    }
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  root: true
};
