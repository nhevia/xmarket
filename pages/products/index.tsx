import React from 'react';
import fs from 'fs';
import { ProductsGrid } from '@components/products';
import { Product } from 'types/app';

interface AppProps {
  productsData: Array<Product>;
}

export default function Products({ productsData }: AppProps) {
  return (
    <>
      <ProductsGrid productsData={productsData} />
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
