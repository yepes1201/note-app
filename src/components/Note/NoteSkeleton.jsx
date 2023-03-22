import { NoteLayout } from "@/components";

export const NoteSkeleton = () => {
  return (
    <NoteLayout className="bg-gray-500 border-gray-500 opacity-30">
      <div className="mx-2 mt-2 rounded-sm w-2/3 h-4 bg-gray-400"></div>
      <div className="mx-2 mt-2 rounded-sm w-5/6 h-4 bg-gray-400"></div>
      <div className="mx-2 mt-2 mb-4 rounded-sm w-5/6 h-4 bg-gray-400"></div>
    </NoteLayout>
  );
};
