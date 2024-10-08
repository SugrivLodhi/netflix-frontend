import React from 'react'

const Input = ({type="text",placeholder,onChange}) => {
  return (
    <input
     className='w-full px-2 py-4 outline-none border bg-black  text-white focus:ring-white focus:ring-2 placeholder:text-lg text-lg border-gray-500 placeholder:text-gray-400 rounded-md '
     type={type}
     placeholder={placeholder}
     onChange={(e)=>onChange(e)}
    />
  )
}

export default Input