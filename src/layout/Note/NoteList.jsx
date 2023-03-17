import { Note, NoteSkeletonList } from "@/components";
import { useLoadNotes } from "@/hooks";
import { useNotes } from "@/store";

export const NoteList = () => {
  const { notes } = useNotes();
  const { loading, error } = useLoadNotes();

  if (loading) return <NoteSkeletonList />;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      {notes.length === 0 && <p>Create a note up there</p>}
      {notes.map(({ id, title, description }, i) => {
        return <Note key={id} title={title} description={description} />;
      })}
    </>
  );
};
