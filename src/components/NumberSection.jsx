import React, { useContext, useEffect, useState } from 'react'
import { minusSVG, plussSVG } from '../../public/svg'
import { SharedContext } from '../Context';
import { events } from '@react-three/fiber';
const NumberSection = ({ onClick, item }) => {
  const { cart, setCart } = useContext(SharedContext);
  const toPersianDigits = (str) => {
    return String(str).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };
  
  function addToCart(item, event) {
    event.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }))
    console.log(cart)
  }
  function removeFromCart(item, event) {
    event.stopPropagation();
    setCart((prev) => {
      if (!prev[item.id])
        return
      const newCart = { ...prev }
      newCart[item.id]--;
      if (newCart[item.id] <= 0) {
        delete newCart[item.id]
      }
      return newCart
    })
  }
  return (
    <div className='flex gap-5 justify-center items-center w-full' >
      <div className='cursor-pointer' onClick={(event) => addToCart(item, event)}><img src={plussSVG} alt="" /></div>
      <div><p>{toPersianDigits(cart[item.id]) || toPersianDigits(0)}</p></div>
      <div className='cursor-pointer' onClick={(event) => removeFromCart(item, event)}><img src={minusSVG} alt="" /></div>
    </div>
  );
};

export default NumberSection;
