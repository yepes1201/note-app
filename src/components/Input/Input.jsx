import React, { forwardRef } from "react";

export const Input = forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      className={`bg-transparent px-2 py-1 border-none outline-none rounded ${className}`}
      ref={ref}
      {...rest}
      autoComplete="off"
    />
  );
});
