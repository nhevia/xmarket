import Rating from './Rating';
import { render } from '@testing-library/react';

describe('Rating', () => {
  it('shows the correct rate and count', () => {
    const { getByLabelText, getByText } = render(
      <Rating rating={{ rate: 4.6, count: 200 }} />
    );

    const rate = getByLabelText('Rating of this product is 4.6 out of 5.');
    expect(rate).toBeInTheDocument();

    const count = getByText('(200)');
    expect(count).toBeInTheDocument();
  });
});
