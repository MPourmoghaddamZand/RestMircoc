import React, { useState } from 'react'
import { BurgerSVG } from './svg/SvgCategory'


const Categorylist = [
    { id: 1, title: "پیتزا" },
    { id: 2, title: "ساندویچ" },
    { id: 3, title: "برگر" },
    { id: 4, title: "نوشیدنی" },
]

const CategoryItem = ({ title, children }) => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive((prev) => !prev)
    }
    return (
        <>
            <div className={`flex gap-1 min-w-32 py-2 px-5 rounded-full  drop-shadow-md justify-center items-center cursor-pointer 
                ${active ? 'bg-primary' : 'bg-white'}`}
                onClick={handleClick}
            >
                <div className={`${active ? 'svg-active' : ''}`} >
                    {children}
                </div>
                <div><p className={` ${active ? 'text-white' : ''}`}>{title}</p></div>
            </div>
        </>
    )
}


const Category = () => {
    return (
        <div className='flex gap-5 my-20 overflow-x-auto'>
            {Categorylist.map((item) => (
                <CategoryItem title={item.title}>
                    <BurgerSVG />
                </CategoryItem>
            ))}
        </div>
    )
}

export default Category