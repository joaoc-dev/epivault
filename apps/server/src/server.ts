import app from './app';
import { serve } from '@hono/node-server';

serve(app, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
