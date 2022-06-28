import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    const { getByText } = render(<Footer />);
    getByText('XMarket', { exact: false });
  });
});
