import React, { useState } from 'react'
import { minusSVG, plussSVG } from '../../public/svg'


const NumberSection = ({ onClick }) => {
  const [count, setCount] = useState(1);
  const [menuItems, setMenuItems] = useState([]);
  function handlePlus(event) {
    event.stopPropagation();
    setCount((prev) => prev += 1)
  }
  function handleMinus(event) {
    event.stopPropagation();
    if (count == 1) {
      onClick();
      return;
    }
    setCount((prev) => prev -= 1)
  }



  return (
    <div className='flex gap-5 justify-center items-center w-full' >
      <div className='cursor-pointer' onClick={handlePlus}><img src={plussSVG} alt="" /></div>
      <div><p>{count}</p></div>
      <div className='cursor-pointer' onClick={handleMinus} ><img src={minusSVG} alt="" /></div>
    </div>
  )
}

export default NumberSection