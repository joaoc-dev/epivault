import concurrently from 'concurrently';

concurrently([
  {
    name: 'server',
    command: 'pnpm run dev',
    cwd: 'apps/server',
    prefixColor: 'cyan',
  },
  {
    name: 'client',
    command: 'pnpm run dev',
    cwd: 'apps/client',
    prefixColor: 'green',
  },
]);
