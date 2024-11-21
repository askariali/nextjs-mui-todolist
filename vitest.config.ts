import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    include: ["**/__tests__/**/*.test.ts?(x)"],
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    css: true,
  },
});
