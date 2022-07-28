import create from 'zustand';

interface FilterStore {
  filter: string;
  isFiltering: boolean;
  productsFiltered: number;
  productsTotalAmount: number;
  setFilter: (filter: string) => void;
  setIsFiltering: (flag: boolean) => void;
  setProductsFiltered: (amount: number) => void;
  setProductsTotalAmount: (amount: number) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filter: '',
  isFiltering: false,
  productsFiltered: 0,
  productsTotalAmount: 0,
  setFilter: (filter: string) => {
    set((state) => ({ ...state, filter: filter.toLowerCase() }));
  },
  setIsFiltering: (flag: boolean) => {
    set((state) => ({ ...state, isFiltering: flag }));
  },
  setProductsFiltered: (amount: number) => {
    set((state) => ({ ...state, productsFiltered: amount }));
  },
  setProductsTotalAmount: (amount: number) => {
    set((state) => ({ ...state, productsTotalAmount: amount }));
  },
}));
