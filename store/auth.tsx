import create from 'zustand';

interface AuthStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (flag: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (flag: boolean) =>
    set((state) => ({ ...state, isLoggedIn: flag })),
}));
