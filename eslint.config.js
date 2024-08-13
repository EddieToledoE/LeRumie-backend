const googleConfig = require("eslint-config-google");

const updatedRules = {
  ...googleConfig.rules,
  "valid-jsdoc": "off", // Sobreescribe la regla si está presente
  "require-jsdoc": "off", // Desactiva la regla 'require-jsdoc'
};

module.exports = [
  {
    ignores: ["node_modules", "eslint.config.js"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        node: true,
        es2021: true,
        console: true,
        require: true,
        module: true,
      },
    },
    rules: {
      ...updatedRules,
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "linebreak-style": ["error", "unix"],
    },
  },
];
