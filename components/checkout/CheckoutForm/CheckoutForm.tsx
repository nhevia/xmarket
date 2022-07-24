import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useCartStore } from 'store/cart';
import Dots from '@components/ui/Loaders/Dots';
import { Modal } from '@components/ui';
import s from './CheckoutForm.module.css';

const CheckoutForm = () => {
  const [didPayElementLoaded, setDidPayElementLoaded] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { clearCart } = useCartStore((state) => state);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) {
      return setIsError(true);
    }

    setShowModal(true);
  };

  const onChange = (e: any) => {
    setIsError(false);
    setIsFormComplete(e.complete);
  };

  return (
    <>
      {showModal && (
        <Modal
          setVisible={setShowModal}
          content={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100%',
              }}
            >
              <p style={{ textAlign: 'center', fontSize: '1.5em' }}>
                Order completed <span className={s.confetti}>🎉</span>
              </p>
              <span style={{ fontStyle: 'italic' }}>
                Estimated arrival:{' '}
                <p className={s.arrival}>
                  {new Date(
                    Date.now() + 3600 * 1000 * 24 * 7
                  ).toLocaleDateString()}
                </p>
              </span>
            </div>
          }
          onCloseHandler={() => {
            clearCart();
            router.push('/');
          }}
          footer={
            <button
              className={s.backbutton}
              onClick={() => {
                clearCart();
                router.push('/');
              }}
            >
              Back to store
            </button>
          }
        />
      )}
      <form className={s.root} onSubmit={handleSubmit}>
        {!didPayElementLoaded && (
          <div
            style={{
              position: 'relative',
              minHeight: '300px',
              minWidth: '400px',
            }}
          >
            <div style={{ position: 'absolute', top: '50%', width: '100%' }}>
              <Dots color={'rgb(0, 116, 212)'} />
            </div>
          </div>
        )}

        <PaymentElement
          onChange={onChange}
          onReady={() => setDidPayElementLoaded(true)}
        />

        {didPayElementLoaded && (
          <>
            <div className={s.field}>
              <label className={s.label}>Shipping information</label>
              <input
                className={s.input}
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                className={s.input}
                placeholder="Full name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                className={s.input}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <button type="submit" disabled={!stripe || !elements}>
              Pay
            </button>
          </>
        )}

        {isError && (
          <span
            style={{ color: 'red', fontSize: '0.8em', textAlign: 'center' }}
          >
            Please fullfill all the required fields
          </span>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
