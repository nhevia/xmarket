import create from 'zustand';

interface FilterStore {
  filter: string;
  setFilter: (filter: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filter: '',
  setFilter: (filter: string) => {
    set((state) => ({ ...state, filter: filter }));
  },
}));
