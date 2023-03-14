export const NoteGrid = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 max-w-4xl m-auto">
      {children}
    </div>
  );
};
