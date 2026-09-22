import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 8097,
    open: true,
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
});
