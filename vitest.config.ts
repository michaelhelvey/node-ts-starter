import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    mockReset: true,
    passWithNoTests: true,
    unstubEnvs: true,
    unstubGlobals: true,
  },
});
