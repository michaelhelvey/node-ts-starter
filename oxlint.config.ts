import type { OxlintConfig } from "oxlint";

import { defineConfig } from "oxlint";

const productionPlugins = [
  "eslint",
  "typescript",
  "unicorn",
  "oxc",
  "import",
  "node",
  "promise",
  "vitest",

  // React-specific
  "jsx-a11y",
  "react",
  "react-perf",
];

const testPlugins = productionPlugins.filter((pluginName) => pluginName !== "typescript");

export default defineConfig({
  categories: {
    correctness: "error",
    nursery: "error",
    perf: "error",
    style: "error",
    suspicious: "error",
  },
  env: {
    browser: true,
    builtin: true,
    es2024: true,
    node: true,
  },
  ignorePatterns: ["node_modules", "dist"],
  jsPlugins: ["eslint-plugin-perfectionist", "eslint-plugin-unused-imports"],
  overrides: [
    {
      files: ["**/*test.ts", "**/*test.tsx", "**/*spec.ts", "**/*spec.tsx"],
      plugins: testPlugins as OxlintConfig["plugins"],
    },
  ],
  plugins: productionPlugins as OxlintConfig["plugins"],
  rules: {
    // Misc
    "import/no-nodejs-modules": "off",
    "import/no-unassigned-import": "off",
    "no-duplicate-imports": "off",
    "perfectionist/sort-enums": [
      "error",
      {
        partitionByComment: true,
        sortByValue: "always",
      },
    ],
    "perfectionist/sort-heritage-clauses": "error",
    "perfectionist/sort-interfaces": "error",
    "perfectionist/sort-jsx-props": "error",
    "perfectionist/sort-object-types": "error",
    "perfectionist/sort-objects": [
      "error",
      {
        partitionByComment: true,
      },
    ],
    "sort-imports": "off",
    "sort-keys": "off",

    // Rules for people that hate themselves:
    "@typescript-eslint/no-unsafe-type-assertion": "off",
    "import/no-named-export": "off",
    "import/prefer-default-export": "off",
    "no-magic-numbers": "off",
    "no-ternary": "off",

    // Genuinely no clue why these get enabled at all
    "jest/require-hook": "off",
  },
});
