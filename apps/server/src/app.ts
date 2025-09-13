import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('/api/*', cors());
app.get('/api', (c) => c.text('Hello Hono!'));

const helloRoute = app.get(
  '/api/hello',
  zValidator('query', z.object({ name: z.string() })),
  (c) => c.json({ message: `Hello ${c.req.valid('query').name}!` })
);

export type AppType = typeof helloRoute;

export default app;
