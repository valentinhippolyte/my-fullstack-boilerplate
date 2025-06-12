module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
