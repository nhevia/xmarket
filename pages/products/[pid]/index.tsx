import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import data from '../../../__mocks__/products.json';
import { Product } from 'types/app';
import ProductDetails from '@components/products/ProductDetails';

const Product = () => {
  const [product, setProduct] = useState<Product>();

  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    const queriedProduct = pid && data.find((p) => p.id === Number(pid));
    if (queriedProduct) setProduct(queriedProduct);
  }, [pid]);

  return <>{product && <ProductDetails product={product} />}</>;
};

export default Product;
