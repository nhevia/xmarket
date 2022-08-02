import { render, screen } from '@testing-library/react';
import ProductsGrid from './ProductsGrid';
import products from '__mocks__/products.json';

import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));

describe('ProductGrid', () => {
  it('finds 7 products when searching for "shirt" in the URL', () => {
    mockRouter.setCurrentUrl('/products?search=shirt');

    render(<ProductsGrid productsData={products} />);

    expect(screen.getAllByLabelText('product').length).toBe(7);
  });

  it('returns 12 products when the URL search gives no results', () => {
    mockRouter.setCurrentUrl('/products?search=somethingthatdoesntexistsatall');

    render(<ProductsGrid productsData={products} />);

    expect(
      screen.getByText('Nothing found, you might also like ...')
    ).toBeInTheDocument();
    expect(screen.getAllByLabelText('product').length).toBe(12);
  });

  it('returns 9 products when the URL search gives no results and page is 2', () => {
    mockRouter.setCurrentUrl(
      '/products?search=somethingthatdoesntexistsatall&page=2'
    );

    render(<ProductsGrid productsData={products} />);

    expect(
      screen.getByText('Nothing found, you might also like ...')
    ).toBeInTheDocument();
    expect(screen.getAllByLabelText('product').length).toBe(9);
  });
});
