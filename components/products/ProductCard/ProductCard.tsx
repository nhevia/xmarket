import React from 'react';
import Image from 'next/image';
import { Product } from 'types/app';

interface ProductCard {
  [product: string]: Product;
}

const ProductCard = ({ product }: ProductCard) => {
  return (
    <div className="product-container">
      <div className="product-image">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={340}
          height={270}
        />
      </div>
      <div className="product-description">
        <p className="product-description-title">{product.title}</p>
        <div
          className="rating-stars"
          style={{ '--rating': product.rating.rate } as React.CSSProperties}
          aria-label={`Rating of this product is ${product.rating.rate} out of 5.`}
        />
        <span className="small-text">({product.rating.count})</span>
        <div>${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
