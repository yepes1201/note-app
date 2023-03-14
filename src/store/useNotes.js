import { create } from "zustand";

export const useNotes = create((set, get) => {
  return {
    notes: [],
    setNotes: (notes) => {
      return set(() => {
        return { notes };
      });
    },
    addNote: (note) => {
      return set(() => {
        return { notes: [...get().notes, note] };
      });
    },
    unsetNotes: () => set(() => ({ notes: [] })),
  };
});
