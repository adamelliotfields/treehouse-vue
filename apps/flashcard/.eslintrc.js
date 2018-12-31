module.exports = {
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      generators: false,
      jsx: true,
      objectLiteralDuplicateProperties: false,
    },
    ecmaVersion: 2018,
    parser: 'babel-eslint',
  },
  plugins: ['vue', 'import', 'cypress'],
};
