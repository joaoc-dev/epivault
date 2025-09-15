import type { AppType } from '@shared/api-types';
import { hc } from 'hono/client';
import { useEffect, useState } from 'react';
import { env } from './env';
import './App.css';

const client = hc<AppType>('http://localhost:3000/');

async function getHello() {
  const res = await client.api.hello.$get({
    query: {
      name: 'John Doe',
    },
  });
  return await res.json();
}

function App() {
  const [hello, setHello] = useState<string>('');

  useEffect(() => {
    const hello = async () => {
      const hello = await getHello();
      setHello(hello.message);
    };
    hello();
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <p>{hello}</p>
      <p>
        Env:
        {env.VITE_EXAMPLE_ENV_VAR}
      </p>
    </>
  );
}

export default App;
