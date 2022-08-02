import { screen, render } from '@testing-library/react';
import ProductCard from './ProductCard';
import products from '__mocks__/products.json';

describe('ProductCard', () => {
  it('shows the product card information', () => {
    render(<ProductCard product={products[0]} />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/products/1?p=Women%27s-Middle-English---BROWN'
    );

    expect(
      screen.getByAltText("Women's Middle English - BROWN")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('Rating of this product is 3.8 out of 5.')
    ).toBeInTheDocument();

    expect(screen.getByText('(120)')).toBeInTheDocument();

    expect(screen.getByText('$49.99')).toBeInTheDocument();
  });
});
