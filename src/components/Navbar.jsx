import React, { useContext } from "react";
import { menuSVG, shopSVG } from "../../public/svg";
import { SharedContext } from "../Context";
const Navbar = () => {
  const { shopCount } = useContext(SharedContext);
  return (
    <div className="flex px-12 pt-8 justify-between">
      <div className="relative">
        <img src={shopSVG} alt="shopSVG" />
        { shopCount>0 && <div className="absolute -right-2 -top-1 flex justify-center items-center w-4 h-4 bg-primary rounded-full">
          <p className="text-[10px] text-white">{shopCount}</p>
        </div>}
      </div>
      <div>
        <img src={menuSVG} alt="menuSVG" />
      </div>
    </div>
  );
};

export default Navbar;
