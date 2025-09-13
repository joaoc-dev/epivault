import { z } from 'zod';

export const helloQuerySchema = z.object({
  name: z.string(),
});

export type HelloQuery = z.infer<typeof helloQuerySchema>;
