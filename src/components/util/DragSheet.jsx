import React, { useRef, useState, useEffect } from "react";

const DragSheet = ({ children, className = "", onClose, ...props }) => {
  const startY = useRef(0);
  const [translation, setTranslation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const preventRefresh = (e) => {
      if (dragging && e.cancelable) e.preventDefault();
    };
    window.addEventListener("touchmove", preventRefresh, { passive: false });
    return () => {
      window.removeEventListener("touchmove", preventRefresh);
    };
  }, [dragging]);

  const startDrag = (y) => {
    setDragging(true);
    setAnimate(false);
    startY.current = y;
  };
  const moveDrag = (y) => {
    if (!dragging) return;
    const delta = y - startY.current;
    if (delta > 0) setTranslation(delta);
  };

  const endDrag = (e) => {
    setDragging(false);
    const endY = e?.changedTouches?.[0]?.clientY ?? e?.clientY ?? 0;
    const delta = endY - startY.current;

    if (delta > 100) {
      setAnimate(true);
      setTranslation(500);
      setTimeout(() => {
        onClose?.();
        setTranslation(0);
      }, 300);
    } else {
      setAnimate(true);
      setTranslation(0);
    }
  };

  return (
    <div
      onTouchStart={(e) => startDrag(e.touches[0].clientY)}
      onTouchMove={(e) => {
        moveDrag(e.touches[0].clientY);
      }}
      onTouchEnd={(e) => endDrag(e)}
      onMouseDown={(e) => startDrag(e.clientY)}
      onMouseMove={(e) => {
        if (dragging) moveDrag(e.clientY);
      }}
      onMouseUp={(e) => endDrag(e)}
      onMouseLeave={() => dragging && endDrag()}
      style={{
        transform: `translateY(${translation}px)`,
        transition: animate ? "transform 0.3s ease" : "none",
      }}
      className={`touch-none overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default DragSheet;
