import React from "react";

export const Loading = () => {
  return (
    <div className="absolute w-full h-full flex items-center justify-center bg-neutral-700">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
