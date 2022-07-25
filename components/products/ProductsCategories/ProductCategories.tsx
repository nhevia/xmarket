import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown } from '@components/ui';
import useMediaQuery from 'hooks/useMediaQuery';
import s from './ProductCategories.module.css';
import { categoriesConfiguration } from '__mocks__/categories';

const ProductCategories = () => {
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
          <p
            style={{
              fontSize: '1em',
              fontWeight: '500',
              marginBottom: '15px',
            }}
          >
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
        </>
      )}
    </>
  );
};

export default ProductCategories;
