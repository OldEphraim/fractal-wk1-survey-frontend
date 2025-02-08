import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build",
    emptyOutDir: true,
    manifest: true,
    ssr: "src/entry.server.tsx", // ✅ Set a dedicated SSR entry
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    host: "localhost",
    port: 5173,
    strictPort: true,
  },
});
