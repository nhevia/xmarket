import { render, screen } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from './Layout';

describe('Layout', () => {
  const queryClient = new QueryClient();
  it('renders the layout', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Layout>
          <div>Hello</div>
        </Layout>
      </QueryClientProvider>
    );

    expect(screen.getByTestId('layout-main')).toBeInTheDocument();
  });
});
