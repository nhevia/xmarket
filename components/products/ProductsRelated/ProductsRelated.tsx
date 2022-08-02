import React from 'react';
import Link from 'next/link';
import { useCachedData } from 'hooks/useCachedData';
import { Product } from 'types/app';
import s from './ProductsRelated.module.css';

interface AppProps {
  category: string;
  title: string;
}

const ProductsRelated = ({ category, title }: AppProps) => {
  const cachedProducts = useCachedData<Product[]>('products');

  return (
    <div className={s.root}>
      <p className={s.title}>You may also like</p>
      <div className={s.products}>
        {cachedProducts &&
          cachedProducts
            .filter(
              (p) =>
                p.category.toLowerCase().includes(category.toLowerCase()) &&
                p.title !== title
            )
            .slice(0, 8)
            .map((el) => (
              <div key={el.id} className={s.product}>
                <Link
                  href={`/products/${el.id}?p=${el.title.replaceAll(' ', '-')}`}
                >
                  <img alt={el.title} src={el.thumbnail} />
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductsRelated;
