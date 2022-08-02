import { render, screen } from '@testing-library/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

describe('CheckoutForm', () => {
  it('shows loading dots when the stripe Elements componente is not initializated yet', () => {
    render(
      <Elements stripe={null}>
        <CheckoutForm />
      </Elements>
    );

    expect(screen.getByTestId('loading dots')).toBeInTheDocument();
  });

  // TODO mock conversation https://github.com/stripe/react-stripe-js/issues/59
});
