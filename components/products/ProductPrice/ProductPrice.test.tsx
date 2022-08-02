import { render, screen } from '@testing-library/react';
import ProductPrice from './ProductPrice';

describe('ProductPrice', () => {
  it('shows the product price without discount', () => {
    render(<ProductPrice price={40} discount={false} />);

    expect(screen.getByText('$40.00')).toBeInTheDocument();
  });

  it('shows the product price with discount and savings', () => {
    render(<ProductPrice price={40} discount={true} />);

    expect(screen.getByText('$36.00')).toBeInTheDocument();
    expect(screen.getByText('You save $4.00')).toBeInTheDocument();
  });
});
