import { useState, FormEvent } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Dots from '@components/ui/Loaders/Dots';
import s from './CheckoutForm.module.css';

const CheckoutForm = () => {
  const [didPayElementLoaded, setDidPayElementLoaded] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isError, setIsError] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) {
      setIsError(true);
    }
  };

  const onChange = (e: any) => {
    setIsError(false);
    setIsFormComplete(e.complete);
  };

  return (
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
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      )}

      {isError && (
        <span style={{ color: 'red', fontSize: '0.8em', textAlign: 'center' }}>
          Please fullfill all the required fields
        </span>
      )}
    </form>
  );
};

export default CheckoutForm;
