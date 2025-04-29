import React, { useContext } from 'react'
import { chevronSVG, shopEmptySVG } from '../../public/svg'
import Button from './util/Button'
import { SharedContext } from '../Context'
import { Link } from 'react-router-dom'
import ShopList from './ShopList'
import { div } from 'three/tsl'

const ShopCart = () => {
    const { cart, setCart } = useContext(SharedContext)
    const isCartEmpty = Object.keys(cart).length === 0;
    console.log(Object.keys(cart).length)
    return (
        <div className='w-full h-screen overflow-x-hidden font-Pinar-medium relative flex flex-col p-8'>
            <nav className='flex justify-between'>
                <div className='flex-1 cursor-pointer'>
                    <Link to={'/'}>
                        <div><img src={chevronSVG} alt="" /></div>
                    </Link>
                </div>
                <div className='flex-1'><h2 className='text-center font-Pinar-bold'>سبد خرید</h2></div>
                <div className='flex-1'></div>
            </nav>
            {isCartEmpty ? <div className='flex-grow flex justify-center'>
                <div className='flex flex-col text-center justify-center items-center gap-10'>
                    <div className='pr-5'>
                        <img src={shopEmptySVG} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-lg font-Pinar-bold'>سبد خرید شما خالی است</h2>
                        <h4 className='text-xs text-gray-400'>
                            از منوی فروشگاه اقدام به اضافه کردن محصولات کنید
                        </h4>
                    </div>
                </div>
            </div> :
                <div className='flex-grow flex justify-center'>
                    <ShopList />
                </div>
            }
            <div>
                {isCartEmpty ?
                    <Link to={'/'}>
                        <Button text={"رفتن به منو"} className='bg-primary rounded-[16px] py-3 text-white font-Pinar-bold text-[16px] w-full' />
                    </Link>
                    :
                    <Button text={"ثبت سفارش"} className='bg-primary rounded-[16px] py-3 text-white font-Pinar-bold text-[16px] w-full' />
                }

            </div>
        </div>
    )
}

export default ShopCart