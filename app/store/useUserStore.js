import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
  },
  clearUser: () => {
    set({ user: null });
  },
  initializeUser: () => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        set({ user: parsedUser });
      }
    }
  },
  resetUser: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    set({ user: null });
  },
}));

export default useUserStore;
