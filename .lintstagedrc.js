module.exports = {
  linters: {
    '**/*.js': 'npm run lint',
    '**/*.mjs': 'npm run lint',
    'package.json': [
      'npx fixpack',
      'git diff --exit-code --quiet ./package.json'
    ]
  }
};
