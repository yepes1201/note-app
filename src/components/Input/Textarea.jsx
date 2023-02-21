import { forwardRef } from "react";

export const Textarea = forwardRef(({ className, ...rest }, ref) => {
  return (
    <textarea
      className={`bg-transparent px-2 py-1 border-none outline-none rounded ${className}`}
      ref={ref}
      {...rest}
      autoComplete="off"
    ></textarea>
  );
});
