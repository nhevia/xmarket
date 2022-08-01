import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from './Layout';

describe('Layout', () => {
  const queryClient = new QueryClient();
  it('renders the layout', () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Layout>
          <div>Hello</div>
        </Layout>
      </QueryClientProvider>
    );

    getByTestId('layout-main');
  });
});
