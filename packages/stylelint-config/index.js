module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
  ],
  rules: {
    indentation: 4,
    'at-rule-no-unknown': null,
    'scss/at-extend-no-missing-placeholder': null,
    'selector-class-pattern': '[\\w-]+',
    'no-descending-specificity': null,
    'scss/no-global-function-names': null,
    'scss/comment-no-empty': null,
  },
}
