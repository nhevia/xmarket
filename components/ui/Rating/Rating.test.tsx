import Rating from './Rating';
import { render } from '@testing-library/react';

describe('Rating', () => {
  it('shows the rating stars with a rating of 4.6', () => {
    const { getByLabelText } = render(<Rating rating={4.6} />);
    getByLabelText('Rating of this product is 4.6 out of 5.');
  });
});
