import React, { useEffect, useState, useRef } from 'react';
import { useCartStore } from 'store/cart';
import { Dots } from 'components/ui/Loaders';
import Drawer from 'components/ui/Drawer';
import { ProductAdded } from 'components/products';
import { ProductCart } from 'types/app';
import s from './CartAdd.module.css';

interface AppProps {
  product: ProductCart;
  style?: { [key: string]: string | number };
  disableHandle?: boolean;
}

const CartAdd = ({ product, style, disableHandle }: AppProps) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showError, setShowError] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const addProduct = useCartStore((state) => state.addProduct);

  useEffect(() => {
    if (showError) {
      if (ref.current) {
        ref.current.classList.add(s.error);
      }
    }

    if (!showError) {
      if (ref.current) {
        ref.current.classList.remove(s.error);
      }
    }
  }, [showError]);

  const addToCart = () => {
    if (disableHandle) {
      setShowError(true);
      return;
    }

    addProduct(product);
    setIsButtonLoading(true);
    setShowError(false);
    setTimeout(() => {
      setIsButtonLoading(false);
      setIsVisible(true);
    }, 300);
  };

  return (
    <>
      {isVisible && (
        <Drawer
          position="top"
          isBlurred={false}
          setVisible={setIsVisible}
          disableScrollbar={false}
        >
          <ProductAdded product={product} setVisible={setIsVisible} />
        </Drawer>
      )}
      <div ref={ref}>
        <button
          onClick={addToCart}
          className={s.root}
          style={style}
          disabled={isButtonLoading}
        >
          {isButtonLoading ? <Dots /> : 'Add to cart'}
        </button>
      </div>
    </>
  );
};

export default CartAdd;
