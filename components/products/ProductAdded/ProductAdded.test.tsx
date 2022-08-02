import { fireEvent, render, screen } from '@testing-library/react';
import singletonRouter from 'next/router';
import { useCartStore } from 'store/cart';
import ProductAdded from './ProductAdded';
import productsCart from '__mocks__/productsCart.json';

jest.mock('next/router', () => require('next-router-mock'));
// This is needed for mocking 'next/link':
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('ProductAdded', () => {
  const initialStoreState = useCartStore.getState();
  let mockVisible: () => void;

  beforeEach(() => {
    useCartStore.setState(initialStoreState);
    mockVisible = jest.fn();
  });

  it('adds a product to the cart and show information of said product', () => {
    useCartStore.setState((state) => ({
      ...state,
      total: productsCart[0].price,
    }));

    render(<ProductAdded product={productsCart[0]} setVisible={mockVisible} />);

    // columns
    expect(screen.getByText('Just added')).toBeInTheDocument();
    expect(screen.getByText('Item')).toBeInTheDocument();
    expect(screen.getByText('Item Price')).toBeInTheDocument();
    expect(screen.getByText('Cart total')).toBeInTheDocument();
    // data
    expect(
      screen.getByText("Women's Middle English - BROWN")
    ).toBeInTheDocument();
    expect(screen.getByText('black')).toBeInTheDocument();
    expect(screen.getByText('36')).toBeInTheDocument();
    expect(screen.getAllByText('$49.99').length).toEqual(2);
  });

  it('presses the "Keep shopping" button', () => {
    render(<ProductAdded product={productsCart[0]} setVisible={mockVisible} />);

    fireEvent.click(screen.getByRole('button', { name: 'Keep shopping' }));

    expect(mockVisible).toHaveBeenCalledTimes(1);
  });

  it('presses the "Checkout" button', () => {
    render(<ProductAdded product={productsCart[0]} setVisible={mockVisible} />);

    fireEvent.click(screen.getByRole('button', { name: 'Checkout' }));

    expect(singletonRouter).toMatchObject({ asPath: '/checkout' });
  });
});
