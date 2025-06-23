import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import styles from './Products.module.css';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categoryParam = searchParams.get('category');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
    setSearchParams({});
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Ürünler
          </h1>
          <p className={styles.subtitle}>
            {filteredProducts.length} ürün bulundu
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.filtersGrid}>
            {/* Search */}
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                Ürün Ara
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ürün adı veya açıklama..."
                className={styles.filterInput}
              />
            </div>

            {/* Category Filter */}
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="">Tüm Kategoriler</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <div className={styles.filterGroup}>
              <button
                onClick={clearFilters}
                className={styles.clearButton}
              >
                Filtreleri Temizle
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className={styles.categoryPills}>
          <div className={styles.pillsContainer}>
            <button
              onClick={() => handleCategoryChange('')}
              className={`${styles.categoryPill} ${
                selectedCategory === '' ? styles.active : styles.inactive
              }`}
            >
              Tümü
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className={`${styles.categoryPill} ${
                  selectedCategory === category.name ? styles.active : styles.inactive
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>
              Ürün Bulunamadı
            </h3>
            <p className={styles.emptyDescription}>
              Arama kriterlerinize uygun ürün bulunamadı.
            </p>
            <button
              onClick={clearFilters}
              className={styles.emptyButton}
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 