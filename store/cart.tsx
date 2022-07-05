import create from 'zustand';
import { Product, ProductCart } from 'types/app';

interface CartStore {
  products: ProductCart[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({
      products: [
        ...state.products,
        {
          ...product,
          cartId:
            Date.now().toString(36) + Math.random().toString(36).substring(2),
        },
      ],
    }));
  },
  removeProduct: (id) => {
    set((state) => ({
      products: state.products.filter((p) => p.cartId !== id),
    }));
  },
}));
