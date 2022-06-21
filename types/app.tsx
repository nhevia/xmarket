export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  image: string;
  rating: { rate: number; count: number };
  stock: boolean;
}

export interface PropsWithChildren {
  children: React.ReactNode;
}
