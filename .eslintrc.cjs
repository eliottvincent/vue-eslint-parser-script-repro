module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    sourceType: "module"
  },

  plugins: [
    "eslint-plugin-jsdoc",
    "eliottvincent"
  ],

  rules: {
    "eliottvincent/import-group-comment": "error",

    "jsdoc/require-jsdoc": [
      "error",

      {
        "contexts": [
          "Property[key.name=\"methods\"] > ObjectExpression > Property"
        ]
      }
    ]
  }
};
