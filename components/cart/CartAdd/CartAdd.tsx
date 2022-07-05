import React, { useState } from 'react';
import { useCartStore } from 'store/cart';
import { Product } from 'types/app';
import s from './CartAdd.module.css';

interface AppProps {
  product: Product;
  style?: { [key: string]: string | number };
}

const CartAdd = ({ product, style }: AppProps) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const addProduct = useCartStore((state) => state.addProduct);

  const addToCart = () => {
    addProduct(product);
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 100);
  };

  return (
    <button
      onClick={addToCart}
      className={`button is-dark ${s['product_cart-button']}`}
      style={style}
    >
      {isButtonLoading ? '...' : 'Add to cart'}
    </button>
  );
};

export default CartAdd;
