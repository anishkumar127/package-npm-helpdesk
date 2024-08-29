// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import { ViteHtmlPlugin } from "vite-plugin-html";
// import copy from "vite-plugin-copy";
export default defineConfig({
  plugins: [
    react(),
    // copy({
    //   targets: [{ src: "src/**/*.css", dest: "dist/assets" }],
    //   hook: "writeBundle",
    // }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "AnishCommentsPageCubiclogics",
      fileName: (format) => `anish-comments-page-cubiclogics.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "assets/[name][extname]",
      },
    },
  },

  // css: {
  //   postcss: {
  //     plugins: [],
  //   },
  // },
});
