import React, { useEffect, useRef, useState } from "react";
import { use } from "react";

const Categorylist = [
  { id: 1, title: "پیتزا", svg: "/svg/pizza.svg" },
  { id: 2, title: "ساندویچ", svg: "/svg/sandwich.svg" },
  { id: 3, title: "برگر", svg: "/svg/burgericon.svg" },
  { id: 4, title: "نوشیدنی", svg: "/svg/drinkicon.svg" },
];

const CategoryItem = ({ title, children, active, onClick , svg }) => {
  return (
    <div
      className={`flex gap-1 min-w-32 py-2 px-5 rounded-full drop-shadow-md justify-center items-center cursor-pointer 
                ${active ? "bg-primary" : "bg-white"}`}
      onClick={onClick}
    >
      <div className={`${active ? "filter invert" : ""}`}>
        <img src={svg} alt={title} className="w-full h-full object-contain" />
      </div>
      <div>
        <p className={`${active ? "text-white" : ""}`}>{title}</p>
      </div>
    </div>
  );
};

const Category = () => {
  const [activeId, setActiveId] = useState(Categorylist[0].id);
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
      <div
        className={`w-full bg-bg-color z-50 sticky top-[88px] drop-shadow-md ${
          isSticky ? "drop-shadow-2xl" : "drop-shadow-none"
        }`}
      >
        <div
          className={`flex  gap-5 mt-7 mb-14 px-5 pb-5 overflow-x-auto scroll-smooth hide-scrollbar`}
        >
          {Categorylist.map((item) => (
            <CategoryItem
              key={item.id}
              title={item.title}
              active={activeId === item.id}
              onClick={() => setActiveId(item.id)}
              svg={item.svg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
