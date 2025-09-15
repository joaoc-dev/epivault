// scripts/check-env.ts
import { env } from '../src/env'; // wherever your env.ts is

// if env parsing fails, process will exit with error
console.warn(env.SERVER_EXAMPLE_ENV_VAR);
console.warn('Environment variables validated!');
