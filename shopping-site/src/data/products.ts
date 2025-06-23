import { Product } from '../types';

// Import all images
import mont from '../assets/görseller/mont.png';
import dericeket from '../assets/görseller/dericeket.png';
import trenckot from '../assets/görseller/trenckot.png';
import pijamatakımı from '../assets/görseller/pijamatakımı.png';
import evgiyimi from '../assets/görseller/evgiyimi.png';
import kotpantolon from '../assets/görseller/kotpantolon.png';
import sıkpantolon from '../assets/görseller/sıkpantolon.png';
import midietek from '../assets/görseller/midietek.png';
import pamuklutisort from '../assets/görseller/pamuklutisort.png';
import gomlek from '../assets/görseller/gomlek.png';
import kazak from '../assets/görseller/kazak.png';
import bluz from '../assets/görseller/bluz.png';

export const products: Product[] = [
  // Dış Giyim
  {
    id: 1,
    name: 'Kışlık Mont',
    description: 'Sıcak ve şık kışlık mont, soğuk havalarda sizi korur',
    price: 899.99,
    image: mont,
    category: 'Dış Giyim',
    stock: 15,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Deri Ceket',
    description: 'Klasik deri ceket, her ortamda şık görünüm',
    price: 1299.99,
    image: dericeket,
    category: 'Dış Giyim',
    stock: 8,
    rating: 4.8,
    reviews: 95
  },
  {
    id: 3,
    name: 'Trençkot',
    description: 'Elegant trençkot, yağmurlu günler için ideal',
    price: 1599.99,
    image: trenckot,
    category: 'Dış Giyim',
    stock: 12,
    rating: 4.6,
    reviews: 67
  },

  // İç Giyim
  {
    id: 4,
    name: 'Pijama Takımı',
    description: 'Rahat ve yumuşak pijama takımı',
    price: 299.99,
    image: pijamatakımı,
    category: 'İç Giyim',
    stock: 25,
    rating: 4.3,
    reviews: 156
  },
  {
    id: 5,
    name: 'Ev Giyimi',
    description: 'Konforlu ev giyimi, günlük kullanım için',
    price: 199.99,
    image: evgiyimi,
    category: 'İç Giyim',
    stock: 30,
    rating: 4.4,
    reviews: 89
  },

  // Alt Giyim
  {
    id: 6,
    name: 'Kot Pantolon',
    description: 'Klasik kot pantolon, günlük kullanım için ideal',
    price: 399.99,
    image: kotpantolon,
    category: 'Alt Giyim',
    stock: 20,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 7,
    name: 'Şık Pantolon',
    description: 'Ofis ve resmi ortamlar için şık pantolon',
    price: 599.99,
    image: sıkpantolon,
    category: 'Alt Giyim',
    stock: 18,
    rating: 4.5,
    reviews: 112
  },
  {
    id: 8,
    name: 'Midi Etek',
    description: 'Zarif midi etek, her ortamda şık görünüm',
    price: 349.99,
    image: midietek,
    category: 'Alt Giyim',
    stock: 14,
    rating: 4.6,
    reviews: 78
  },

  // Üst Giyim
  {
    id: 9,
    name: 'Pamuklu Tişört',
    description: 'Yumuşak pamuklu tişört, günlük kullanım için',
    price: 149.99,
    image: pamuklutisort,
    category: 'Üst Giyim',
    stock: 35,
    rating: 4.4,
    reviews: 189
  },
  {
    id: 10,
    name: 'Gömlek',
    description: 'Klasik gömlek, ofis ve resmi ortamlar için',
    price: 299.99,
    image: gomlek,
    category: 'Üst Giyim',
    stock: 22,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 11,
    name: 'Kazak',
    description: 'Sıcak kazak, soğuk havalarda konfor',
    price: 249.99,
    image: kazak,
    category: 'Üst Giyim',
    stock: 28,
    rating: 4.5,
    reviews: 167
  },
  {
    id: 12,
    name: 'Bluz',
    description: 'Zarif bluz, her ortamda şık görünüm',
    price: 199.99,
    image: bluz,
    category: 'Üst Giyim',
    stock: 16,
    rating: 4.3,
    reviews: 93
  }
]; 