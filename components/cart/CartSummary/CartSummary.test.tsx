import { render } from '@testing-library/react';
import CartProducts from './CartSummary';

describe('CartProducts', () => {
  it('renders', () => {
    render(<CartProducts />);
  });
});
