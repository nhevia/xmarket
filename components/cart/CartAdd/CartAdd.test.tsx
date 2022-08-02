import { fireEvent, render, screen } from '@testing-library/react';
import CartAdd from './CartAdd';
import products from '__mocks__/productsCart.json';

describe('CartAdd', () => {
  it('renders the button to add a product to the cart', () => {
    render(<CartAdd product={products[0]} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('adds a product without showing a feedback error', () => {
    render(<CartAdd product={products[0]} />);

    const addButton = screen.getByRole('button');

    expect(screen.queryByLabelText('error')).not.toBeInTheDocument();
    fireEvent.click(addButton);
    expect(screen.queryByLabelText('error')).not.toBeInTheDocument();
  });

  it('shows a feedback error when the required options are not selected', () => {
    render(<CartAdd product={products[0]} disableHandle={true} />);

    const addButton = screen.getByRole('button');

    expect(screen.queryByLabelText('error')).not.toBeInTheDocument();
    fireEvent.click(addButton);
    expect(screen.getByLabelText('error')).toBeInTheDocument();
  });
});
