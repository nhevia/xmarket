import React from 'react';
import { useQuery, dehydrate, QueryClient } from 'react-query';
import { ProductsGrid } from '@components/products';
import { Product } from 'types/app';

export default function Products() {
  const { data } = useQuery('products', getProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <ProductsGrid productsData={data} />
    </>
  );
}

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_S3}/products.json`);
  return response.json();
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('products', getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
