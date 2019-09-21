module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    plugins: [
      "@typescript-eslint"
    ],
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended"
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            "allowExpressions": true,
            "allowTypedFunctionExpressions": true,
          }
        ],
        "quotes": ["error", "double"],
        "react/jsx-filename-extension": ["error", {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }],
        "react/prop-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "implicit-arrow-linebreak": "off",
        "no-tabs": "off",
        "indent": ["error", "tab"],
        "react/jsx-indent-props": ["error", "tab"],
        "react/display-name": "off"
    },
    parserOptions: {
      ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
      sourceType: 'module',  // Allows for the use of imports
    },
    settings: {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    "env": {
        "browser": true
    }
};
