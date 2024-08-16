import React from "react";

const Button = ({ children, handleCLick }) => {
  return (
    <button
      className="px-2 py-1 rounded-[4px] bg-gray-200 hover:bg-green-500 hover:text-white transition-all ease-in duration-300 font-bold"
      onClick={handleCLick}
    >
      {children}
    </button>
  );
};

export default Button;
