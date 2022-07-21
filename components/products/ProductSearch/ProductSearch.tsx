import React, { ChangeEvent } from 'react';
import s from './ProductSearch.module.css';
import { useFilterStore } from 'store/filters';

const ProductSearch = () => {
  const setFilter = useFilterStore((state) => state.setFilter);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="Search for products"
        className={s.root}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default ProductSearch;
