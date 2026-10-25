import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Rutas absolutas desde la raíz del dominio: con dos páginas (/ y /curso/) las relativas
  // apuntarían a /curso/assets/. El sitio tiene que servirse en la raíz (aadep.com.ar).
  base: '/',
  server: {
    port: 3000,
  },
  build: {
    // Netlify publica la carpeta build/
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        curso: resolve(import.meta.dirname, 'curso/index.html'),
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
