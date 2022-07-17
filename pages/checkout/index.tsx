import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '@components/checkoutForm';
import { useCartStore } from 'store/cart';

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('');

  const { products, quantity, total } = useCartStore((state) => state);

  useEffect(() => {
    fetch('/api/create_intent')
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secret));
  }, []);

  return (
    <>
      {clientSecret ? (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret: clientSecret,
              appearance: { theme: 'stripe', labels: 'floating' },
            }}
          >
            <CheckoutForm />
          </Elements>
          <div>
            Cart list ({quantity})
            {products?.map((p) => (
              <li key={p.title} style={{ margin: '10px 0px' }}>
                {p.title} x{p.count} = ${(p.count * p.price).toFixed(2)}
              </li>
            ))}
            Total: ${total}
          </div>
        </div>
      ) : (
        <div>...</div>
      )}
    </>
  );
}
