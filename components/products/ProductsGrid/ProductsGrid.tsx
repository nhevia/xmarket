import React from 'react';
import { Product } from 'types/app';
import ProductCard from '../ProductCard/ProductCard';

interface Products {
  [product: string]: Array<Product>;
}

const ProductsGrid = ({ productsData }: Products) => {
  return (
    <div className="grid">
      {productsData?.map((product: Product) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductsGrid;
