import { create } from "zustand";

export const useAuth = create((set) => {
  return {
    user: null,
    login: (user) => {
      return set(() => {
        return { user };
      });
    },
    logout: () => {
      return set(() => {
        return { user: null };
      });
    },
  };
});
