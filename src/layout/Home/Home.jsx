import { NoteForm, Navbar } from "@/components";

export const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="bg-neutral-700 h-full">
        <div className="container m-auto mt-4">
          <NoteForm />
        </div>
      </div>
    </div>
  );
};
