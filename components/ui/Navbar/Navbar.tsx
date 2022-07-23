import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from 'store/cart';
import useIsMounted from 'hooks/useIsMounted';
import Login from '@components/auth/Login';
import Cart from '@components/cart/Cart';
import ProductSearch from '@components/products/ProductSearch';
import s from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const hasHydrated = useIsMounted();
  const quantity = useCartStore((state) => state.quantity);

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
    <>
      {showModal && <Login setVisible={setShowModal} />}
      {showCart && <Cart setVisible={setShowCart} />}
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
          </div>

          <div className={s['nav-center']}>
            <ProductSearch />
          </div>

          <div className={s['nav-end']}>
            <div
              className={s['nav-item-cart']}
              onClick={() => setShowCart(true)}
            >
              <img
                src="/assets/icons/cart.svg"
                alt="go to the shopping cart"
                className={s['nav-item']}
              />

              <div
                className={
                  hasHydrated && quantity > 0
                    ? s['nav-item-cart-has-items']
                    : ''
                }
              >
                {hasHydrated ? quantity > 0 && quantity : ''}
              </div>
            </div>
            <div
              aria-label="login"
              onClick={() => setShowModal(true)}
              className={`${s['nav-item']} ${s['nav-item-avatar']}`}
            ></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
