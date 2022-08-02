import { render, screen } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
  it('shows rating information', () => {
    render(<Rating rating={{ rate: 4.6, count: 200 }} />);

    expect(
      screen.getByLabelText('Rating of this product is 4.6 out of 5.')
    ).toBeInTheDocument();
    expect(screen.getByText('(200)')).toBeInTheDocument();
  });
});
