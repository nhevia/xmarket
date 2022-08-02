import { render, screen } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import ProductsRelated from './ProductsRelated';
import products from '__mocks__/products.json';

describe('ProductsRelated', () => {
  const queryClient = new QueryClient();

  queryClient.setQueryData('products', products);

  it('renders products of the same category but not the one that is being show already in the page', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProductsRelated category="skirts" title="Linen full circle skirt" />
      </QueryClientProvider>
    );

    expect(
      screen.queryByAltText('Linen full circle skirt')
    ).not.toBeInTheDocument();
    expect(screen.getByAltText('Flared skirt with straps')).toBeInTheDocument();
  });
});
