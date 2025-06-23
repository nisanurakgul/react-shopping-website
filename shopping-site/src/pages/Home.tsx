import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Moda Dünyasına Hoş Geldiniz
          </h1>
          <p className={styles.heroSubtitle}>
            En trend ürünler, en uygun fiyatlarla sizlerle
          </p>
          <Link
            to="/urunler"
            className={styles.heroButton}
          >
            Alışverişe Başla
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <div className={styles.categoriesContent}>
          <h2 className={styles.sectionTitle}>
            Kategoriler
          </h2>
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/urunler?category=${category.name}`}
                className={styles.categoryCard}
              >
                <div className={styles.categoryImage}>
                  <img
                    src={category.image}
                    alt={category.name}
                  />
                </div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryTitle}>
                    {category.name}
                  </h3>
                  <p className={styles.categoryDescription}>
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className={styles.featured}>
        <div className={styles.featuredContent}>
          <h2 className={styles.sectionTitle}>
            Öne Çıkan Ürünler
          </h2>
          <div className={styles.productsGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/urunler"
              className={styles.viewAllButton}
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresContent}>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>
                Hızlı Teslimat
              </h3>
              <p className={styles.featureDescription}>
                24 saat içinde kapınızda
              </p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>
                Kalite Garantisi
              </h3>
              <p className={styles.featureDescription}>
                %100 kalite garantisi
              </p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>
                Güvenli Ödeme
              </h3>
              <p className={styles.featureDescription}>
                SSL güvenlik sertifikası
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 