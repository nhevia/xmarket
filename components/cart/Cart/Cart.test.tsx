import { render } from '@testing-library/react';
import Cart from './Cart';

describe('Cart', () => {
  it('renders', () => {
    const setVisible = jest.fn();
    render(<Cart setVisible={setVisible} />);
  });
});
