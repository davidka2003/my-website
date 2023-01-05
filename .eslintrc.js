module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "unused-imports"],
  ignorePatterns: ["node_modules", "shared/icons"],
  rules: {
    "unused-imports/no-unused-imports": "error",
  },
  parserOptions: {
    project: ["tsconfig.json"],
  },
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
        "@typescript-eslint/no-empty-interface": ["off"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
      },
    },
  ],
};
