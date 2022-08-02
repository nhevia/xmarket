import { render, screen } from '@testing-library/react';
import ProductSearch from './ProductSearch';

describe('ProductSearch', () => {
  it('renders', () => {
    render(<ProductSearch />);

    expect(
      screen.getByPlaceholderText('Search for products')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('search products'));
  });
});
