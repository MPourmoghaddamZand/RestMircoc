import React, { useContext, useState } from "react";
import { div } from "three/tsl";
import Button from "./util/Button";
import { tomanSVG } from "../../public/svg";
import { SharedContext } from "../Context";

const ProductBox = ({ img, title, info, price }) => {
  const {popUpIsOpen, setPopUpIsOpen} = useContext(SharedContext);
  return (
    <>
      <div
        className="w-full min-w-[315px] p-2 bg-white rounded-[40px] drop-shadow-md"
        onClick={() => setPopUpIsOpen(!popUpIsOpen)}
      >
        <div className="flex">
          <div className="w-1/2 relative">
            <div className="h-[140px]" />
            <div className="absolute -top-10 box bg-gradient-to-r from-[#ddd] via-white to-[#ddd] rounded-full drop-shadow-[0px_10px_20px_0px_rgba(0,0,0,0.32)] shadow-[inset_0px_0px_35px_0px_rgba(0,0,0,0.25)]">
              <img className="w-full max-w-[160px]" src={img} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-1/2 p-6 text-right ">
            <h2 className="text-[20px] font-Pinar-bold">{title}</h2>
            <h3 className="text-[14px] font-Pinar-medium text-disable">
              {info}
            </h3>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between">
          <div className="flex-1 p-2">
            <Button text={"+ افزودن"} />
          </div>
          <div className="flex justify-center items-center flex-1">
            <img className="w-6 pb-1" src={tomanSVG} alt="" />
            <p className="text-primary font-Pinar-extra text-[20px]">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
