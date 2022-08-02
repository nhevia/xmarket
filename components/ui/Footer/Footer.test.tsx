import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    render(<Footer />);

    expect(screen.getByText('XMarket', { exact: false })).toBeInTheDocument();
  });
});
