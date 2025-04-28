import React from 'react'

const Button = ({ text, onClick, className }) => {
  return (
    <div onClick={onClick} className={`flex justify-center items-center py-2 cursor-pointer bg-primary rounded-full ${className}`}>
      <p className='font-Pinar-bold text-[12px] text-white text-right [direction:rtl]'> {text} </p>
    </div>
  )
}

export default Button