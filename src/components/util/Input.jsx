import React from 'react'

const Input = ({ text, placeholder }) => {
    return (
        <div className='w-full'>
            <h2 className='text-right w-full pr-2 mb-1'>
                {text}
            </h2>
            <input className='rounded-full w-full text-center text-xs p-2' placeholder={placeholder} type="text" />
        </div>
    )
}

export default Input