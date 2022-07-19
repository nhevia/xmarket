import React from 'react';
import { useCartStore } from 'store/cart';
import s from './CartProducts.module.css';

const CartProducts = () => {
  const { products, quantity, total } = useCartStore((state) => state);

  return (
    <div className={s.root}>
      <p className={s.title}>
        Order Summary
        <span className={s.description}> ({quantity} items)</span>
      </p>
      <p className={s.total}>TOTAL ${total.toFixed(2)}</p>
      {products?.map((p) => (
        <div key={p.title} className={s.product}>
          <img src={p.thumbnail} alt={p.title} />
          <div className={s['product-description']}>
            <p className={s.name}>
              {p.title} <span className={s.description}>({p.count})</span>
            </p>
            <p className={s.price}>${(p.count * p.price).toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
