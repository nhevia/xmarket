import React from 'react';
import { useFilterStore } from 'store/filters';
import ProductCard from '../ProductCard/ProductCard';
import Dots from '@components/ui/Loaders/Dots';
import { Product } from 'types/app';
import s from './ProductsGrid.module.css';

interface AppProducts {
  productsData: Array<Product> | undefined;
}

const ProductsGrid = ({ productsData }: AppProducts) => {
  const { filter, isFiltering } = useFilterStore((state) => state);

  return (
    <>
      {!isFiltering ? (
        <div className={s.grid}>
          {productsData
            ?.filter((p) => p.title.toLowerCase().includes(filter))
            .map((product: Product) => (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
              </React.Fragment>
            ))}
        </div>
      ) : (
        <div style={{ marginTop: '15%' }}>
          <Dots color="black" />
        </div>
      )}
    </>
  );
};

export default ProductsGrid;
