import React from 'react';
import s from './ProductPrice.module.css';

interface AppProps {
  price: number;
  discount: boolean;
}

const ProductPrice = ({ price, discount }: AppProps) => {
  return (
    <div className={s['product-price-container']}>
      <p className={s['product-price']}>
        ${discount ? (price * 0.9).toFixed(2) : price.toFixed(2)}
      </p>
      {discount && (
        <>
          <p className={s['product-price-discount-original']}>
            ${price.toFixed(2)}
          </p>
          <p className={s['produce-price-discount-desc']}>
            You save ${(price / 10).toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
};

export default ProductPrice;
