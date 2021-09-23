import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
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
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  // 生产环境路径，类似webpack的assetsPath
  base: './', // 设置打包路径
  build: {
    // 打包后目录,默认dist
    outDir: 'dist'
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: []
  },
  server: {
    // host: "0.0.0.0",
    strictPort: true,
    port: 3000, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    https: false, // 是否开启 https
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
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
