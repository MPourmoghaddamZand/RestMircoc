import React, { useContext, useRef, useState, useEffect } from "react";
import Button from "./util/Button";
import { tomanSVG } from "../../public/svg";
import { SharedContext } from "../Context";
import DragSheet from "./util/DragSheet";
import NumberSection from "./NumberSection";

export default function InfoProduct({ item }) {
  const { setOpenProductId } = useContext(SharedContext)
  function closePopup() {
    // setPopUpIsOpen(false); // Close global popup
    setOpenProductId(null); // Close product-specific popup
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[98]"
        onMouseDown={closePopup}
      />
      <DragSheet
        onClose={closePopup}
        className="fixed bottom-0 left-0 right-0 bg-white z-[99] rounded-t-[24px] shadow-lg flex flex-col"
      >
        <div>
          <div className="w-2/12 h-2 mt-3 m-auto rounded-full bg-[#ddd]" />
          <div className="w-10 h-1.5 bg-gray-300 rounded-full mt-2 mx-auto" />
          <Box item={item} />
        </div>
      </DragSheet>
    </>
  );
}

const Box = ({ item }) => {
  const { cart, setCart } = useContext(SharedContext)
  function handleAddClick(event, item) {
    event.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }))
  }
  return (
    <div className="flex flex-col gap-10 py-5">
      <div className="flex px-5">
        <div className="w-[40%] relative">
          <div className="bg-gradient-to-r from-[#ddd] via-white to-[#ddd] rounded-full shadow-[inset_0px_0px_35px_0px_rgba(0,0,0,0.95)]">
            <img className="w-full" src={item.image} alt="" />
          </div>
        </div>
        <div className="w-[60%] flex flex-col gap-3 p-6 text-right">
          <h2 className="text-[24px] font-Pinar-bold">{item.name}</h2>
          <h3 className="text-[14px] font-Pinar-medium text-disable">{item.detail}</h3>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between items-center gap-10 px-5">
        <div className="flex-1">
          {cart[item.id] ? (
            <NumberSection item={item} />
          ) : (
            <Button
              onClick={(event) => handleAddClick(event, item)}
              text={"افزودن +"}
            />
          )}
        </div>
        <div className="flex justify-center items-center flex-1">
          <img className="w-6 pt-2" src={tomanSVG} alt="" />
          <div>
            <p className="text-right text-[12px]">مجموع قیمت</p>
            <p className="text-primary font-Pinar-extra text-[20px]">{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
};
