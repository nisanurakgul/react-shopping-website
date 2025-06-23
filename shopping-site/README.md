# ModaStore - React E-ticaret Uygulaması

Modern React, TypeScript ve CSS Modules kullanılarak geliştirilmiş tam özellikli bir e-ticaret web uygulaması.

## 🚀 Özellikler

### 📱 Kullanıcı Arayüzü
- **Tamamen Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- **Modern UI/UX**: Temiz ve kullanıcı dostu arayüz
- **CSS Modules**: Modüler ve sürdürülebilir stil yönetimi
- **Türkçe Arayüz**: Tamamen Türkçe kullanıcı deneyimi

### 🛍️ E-ticaret Özellikleri
- **Ürün Kategorileri**: Dış Giyim, İç Giyim, Alt Giyim, Üst Giyim
- **Ürün Arama ve Filtreleme**: Kategori ve anahtar kelime bazlı arama
- **Sepet Yönetimi**: Ürün ekleme, çıkarma, miktar güncelleme
- **Stok Takibi**: Gerçek zamanlı stok durumu gösterimi
- **Fiyat Hesaplama**: Otomatik toplam ve kargo hesaplama

### 🔐 Kullanıcı Yönetimi
- **Kayıt ve Giriş**: Formik ve Yup ile form validasyonu
- **Sosyal Medya Girişi**: Google ve Facebook entegrasyonu (simülasyon)
- **Oturum Yönetimi**: LocalStorage tabanlı kimlik doğrulama

### 📄 Sayfa Yapısı
- **Ana Sayfa**: Hero bölümü, kategoriler, öne çıkan ürünler
- **Ürünler Sayfası**: Filtreleme, arama, kategori seçimi
- **Sepet Sayfası**: Ürün listesi, miktar kontrolü, ödeme özeti
- **Hakkımızda**: Şirket bilgileri, ekip, değerler
- **İletişim**: İletişim formu, harita, iletişim bilgileri
- **Giriş/Kayıt**: Kullanıcı kimlik doğrulama sayfaları

## 🛠️ Teknolojiler

### Frontend
- **React 18**: Modern React hooks ve functional components
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi
- **React Router v6**: Sayfa yönlendirme ve navigasyon
- **CSS Modules**: Modüler CSS yönetimi
- **Formik + Yup**: Form yönetimi ve validasyon
- **Zustand**: Hafif state yönetimi

### Stil ve Tasarım
- **CSS Modules**: Bileşen bazlı stil yönetimi
- **Responsive Design**: Mobile-first yaklaşım
- **Modern CSS**: Flexbox, Grid, CSS Variables
- **Smooth Animations**: CSS transitions ve hover efektleri

### Geliştirme Araçları
- **Create React App**: Proje kurulumu ve yapılandırması
- **ESLint**: Kod kalitesi ve standartları
- **Prettier**: Kod formatlaması

## 📦 Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd shopping-site
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm start
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 🏗️ Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Header.tsx      # Navigasyon ve logo
│   ├── ProductCard.tsx # Ürün kartı bileşeni
│   └── *.module.css    # CSS Modules dosyaları
├── pages/              # Sayfa bileşenleri
│   ├── Home.tsx        # Ana sayfa
│   ├── Products.tsx    # Ürünler sayfası
│   ├── Cart.tsx        # Sepet sayfası
│   ├── About.tsx       # Hakkımızda
│   ├── Contact.tsx     # İletişim
│   ├── Login.tsx       # Giriş
│   ├── Register.tsx    # Kayıt
│   └── *.module.css    # CSS Modules dosyaları
├── store/              # State yönetimi
│   └── cartStore.ts    # Sepet state yönetimi
├── data/               # Mock veriler
│   ├── products.ts     # Ürün verileri
│   └── categories.ts   # Kategori verileri
├── types/              # TypeScript tip tanımları
│   └── index.ts        # Ortak tip tanımları
├── hooks/              # Custom React hooks
└── App.tsx             # Ana uygulama bileşeni
```

## 🎨 CSS Modules Kullanımı

Bu proje CSS Modules kullanarak modüler stil yönetimi sağlar:

```tsx
import styles from './Component.module.css';

function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Başlık</h1>
    </div>
  );
}
```

### CSS Modules Avantajları
- **İzolasyon**: Stil çakışması olmaz
- **Modülerlik**: Bileşen bazlı stil yönetimi
- **Sürdürülebilirlik**: Kolay bakım ve güncelleme
- **Performans**: Sadece kullanılan stiller yüklenir

## 🔧 Özelleştirme

### Renk Paleti Değiştirme
Ana renkleri değiştirmek için CSS değişkenlerini güncelleyin:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #7c3aed;
  --success-color: #16a34a;
  --error-color: #ef4444;
}
```

### Yeni Sayfa Ekleme
1. `src/pages/` klasöründe yeni bileşen oluşturun
2. CSS Modules dosyası ekleyin
3. `App.tsx`'te route tanımlayın

### Yeni Bileşen Ekleme
1. `src/components/` klasöründe bileşen oluşturun
2. CSS Modules dosyası ekleyin
3. Gerekli sayfalarda import edin

## 📱 Responsive Tasarım

Proje mobile-first yaklaşımı ile geliştirilmiştir:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🧪 Test

```bash
# Test çalıştırma
npm test

# Test coverage
npm test -- --coverage
```

## 📦 Build

```bash
# Production build
npm run build

# Build analizi
npm run analyze
```

## 🚀 Deployment

### Netlify
1. Netlify hesabı oluşturun
2. GitHub repository'nizi bağlayın
3. Build komutu: `npm run build`
4. Publish directory: `build`

### Vercel
1. Vercel hesabı oluşturun
2. GitHub repository'nizi import edin
3. Otomatik deployment

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👥 Geliştirici

**ModaStore E-ticaret Uygulaması**
- Modern React ve TypeScript ile geliştirilmiş
- CSS Modules ile modüler stil yönetimi
- Tam responsive tasarım
- Türkçe kullanıcı arayüzü

---

**Not**: Bu proje demo amaçlı geliştirilmiştir. Gerçek e-ticaret uygulaması için backend API entegrasyonu gereklidir.
