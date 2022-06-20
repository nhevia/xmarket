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
