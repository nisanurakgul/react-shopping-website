import { Category } from '../types';

// Import category images
import mont from '../assets/görseller/mont.png';
import evgiyimi from '../assets/görseller/evgiyimi.png';
import kotpantolon from '../assets/görseller/kotpantolon.png';
import gomlek from '../assets/görseller/gomlek.png';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Dış Giyim',
    description: 'Kışlık montlar, kabanlar ve dış giyim ürünleri',
    image: mont
  },
  {
    id: 2,
    name: 'İç Giyim',
    description: 'Pijamalar, iç çamaşırları ve ev giyim ürünleri',
    image: evgiyimi
  },
  {
    id: 3,
    name: 'Alt Giyim',
    description: 'Pantolonlar, etekler ve alt giyim ürünleri',
    image: kotpantolon
  },
  {
    id: 4,
    name: 'Üst Giyim',
    description: 'Tişörtler, gömlekler ve üst giyim ürünleri',
    image: gomlek
  }
]; 