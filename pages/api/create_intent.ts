import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2020-08-27',
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'gbp',
  });

  res.status(200).json(paymentIntent);
}

export default handler;
