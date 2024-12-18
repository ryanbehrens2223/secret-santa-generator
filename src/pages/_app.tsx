// pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Secret Santa App</title>
        <meta name="description" content="A Secret Santa generator application" />
        <link rel="icon" href="/santa-claus.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;