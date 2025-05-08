import React, { useEffect, useRef, useState } from 'react'
import { BurgerSVG } from './svg/SvgCategory'

const Categorylist = [
    { id: 1, title: "پیتزا" },
    { id: 2, title: "ساندویچ" },
    { id: 3, title: "برگر" },
    { id: 4, title: "نوشیدنی" },
]

const CategoryItem = ({ title, children, active, onClick }) => {
    return (
        <div
            className={`flex gap-1 min-w-32 py-2 px-5 rounded-full drop-shadow-md justify-center items-center cursor-pointer 
                ${active ? 'bg-primary' : 'bg-white'}`}
            onClick={onClick}
        >
            <div className={`${active ? 'svg-active' : ''}`}>
                {children}
            </div>
            <div>
                <p className={`${active ? 'text-white' : ''}`}>{title}</p>
            </div>
        </div>
    )
}

const Category = () => {
    const [activeId, setActiveId] = useState(null)
    const [isSticky, setIsSticky] = useState(false);
    const sentinelRef = useRef(null);
    useEffect(() => {
        const el = sentinelRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: 1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return (
        <>
            <div ref={sentinelRef} style={{ height: 1 }} />
            <div className={`w-full bg-bg-color z-10 sticky top-[88px] drop-shadow-md ${isSticky ? "drop-shadow-lg" : "drop-shadow-none"}`}>
                <div className={`flex  gap-5 mt-7 mb-14 mx-5 pb-5`} >
                    {Categorylist.map((item) => (
                        <CategoryItem
                            key={item.id}
                            title={item.title}
                            active={activeId === item.id}
                            onClick={() => setActiveId(item.id)}
                        >
                            <BurgerSVG />
                        </CategoryItem>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Category
