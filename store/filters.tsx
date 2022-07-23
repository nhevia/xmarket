import create from 'zustand';

interface FilterStore {
  filter: string;
  isFiltering: boolean;
  setFilter: (filter: string) => void;
  setIsFiltering: (flag: boolean) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filter: '',
  isFiltering: false,
  setFilter: (filter: string) => {
    set((state) => ({ ...state, filter: filter }));
  },
  setIsFiltering: (flag: boolean) => {
    set((state) => ({ ...state, isFiltering: flag }));
  },
}));
