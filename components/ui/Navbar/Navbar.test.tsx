import { screen, render } from '@testing-library/react';
import Navbar from './Navbar';
import { QueryClientProvider, QueryClient } from 'react-query';

describe('Navbar', () => {
  const queryClient = new QueryClient();

  it('renders the navbar element', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Navbar />
      </QueryClientProvider>
    );

    screen.getByLabelText('main navigation');
    expect(screen.getByRole('link', { name: 'Apparel' })).toHaveAttribute(
      'href',
      '/products'
    );
    screen.getByRole('textbox');
    screen.getByAltText('go to the shopping cart');
    screen.getByLabelText('login');
  });
});
