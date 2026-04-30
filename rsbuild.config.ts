import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [ pluginReact(), pluginTypedCSSModules() ],
  html: { template: "./public/index.html" },
  resolve: { alias: { "@": "./src" } },
});
