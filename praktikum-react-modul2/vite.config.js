import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        mmain: "index.html",
        helloWorld: "hello-world.html",
      },
    },
  },
});
