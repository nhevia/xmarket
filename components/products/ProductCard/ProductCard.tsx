import React from 'react';
import Image from 'next/image';
import { Product } from 'types/app';
import s from './ProductCard.module.css';

interface ProductCard {
  [product: string]: Product;
}

const ProductCard = ({ product }: ProductCard) => {
  return (
    <div className={s['product-container']}>
      <div className={s['product-image']}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={340}
          height={270}
        />
      </div>
      <div className={s['product-description']}>
        <p className={s['product-description-title']}>{product.title}</p>
        <div
          className={s['rating-stars']}
          style={{ '--rating': product.rating.rate } as React.CSSProperties}
          aria-label={`Rating of this product is ${product.rating.rate} out of 5.`}
        />
        <span className={`text-sm ${s['rating-count']}`}>
          ({product.rating.count})
        </span>
        <div>${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
