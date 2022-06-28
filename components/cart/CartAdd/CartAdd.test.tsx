import CartAdd from './CartAdd';
import { render } from '@testing-library/react';

describe('CartAdd', () => {
  it('renders the cart button', () => {
    const { getByRole } = render(<CartAdd />);
    getByRole('button');
  });
});
