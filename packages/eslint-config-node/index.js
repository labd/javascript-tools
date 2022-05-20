module.exports = {
  env: {
    node: true,
    jest: true,
    commonjs: true,
  },
  plugins: ['@typescript-eslint', 'import', 'jest'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: path.resolve('tsconfig.json'),
    warnOnUnsupportedTypeScriptVersion: true,
  },

  extends: ['prettier', 'plugin:jest/recommended'],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    }
    'import/resolver': {
      node: {},
      typescript: {
        directory: path.resolve('tsconfig.json'),
      },
    },
  }

  ignorePatterns: ['*.js', '*.d.ts', 'node_modules/', '*.generated.ts'],
  rules: {
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-require-imports': ['error'],
    'no-duplicate-imports': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
  },
}
