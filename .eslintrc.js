module.exports = {
  env: {
    es2021: true,
    node: true,
    jasmine: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    browser: 'readonly',
    $: 'readonly',
    $$: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    babelOptions: {
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
      ],
    },
  },
  rules: {
    'class-methods-use-this': 0,
  },
};
