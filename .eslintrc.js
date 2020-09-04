module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 0,
    'no-nested-ternary': 0,
    'import/order': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/sort-comp': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    /* 'react/prop-types': [
      'enabled',
      { ignore: 'ignore', customValidators: 'customValidator' },
    ], */
    // 'max-len': ['error', 80],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
