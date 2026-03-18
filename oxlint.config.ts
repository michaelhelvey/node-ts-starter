import type { OxlintConfig } from "oxlint";

import { defineConfig } from "oxlint";

const productionPlugins = ["eslint", "typescript", "oxc", "import", "node", "promise", "vitest"];
const testPlugins = productionPlugins.filter((pluginName) => pluginName !== "typescript");

export default defineConfig({
  categories: {
    correctness: "error",
    perf: "error",
  },
  env: {
    browser: true,
    builtin: true,
    es2024: true,
    node: true,
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  ignorePatterns: ["node_modules", "dist"],
  overrides: [
    {
      files: ["**/*test.ts", "**/*test.tsx", "**/*spec.ts", "**/*spec.tsx"],
      plugins: testPlugins as OxlintConfig["plugins"],
    },
  ],
  plugins: productionPlugins as OxlintConfig["plugins"],
});
