import React from "react";
import ModelCanvas from "./3D/ModelCanvas";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="flex flex-row-reverse w-[90%] text-xl bg-secound rounded-[30px] py-9 mt-10 mx-auto">
        <div className="flex-1">
          <ModelCanvas />
        </div>
        <div className="flex-1 ml-9 text-right">
          <h3 className="font-Pinar-medium text-white text-[14px] leading-5 font-bold">
            تخفیف ویژه
            <br />
            برای دسته بندی
          </h3>
          <h2 className="font-Pinar-extra text-nowrap mt-5 text-yellow font-extrabold text-5xl">
            برگر ها
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
