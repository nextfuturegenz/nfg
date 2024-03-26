import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build : {
    rollupOptions : {
      external : ['assets/js/theme.js','vendors/fontawesome/all.min.js','vendors/@popperjs/popper.min.js','vendors/bootstrap/bootstrap.min.js','vendors/is/is.min.js']
    }
  }
})
