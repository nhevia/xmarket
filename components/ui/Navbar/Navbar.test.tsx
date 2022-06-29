import Navbar from './Navbar';
import { screen, render } from '@testing-library/react';

describe('Navbar', () => {
  beforeAll(() => {
    render(<Navbar />);
  });

  it('renders the navbar element', () => {
    screen.getByLabelText('main navigation');
    expect(screen.getByRole('link', { name: 'Apparel' })).toHaveAttribute(
      'href',
      '/products'
    );
    expect(screen.getByRole('link', { name: 'Show all' })).toHaveAttribute(
      'href',
      '/show-all'
    );
    screen.getByRole('textbox');
    screen.getByAltText('go to the shopping cart');
    screen.getByLabelText('login');
  });
});