// http://eslint.org/docs/user-guide/configuring
//
module.exports = {
  // babel eslint
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // lint browser
  env: {
    browser: true,
  },
  // standard style
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // lint .vue file with html
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // x => x
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // generator --> async, await
    // allow async-await
    'generator-star-spacing': 0,
    // no debugger in dev......
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
