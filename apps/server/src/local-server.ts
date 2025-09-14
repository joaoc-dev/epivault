import { serve } from '@hono/node-server';
import 'dotenv/config';
// dotenv must be imported first
// eslint-disable-next-line perfectionist/sort-imports
import app from './app';

serve(app, (info) => {
  console.warn(`Server is running on http://localhost:${info.port}`);
});
