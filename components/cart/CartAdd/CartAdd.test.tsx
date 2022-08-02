import { render, screen } from '@testing-library/react';
import CartAdd from './CartAdd';

describe('CartAdd', () => {
  it('renders the cart button', () => {
    render(<CartAdd />);
    expect(screen.getByRole('button')).toBeInTheDocument()
  });
});
