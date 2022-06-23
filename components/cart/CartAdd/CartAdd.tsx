import React from 'react';
import s from './CartAdd.module.css';

const CartAdd = () => {
  return (
    <button className={`button is-dark ${s['product-cart_button']}`}>
      Add to cart
    </button>
  );
};

export default CartAdd;
