import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Product, ProductCart } from 'types/app';

interface CartStore {
  total: number;
  quantity: number;
  products: ProductCart[];
  addProduct: (product: Product) => void;
  removeProduct: (product: ProductCart) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        total: 0,
        quantity: 0,
        addProduct: (product) => {
          set(
            (state) => ({
              quantity: state.quantity + 1,
              total: state.total + product.price,
              products: [
                ...state.products,
                {
                  ...product,
                  cartId:
                    Date.now().toString(36) +
                    Math.random().toString(36).substring(2),
                },
              ],
            }),
            false,
            'addProduct'
          );
        },
        removeProduct: (product) => {
          set(
            (state) => ({
              quantity: state.quantity - 1,
              total: state.total - product.price,
              products: state.products.filter(
                (p) => p.cartId !== product.cartId
              ),
            }),
            false,
            'removeProduct'
          );
        },
        clearCart: () => {
          set(() => ({
            products: [],
            total: 0,
            quantity: 0,
          }));
        },
      }),
      {
        name: 'CartStore',
      }
    )
  )
);
