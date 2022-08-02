import { render, screen } from '@testing-library/react';
import { useCartStore } from 'store/cart';
import CartProducts from './CartProducts';
import products from '__mocks__/productsCart.json';

describe('CartProducts', () => {
  const initialStoreState = useCartStore.getState();

  beforeEach(() => {
    useCartStore.setState(initialStoreState, true);
  });

  it('shows the order summary with no products', () => {
    render(<CartProducts />);

    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('(0 items)')).toBeInTheDocument();
    expect(screen.getByText('TOTAL $0.00')).toBeInTheDocument();
  });

  it('shows the order summary with 2 product in it', () => {
    useCartStore.setState((state) => ({
      ...state,
      products: products,
      quantity: products.length,
      total: products.reduce((acc, p) => acc + p.price, 0),
    }));
    render(<CartProducts />);

    expect(screen.getAllByLabelText('product summary').length).toEqual(2);
    expect(screen.getByText('(2 items)')).toBeInTheDocument();
    expect(screen.getByText('TOTAL $249.99')).toBeInTheDocument();
  });
});
