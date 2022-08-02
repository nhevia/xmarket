import '__mocks__/matchMedia.mock';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import ProductsCategories from './ProductsCategories';

describe('ProductCategories', () => {
  let queryClient: QueryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });

  it('shows all the categories', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProductsCategories />
      </QueryClientProvider>
    );

    expect(screen.getByText('All Categories')).toBeInTheDocument();
    expect(screen.getByText('shoes')).toBeInTheDocument();
    expect(screen.getByText('shirts')).toBeInTheDocument();
    expect(screen.getByText('skirts')).toBeInTheDocument();
    expect(screen.getByText('accesories')).toBeInTheDocument();
    expect(screen.getByText('sweatshirts')).toBeInTheDocument();
    expect(screen.getByText('jackets')).toBeInTheDocument();
  });
});
