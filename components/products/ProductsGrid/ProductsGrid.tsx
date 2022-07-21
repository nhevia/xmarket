import React from 'react';
import { useFilterStore } from 'store/filters';

import ProductCard from '../ProductCard/ProductCard';
import { Product } from 'types/app';
import s from './ProductsGrid.module.css';

interface AppProducts {
  productsData: Array<Product> | undefined;
}

const ProductsGrid = ({ productsData }: AppProducts) => {
  const filter = useFilterStore((state) => state.filter);

  return (
    <div className={s.grid}>
      {productsData
        ?.filter((p) => p.title.toLowerCase().includes(filter))
        .map((product: Product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default ProductsGrid;
