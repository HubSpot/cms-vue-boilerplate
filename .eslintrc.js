module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:svelte/essential', 'eslint:recommended', '@svelte/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
