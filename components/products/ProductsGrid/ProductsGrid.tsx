import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFilterStore } from 'store/filters';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from 'types/app';
import s from './ProductsGrid.module.css';

interface AppProducts {
  productsData: Array<Product> | undefined;
}

const ProductsGrid = ({ productsData }: AppProducts) => {
  const [products, setProducts] = useState<React.ReactNode>([]);

  const { isFiltering, setProductsFiltered, setProductsTotalAmount } =
    useFilterStore((state) => state);
  const router = useRouter();

  useEffect(() => {
    if (!productsData) return;

    const { search, page } = router.query;

    if (search === undefined) {
      const productsElements = productsData
        .map((product: Product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))
        .slice(
          page ? (Number(page) - 1) * 12 : 0,
          page ? Number(page) * 12 : 12
        );

      setProducts(productsElements);
      setProductsFiltered(productsElements.length);
      return;
    }

    const filtered = productsData
      ?.filter(
        (p) =>
          p.title.toLowerCase().includes(search as string) ||
          p.category.toLowerCase() === search
      )
      .slice(page ? (Number(page) - 1) * 12 : 0, page ? Number(page) * 12 : 12);

    if (filtered?.length > 0) {
      const productsElements = filtered
        .map((product: Product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))
        .slice(
          page ? (Number(page) - 1) * 12 : 0,
          page ? Number(page) * 12 : 12
        );
      setProducts(productsElements);
      setProductsTotalAmount(
        router.query.search === '' ? productsData.length : filtered.length
      );
      setProductsFiltered(productsElements.length);
    } else {
      const productsElement = (
        <>
          <div className={s.empty}>Nothing found, you might also like ...</div>
          {productsData
            .map((product: Product) => (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
              </React.Fragment>
            ))
            .slice(
              page ? (Number(page) - 1) * 12 : 0,
              page ? Number(page) * 12 : 12
            )}
        </>
      );

      setProducts(productsElement);
      setProductsTotalAmount(productsData.length);
    }
  }, [router]);

  return (
    <>
      {!isFiltering ? (
        <div className={s.grid}>{products}</div>
      ) : (
        <div className={s.grid}>
          {Array.from(Array(12).keys()).map((el, idx) => (
            <div className={s['product-loader-container']} key={idx}>
              <div className={s['product-loader']}></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsGrid;
