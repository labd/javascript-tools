const path = require("path");

module.exports = {
  env: {
    node: true,
  },

  plugins: ["@typescript-eslint"],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    project: path.resolve("tsconfig.json"),
    warnOnUnsupportedTypeScriptVersion: true,
  },

  extends: ["prettier"],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {},
      typescript: {
        directory: path.resolve("tsconfig.json"),
      },
    },
  },

  root: true,

  ignorePatterns: ["*.js", "*.d.ts", "node_modules/", "*.generated.ts"],

  rules: {
    "arrow-body-style": ["error", "as-needed"],

    // We want to force the usage of proper logger infrastructure
    "no-console": "error",
    "no-nested-ternary": "error",

    // Disallow `x != null ? true : false`, and use `x != null` instead
    "no-unneeded-ternary": "error",

    // Enforce `import { type X }` over `import { X }` for type imports
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
      },
    ],

    // Require explicit types on exported function return values and parameters
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
  },
};
