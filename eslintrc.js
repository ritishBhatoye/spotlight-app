/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "@typescript-eslint", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    "react-native/react-native": true,
  },
  rules: {
    "unused-imports/no-unused-imports": "warn",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
