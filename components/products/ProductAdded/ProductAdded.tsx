import Link from 'next/link';
import React from 'react';
import { useCartStore } from 'store/cart';
import { ProductCart } from 'types/app';
import s from './ProductAdded.module.css';

interface AppProps {
  product: ProductCart;
  setVisible: (setIsVisible: boolean) => void;
}

const ProductAdded = ({ product, setVisible }: AppProps) => {
  const { total } = useCartStore((state) => state);

  return (
    <div className={s.root}>
      <div className={s.image}>
        <div className={s['column-title']}>Just added</div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={s.title}>
        <div className={s['column-title']}>Item</div>

        <div className={s.summary}>
          <p className={s.big}>{product.title}</p>
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
      <div className={s.price}>
        <div className={s['column-title']}>Item Price</div>
        <span>${product.price}</span>
      </div>
      <div className={s.subtotal}>
        <div className={s['column-title']} style={{ marginRight: 0 }}>
          Cart total
        </div>
        <span>${total.toFixed(2).replace('-0', '0')}</span>
      </div>

      <div className={s.actions}>
        <button className={s.keep} onClick={() => setVisible(false)}>
          Keep shopping
        </button>
        <Link href="/checkout">
          <button className={s.cart}>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductAdded;
