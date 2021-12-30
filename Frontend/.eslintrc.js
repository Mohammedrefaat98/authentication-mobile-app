module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks'
  ],
  'rules': {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true }
    ],
    'semi': [
      'error',
      'always'
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-empty-function': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
    
};
