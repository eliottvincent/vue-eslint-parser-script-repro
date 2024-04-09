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

  extends: [
    "plugin:vue/vue3-recommended"
  ],

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
