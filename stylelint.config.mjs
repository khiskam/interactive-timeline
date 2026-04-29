/** @type {import("stylelint").Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
  ],
  plugins: [
    "@stylistic/stylelint-plugin",
  ],
  rules: {
    "selector-class-pattern": "^[a-z][a-z_-]+$",
    "@stylistic/declaration-block-trailing-semicolon": "always",
  },
};
