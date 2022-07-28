import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFilterStore } from 'store/filters';
import s from './Pagination.module.css';

interface AppProps {
  amount?: number;
}

const Pagination = ({ amount }: AppProps) => {
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const router = useRouter();
  const { setIsFiltering, productsTotalAmount } = useFilterStore(
    (state) => state
  );

  useEffect(() => {
    const length = productsTotalAmount || amount;
    length && setPages(Math.ceil(length / 12));
  }, [amount, productsTotalAmount]);

  useEffect(() => {
    router.query.page && setCurrentPage(Number(router.query?.page) as number);
  }, [router]);

  const handleClick = () => {
    setIsFiltering(true);
    setTimeout(() => {
      setIsFiltering(false);
    }, 1000);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={s.root}>
      {Array.from(Array(pages))
        .map((_, i) => i + 1)
        .map((page, idx) => (
          <Link
            key={idx}
            href={
              !router.query.search
                ? `/products?page=${page}`
                : `/products?search=${router.query.search}&page=${page}`
            }
            aria-label={`go to page ${page}`}
          >
            <button
              className={`${s['page-container']}`}
              onClick={handleClick}
              disabled={currentPage === idx + 1}
            >
              <p className={s['page-content']}>{page}</p>
            </button>
          </Link>
        ))}
    </div>
  );
};

export default Pagination;
