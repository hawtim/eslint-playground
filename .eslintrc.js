module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2015,
  },
  plugins: [
    "simple-import-sort",
    "sort-keys"
  ],
  extends: ["eslint:recommended", "plugin:import/errors"],
  rules: {
    // override/add rules settings
    semi: [2, "always"],
    "comma-dangle": [2, "always-multiline"],
    quotes: [2, "single"],
    "space-before-function-paren": [
      2,
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "object-curly-spacing": [
      2,
      "always",
      { arraysInObjects: true, objectsInObjects: false },
    ],
    camelcase: 0,
    "no-console": 0,
    "import/no-unresolved": 1,
    "jsx-quotes": [2, "prefer-double"],
    // Off the rule sort-imports and import/order to avoid conflicting with simple-import-sort.
    "sort-imports": 0,
    "import/order": 0,
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
    "import/first": 2,
    "import/newline-after-import": 2,
    "import/no-duplicates": 2,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      rules: {
        // disable default eslint sort-keys
        'sort-keys': 0,
        'sort-keys/sort-keys-fix': 1,
        // Off the rule sort-imports and import/order to avoid conflicting with simple-import-sort.
        'sort-imports': 0,
        'import/order': 0,
        'simple-import-sort/imports': 2,
        'simple-import-sort/exports': 2,
      },
    },
  ],
};
