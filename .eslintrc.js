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
    "jsx-quotes": [2, "prefer-double"],
    // 基础设置
    "import/no-unresolved": 1,
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
        "sort-imports": 0, // 不使用 eslint 的 sort-imports 规则避免冲突。
        "import/order": 0, // 不使用 eslint 的 import/order 规则避免冲突。
        'simple-import-sort/imports': 2,
        'simple-import-sort/exports': 2,
      },
    },
  ],
};
