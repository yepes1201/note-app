import { useState } from "react";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { Button, NoteLayout } from "@/components";
import { useAuth, useNotes } from "@/store";

export const Note = ({ id, title, description }) => {
  const { user } = useAuth();
  const { deleteNote } = useNotes();
  const [deleting, setDeleting] = useState(false);

  const handleNoteDelete = async () => {
    try {
      setDeleting(true);
      await deleteDoc(doc(getFirestore(), `${user.uid}/user/todos/${id}`));
      deleteNote(id);
    } catch (err) {
      console.log(err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <NoteLayout>
      <p className="px-2 pt-2 font-bold">{title}</p>
      <p className="px-2 pb-4 font-light">{description}</p>
      <Button
        disabled={deleting}
        onClick={handleNoteDelete}
        className="bg-red-600 rounded-full text-xs w-9 h-9 self-end mr-3 mb-3 disabled:bg-gray-400 disabled:opacity-20"
      >
        <i className="fa-solid fa-trash"></i>
      </Button>
    </NoteLayout>
  );
};
