const path = require('path')

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: ['import', 'react', 'react-hooks'],

  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: path.resolve('tsconfig.json'),
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['prettier'],

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        project: path.resolve('tsconfig.json'),
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-namespace': 'error',
      },
    },
  ],

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

  ignorePatterns: ['*.d.ts', 'node_modules/', '*.generated.ts'],
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
