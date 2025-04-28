import React, { useContext } from "react";
import { menuSVG, shopSVG } from "../../public/svg";
import { SharedContext } from "../Context";
const Navbar = () => {
  const { cart } = useContext(SharedContext)
  const totalItems = Object.values(cart).reduce((acc, val) => acc + val, 0);
  return (
    <div className="fixed w-full z-50">
      <div className="flex px-12 pt-8 justify-between">
        <div className="relative">
          <img src={shopSVG} color="black" alt="shopSVG" />
          {totalItems > 0 && <div className="absolute -right-2 -top-1 flex justify-center items-center w-4 h-4 bg-primary rounded-full">
            <p className="text-[10px] text-white">{totalItems}</p>
          </div>}
        </div>
        <div>
          <img src={menuSVG} alt="menuSVG" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
