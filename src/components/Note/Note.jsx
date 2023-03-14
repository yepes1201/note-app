export const Note = ({ id, title, description }) => {
  return (
    <div className="flex flex-col rounded border-2 drop-shadow-lg border-neutral-800 bg-neutral-800">
      <p className="px-2 pt-2">{title}</p>
      <p className="px-2 py-4">{description}</p>
    </div>
  );
};
