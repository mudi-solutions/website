import React from "react";

export const Input = ({ placeholder, type }) => {
  return (
    <input type={type} placeholder={placeholder} className="w-full border md:mb-4 mb-2 border-gray-300 rounded-md h-14 py-2 px-4 outline-none focus:ring-1 focus:ring-blue-700 " />
  );
};
