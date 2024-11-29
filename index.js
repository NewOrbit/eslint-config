// @ts-check

import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import hooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";

export default tseslint.config(
  // @ts-ignore
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    // @ts-ignore
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      // @ts-ignore
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  jsdoc.configs["flat/recommended"],
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
    ignores: ["*.{test|spec}.{js,jsx,ts,tsx}"],
  },
  {
    rules: {
      "arrow-parens": "off",
      "arrow-spacing": "error",
      "comma-dangle": "off",
      complexity: "off",
      "constructor-super": "error",
      curly: "error",
      "default-case": "error",
      "dot-notation": "error",
      "eol-last": "error",
      eqeqeq: ["error", "smart"],
      "guard-for-in": "error",
      "import/named": "off",
      "import/namespace": "off",
      "import/no-duplicates": "off",
      "import/no-internal-modules": "off",
      "import/no-unresolved": "off",
      "import/no-self-import": "error",
      "import/order": [
        "error",
        {
          "newlines-between": "always-and-inside-groups",
        },
      ],
      indent: [
        "error",
        4,
        {
          SwitchCase: 1,
        },
      ],
      "jsdoc/check-alignment": 1,
      "jsdoc/check-examples": 1,
      "jsdoc/check-indentation": 1,
      "jsdoc/check-param-names": 1,
      "jsdoc/check-syntax": 1,
      "jsdoc/check-tag-names": 1,
      "jsdoc/check-types": 1,
      "jsdoc/require-param": 1,
      "jsdoc/require-returns": 1,
      "jsdoc/require-returns-type": 1,
      "jsdoc/valid-types": 1,
      "key-spacing": [
        "error",
        {
          afterColon: true,
          beforeColon: false,
          mode: "strict",
        },
      ],
      "keyword-spacing": [
        "error",
        {
          before: true,
        },
      ],
      "max-classes-per-file": ["error", 1],
      "max-len": [
        "error",
        {
          code: 160,
          tabWidth: 4,
        },
      ],
      "max-lines": [
        "warn",
        {
          skipComments: true,
        },
      ],
      "new-parens": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "off",
      "no-cond-assign": "error",
      "no-console": "error",
      "no-debugger": "error",
      "no-dupe-class-members": "off",
      "no-empty": "error",
      "no-eval": "error",
      "no-fallthrough": "off",
      "no-invalid-this": "off",
      "no-labels": "error",
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],
      "no-new-wrappers": "error",
      "no-parameter-properties": "off",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": [
        "error",
        {
          ignoreDeclarationMerge: true,
        },
      ],
      "no-return-await": "error",
      "no-require-imports": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-unexpected-multiline": "off",
      "no-unsafe-finally": "error",
      "no-unused-labels": "error",
      "no-use-before-define": "off",
      "no-var": "error",
      "object-curly-spacing": ["error", "always"],
      "object-shorthand": "error",
      "one-var": [
        "error",
        {
          const: "never",
          let: "never",
          var: "never",
        },
      ],
      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: true,
        },
      ],
      "prefer-const": "error",
      "quote-props": ["error", "consistent-as-needed"],
      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],
      radix: "error",
      "react/display-name": "off",
      "react/jsx-boolean-value": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-indent": ["off", 4],
      "react/jsx-indent-props": ["off", 4],
      "react/jsx-key": "error",
      "react/jsx-no-bind": [
        "error",
        {
          ignoreDOMComponents: true,
          ignoreRefs: true,
        },
      ],
      "react/jsx-tag-spacing": [
        "error",
        {
          afterOpening: "never",
          beforeClosing: "allow",
          beforeSelfClosing: "always",
          closingSlash: "never",
        },
      ],
      "react/jsx-wrap-multilines": "error",
      "react/no-children-prop": "off",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "react/forbid-dom-props": [1, { forbid: ["style"] }],
      semi: ["error", "always"],
      "sort-imports": "off",
      "sort-keys": "off",
      "space-before-blocks": "error",
      "space-before-function-paren": [
        "error",
        {
          anonymous: "never",
          asyncArrow: "always",
          named: "never",
        },
      ],
      "spaced-comment": [2, "always"],
      "use-isnan": "error",
      "no-prototype-builtins": "warn",
      "no-extra-boolean-cast": "warn",
      "no-empty-pattern": "warn",
      "promise/catch-or-return": "off",
      "no-nested-ternary": "warn",
    },
  },
  eslintConfigPrettier
);