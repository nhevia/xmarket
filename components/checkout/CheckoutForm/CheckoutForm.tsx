import { useState, FormEvent } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import s from './CheckoutForm.module.css';

const CheckoutForm = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isError, setIsError] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isFormComplete) {
      console.log('form complete and validated');
    } else {
      setIsError(true);
      console.log('form not completed');
    }
  };

  const onChange = (e: any) => {
    setIsError(false);
    setIsFormComplete(e.complete);
  };

  return (
    <form className={s.root} onSubmit={handleSubmit}>
      <PaymentElement onChange={onChange} />

      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {isError && (
        <span style={{ color: 'red', fontSize: '0.8em', textAlign: 'center' }}>
          Please fullfill all the required fields
        </span>
      )}
    </form>
  );
};

export default CheckoutForm;
