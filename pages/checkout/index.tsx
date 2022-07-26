import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Split from 'components/common/layout/Split';
import CheckoutForm from 'components/checkout/CheckoutForm';
const CartSummary = dynamic(() => import('components/cart/CartSummary'), {
  ssr: false,
});

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
      <Head>
        <title>Complete your order</title>
      </Head>
      <Split>
        <CartSummary />

        {clientSecret ? (
          <div>
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: clientSecret,
                appearance: { theme: 'stripe', labels: 'floating' },
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
