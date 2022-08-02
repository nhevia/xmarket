import { render, screen } from '@testing-library/react';
import Dots from './Dots';

describe('Dots', () => {
  it('renders', () => {
    render(<Dots />);

    expect(screen.getByTestId('loading dots')).toBeInTheDocument();
  });
});
