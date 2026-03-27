import defaultViteConfig from "@michaelhelvey/vite-config";
import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  ...defaultViteConfig,
  pack: {
    attw: {
      ignoreRules: ["no-resolution", "cjs-resolves-to-esm"],
      level: "error",
      profile: "esm-only",
    },
    dts: true,
    entry: ["./src/index.ts"],
    exports: true,
    sourcemap: true,
  },
});
