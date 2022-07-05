import React from 'react';
import Sider from '@components/ui/Sider';
import { useCartStore } from 'store/cart';
import { ProductCart } from 'types/app';
import s from './Cart.module.css';

interface AppProps {
  setVisible: (visible: boolean) => void;
}

const Cart = ({ setVisible }: AppProps) => {
  const products = useCartStore((state) => state.products);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    <Sider setVisible={setVisible}>
      <div className={s.products}>
        {products?.map((product: ProductCart) => (
          <div key={product.cartId} className={s.product}>
            <p>{product.title}</p>
            <button onClick={() => removeProduct(product.cartId)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={s.footer}>
        <div className={s.labels}>
          <div className={s.label}>
            <p>subtotal </p>
            <p className={s.bold}>
              ${products.reduce((prev, curr) => prev + curr.price, 0)}
            </p>
          </div>
          <div className={s.label}>
            <p>shipping </p>
            <p className={s.bold}>FREE</p>
          </div>
          <div className={s.label}>
            <p>total </p>
            <p className={s.bold}>
              ${products.reduce((prev, curr) => prev + curr.price, 0)}
            </p>
          </div>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </Sider>
  );
};

export default Cart;
