import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: '/index.html'
    },
    ssr: {
      noExternal: ['vue']
    }
  }
}
