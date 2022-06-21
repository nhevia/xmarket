import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>

          <div
            className="navbar-item has-dropdown is-hoverable"
            key={router.pathname}
          >
            <a className="navbar-link">Outfit</a>

            <div className="navbar-dropdown">
              <Link href="/products">
                <a className="navbar-item">T-shirts</a>
              </Link>
              <Link href="/">
                <a className="navbar-item">Pants</a>
              </Link>
              <a className="navbar-item">Sweatshirts</a>
              <a className="navbar-item">Shoes</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">New Arrivals</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Cart</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;