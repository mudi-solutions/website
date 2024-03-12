import React from 'react'

export const Select = ({ placeholder}) => {
  return (
    <>
    <select className='w-full border md:mb-6 mb-2 border-gray-300 rounded-md h-14 py-2 px-4 outline-none focus:ring-1 focus:ring-blue-700' >
        <option>
            {placeholder}</option>
        
        <option value="excavator">Excavator</option>
        <option value="low bed trailer">Low Bed Trailer</option>
        <option value="dump truck - tipper">Dump Trucks - Tippers</option>
    </select>
    </>
  )
}
