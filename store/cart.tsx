import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ProductCart } from 'types/app';

interface CartStore {
  total: number;
  quantity: number;
  products: ProductCart[];
  addProduct: (product: ProductCart) => void;
  subtractProduct: (product: ProductCart) => void;
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
            (state) => {
              const isPresent = state.products.find((p) => p.id === product.id);

              if (!isPresent) {
                return {
                  quantity: state.quantity + 1,
                  total: state.total + product.price,
                  products: [
                    ...state.products,
                    {
                      ...product,
                      count: 1,
                    },
                  ],
                };
              }

              const updatedProducts = state.products.map((p) =>
                p.id === product.id ? { ...p, count: p.count + 1 } : p
              );

              return {
                quantity: state.quantity + 1,
                total: state.total + product.price,
                products: updatedProducts,
              };
            },
            false,
            'addProduct'
          );
        },
        subtractProduct: (product) => {
          set(
            (state) => {
              if (product.count <= 1) {
                return {
                  quantity: state.quantity - 1,
                  total: state.total - product.price,
                  products: state.products.filter((p) => p.id !== product.id),
                };
              }

              return {
                quantity: state.quantity - 1,
                total: state.total - product.price,
                products: state.products.map((p) =>
                  p.id === product.id ? { ...p, count: p.count - 1 } : p
                ),
              };
            },
            false,
            'subtractProduct'
          );
        },
        removeProduct: (product) => {
          set(
            (state) => ({
              quantity: state.quantity - product.count,
              total: state.total - product.price * product.count,
              products: state.products.filter((p) => p.id !== product.id),
            }),
            false,
            'removeProduct'
          );
        },
        clearCart: () => {
          set(
            () => ({
              products: [],
              total: 0,
              quantity: 0,
            }),
            false,
            'clearCart'
          );
        },
      }),
      {
        name: 'CartStore',
      }
    )
  )
);
