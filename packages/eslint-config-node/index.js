const path = require('path')

module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  plugins: ['@typescript-eslint', 'import'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: path.resolve('tsconfig.json'),
    warnOnUnsupportedTypeScriptVersion: true,
  },

  extends: ['prettier'],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {},
      typescript: {
        directory: path.resolve('tsconfig.json'),
      },
    },
  },

  ignorePatterns: ['*.js', '*.d.ts', 'node_modules/', '*.generated.ts'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-require-imports': ['error'],
    'no-duplicate-imports': ['error'],
  },
}
