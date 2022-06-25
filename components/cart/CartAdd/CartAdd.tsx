import React from 'react';
import s from './CartAdd.module.css';

interface AppProps {
  style?: { [key: string]: string | number };
}

const CartAdd = ({ style }: AppProps) => {
  return (
    <button
      className={`button is-dark ${s['product-cart_button']}`}
      style={style}
    >
      Add to cart
    </button>
  );
};

export default CartAdd;
