import React from 'react';
import { Product } from 'types/app';
import s from './ProductDetails.module.css';
import ProductPrice from '@components/products/ProductPrice';
import CartAdd from '@components/cart/CartAdd';
import Dropdown from '@components/ui/Dropdown';
import Rating from '@components/ui/Rating';
import { categoriesConfiguration } from '__mocks__/categories';

const createDropdowns = (category: string) => {
  return Object.entries(categoriesConfiguration)
    .filter((key) => key.includes(category))
    .flat()[1];
};

interface AppProps {
  product: Product;
}

const ProductDetails = ({ product }: AppProps) => {
  return (
    <div>
      <div className={s['product-container']}>
        <div className={s['product-image-container']}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="product image"
            src={product.image}
            className={s['product-image']}
          />
        </div>
        <div className={s['product-description-container']}>
          <p className={s['product-description-title']}>{product.title}</p>

          <Rating rating={product.rating.rate} style={{ marginTop: '15px' }} />

          <ProductPrice price={product.price} discount={Math.random() < 0.5} />

          <p className={s['product-description-description']}>
            {product.description}
          </p>

          {Object.entries(createDropdowns(product.category)).map((el) => (
            <Dropdown key={el[0]} label={el[0]} options={el[1]} />
          ))}
          <div>
            <p>Free shiping to 🌐</p>
            <p>In stock ✔️</p>
          </div>
          <div></div>
          <CartAdd />
          {/* add carousel (same img is ok?) + related products */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
