import { NoteForm, Navbar } from "@/components";
import { NoteList, NoteGrid } from "@/layout";

export const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="bg-neutral-700 h-full px-2">
        <div className="container m-auto mt-4">
          <NoteForm />
          <NoteGrid>
            <NoteList />
          </NoteGrid>
        </div>
      </div>
    </div>
  );
};
