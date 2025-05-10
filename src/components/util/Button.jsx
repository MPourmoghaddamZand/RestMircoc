import React from 'react'

const Button = ({ text, children, onClick, className, textClass = "text-white" }) => {
  return (
    <div onClick={onClick} className={`flex flex-row-reverse gap-2 justify-center items-center py-2 cursor-pointer bg-primary rounded-full text-[12px] ${className}`}>
      <p className={`font-Pinar-bold text-right [direction:rtl] ${textClass}`}> {text} </p>
      {children}
    </div>
  )
}

export default Button