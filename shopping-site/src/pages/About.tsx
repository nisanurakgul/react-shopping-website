import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Hakkımızda
          </h1>
          <p className={styles.subtitle}>
            Moda dünyasında kalite ve güvenilirliğin adresi olarak, müşterilerimize en iyi deneyimi sunmaya odaklanıyoruz.
          </p>
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>
            ModaStore'un Hikayesi
          </h2>
          <p className={styles.heroDescription}>
            2020 yılında kurulan ModaStore, Türkiye'nin önde gelen online moda perakendecilerinden biri olarak, 
            müşterilerimize en trend ürünleri en uygun fiyatlarla sunmaktadır.
          </p>
        </section>

        {/* Company Info */}
        <section className={styles.companyInfo}>
          <h2 className={styles.sectionTitle}>
            Neden ModaStore?
          </h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className={styles.infoTitle}>
                Hızlı Teslimat
              </h3>
              <p className={styles.infoDescription}>
                24 saat içinde kapınızda. Türkiye genelinde hızlı ve güvenli teslimat.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={styles.infoTitle}>
                Kalite Garantisi
              </h3>
              <p className={styles.infoDescription}>
                %100 kalite garantisi. Memnun kalmazsanız iade edebilirsiniz.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className={styles.infoTitle}>
                Güvenli Ödeme
              </h3>
              <p className={styles.infoDescription}>
                SSL güvenlik sertifikası ile güvenli ödeme seçenekleri.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className={styles.missionVision}>
          <div className={styles.missionCard}>
            <h3 className={styles.cardTitle}>
              Misyonumuz
            </h3>
            <p className={styles.cardDescription}>
              Müşterilerimize en kaliteli moda ürünlerini en uygun fiyatlarla sunarak, 
              alışveriş deneyimlerini keyifli ve güvenli hale getirmek. Her yaştan ve 
              tarzdan insanın kendini ifade edebileceği ürünleri bulabileceği bir platform oluşturmak.
            </p>
          </div>

          <div className={styles.visionCard}>
            <h3 className={styles.cardTitle}>
              Vizyonumuz
            </h3>
            <p className={styles.cardDescription}>
              Türkiye'nin en güvenilir ve tercih edilen online moda perakendecisi olmak. 
              Teknoloji ve modayı birleştirerek, müşterilerimize benzersiz bir alışveriş 
              deneyimi sunmak ve sektörde öncü olmak.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <section className={styles.team}>
          <h2 className={styles.sectionTitle}>
            Ekibimiz
          </h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>
                A
              </div>
              <h3 className={styles.memberName}>
                Ahmet Yılmaz
              </h3>
              <p className={styles.memberRole}>
                Kurucu & CEO
              </p>
              <p className={styles.memberBio}>
                10+ yıl moda sektörü deneyimi ile şirketimizin vizyonunu şekillendiriyor.
              </p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>
                F
              </div>
              <h3 className={styles.memberName}>
                Fatma Demir
              </h3>
              <p className={styles.memberRole}>
                Satış Müdürü
              </p>
              <p className={styles.memberBio}>
                Müşteri memnuniyeti odaklı yaklaşımı ile satış stratejilerimizi yönetiyor.
              </p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>
                M
              </div>
              <h3 className={styles.memberName}>
                Mehmet Kaya
              </h3>
              <p className={styles.memberRole}>
                Teknoloji Direktörü
              </p>
              <p className={styles.memberBio}>
                Platformumuzun teknik altyapısını ve kullanıcı deneyimini sürekli iyileştiriyor.
              </p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>
                Z
              </div>
              <h3 className={styles.memberName}>
                Zeynep Özkan
              </h3>
              <p className={styles.memberRole}>
                Pazarlama Müdürü
              </p>
              <p className={styles.memberBio}>
                Yaratıcı pazarlama stratejileri ile markamızı büyütüyor.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>
            Değerlerimiz
          </h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={styles.valueTitle}>
                Müşteri Odaklılık
              </h3>
              <p className={styles.valueDescription}>
                Müşterilerimizin ihtiyaçlarını anlayarak en iyi çözümleri sunuyoruz.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={styles.valueTitle}>
                Güvenilirlik
              </h3>
              <p className={styles.valueDescription}>
                Şeffaf ve dürüst iş yapış tarzımız ile güven inşa ediyoruz.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={styles.valueTitle}>
                İnovasyon
              </h3>
              <p className={styles.valueDescription}>
                Sürekli gelişim ve yenilikçilik ile sektörde öncü oluyoruz.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={styles.valueTitle}>
                Takım Ruhu
              </h3>
              <p className={styles.valueDescription}>
                Birlikte çalışarak daha büyük başarılar elde ediyoruz.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 