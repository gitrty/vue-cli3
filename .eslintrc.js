module.exports = {
  root: true,
  env: {
    "node": true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  rules: {
    "indent": [0, 4],
    'generator-star-spacing': 0,
    'space-before-function-paren': 0
  },
  parserOptions: {
    "parser": "babel-eslint"
  }
}
