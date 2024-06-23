"use client"
import React from 'react'

export const Select = React.forwardRef(function Select({onChange, onBlur, name, options, placeholder, error}, ref) {  return (
  <>
  <select ref={ref} onChange={onChange} onBlur={onBlur} name={name}       className={` w-full border border-gray-300 rounded-md  py-2 px-4 outline-none focus:ring-1 ${error ? "border-red-400 focus:ring-red-700" : " focus:ring-blue-700 "}`}
 >
      
          {options?.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
      
      
  </select>
  </>
)}) 



