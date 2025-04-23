import React, { useContext, useState } from "react";
import { minusSVG, plussSVG } from "../../public/svg";
import { SharedContext } from "../Context";

const NumberSection = ({ onClick }) => {
  const {setShopCount } = useContext(SharedContext);
  const [count, setCount] = useState(1);
  function handlePlus(event) {
    event.stopPropagation();
    setCount((prev) => (prev += 1));
    setShopCount((prev) => (prev += 1));
  }
  function handleMinus(event) {
    event.stopPropagation();
    if (count == 1) {
      onClick();
      return;
    }
    setCount((prev) => (prev -= 1));
    setShopCount((prev) => (prev -= 1));
  }
  return (
    <div className="flex gap-1 justify-center items-center w-full">
      <div className="flex-1 flex justify-end" onClick={handlePlus}>
        <img src={plussSVG} alt="" />
      </div>
      <div className="flex-1 flex justify-center">
        <p className="text-2xl">{count}</p>
      </div>
      <div className="flex-1 flex justify-start" onClick={handleMinus}>
        <img src={minusSVG} alt="" />
      </div>
    </div>
  );
};

export default NumberSection;
