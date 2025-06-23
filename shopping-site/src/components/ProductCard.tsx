import React from 'react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className={styles.card}>
      {/* Product Image */}
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
        {product.stock < 10 && product.stock > 0 && (
          <div className={`${styles.stockBadge} ${styles.low}`}>
            Son {product.stock} adet
          </div>
        )}
        {product.stock === 0 && (
          <div className={`${styles.stockBadge} ${styles.out}`}>
            Stokta yok
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className={styles.content}>
        <h3 className={styles.title}>
          {product.name}
        </h3>
        
        <p className={styles.description}>
          {product.description}
        </p>

        {/* Rating */}
        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`${styles.star} ${
                  index < Math.floor(product.rating) ? styles.filled : styles.empty
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className={styles.reviewCount}>
            ({product.reviews} değerlendirme)
          </span>
        </div>

        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price}>
            ₺{product.price.toFixed(2)}
          </span>
          <span className={styles.stock}>
            Stok: {product.stock}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`${styles.addButton} ${
            product.stock === 0 ? styles.disabled : styles.primary
          }`}
        >
          {product.stock === 0 ? 'Stokta Yok' : 'Sepete Ekle'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 