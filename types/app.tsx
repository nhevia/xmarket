export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  image: string;
  rating: { rate: number; count: number };
  seller: string;
  stock?: boolean;
}

export interface ProductCart extends Product {
  count: number;
  size?: string;
  color?: string;
}

export interface PropsWithChildren {
  children: React.ReactNode;
}
