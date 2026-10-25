import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Rutas relativas, igual que "homepage": "." en Create React App
  base: './',
  server: {
    port: 3000,
  },
  build: {
    // Netlify y gh-pages publican la carpeta build/
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
