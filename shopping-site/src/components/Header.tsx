import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const location = useLocation();
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <span>M</span>
          </div>
          <span className={styles.logoText}>ModaStore</span>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            Ana Sayfa
          </Link>
          <Link
            to="/urunler"
            className={`${styles.navLink} ${isActive('/urunler') ? styles.active : ''}`}
          >
            Ürünler
          </Link>
          <Link
            to="/hakkimizda"
            className={`${styles.navLink} ${isActive('/hakkimizda') ? styles.active : ''}`}
          >
            Hakkımızda
          </Link>
          <Link
            to="/iletisim"
            className={`${styles.navLink} ${isActive('/iletisim') ? styles.active : ''}`}
          >
            İletişim
          </Link>
        </nav>

        {/* Cart and User Actions */}
        <div className={styles.actions}>
          <Link
            to="/sepetim"
            className={styles.cartButton}
          >
            <svg className={styles.cartIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            {totalItems > 0 && (
              <span className={styles.cartBadge}>
                {totalItems}
              </span>
            )}
          </Link>
          
          <Link
            to="/giris"
            className={styles.loginLink}
          >
            Giriş Yap
          </Link>
          
          <Link
            to="/kayit"
            className={styles.registerLink}
          >
            Kayıt Ol
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 