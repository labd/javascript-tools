const path = require('path')

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'import', 'jest', 'react', 'react-hooks'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: path.resolve('tsconfig.json'),
    warnOnUnsupportedTypeScriptVersion: true,
  },

  extends: ['prettier', 'plugin:jest/recommended'],

  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },

  ignorePatterns: ['*.js', '*.d.ts', 'node_modules/', '*.generated.ts'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-require-imports': ['error'],
    'no-duplicate-imports': ['error'],
    'react/require-render-return': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
}