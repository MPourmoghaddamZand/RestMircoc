import React from 'react'
import {searchSVG} from '../../public/svg/index'
const Searchbar = () => {
  return (
    <div className='flex justify-center items-center mb-20 bg-gray w-[80%] rounded-full m-auto mt-7'>
        <input className='bg-transparent py-4 text-right mr-2.5 placeholder:text-black placeholder:opacity-50' placeholder='جست و جو' type="text" name="" id="" />
        <img src={searchSVG} className='w-5 !focus:outline-none active:outline-none' alt="searchSVG" />
    </div>
  )
}

export default Searchbar