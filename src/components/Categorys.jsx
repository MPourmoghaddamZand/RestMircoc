import React, { useEffect, useRef, useState } from "react";
import { burgerSVG, drinkSVG, pizzaSVG, sandwichSVG } from "../../public/svg";
const categoryList = {
  پیتزا: pizzaSVG,
  ساندویچ: sandwichSVG,
  برگر: burgerSVG,
  نوشیدنی: drinkSVG,
};
const Cat = ({ img, title, alt, isSelected }) => {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center p-5 cursor-pointer">
        <img
          className={`${isSelected ? "size-10" : "size-12"}`}
          src={img}
          alt={alt}
        />
        <h2>{title}</h2>
      </div>
    </>
  );
};

const Categorys = () => {
  
  const [isSelected, setIsSelected] = useState(false);
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
        className={`mt-[20px] mb-[50px] sticky top-[72px] p-2 px-5 w-full rounded-b-[30px] bg-bg-color z-10 flex justify-between items-center transition-all duration-300
    ${isSticky ? "drop-shadow-lg" : "drop-shadow-none"}
    `}
      >
        {Object.keys(categoryList).map((key) => {
          return <Cat title={key} img={categoryList[key]} isSelected />;
        })}
      </div>
    </>
  );
};

export default Categorys;
