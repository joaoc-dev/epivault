import { serve } from '@hono/node-server';
import app from './app';

serve(app, (info) => {
  console.warn(`Server is running on http://localhost:${info.port}`);
});
