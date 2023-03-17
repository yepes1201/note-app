import { NoteSkeleton } from "@/components";

export const NoteSkeletonList = () => {
  const skeletons = Array(9).fill(null);
  return (
    <>
      {skeletons.map(() => {
        return <NoteSkeleton />;
      })}
    </>
  );
};
