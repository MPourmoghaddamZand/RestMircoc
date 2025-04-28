import React, { useContext, useEffect, useState } from 'react'
import { minusSVG, plussSVG } from '../../public/svg'
import { SharedContext } from '../Context';
import menuData from '../data/menu.json'
import { events } from '@react-three/fiber';
const NumberSection = ({ onClick, item }) => {
  const [menuItems, setMenuItems] = useState([]);
  const { cart, setCart } = useContext(SharedContext);
  useEffect(() => {
    setMenuItems(menuData)
  }, [])

  function addToCart(item, event) {
    event.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }))
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
      <div><p>{cart[item.id] || 0}</p></div>
      <div className='cursor-pointer' onClick={(event) => removeFromCart(item, event)}><img src={minusSVG} alt="" /></div>
    </div>
  );
};

export default NumberSection;
