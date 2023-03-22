import React from "react";

export const NoteLayout = ({ className, children }) => {
  return (
    <div
      className={`flex flex-col rounded border-2 drop-shadow-lg border-neutral-800 bg-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
};
