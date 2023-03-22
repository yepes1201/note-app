import { useState } from "react";
import { doc, deleteDoc, getFirestore, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Button, NoteLayout } from "@/components";
import { useAuth, useNotes } from "@/store";

export const Note = ({ id, title, description }) => {
  const { user } = useAuth();
  const { deleteNote } = useNotes();
  const [fetching, setFetching] = useState(false);
  const [editing, setEditing] = useState(false);
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteDescription, setNoteDescription] = useState(description);

  const handleNoteDelete = async () => {
    try {
      setFetching(true);
      await deleteDoc(doc(getFirestore(), `${user.uid}/user/todos/${id}`));
      deleteNote(id);
    } catch (err) {
      toast.error("Oops.\nSomething went wrong when deleting the note");
    } finally {
      setFetching(false);
    }
  };

  const handleEditNote = async () => {
    try {
      setFetching(true);
      await updateDoc(doc(getFirestore(), `${user.uid}/user/todos/${id}`), {
        title: noteTitle,
        description: noteDescription,
      });
      setEditing(false);
    } catch (error) {
      toast.error("Oops.\nSomething went wrong when updating the note");
    } finally {
      setFetching(false);
    }
  };

  const handleCancelEditing = () => {
    setNoteTitle(title);
    setNoteDescription(description);
    setEditing(false);
  };

  return (
    <NoteLayout>
      <div
        suppressContentEditableWarning={true}
        onBlur={({ target }) => setNoteTitle(target.innerText)}
        contentEditable={editing}
        className="px-2 pt-2 font-bold outline-none"
      >
        {noteTitle}
      </div>
      <div
        suppressContentEditableWarning={true}
        onBlur={({ target }) => setNoteDescription(target.innerText)}
        contentEditable={editing}
        className="px-2 pb-4 font-light outline-none"
      >
        {noteDescription}
      </div>
      <div className="flex justify-end flex-1">
        {!editing ? (
          <Button
            disabled={fetching}
            onClick={() => setEditing(true)}
            className="bg-blue-600 rounded-full text-xs w-9 h-9 self-end mr-3 mb-3 disabled:bg-gray-400 disabled:opacity-20"
          >
            <i className="fa-solid fa-pen"></i>
          </Button>
        ) : (
          <Button
            disabled={fetching}
            onClick={handleEditNote}
            className="bg-green-600 rounded-full text-xs w-9 h-9 self-end mr-3 mb-3 disabled:bg-gray-400 disabled:opacity-20"
          >
            <i className="fa-solid fa-floppy-disk"></i>
          </Button>
        )}
        {editing ? (
          <Button
            disabled={fetching}
            onClick={handleCancelEditing}
            className="bg-red-600 rounded-full text-xs w-9 h-9 self-end mr-3 mb-3 disabled:bg-gray-400 disabled:opacity-20"
          >
            <i className="fa-solid fa-xmark"></i>
          </Button>
        ) : (
          <Button
            disabled={fetching}
            onClick={handleNoteDelete}
            className="bg-red-600 rounded-full text-xs w-9 h-9 self-end mr-3 mb-3 disabled:bg-gray-400 disabled:opacity-20"
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        )}
      </div>
    </NoteLayout>
  );
};
