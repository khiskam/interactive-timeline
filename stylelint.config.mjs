/** @type {import("stylelint").Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
  ],
  plugins: [ "@stylistic/stylelint-plugin" ],
  rules: {
    "@stylistic/max-empty-lines": 1,
    "@stylistic/no-missing-end-of-source-newline": true,
    "selector-class-pattern": "^[a-z][a-z_-]+$",
    "@stylistic/declaration-block-trailing-semicolon": "always",
    "rule-empty-line-before": [
      "always",
      {
        except: [ "first-nested" ],
        ignore: [ "after-comment" ],
      },
    ],
  },
  ignoreFiles: [ "**/*.css.d.ts", "dist/**" ],
};
