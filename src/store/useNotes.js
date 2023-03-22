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
    deleteNote: (noteId) => {
      return set(() => {
        return { notes: get().notes.filter((note) => note.id !== noteId) };
      });
    },
    unsetNotes: () => set(() => ({ notes: [] })),
  };
});
