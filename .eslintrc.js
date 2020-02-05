module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['warn', { code: 100 }],
    eqeqeq: ['warn', 'smart'],
    'no-empty-function': 'error',
    'no-multi-spaces': 'error',
    'no-param-reassign': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
