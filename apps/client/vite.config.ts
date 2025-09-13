import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    cors: false, // disable Vite's built-in CORS setting
  },
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '../../shared'),
    },
  },
  plugins: [react()],
});
