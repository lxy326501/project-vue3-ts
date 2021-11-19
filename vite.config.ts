import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
  plugins: [
    vue(),
  ],
  base: "./",
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./types"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@views": path.resolve(__dirname, "./src/views"),
    },
  },
  build: {
    outDir: "dist",
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
})