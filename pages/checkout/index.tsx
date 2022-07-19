import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Split from '@components/common/layout/Split';
import CheckoutForm from '@components/checkout/CheckoutForm';
import CartProducts from '@components/cart/CartSummary';

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/api/create_intent')
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secret));
  }, []);

  return (
    <>
      <Split>
        <CartProducts />

        {clientSecret ? (
          <div>
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: clientSecret,
                appearance: { theme: 'stripe' },
              }}
            >
              <CheckoutForm />
            </Elements>
          </div>
        ) : (
          <div></div>
        )}
      </Split>
    </>
  );
}
