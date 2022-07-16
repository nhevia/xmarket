import React, { useState } from 'react';
import { useCartStore } from 'store/cart';
import { ProductCart } from 'types/app';
import { Dots } from '@components/ui/Loaders';
import s from './CartAdd.module.css';

interface AppProps {
  product: ProductCart;
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
    }, 300);
  };

  return (
    <button
      onClick={addToCart}
      className={s['product_cart-button']}
      style={style}
      disabled={isButtonLoading}
    >
      {isButtonLoading ? <Dots /> : 'Add to cart'}
    </button>
  );
};

export default CartAdd;
