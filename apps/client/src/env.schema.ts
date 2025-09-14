import { z } from 'zod';

export const clientEnvSchema = {
  VITE_EXAMPLE_ENV_VAR: z.string().min(1),
};

export type ClientEnv = typeof clientEnvSchema;
