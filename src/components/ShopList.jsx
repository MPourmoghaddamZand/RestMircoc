import React, { useContext, useState } from 'react'
import { SharedContext } from '../Context'
import menuData from '../data/menu.json'

const ShopList = () => {
    const { cart, setCart } = useContext(SharedContext)
    const [order , setOrder] = useState([])
    const ShopList =
        Object.entries(cart).map(([itemId, quantity]) => {
            const item = menuData.find((menuItem) => menuItem.id === parseInt(itemId));
            if (!item) return null; // اگر آیتم پیدا نشد، چیزی نمایش ندهد
            return (
                <li key={itemId} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                    <span>{item.name}</span>
                    <span>: {quantity} عدد</span>
                </li>
            );
        })



    return (
        <div className='flex justify-center'>
            {ShopList}
        </div>
    )
}

export default ShopList