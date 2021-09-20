import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`;
          }
        }
      ]
    })
  ],
  // 公共样式
  css: {
    // 🔥此处添加全局scss🔥
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/common.scss";'
      }
    }
  },
  // 生产环境路径，类似webpack的assetsPath
  base: './',
  build: {
    // 打包后目录,默认dist
    outDir: 'dist',
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: []
  },
  server: {
    // host: "0.0.0.0",
    strictPort: true,
    port: 3000,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    proxy: {
      '/debug': {
        target: 'https://api.ycsnews.com/debug/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, '')
      },
      '/dev': {
        target: 'https://api.ycsnews.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, '')
      },
      '/api': {
        target: 'https://api.ycsnews.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // with RegEx
      '^/fallback/.*': {
        target: 'https://api.xxxx.com/fallback',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      }
    }
  }
})
