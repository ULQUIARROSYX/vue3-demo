import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    open: true, // 是否主动唤醒浏览器
    port: 8080, // 占用端口 
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',  // 后台接口
        changeOrigin: true,               // 是否允许跨域
        rewrite: (path: any) => path.replace(/^\/api/, ''),
      },
    }
  }
})
