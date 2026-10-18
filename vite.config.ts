import { defineConfig, FileTypes } from "@michaelhelvey/vite-config";

export default await defineConfig({
  lint: {
    overrides: [{ files: FileTypes.JS_SOURCE, rules: { complexity: ["error", { max: 4 }] } }],
  },
});
