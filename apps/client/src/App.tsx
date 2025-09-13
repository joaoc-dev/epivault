import './App.css';
import { hc } from 'hono/client';
import type { AppType } from '@shared/api-types';
import { useEffect, useState } from 'react';

const client = hc<AppType>('http://localhost:3000/');

const getHello = async () => {
  const res = await client.api.hello.$get({
    query: {
      name: 'John Doe',
    },
  });
  return await res.json();
};

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
    </>
  );
}

export default App;
