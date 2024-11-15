import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'jsx': 'text/javascript'
    },
    hmr: true,
  },
  build: {
    outDir: 'dist',  // Directorio de salida para la build de producción
  }
});


