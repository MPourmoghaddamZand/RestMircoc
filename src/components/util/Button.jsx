import React from 'react'

const Button = ({text}) => {
  return (
    <div className='flex justify-center items-center py-2 w-full bg-primary rounded-full'>
        <p className='font-Pinar-bold text-[12px] text-white text-right [direction:rtl]'> {text} </p>
    </div>
  )
}

export default Button