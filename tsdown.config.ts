import { defineConfig } from "tsdown";

export default defineConfig({
  attw: {
    ignoreRules: ["no-resolution", "cjs-resolves-to-esm"],
    level: "error",
    profile: "esm-only",
  },
  dts: true,
  entry: ["./src/index.ts"],
  exports: true,
  sourcemap: true,
});
