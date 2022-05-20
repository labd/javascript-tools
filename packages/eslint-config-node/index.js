module.exports = {
  env: {
    node: true,
    jest: true,
    commonjs: true,
  },
  plugins: ['@typescript-eslint', 'jest'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: path.resolve('tsconfig.json'),
    warnOnUnsupportedTypeScriptVersion: true,
  },

  extends: ['prettier', 'plugin:jest/recommended'],
  ignorePatterns: ['*.js', '*.d.ts', 'node_modules/', '*.generated.ts'],
  rules: {
    '@typescript-eslint/no-require-imports': ['error'],
    'no-duplicate-imports': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
  },
}
