import React, { useState, useEffect } from 'react';
import { ProductCart } from 'types/app';
import { ProductPrice } from 'components/products';
import CartAdd from 'components/cart/CartAdd';
import Dropdown from 'components/ui/Dropdown';
import Rating from 'components/ui/Rating';
import Tooltip from 'components/ui/Tooltip';
import { ColorPicker } from 'components/common';
import s from './ProductDetails.module.css';
import { categoriesConfiguration } from '__mocks__/categories';

const createDropdowns = (category: string) => {
  return Object.entries(categoriesConfiguration)
    .filter((key) => key.includes(category) && category !== 'color')
    .flat()[1];
};

interface AppProps {
  product: ProductCart;
}

const ProductDetails = ({ product }: AppProps) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [cartProduct, setCartProduct] = useState<ProductCart>(product);

  useEffect(() => {
    // updates product with options to separate items in Cart
    setCartProduct((prev) => ({ ...prev, color: color, size: size }));
  }, [color, size]);

  // prevent rerender the discounted price bc math.random usage
  const memoPrice = React.useMemo(
    () => <ProductPrice price={product.price} discount={Math.random() < 0.5} />,
    [product.price]
  );

  return (
    <div>
      <div className={s['product-container']}>
        <div className={s['product-image-container']}>
          <img
            alt="product image"
            src={product.image}
            className={s['product-image']}
          />
        </div>
        <div className={s['product-description-container']}>
          <p className={s['product-description-title']}>{product.title}</p>

          <Rating rating={product.rating} style={{ marginTop: '10px' }} />

          {memoPrice}

          <p className={s['product-description-description']}>
            {product.description}
          </p>

          {Object.entries(createDropdowns(product.category)).map((el) => {
            if (el[0] !== 'color') {
              return (
                <Dropdown
                  key={el[0]}
                  label={el[0]}
                  options={el[1]}
                  optionHandler={setSize}
                />
              );
            }
          })}

          {(
            categoriesConfiguration as {
              [key: string]: {
                [key: string]: string[] | number[];
              };
            }
          )[product.category].color && (
            <ColorPicker
              category={product.category}
              onClickHandler={setColor}
            />
          )}

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
          <CartAdd product={cartProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
