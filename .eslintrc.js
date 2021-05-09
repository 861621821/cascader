module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/recommended",
    "@vue/standard"
  ],
  "rules": {
    'vue/max-attributes-per-line': 0
  },
  "parserOptions": {
    "parser": "babel-eslint"
  }
}