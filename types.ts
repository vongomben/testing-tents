
export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  imageUrl: string;
  isLimited?: boolean;
}

export interface MaterialCategory {
  id: string;
  name: string;
  imageUrl: string;
}

export type NavTab = 'home' | 'shop' | 'impact' | 'profile';
