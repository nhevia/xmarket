import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFilterStore } from 'store/filters';
import ProductCard from '../ProductCard/ProductCard';
import Dots from 'components/ui/Loaders/Dots';
import { Product } from 'types/app';
import s from './ProductsGrid.module.css';

interface AppProducts {
  productsData: Array<Product> | undefined;
}

const ProductsGrid = ({ productsData }: AppProducts) => {
  const [products, setProducts] = useState<React.ReactNode>([]);

  const { isFiltering } = useFilterStore((state) => state);
  const router = useRouter();

  useEffect(() => {
    if (!productsData) return;

    const search = router.query.search as string;
    if (search === undefined) {
      setProducts(
        productsData.map((product: Product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))
      );
      return;
    }

    const filtered = productsData?.filter(
      (p) =>
        p.title.toLowerCase().includes(search) ||
        p.category.toLowerCase() === search
    );

    if (filtered?.length > 0) {
      setProducts(
        filtered.map((product: Product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))
      );
    } else {
      setProducts(
        <>
          <div className={s.empty}>Nothing found, you might also like ...</div>
          {productsData.map((product: Product) => (
            <React.Fragment key={product.id}>
              <ProductCard product={product} />
            </React.Fragment>
          ))}
        </>
      );
    }
  }, [router]);

  return (
    <>
      {!isFiltering ? (
        <div className={s.grid}>{products}</div>
      ) : (
        <div style={{ marginTop: '15%' }}>
          <Dots color="black" />
        </div>
      )}
    </>
  );
};

export default ProductsGrid;
