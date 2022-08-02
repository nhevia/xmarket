import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from 'types/app';
import s from './ProductCard.module.css';
import Rating from 'components/ui/Rating';

interface AppProps {
  product: Product;
}

const ProductCard = ({ product }: AppProps) => {
  return (
    <Link
      href={`/products/${product.id}?p=${product.title.replaceAll(' ', '-')}`}
    >
      <a className={s['product-container']} aria-label="product">
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
          <Rating rating={product.rating} />
          <p>${product.price.toFixed(2)}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
