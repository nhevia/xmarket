import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s['footer-text-centered']}>
        <p>
          <strong>XMarket</strong> by <a href="https://nhevia.com">Nhevia</a>.
          The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The
          website content is licensed{' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
