module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  overrides: [],
  parserOptions: {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    'react': {
      'version': 'detect'
    }
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'curly': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-curly-spacing':
      ['error', { spacing: { objectLiterals: 'always' }, when: 'always', children: true }],
    'react/prop-types': 'off'
  }
}
