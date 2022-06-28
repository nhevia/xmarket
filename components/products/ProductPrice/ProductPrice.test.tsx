import { render } from '@testing-library/react';
import ProductPrice from './ProductPrice';

describe('ProductPrice', () => {
  it('shows the product price without discount', () => {
    const { getByText } = render(<ProductPrice price={40} discount={false} />);

    getByText('$40.00');
  });

  it('shows the product price with discount and savings', () => {
    const { getByText } = render(<ProductPrice price={40} discount={true} />);

    getByText('$36.00');
    getByText('You save $4.00');
  });
});
