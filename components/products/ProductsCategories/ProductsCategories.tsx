import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { useFilterStore } from 'store/filters';
import { Dropdown } from 'components/ui';
import useMediaQuery from 'hooks/useMediaQuery';
import { Product } from 'types/app';
import s from './ProductsCategories.module.css';
import { categoriesConfiguration } from '__mocks__/categories';

const ProductsCategories = () => {
  const matches = useMediaQuery('(max-width: 800px)');
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setProductsTotalAmount } = useFilterStore((state) => state);

  const handleApparelClick = () => {
    const cachedProducts = queryClient.getQueryData<Product[]>('products');
    cachedProducts && setProductsTotalAmount(cachedProducts.length);
  };

  return (
    <>
      {matches ? (
        <div className={s.root}>
          <Dropdown
            options={Object.keys(categoriesConfiguration).map((cat) =>
              cat.toUpperCase()
            )}
            placeholder="ALL CATEGORIES"
            optionHandler={(category) =>
              router.push(`/products?search=${category}`)
            }
          />
        </div>
      ) : (
        <>
          <div onClick={handleApparelClick}>
            <Link href="/products">
              <p className={s.title}>All Categories</p>
            </Link>
          </div>

          {Object.keys(categoriesConfiguration).map((cat) => (
            <Link key={cat} href={`/products?search=${cat}`}>
              <p className={s.category}>{cat}</p>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default ProductsCategories;
