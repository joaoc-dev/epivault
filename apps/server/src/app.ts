import { zValidator } from '@hono/zod-validator';
import { helloQuerySchema } from '@shared/schemas';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { env } from './env';

console.warn(env.SERVER_EXAMPLE_ENV_VAR);
// For the RPC to infer routes correctly, all included methods must be chained,
// and the endpoint or app type must be inferred from a declared variable.
export const app = new Hono()
  .use('/api/*', cors())
  .get('/api', c => c.text('Hello Hono!'))
  .get('/api/hello', zValidator('query', helloQuerySchema), c =>
    c.json({ message: `Hello ${c.req.valid('query').name}!` }));

export type AppType = typeof app;

export default app;
