module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    eqeqeq: 'error',
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/button-has-type': 0
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public']
};
