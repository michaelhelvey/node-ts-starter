import { defineConfig } from "@michaelhelvey/vite-config";

export default await defineConfig({
  staged: {
    "*": "vp check --fix",
  },
});
