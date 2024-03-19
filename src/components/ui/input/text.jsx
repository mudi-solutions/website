import React from "react";

export const Input = React.forwardRef(function Input({ type, placeholder, onChange, onBlur, name,error }, ref) {

  
  return (
    <div className="md:mb-4 mb-2 w-full">
    <input
    ref={ref}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      placeholder={placeholder}
      className={` w-full border border-gray-300 rounded-md h-14 py-2 px-4 outline-none focus:ring-1 ${error ? "border-red-400 focus:ring-red-700" : " focus:ring-blue-700 "}`}
    />
    </div>
  );
});
