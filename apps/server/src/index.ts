import { handle } from 'hono/aws-lambda';
import app from './app';

app.get('/lambda', c => c.text('Hello Hono + Lambda!'));

export const handler = handle(app);
