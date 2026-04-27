/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const host: string = 'localhost';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Wedding_Site/',
  server: {
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host,
      port: 5174,
    },
  },
  test: {
    dir: './__tests__',
    coverage: {
      enabled: true
    }
  }
});
