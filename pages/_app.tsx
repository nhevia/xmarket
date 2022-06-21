import '../styles/globals.css';
import '../styles/bulma-variables.scss';
import '../styles/styles.css';
import type { AppProps } from 'next/app';
import Layout from '@components/common/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
