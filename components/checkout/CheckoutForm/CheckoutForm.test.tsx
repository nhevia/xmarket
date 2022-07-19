import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

describe('CheckoutForm', () => {
  it('renders the component with a valid Elements provider and finds the Pay button', () => {
    const stripePromise = loadStripe(
      `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
    );

    render(
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    );

    screen.getByText('Pay');
  });
});
