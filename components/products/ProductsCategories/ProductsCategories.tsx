import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown } from 'components/ui';
import useMediaQuery from 'hooks/useMediaQuery';
import s from './ProductsCategories.module.css';
import { categoriesConfiguration } from '__mocks__/categories';

const ProductsCategories = () => {
  const matches = useMediaQuery('(max-width: 800px)');
  const router = useRouter();

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
          <p className={s.title}>Categories</p>

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
