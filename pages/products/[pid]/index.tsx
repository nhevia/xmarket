import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from 'react-query';
import { useCachedData } from 'hooks/useCachedData';
import { ProductDetail, ProductsRelated } from 'components/products';
import { ProductCart } from 'types/app';

const Product = () => {
  const [product, setProduct] = useState<ProductCart>();

  const router = useRouter();
  const { pid } = router.query;

  const cachedProducts = useCachedData<ProductCart[]>('products');

  useEffect(() => {
    const queriedProduct =
      pid && cachedProducts?.find((p) => p.id === Number(pid));
    if (queriedProduct) setProduct(queriedProduct);
  }, [pid, cachedProducts]);

  return (
    <>
      <Head>
        <title>{product?.title}</title>
      </Head>
      {product && <ProductDetail product={product} />}
      <ProductsRelated category={product?.category || ''} />
    </>
  );
};

const getProducts = async (): Promise<ProductCart[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_S3}/products.json`);
  return response.json();
};

export async function getServerSideProps() {
  // TODO migrate to query for product id, no need to prefetch the whole products
  // but right now it's needed on page reload from [pid] to match the url
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('products', getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Product;
