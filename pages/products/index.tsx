import React from 'react';
import fs from 'fs';
import ProductGrid from '../../components/Products/ProductsGrid';
import { Product } from '../../types/types';

interface Products {
  [product: string]: Array<Product>;
}

export default function Products({ productsData }: Products) {
  return (
    <>
      <ProductGrid productsData={productsData} />
    </>
  );
}

export const getStaticProps = () => {
  const productsData = JSON.parse(
    fs.readFileSync('__mocks__/products.json').toString()
  );

  return {
    props: {
      productsData,
    },
  };
};

const Products = () => {
  return (
    <div className="columns is-mobile is-multiline">
      <div
        className="column"
        style={{ minWidth: 300, minHeight: 300, background: 'grey' }}
      >
        1
      </div>
      <div
        className="column"
        style={{ minWidth: 300, minHeight: 300, background: 'grey' }}
      >
        2
      </div>
      <div
        className="column"
        style={{ minWidth: 300, minHeight: 300, background: 'grey' }}
      >
        3
      </div>
      <div
        className="column"
        style={{ minWidth: 300, minHeight: 300, background: 'grey' }}
      >
        4
      </div>
    </div>
  );
};

export default Products;
