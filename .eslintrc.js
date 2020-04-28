module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  "rules": {
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "function-paren-newline": ["off"],
    "no-underscore-dangle": ["off"],
    "no-console": "off",
    "max-len": "off",
    "linebreak-style": ["off"],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "multiline": true,
          "consistent": true,
          "minProperties": 3
        },
        "ObjectPattern": {
          "multiline": true,
          "consistent": true,
          "minProperties": 3
        },
        "ImportDeclaration": {
          "multiline": true,
          "consistent": true,
          "minProperties": 3
        },
        "ExportDeclaration": {
          "multiline": true,
          "consistent": true,
          "minProperties": 3
        }
      }
    ],
    "indent": [
      2
    ],
    "react/jsx-indent": ["error", 2],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "import/no-unresolved": [
      2,
      {
        "ignore": [
          "~/*"
        ]
      }
    ],
    "import/extensions": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "import/prefer-default-export": ["warn"],
    "react/no-typos": ["off"]
  },
};
