import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@apis", replacement: path.resolve(__dirname, "src/apis") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@css", replacement: path.resolve(__dirname, "src/css") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@router", replacement: path.resolve(__dirname, "src/router") },
      { find: "@service", replacement: path.resolve(__dirname, "src/service") },
      { find: "@store", replacement: path.resolve(__dirname, "src/store") },
    ],
  },
});
