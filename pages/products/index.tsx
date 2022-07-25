import React from 'react';
import Head from 'next/head';
import { useQuery, dehydrate, QueryClient } from 'react-query';
import ProductsGrid from '@components/products/ProductsGrid';
import dynamic from 'next/dynamic';
const ProductsCategories = dynamic(
  () => import('@components/products/ProductsCategories'),
  {
    ssr: false,
  }
);
import { Product } from 'types/app';
import s from 'styles/pages/products.module.css';

export default function Products() {
  const { data } = useQuery('products', getProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div className={s.root}>
      <Head>
        <title>Browse Appareal - xMarket</title>
      </Head>
      <div className={s.categories}>
        <ProductsCategories />
      </div>
      <div className={s.products}>
        <ProductsGrid productsData={data} />
      </div>
    </div>
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
