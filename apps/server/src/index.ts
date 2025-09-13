import app from './app';
import { handle } from 'hono/aws-lambda';

app.get('/lambda', (c) => c.text('Hello Hono + Lambda!'));

export const handler = handle(app);
