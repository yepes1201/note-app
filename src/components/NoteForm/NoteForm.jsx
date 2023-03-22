import { useRef, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { Textarea, Input, Button } from "@/components";
import { useAuth, useNotes } from "@/store";

export const NoteForm = () => {
  const { user } = useAuth();
  const { addNote } = useNotes();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [creating, setCreating] = useState(false);

  const handleSaveNote = async () => {
    try {
      setCreating(true);
      const noteRef = collection(getFirestore(), `${user.uid}/user/todos`);
      const note = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        timecreation: new Date().getTime(),
      };
      const doc = await addDoc(noteRef, note);
      addNote({ id: doc.id, ...note });
      titleRef.current.value = "";
      descriptionRef.current.value = "";
    } catch (error) {
      toast.error("Oops.\nSomething went wrong when creating the note");
    } finally {
      setCreating(false);
    }
  };

  return (
    <>
      <div className="flex flex-col m-auto w-3/5 sm:w-1/2 lg:w-1/3 rounded border-2 drop-shadow-lg border-neutral-800 bg-neutral-800">
        <Input ref={titleRef} name="title" placeholder="Title" />
        <Textarea
          ref={descriptionRef}
          className="resize-none h-24"
          name="description"
          placeholder="Take a note..."
        />
        <Button
          disabled={creating}
          onClick={handleSaveNote}
          className="absolute right-2 -bottom-4 bg-yellow-500 rounded-full w-9 h-9 flex items-center justify-center hover:bg-yellow-400 disabled:bg-gray-400"
        >
          <i className="fa-solid fa-plus"></i>
        </Button>
      </div>
    </>
  );
};
