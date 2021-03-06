import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { debounce } from 'throttle-debounce';
import { useFilterStore } from 'store/filters';
import s from './ProductSearch.module.css';

const ProductSearch = () => {
  const [filterWord, setFilterWord] = useState('');

  const router = useRouter();
  const { setIsFiltering } = useFilterStore((state) => state);

  const searchText = (text: string) => {
    router.push(`/products?search=${text}`);
    setTimeout(() => {
      setIsFiltering(false);
    }, 500);
  };
  const searchTextDebounce = debounce(500, searchText);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterWord(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsFiltering(true);
      searchTextDebounce(filterWord);
    }
  };

  const onSearchHandle = () => {
    setIsFiltering(true);
    searchTextDebounce(filterWord);
  };

  return (
    <div className={s.root}>
      <input
        placeholder="Search for products"
        className={s.input}
        onChange={handleFilterChange}
        onKeyDown={handleEnter}
      />
      <div onClick={onSearchHandle} className={s.search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label="search products"
          focusable="false"
          fill="black"
          className={s.icon}
        >
          <path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path>
          <path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ProductSearch;
