import React from 'react';
import { Product } from 'types/app';
import ProductPrice from '@components/products/ProductPrice';
import CartAdd from '@components/cart/CartAdd';
import Dropdown from '@components/ui/Dropdown';
import Rating from '@components/ui/Rating';
import Tooltip from '@components/ui/Tooltip';
import s from './ProductDetails.module.css';
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

          <Rating rating={product.rating} style={{ marginTop: '10px' }} />

          <ProductPrice price={product.price} discount={Math.random() < 0.5} />

          <p className={s['product-description-description']}>
            {product.description}
          </p>

          {Object.entries(createDropdowns(product.category)).map((el) => (
            <Dropdown key={el[0]} label={el[0]} options={el[1]} />
          ))}

          <div
            className={`p_small-margin ${s['product-description-shipping']}`}
          >
            <p>Shipping cost ${(product.price / 10).toFixed(2)}</p>
            <p>
              <span style={{ fontStyle: 'italic' }}>Estimated arrival on </span>
              <span style={{ textDecoration: 'underline' }}>
                {new Date(
                  Date.now() + 3600 * 1000 * 24 * 7
                ).toLocaleDateString()}
              </span>
            </p>
          </div>

          <div className={s['product-description-stock']}>
            <img src="/assets/icons/tick.svg" alt="tick" />
            <p>In stock</p>
          </div>

          <div className={s['product-description-seller']}>
            Sold by <Tooltip text={product.seller} />
          </div>
          <CartAdd />
          {/* add carousel (same img is ok?) + related products */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
