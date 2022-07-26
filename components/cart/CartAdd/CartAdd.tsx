import React, { useState } from 'react';
import { useCartStore } from 'store/cart';
import { Dots } from 'components/ui/Loaders';
import Drawer from 'components/ui/Drawer';
import { ProductAdded } from 'components/products';
import { ProductCart } from 'types/app';
import s from './CartAdd.module.css';

interface AppProps {
  product: ProductCart;
  style?: { [key: string]: string | number };
}

const CartAdd = ({ product, style }: AppProps) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const addProduct = useCartStore((state) => state.addProduct);

  const addToCart = () => {
    addProduct(product);
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
      setIsVisible(true);
    }, 300);
  };

  return (
    <>
      {isVisible && (
        <Drawer position="top" isBlurred={false} setVisible={setIsVisible}>
          <ProductAdded product={product} setVisible={setIsVisible} />
        </Drawer>
      )}

      <button
        onClick={addToCart}
        className={s['product_cart-button']}
        style={style}
        disabled={isButtonLoading}
      >
        {isButtonLoading ? <Dots /> : 'Add to cart'}
      </button>
    </>
  );
};

export default CartAdd;
