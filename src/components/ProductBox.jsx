import React, { useContext, useState } from "react";
import { div } from "three/tsl";
import Button from "./util/Button";
import { tomanSVG } from "../../public/svg";
import { SharedContext } from "../Context";
import NumberSection from "./NumberSection";
import InfoProduct from "./InfoProduct";

const ProductBox = ({ item }) => {
  const { cart, setCart, openProductId, setOpenProductId } = useContext(SharedContext);

  function handlePopUpInfo(itemId) {
    setOpenProductId((prev) => (prev === itemId ? null : itemId)); // Toggle popup for the specific item
  }
  function handleAddClick(event, item) {
    event.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }))
  }
  return (
    <>
      {openProductId === item.id && <InfoProduct item={item} />}
      <div
        className="w-full min-w-[315px] p-2 bg-white rounded-[40px] drop-shadow-md"
        onClick={() => handlePopUpInfo(item.id)}
      >
        <div className="flex">
          <div className="w-1/2 relative">
            <div className="h-[140px]" />
            <div className="absolute -top-10 box bg-gradient-to-r from-[#ddd] via-white to-[#ddd] rounded-full drop-shadow-[0px_10px_20px_0px_rgba(0,0,0,0.32)] shadow-[inset_0px_0px_35px_0px_rgba(0,0,0,0.25)]">
              <img className="w-full max-w-[160px]" src={item.image} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-1/2 p-6 text-right ">
            <h2 className="text-[20px] font-Pinar-bold">{item.name}</h2>
            <h3 className="text-[14px] font-Pinar-medium text-disable">
              {item.detail}
            </h3>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between">
          <div className="flex-1 p-2">
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
            <img className="w-6 pb-1" src={tomanSVG} alt="" />
            <p className="text-primary font-Pinar-extra text-[20px]">{item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
