import React, { useContext, useRef, useState, useEffect } from "react";
import Button from "./util/Button";
import { tomanSVG } from "../../public/svg";
import { SharedContext } from "../Context";
import DragSheet from "./util/DragSheet";

export default function InfoProduct({ img, title, info, price }) {
  const { popUpIsOpen, setPopUpIsOpen } = useContext(SharedContext);
  if (!popUpIsOpen) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-10"
        onMouseDown={() => setPopUpIsOpen(false)}
      />
      <DragSheet
        onClose={() => setPopUpIsOpen(false)}
        className="fixed bottom-0 left-0 right-0 bg-white z-20 rounded-t-[24px] shadow-lg flex flex-col"
      >
        <div>
          <div className="w-2/12 h-2 mt-3 m-auto rounded-full bg-[#ddd]" />
          <div className="w-10 h-1.5 bg-gray-300 rounded-full mt-2 mx-auto" />
          <Box img={img} title={title} info={info} price={price} />
        </div>
      </DragSheet>
    </>
  );
}

const Box = ({ img, title, info, price }) => (
  <div className="flex flex-col gap-10 py-5">
    <div className="flex px-5">
      <div className="w-[40%] relative">
        <div className="bg-gradient-to-r from-[#ddd] via-white to-[#ddd] rounded-full shadow-[inset_0px_0px_35px_0px_rgba(0,0,0,0.95)]">
          <img className="w-full" src={img} alt="" />
        </div>
      </div>
      <div className="w-[60%] flex flex-col gap-3 p-6 text-right">
        <h2 className="text-[24px] font-Pinar-bold">{title}</h2>
        <h3 className="text-[14px] font-Pinar-medium text-disable">{info}</h3>
      </div>
    </div>
    <div className="flex flex-row-reverse justify-between items-center gap-10 px-5">
      <div className="flex-1">
        <Button text={"+ افزودن"} />
      </div>
      <div className="flex justify-center items-center flex-1">
        <img className="w-6 pt-2" src={tomanSVG} alt="" />
        <div>
          <p className="text-right text-[12px]">مجموع قیمت</p>
          <p className="text-primary font-Pinar-extra text-[20px]">{price}</p>
        </div>
      </div>
    </div>
  </div>
);
