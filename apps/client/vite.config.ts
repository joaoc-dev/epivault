import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEnv } from '@t3-oss/env-core';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { clientEnvSchema } from './src/env.schema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  // Load env for this mode and validate against shared T3 schema at config time
  const loaded = loadEnv(mode, process.cwd(), 'VITE_');
  createEnv({
    clientPrefix: 'VITE_',
    client: clientEnvSchema,
    // Strict mapping to ensure all declared keys are provided by loaded env
    runtimeEnvStrict: loaded,
    emptyStringAsUndefined: true,
  });

  return {
    server: {
      cors: false, // disable Vite's built-in CORS setting
    },
    resolve: {
      alias: {
        '@shared': resolve(__dirname, '../../shared'),
      },
    },
    plugins: [react()],
  };
});
