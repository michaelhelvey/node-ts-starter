import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    unstubEnvs: true,
    unstubGlobals: true,
    mockReset: true,
    passWithNoTests: true,
  },
});
