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

    expect(screen.getByLabelText('main navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Apparel' })).toHaveAttribute(
      'href',
      '/products'
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByAltText('go to the shopping cart')).toBeInTheDocument();
    expect(screen.getByLabelText('login')).toBeInTheDocument();
  });
});
