import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My X App</title>
        <meta name="description" content="Just my X App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Wololo</p>
      </main>
    </div>
  );
};

export default Home;
