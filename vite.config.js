import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createReScriptPlugin from '@jihchi/vite-plugin-rescript';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: ['**/*.bs.mjs'],
    }),
    // Comment out this plugin to remove the bug
    createReScriptPlugin()
  ],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["json", "json-summary", "text"],
      provider: "v8",
      lines: 100,
      statements: 100,
      functions: 100,
    },
    teardownTimeout: 500,
  },
});
