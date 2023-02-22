import { NoteForm, Navbar, Input, Textarea } from "@/components";

export const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="bg-neutral-700 h-full px-2">
        <div className="container m-auto mt-4">
          <NoteForm />
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 max-w-4xl m-auto">
            <div className="flex flex-col rounded border-2 drop-shadow-lg border-neutral-800 bg-neutral-800">
              <p className="px-2">This is a title</p>
              <p className="px-2 py-2">This is a description</p>
            </div>
            <div className="flex flex-col rounded border-2 drop-shadow-lg border-neutral-800 bg-neutral-800">
              <p className="px-2">This is a title</p>
              <p className="px-2 py-2">This is a description</p>
            </div>
            <div className="flex flex-col rounded border-2 drop-shadow-lg border-neutral-800 bg-neutral-800">
              <p className="px-2">This is a title</p>
              <p className="px-2 py-2">This is a description</p>
            </div>
            <div className="flex flex-col rounded border-2 drop-shadow-lg border-neutral-800 bg-neutral-800">
              <p className="px-2">This is a title</p>
              <p className="px-2 py-2">This is a description</p>
            </div>
            <div className="flex flex-col rounded border-2 drop-shadow-lg border-neutral-800 bg-neutral-800">
              <p className="px-2">This is a title</p>
              <p className="px-2 py-2">This is a description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
