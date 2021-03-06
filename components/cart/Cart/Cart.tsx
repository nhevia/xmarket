import React from 'react';
import Link from 'next/link';
import Drawer from 'components/ui/Drawer';
import { useCartStore } from 'store/cart';
import { ProductCart } from 'types/app';
import s from './Cart.module.css';

interface AppProps {
  setVisible: (visible: boolean) => void;
}

const Cart = ({ setVisible }: AppProps) => {
  const { products, total, addProduct, subtractProduct } = useCartStore(
    (state) => state
  );

  return (
    <Drawer setVisible={setVisible} position="right">
      <div className={s.root}>
        <p className={s.close} onClick={() => setVisible(false)}>
          {'Back to store'}
        </p>
        {products?.map((product: ProductCart) => (
          <div
            key={`${product.id}_${product.color}_${product.size}`}
            className={s.product}
          >
            <div
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={product.thumbnail} alt={product.title} />
              <div className={s.summary}>
                <p className={s.name}>{product.title}</p>
                <div className={s.options}>
                  {product.color && (
                    <div
                      className={s.colorc}
                      style={{
                        backgroundImage: `linear-gradient(${product.color},${product.color})`,
                      }}
                    >
                      <p className={s.color}>{product.color}</p>
                    </div>
                  )}
                  {product.size && (
                    <div className={s.sizec}>
                      <p className={s.size}>{product.size}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={s.actions}>
              <p className={s['quantity-text']}>x{product.count}</p>
              <div className={s['quantity-buttons']}>
                <button onClick={() => subtractProduct(product)}>-</button>
                <button onClick={() => addProduct(product)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.footer}>
        <div className={s.labels}>
          <div className={s.label}>
            <p>subtotal </p>
            <p className={s.bold}>${total.toFixed(2).replace('-0', '0')}</p>
          </div>
          <div className={s.label}>
            <p>shipping </p>
            <p className={s.bold}>FREE</p>
          </div>
          <div className={s.label}>
            <p>total </p>
            <p className={s.bold}>${total.toFixed(2).replace('-0', '0')}</p>
          </div>
        </div>
        <div className={s.actions}>
          <Link href="/checkout">
            <button
              onClick={() => setVisible(false)}
              className={s.checkout}
              disabled={total === 0}
            >
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default Cart;
