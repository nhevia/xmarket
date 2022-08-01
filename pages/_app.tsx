import { useState } from 'react';
import { useRouter } from 'next/router';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from 'components/common/layout/Layout';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Hydrate state={pageProps.dehydratedState}>
          <Component key={router.asPath} {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
