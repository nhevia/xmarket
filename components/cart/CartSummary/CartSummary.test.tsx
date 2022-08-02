import { render, screen } from '@testing-library/react';
import { useCartStore } from 'store/cart';
import CartSummary from './CartSummary';
import products from '__mocks__/productsCart.json';

describe('CartSummary', () => {
  const initialStoreState = useCartStore.getState();

  beforeEach(() => {
    useCartStore.setState(initialStoreState, true);
  });

  it('shows the order summary with no products', () => {
    render(<CartSummary />);

    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('(0 items)')).toBeInTheDocument();
    expect(screen.getByText('TOTAL $0.00')).toBeInTheDocument();
    expect(screen.getByText('Back to store')).toBeInTheDocument();
  });

  it('shows the order summary with 2 product in it', () => {
    useCartStore.setState((state) => ({
      ...state,
      products: products,
      quantity: products.length,
      total: products.reduce((acc, p) => acc + p.price, 0),
    }));
    render(<CartSummary />);

    expect(screen.getAllByLabelText('product summary').length).toEqual(2);
    expect(screen.getByText('(2 items)')).toBeInTheDocument();
    expect(screen.getByText('TOTAL $249.99')).toBeInTheDocument();
  });
});
