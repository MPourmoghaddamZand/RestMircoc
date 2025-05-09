import React, { useEffect, useRef, useState } from "react";
import categoryData from "../data/category.json";

const CategoryItem = React.forwardRef(
  ({ title, active, onClick, svg }, ref) => (
    <div
      ref={ref}
      className={`flex gap-2 min-w-40 py-2 px-5 rounded-full drop-shadow-md justify-center items-center cursor-pointer 
      ${active ? "bg-primary" : "bg-white"}`}
      onClick={onClick}
    >
      <div className={`${active ? "filter invert" : ""}`}>
        <img src={svg} alt={title} className="w-full h-full object-contain" />
      </div>
      <p className={`text-[18px] ${active ? "text-white" : ""}`}>{title}</p>
    </div>
  )
);

const Category = () => {
  const [activeId, setActiveId] = useState(categoryData[0].category);
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const isClickScrolling = useRef(false);

  const handleClick = (category, idx) => {
    setActiveId(category);
    isClickScrolling.current = true;
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const itemNode = itemRefs.current[idx];
    const containerNode = containerRef.current;
    if (itemNode && containerNode) {
      const scrollLeft =
        itemNode.offsetLeft -
        containerNode.offsetLeft -
        containerNode.clientWidth / 2 +
        itemNode.clientWidth / 2;
      containerNode.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

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

  // Intersection Observer برای سکشن‌ها
  useEffect(() => {
    const sectionIds = categoryData.map((cat) => cat.category);
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new window.IntersectionObserver(
      (entries) => {
        // پیدا کردن سکشنی که بیشترین درصد دیده شدن را دارد و حداقل 40% دیده شده
        let maxRatio = 0.4;
        let visibleId = null;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio && entry.isIntersecting) {
            maxRatio = entry.intersectionRatio;
            visibleId = entry.target.id;
          }
        });
        if (visibleId && !isClickScrolling.current) {
          setActiveId(visibleId);
          // اسکرول افقی دسته‌بندی
          const idx = categoryData.findIndex((c) => c.category === visibleId);
          const itemNode = itemRefs.current[idx];
          const containerNode = containerRef.current;
          if (itemNode && containerNode) {
            const scrollLeft =
              itemNode.offsetLeft -
              containerNode.offsetLeft -
              containerNode.clientWidth / 2 +
              itemNode.clientWidth / 2;
            containerNode.scrollTo({
              left: scrollLeft,
              behavior: "smooth",
            });
          }
        }
      },
      {
        root: null,
        rootMargin: "-160px 0px -60% 0px", // بالاتر: هدر و کتگوری، پایین: حساسیت کمتر
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [categoryData]);

  return (
    <>
      <div ref={sentinelRef} style={{ height: 1 }} />
      <div
        className={`w-full bg-bg-color z-50 sticky top-[88px] ${
          isSticky ? "[box-shadow:0px_10px_10px_#00000033]" : "drop-shadow-none"
        }`}
      >
        <div
          className="flex gap-5 mt-7 mb-14 px-5 pb-5 overflow-x-auto scroll-smooth hide-scrollbar"
          ref={containerRef}
        >
          {categoryData.map((item, idx) => (
            <CategoryItem
              key={item.id}
              title={item.title}
              active={activeId === item.category}
              onClick={() => handleClick(item.category, idx)}
              svg={item.svg}
              ref={(el) => (itemRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
