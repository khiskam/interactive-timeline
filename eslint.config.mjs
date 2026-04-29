import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import importNewlines from "eslint-plugin-import-newlines";
import importX from "eslint-plugin-import-x";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    "dist",
    "**/*.module.css.d.ts",
    "**/*.module.sass.d.ts",
    "**/*.module.scss.d.ts",
    "**/*.module.less.d.ts",
    "**/*.module.styl.d.ts",
    "**/*.module.stylus.d.ts",
  ]),
  {
    files: [ "**/*.{ts,tsx,js,mjs}" ],
    plugins: { "@stylistic": stylistic },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat["recommended-latest"],
      reactRefresh.configs.recommended,
    ],
    rules: {
      "@stylistic/semi": [ "error", "always" ],
      "@stylistic/indent": [ "error", 2 ],
      "@stylistic/jsx-quotes": [ "error", "prefer-double" ],
      "@stylistic/quotes": [ "error", "double" ],
      "@stylistic/quote-props": [ "error", "as-needed" ],
      "@stylistic/type-named-tuple-spacing": [ "error" ],
      "@stylistic/type-generic-spacing": [ "error" ],
      "@stylistic/type-annotation-spacing": "error",
      "@stylistic/template-curly-spacing": "error",
      "@stylistic/switch-colon-spacing": "error",
      "@stylistic/space-infix-ops": "error",
      "@stylistic/spaced-comment": [ "error", "always" ],
      "@stylistic/space-in-parens": [ "error", "never" ],
      "@stylistic/space-before-function-paren": [ "error", "never" ],
      "@stylistic/space-before-blocks": "error",
      "@stylistic/semi-style": [ "error", "last" ],
      "@stylistic/semi-spacing": "error",
      "@stylistic/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "@stylistic/padded-blocks": [ "error", "never" ],
      "@stylistic/operator-linebreak": [ "error", "before" ],
      "@stylistic/object-property-newline": [ "error", { allowAllPropertiesOnSameLine: true } ],
      "@stylistic/object-curly-newline": [ "error", { multiline: true, minProperties: 4 } ],
      "@stylistic/object-curly-spacing": [ "error", "always" ],
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-tabs": "error",
      "@stylistic/no-multiple-empty-lines": [ "error", { max: 1, maxEOF: 0, maxBOF: 0 } ],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-mixed-spaces-and-tabs": "error",
      "no-mixed-operators": [
        "error",
        {
          groups: [
            [ "&", "|", "^", "~", "<<", ">>", ">>>" ],
            [ "==", "!=", "===", "!==", ">", ">=", "<", "<=" ],
            [ "&&", "||" ],
            [ "in", "instanceof" ],
          ],
          allowSamePrecedence: true,
        },
      ],
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/no-extra-semi": "error",
      "@stylistic/newline-per-chained-call": [ "error", { ignoreChainWithDepth: 2 } ],
      "@stylistic/multiline-ternary": [ "error", "always" ],
      "@stylistic/member-delimiter-style": "error",
      "@stylistic/keyword-spacing": [ "error", { after: true, before: true } ],
      "@stylistic/key-spacing": [ "error", { beforeColon: false } ],
      "@stylistic/jsx-wrap-multilines": "error",
      "@stylistic/jsx-tag-spacing": [ "error", { beforeSelfClosing: "always" } ],
      "@stylistic/jsx-self-closing-comp": "error",
      "@stylistic/jsx-one-expression-per-line": "error",
      "@stylistic/jsx-max-props-per-line": [ "error", { maximum: { single: 3, multi: 1 } } ],
      "@stylistic/jsx-first-prop-new-line": [ "error", "multiline-multiprop" ],
      "@stylistic/jsx-equals-spacing": [ "error", "never" ],
      "@stylistic/jsx-curly-spacing": [ "error", { when: "always", children: true } ],
      "@stylistic/jsx-curly-newline": "error",
      "@stylistic/jsx-curly-brace-presence": [ "error", { props: "never", children: "never" } ],
      "@stylistic/jsx-closing-tag-location": "error",
      "@stylistic/jsx-closing-bracket-location": "error",
      "@stylistic/jsx-child-element-spacing": "error",
      "@stylistic/eol-last": [ "error", "always" ],
      "@stylistic/dot-location": [ "error", "property" ],
      "@stylistic/curly-newline": [ "error", { consistent: true } ],
      "@stylistic/computed-property-spacing": [ "error", "never" ],
      "@stylistic/comma-style": [ "error", "last" ],
      "@stylistic/comma-spacing": [ "error", { before: false, after: true } ],
      "@stylistic/comma-dangle": [ "error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
        importAttributes: "never",
        dynamicImports: "never",
        enums: "never",
        generics: "never",
        tuples: "never",
      } ],
      "@stylistic/brace-style": [ "error", "1tbs", { allowSingleLine: false } ],
      "@stylistic/arrow-spacing": "error",
      "@stylistic/arrow-parens": [ "error", "always" ],
      "@stylistic/array-bracket-spacing": [ "error", "always" ],
      "@typescript-eslint/consistent-type-imports": "error",
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    plugins: { "unused-imports": unusedImports },
    rules: { "unused-imports/no-unused-imports": "error" },
  },
  {
    plugins: { "import-newlines": importNewlines },
    rules: { "import-newlines/enforce": [ "error", { items: 2, semi: true } ] },
  },
  {
    plugins: { unicorn },
    rules: {
      "unicorn/no-empty-file": "error",
      "unicorn/filename-case": [
        "error",
        { case: "kebabCase" },
      ],
    },
  },
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            [ "^\\u0000(?!.*\\.(css|scss|sass|less)$)" ],
            [ "^react", "^@?\\w(?!.*\\.(css|scss|sass|less)$)" ],
            [ "^(?!.*\\.(css|scss|sass|less)$)[^.]" ],
            [ "^(?!.*\\.(css|scss|sass|less)$)\\." ],
            [ "^\\u0000[^.]+\\.(css|scss|sass|less)$", "^[^.]+\\.(css|scss|sass|less)$" ],
            [ "^\\u0000\\..+\\.(css|scss|sass|less)$", "^\\..+\\.(css|scss|sass|less)$" ],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  }, {
    plugins: { "import-x": importX },
    rules: { "import-x/no-unresolved": "error" },
    settings: {
      "import-x/resolver": {
        typescript: { alwaysTryTypes: true },
        node: { extensions: [ ".js", ".jsx", ".ts", ".tsx", ".css", ".scss" ] },
      },
    },
  },
]);
