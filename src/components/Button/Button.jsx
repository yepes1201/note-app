import React, { forwardRef } from "react";

export const Button = forwardRef(
  ({ children, onClick, className, ...rest }, ref) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={`p-2 rounded font-semibold transition-colors ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
