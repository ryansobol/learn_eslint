module.exports = {
  'rules': {
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'quotes': [2, 'single', 'avoid-escape'],
    'linebreak-style': [2, 'unix'],
    'semi': [2, 'always'],
    'strict': [2, 'global']
  },
  'env': {
    'browser': true
  },
  'extends': 'eslint:recommended'
};
