import { create } from "zustand";
import { useNotes } from "./useNotes";

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
        useNotes.getState().unsetNotes();
        return { user: null };
      });
    },
  };
});
