import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    // Simulate checkout process
    alert('Ödeme sayfasına yönlendiriliyorsunuz...');
  };

  if (items.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.emptyCart}>
            <div className={styles.emptyIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h2 className={styles.emptyTitle}>
              Sepetiniz Boş
            </h2>
            <p className={styles.emptyDescription}>
              Sepetinizde henüz ürün bulunmuyor. Alışverişe başlamak için ürünlerimizi inceleyin.
            </p>
            <Link
              to="/urunler"
              className={styles.shopButton}
            >
              Alışverişe Başla
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Sepetim
          </h1>
          <p className={styles.subtitle}>
            {items.length} ürün sepetinizde
          </p>
        </div>

        <div className={styles.layout}>
          {/* Cart Items */}
          <div className={styles.cartSection}>
            <div className={styles.cartContent}>
              <h2 className={styles.cartTitle}>
                Sepet Ürünleri
              </h2>
              
              <div className={styles.cartItems}>
                {items.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    {/* Product Image */}
                    <div className={styles.itemImage}>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                      />
                    </div>

                    {/* Product Info */}
                    <div className={styles.itemInfo}>
                      <h3 className={styles.itemTitle}>
                        {item.product.name}
                      </h3>
                      <p className={styles.itemDescription}>
                        {item.product.description}
                      </p>
                      <p className={styles.itemPrice}>
                        ₺{item.product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className={styles.quantityControls}>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        className={styles.quantityButton}
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      
                      <span className={styles.quantity}>
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                        className={styles.quantityButton}
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveItem(item.product.id)}
                      className={styles.removeButton}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              <div className={styles.clearCart}>
                <button
                  onClick={clearCart}
                  className={styles.clearCartButton}
                >
                  Sepeti Temizle
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className={styles.summary}>
            <h2 className={styles.summaryTitle}>
              Sipariş Özeti
            </h2>
            
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Ara Toplam:</span>
              <span className={styles.summaryValue}>₺{totalPrice.toFixed(2)}</span>
            </div>
            
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Kargo:</span>
              <span className={`${styles.summaryValue} ${styles.free}`}>Ücretsiz</span>
            </div>
            
            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span className={styles.summaryTotalLabel}>Toplam:</span>
              <span className={styles.summaryTotalValue}>
                ₺{totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className={styles.checkoutButton}
            >
              Ödemeye Geç
            </button>

            <div className={styles.continueShopping}>
              <Link
                to="/urunler"
                className={styles.continueLink}
              >
                Alışverişe Devam Et
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 