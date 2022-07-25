import React from 'react';
import Link from 'next/link';
import { useQuery, dehydrate, QueryClient } from 'react-query';
import { ProductsGrid } from '@components/products';
import { Product } from 'types/app';
import { categoriesConfiguration } from '__mocks__/categories';

export default function Products() {
  const { data } = useQuery('products', getProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexBasis: '150px' }}>
        <p style={{ fontSize: '1em', fontWeight: '500', marginBottom: '15px' }}>
          Categories
        </p>
        {Object.keys(categoriesConfiguration).map((cat) => (
          <Link key={cat} href={`/products?search=${cat}`}>
            <p
              style={{
                fontSize: '0.9em',
                fontWeight: '400',
                color: 'rgb(100,100,100)',
                marginBottom: '20px',
                textTransform: 'capitalize',
                cursor: 'pointer',
              }}
            >
              {cat}
            </p>
          </Link>
        ))}
      </div>
      <div style={{ flex: 1 }}>
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
