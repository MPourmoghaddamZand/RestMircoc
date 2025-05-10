import React, { useContext, useEffect, useState } from 'react'
import { SharedContext } from '../Context'
import NumberSection from './NumberSection'
import axios from 'axios'

const ShopList = () => {
    const { cart, setCart } = useContext(SharedContext)
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/menu")
            .then((response) => {
                setMenu(response.data);
            })
            .catch((error) => {
                console.error("Error fetching menu:", error);
            });
    }, []);
    const ShopList =
        Object.entries(cart).map(([itemId, quantity]) => {
            const item = menu.find((menuItem) => menuItem.id === parseInt(itemId));
            if (!item) return null; // اگر آیتم پیدا نشد، چیزی نمایش ندهد
            const backendUrl = "http://localhost:5000";
            const imageUrl = `${backendUrl}${item.image}`;
            return (
                <li key={itemId} className="flex items-center w-full justify-center gap-4">
                    <div className='flex justify-center w-full gap-2 px-10 py-2 bg-white rounded-[20px]'>
                        <div className='w-24'><img src={imageUrl} alt="" /></div>
                        <div>
                            <div>
                                <h2 className='font-Pinar-bold text-right'>{item.name}</h2>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div></div>
                                <div><NumberSection item={item} /></div>
                            </div>
                        </div>
                    </div>
                </li>
            );
        })



    return (
        <div className='flex justify-center my-10'>
            <ul className='flex gap-2 flex-col'>
                {ShopList}
            </ul>
        </div>
    )
}

export default ShopList