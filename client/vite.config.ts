import react from "@vitejs/plugin-react";

import { defineConfig, loadEnv } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import svgr from "vite-plugin-svgr";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const envVars = loadEnv(mode, "../");
  for (const key in envVars) {
    process.env[key] = envVars[key];
  }
  return defineConfig({
    // Define your Vite configuration here
    // For example, if you want to access VITE_SECRET, you can do so like this:
    plugins: [
      react(),
      svgr(),
      nodePolyfills({
        // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
        include: ["path", "stream", "util", "crypto"],
        // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
        exclude: [
          "fs", // Excludes the polyfill for `fs` and `node:fs`.
        ],
        // Whether to polyfill specific globals.
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
    ],
    define: {
      "process.env.VITE_SECRET": JSON.stringify(process.env.VITE_SECRET),
    },
  });
};
