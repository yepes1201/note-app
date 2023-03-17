import { NoteLayout } from "@/components";

export const Note = ({ id, title, description }) => {
  return (
    <NoteLayout>
      <p className="px-2 pt-2 font-bold">{title}</p>
      <p className="px-2 pb-4 font-light">{description}</p>
    </NoteLayout>
  );
};
