import { useRef } from "react";
import { Textarea, Input, Button } from "@/components";

export const NoteForm = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSaveNote = () => {};

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
          onClick={handleSaveNote}
          className="absolute right-2 -bottom-4 bg-yellow-500 rounded-full w-9 h-9 flex items-center justify-center"
        >
          <i className="fa-solid fa-plus"></i>
        </Button>
      </div>
    </>
  );
};
