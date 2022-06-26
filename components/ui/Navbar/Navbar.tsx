import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import s from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasItems, setHasItems] = useState(false); // TODO cart.items will come from global state

  const controlNavBar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavBar);
    return () => window.removeEventListener('scroll', controlNavBar);
  }, []);

  return (
    <div className={`${s.root} ${isScrolled && s['is-scrolled']}`}>
      <nav role="navigation" aria-label="main navigation">
        <div className={s['nav-start']}>
          <Link href="./">
            <img
              className={`${s['nav-item']} ${s['nav-item-logo']} `}
              src="/favicon.ico"
              alt="site icon"
            />
          </Link>
          <Link href="/products">
            <a className={s['nav-item']}>Apparel</a>
          </Link>
          <Link href="/show-all">
            <a className={s['nav-item']}>Show all</a>
          </Link>
        </div>

        {/* TODO create search component */}
        <input
          placeholder="Search for products"
          style={{
            minWidth: '400px',
            border: '1px solid rgba(0,0,0,0.1)',
            padding: '8px',
            fontSize: '16px',
            letterSpacing: '1px',
            flex: '1 1',
          }}
        />

        <div className={s['nav-end']}>
          <div className={s['nav-item-cart']}>
            <Link href="/cart">
              <img
                src="assets/icons/cart.svg"
                alt="go to the shopping cart"
                className={s['nav-item']}
              />
            </Link>
            <div className={hasItems ? s['nav-item-cart-has-items'] : ''}></div>
          </div>
          <Link href="/login">
            <div className={`${s['nav-item']} ${s['nav-item-avatar']} `}></div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
